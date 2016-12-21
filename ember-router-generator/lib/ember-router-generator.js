module.exports = EmberRouterGenerator;

var recast    = require('recast');

var findFunctionExpression = require('./helpers/find-function-expression');
var hasRoute               = require('./helpers/has-route');
var newFunctionExpression  = require('./helpers/new-function-expression');
var routeNode              = require('./helpers/route-node');

function EmberRouterGenerator(source, ast) {
  this.source = source;
  this.ast = ast;
  this.mapNode = null;

  this._ast();
  this._walk();
}

EmberRouterGenerator.prototype.clone = function() {
  var route = new EmberRouterGenerator(this.code());

  return route;
};

EmberRouterGenerator.prototype._ast  = function() {
  return (this.ast = this.ast || recast.parse(this.source));
};

EmberRouterGenerator.prototype._walk  = function() {
  var petal = this;

  recast.visit(this._ast(), {
    visitCallExpression: function(path) {
      var node = path.node;

      if (node.callee.type === 'MemberExpression' && node.callee.property.name === 'map') {
        petal.mapNode = node;

        return false;
      } else {
        this.traverse(path);
      }
    }
  });
};

EmberRouterGenerator.prototype.add = function(routeName, options) {
  if (typeof this.mapNode === 'undefined') {
    throw new Error('Source doesn\'t include Ember.map');
  }

  var route = this.clone();
  var routes  = route.mapNode.arguments[0].body.body;

  route._add.call(
    route,
    routeName.split('/'),
    routes,
    options
  );

  return route;
};



EmberRouterGenerator.prototype._add = function(nameParts, routes, options) {
  options = options || {};
  var parent   =  nameParts[0];
  var name     = parent;
  var children = nameParts.slice(1);
  var path     = hasRoute(parent, routes, options.identifier);
  var route    = path ? path.node : path;

  if (!route) {
    route = routeNode(name, options);
    routes.push(route);
  }

  if (children.length > 0) {
    var routesFunction = findFunctionExpression(route.expression.arguments);

    if (!routesFunction) {
      routesFunction = newFunctionExpression();
      route.expression.arguments.push(routesFunction);
    }

    var isAutogeneratedIndexRoute = isIndexRoute(children) && !options.path;
    if (!isAutogeneratedIndexRoute) {
      this._add(children, routesFunction.body.body, options);
    }
  }
};

EmberRouterGenerator.prototype.remove = function(routeName, options) {
  if (typeof this.mapNode === 'undefined') {
    throw new Error('Source doesn\'t include Ember.map');
  }

  options = options || {};

  var route = this.clone();
  var routes  = route.mapNode.arguments[0].body.body;

  var newRoutes = route._remove.call(
    route,
    routeName.split('/'),
    routes,
    options
  );

  if (newRoutes) {
    route.mapNode.arguments[0].body.body = newRoutes;
  }

  return route;
};

EmberRouterGenerator.prototype._remove = function(nameParts, routes, options) {
  var parent   =  nameParts[0];
  var name     = parent;
  var children = nameParts.slice(1);
  var path     = hasRoute(parent, routes, options.identifier);
  var route    = path ? path.node : path;
  var newRoutes;

  if (children.length > 0) {
    var routesFunction = route.expression && findFunctionExpression(route.expression.arguments);

    if(isIndexRoute(children)) {
      removeSubRoute(path.node);
      var isAutogeneratedIndexRoute = parent === 'index' && lastExprArg(path.node).type !== 'ObjectExpression';
      if (isAutogeneratedIndexRoute) {
        path.replace();
      }
      return routes;
    }

    if (routesFunction) {
      newRoutes = this._remove(children, routesFunction.body.body, options);

      if (newRoutes) {
        routesFunction.body.body = newRoutes;
      }

      return routes;
    }
  } else {
    if (route) {
      path.replace();

      return routes;
    } else {
      return false;
    }
  }
};

EmberRouterGenerator.prototype.code = function(options) {
  options = options || { tabWidth: 2, quote: 'single' };

  return recast.print(this.ast, options).code;
};

function lastExprArg(node) {
  return node.expression.arguments[node.expression.arguments.length-1];
}

function removeSubRoute(node) {
  var lastArgument = lastExprArg(node);
  if(lastArgument.type === 'FunctionExpression') {
    node.expression.arguments.pop();
  }
}

function isIndexRoute(children) {
  return children.length === 1 && children[children.length-1] === 'index';
}