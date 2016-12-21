"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var mdl_error_1 = require('./../common/mdl-error');
var boolean_property_1 = require('./../common/boolean-property');
var number_property_1 = require('./../common/number.property');
var mdl_layout_header_component_1 = require('./mdl-layout-header.component');
var mdl_layout_drawer_component_1 = require('./mdl-layout-drawer.component');
var mdl_layout_content_component_1 = require('./mdl-layout-content.component');
var ESCAPE = 27;
var STANDARD = 'standard';
var WATERFALL = 'waterfall';
var SCROLL = 'scroll';
var MdLUnsupportedLayoutTypeError = (function (_super) {
    __extends(MdLUnsupportedLayoutTypeError, _super);
    function MdLUnsupportedLayoutTypeError(type) {
        _super.call(this, "Layout type \"" + type + "\" isn't supported by mdl-layout (allowed: standard, waterfall, scroll).");
    }
    return MdLUnsupportedLayoutTypeError;
}(mdl_error_1.MdlError));
exports.MdLUnsupportedLayoutTypeError = MdLUnsupportedLayoutTypeError;
var MdlLayoutComponent = (function () {
    function MdlLayoutComponent(renderer, evm, el, ngZone) {
        this.renderer = renderer;
        this.evm = evm;
        this.el = el;
        this.ngZone = ngZone;
        this.mode = STANDARD;
        this.isFixedDrawer = false;
        this.isFixedHeader = false;
        this.isSeamed = false;
        this.selectedIndex = 0;
        this.isRipple = false;
        this.isNoDrawer = false;
        this.selectedTabEmitter = new core_1.EventEmitter();
        this.mouseoverTabEmitter = new core_1.EventEmitter();
        this.mouseoutTabEmitter = new core_1.EventEmitter();
        this.isDrawerVisible = false;
        this.isSmallScreen = false;
    }
    MdlLayoutComponent.prototype.ngAfterContentInit = function () {
        this.validateMode();
        if (this.header && this.content && this.content.tabs) {
            this.header.tabs = this.content.tabs;
            this.updateSelectedTabIndex();
        }
        // set this.drawer to null, if the drawer is not a direct child if this layout. It may be a drywer of a sub layout.
        if (this.drawer && !this.drawer.isDrawerDirectChildOf(this)) {
            this.drawer = null;
        }
    };
    MdlLayoutComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectedIndex']) {
            this.updateSelectedTabIndex();
        }
    };
    MdlLayoutComponent.prototype.updateSelectedTabIndex = function () {
        if (this.header && this.header.tabs) {
            this.header.tabs.forEach(function (tab) { return tab.isActive = false; });
            if (this.header.tabs.toArray().length > 0 && this.selectedIndex < this.header.tabs.toArray().length) {
                this.header.tabs.toArray()[this.selectedIndex].isActive = true;
            }
        }
    };
    MdlLayoutComponent.prototype.validateMode = function () {
        var _this = this;
        if (this.mode === '') {
            this.mode = STANDARD;
        }
        if ([STANDARD, WATERFALL, SCROLL].indexOf(this.mode) === -1) {
            throw new MdLUnsupportedLayoutTypeError(this.mode);
        }
        if (this.header) {
            // inform the header about the mode
            this.header.mode = this.mode;
            this.header.isSeamed = this.isSeamed;
        }
        if (this.content) {
            this.scrollListener = this.renderer.listen(this.content.el, 'scroll', function (e) {
                _this.onScroll(_this.content.el.scrollTop);
            });
            // do not try to access the window object if rendered on the server
            if (typeof window === 'object' && 'matchMedia' in window) {
                var query_1 = window.matchMedia('(max-width: 1024px)');
                var queryListener_1 = function () {
                    _this.ngZone.run(function () {
                        // looks like the query addListener runs not in NGZone - inform manually about changes
                        _this.onQueryChange(query_1.matches);
                    });
                };
                query_1.addListener(queryListener_1);
                this.windowMediaQueryListener = function () {
                    query_1.removeListener(queryListener_1);
                };
                // set the initial state
                setTimeout(function () {
                    _this.onQueryChange(query_1.matches);
                });
            }
        }
    };
    MdlLayoutComponent.prototype.onScroll = function (scrollTop) {
        if (this.mode !== WATERFALL) {
            return;
        }
        if (this.header.isAnimating) {
            return;
        }
        var headerVisible = !this.isSmallScreen || this.isFixedHeader;
        if (scrollTop > 0 && !this.header.isCompact) {
            this.header.isCompact = true;
            if (headerVisible) {
                this.header.isAnimating = true;
            }
        }
        else if (scrollTop <= 0 && this.header.isCompact) {
            this.header.isCompact = false;
            if (headerVisible) {
                this.header.isAnimating = true;
            }
        }
    };
    MdlLayoutComponent.prototype.onQueryChange = function (isSmall) {
        if (isSmall) {
            this.isSmallScreen = true;
        }
        else {
            this.isSmallScreen = false;
            this.closeDrawer();
        }
    };
    MdlLayoutComponent.prototype.toggleDrawer = function () {
        this.isDrawerVisible = !this.isDrawerVisible;
        if (this.drawer) {
            this.drawer.isDrawerVisible = this.isDrawerVisible;
        }
    };
    MdlLayoutComponent.prototype.closeDrawer = function () {
        this.isDrawerVisible = false;
        if (this.drawer) {
            this.drawer.isDrawerVisible = false;
        }
    };
    MdlLayoutComponent.prototype.obfuscatorKeyDown = function ($event) {
        if ($event.keyCode === ESCAPE) {
            this.toggleDrawer();
        }
    };
    MdlLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.scrollListener) {
            this.scrollListener();
            this.scrollListener = null;
        }
        if (this.windowMediaQueryListener) {
            this.windowMediaQueryListener();
            this.windowMediaQueryListener = null;
        }
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.tabSelected = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        if (index != this.selectedIndex) {
            this.selectedIndex = index;
            this.updateSelectedTabIndex();
            this.selectedTabEmitter.emit({ index: this.selectedIndex });
        }
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.onTabMouseover = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        this.mouseoverTabEmitter.emit({ index: index });
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.onTabMouseout = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        this.mouseoutTabEmitter.emit({ index: index });
    };
    MdlLayoutComponent.prototype.closeDrawerOnSmallScreens = function () {
        if (this.isSmallScreen && this.isDrawerVisible) {
            this.closeDrawer();
        }
    };
    MdlLayoutComponent.prototype.hasDrawer = function () {
        return !!this.drawer;
    };
    __decorate([
        core_1.ContentChild(mdl_layout_header_component_1.MdlLayoutHeaderComponent), 
        __metadata('design:type', Object)
    ], MdlLayoutComponent.prototype, "header", void 0);
    __decorate([
        core_1.ContentChild(mdl_layout_drawer_component_1.MdlLayoutDrawerComponent), 
        __metadata('design:type', Object)
    ], MdlLayoutComponent.prototype, "drawer", void 0);
    __decorate([
        core_1.ContentChild(mdl_layout_content_component_1.MdlLayoutContentComponent), 
        __metadata('design:type', Object)
    ], MdlLayoutComponent.prototype, "content", void 0);
    __decorate([
        core_1.Input('mdl-layout-mode'), 
        __metadata('design:type', String)
    ], MdlLayoutComponent.prototype, "mode", void 0);
    __decorate([
        core_1.Input('mdl-layout-fixed-drawer'),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Object)
    ], MdlLayoutComponent.prototype, "isFixedDrawer", void 0);
    __decorate([
        core_1.Input('mdl-layout-fixed-header'),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Object)
    ], MdlLayoutComponent.prototype, "isFixedHeader", void 0);
    __decorate([
        core_1.Input('mdl-layout-header-seamed'),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Object)
    ], MdlLayoutComponent.prototype, "isSeamed", void 0);
    __decorate([
        core_1.Input('mdl-layout-tab-active-index'),
        number_property_1.NumberProperty(), 
        __metadata('design:type', Number)
    ], MdlLayoutComponent.prototype, "selectedIndex", void 0);
    __decorate([
        core_1.Input('mdl-ripple'),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Object)
    ], MdlLayoutComponent.prototype, "isRipple", void 0);
    __decorate([
        core_1.Input('mdl-layout-no-drawer-button'),
        boolean_property_1.BooleanProperty(), 
        __metadata('design:type', Object)
    ], MdlLayoutComponent.prototype, "isNoDrawer", void 0);
    __decorate([
        core_1.Output('mdl-layout-tab-active-changed'), 
        __metadata('design:type', Object)
    ], MdlLayoutComponent.prototype, "selectedTabEmitter", void 0);
    __decorate([
        core_1.Output('mdl-layout-tab-mouseover'), 
        __metadata('design:type', Object)
    ], MdlLayoutComponent.prototype, "mouseoverTabEmitter", void 0);
    __decorate([
        core_1.Output('mdl-layout-tab-mouseout'), 
        __metadata('design:type', Object)
    ], MdlLayoutComponent.prototype, "mouseoutTabEmitter", void 0);
    MdlLayoutComponent = __decorate([
        core_1.Component({
            selector: 'mdl-layout',
            template: "\n    <div class=\"mdl-layout__container\" [ngClass]=\"{'has-scrolling-header': mode==='scroll'}\">\n     <div class=\"mdl-layout is-upgraded\"\n          [ngClass]=\"{\n          'is-small-screen': isSmallScreen,\n          'mdl-layout--fixed-drawer': isFixedDrawer,\n          'mdl-layout--fixed-header': isFixedHeader,\n          'mdl-layout--fixed-tabs': 'tabs.toArray().length > 0'\n          }\">\n        <ng-content select=\"mdl-layout-header\"></ng-content>\n        <ng-content select=\"mdl-layout-drawer\"></ng-content>\n        <div *ngIf=\"drawer && isNoDrawer==false\" class=\"mdl-layout__drawer-button\" (click)=\"toggleDrawer()\">\n           <mdl-icon>&#xE5D2;</mdl-icon>\n        </div>\n        <ng-content select=\"mdl-layout-content\"></ng-content>\n        <div class=\"mdl-layout__obfuscator\"\n             [ngClass]=\"{'is-visible':isDrawerVisible}\"\n             (click)=\"toggleDrawer()\"\n             (keydown)=\"obfuscatorKeyDown($event)\"></div>\n     </div>\n    </div>\n  ",
            exportAs: 'mdlLayout',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, platform_browser_1.EventManager, core_1.ElementRef, core_1.NgZone])
    ], MdlLayoutComponent);
    return MdlLayoutComponent;
}());
exports.MdlLayoutComponent = MdlLayoutComponent;
//# sourceMappingURL=../../../dist/components/layout/mdl-layout.component.js.map