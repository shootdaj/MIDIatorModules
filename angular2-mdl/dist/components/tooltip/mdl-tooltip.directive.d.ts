import { OnInit, ViewContainerRef, Renderer, ComponentFactoryResolver } from '@angular/core';
import { MdlSimpleTooltipComponent, MdlTooltipComponent } from './mdl-tooltip.component';
export declare class AbstractMdlTooltipDirective implements OnInit {
    private vcRef;
    private large;
    private componentFactoryResolver;
    private renderer;
    protected tooltip: string | MdlTooltipComponent;
    protected position: string;
    protected tooltipComponent: MdlSimpleTooltipComponent;
    constructor(vcRef: ViewContainerRef, large: boolean, componentFactoryResolver: ComponentFactoryResolver, renderer: Renderer);
    ngOnInit(): void;
    private configureTooltipComponent();
    protected onMouseEnter(event: any): void;
    protected onMouseLeave(): void;
}
export declare class MdlTooltipDirective extends AbstractMdlTooltipDirective {
    tooltip: string | MdlTooltipComponent;
    position: string;
    constructor(vcRef: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, renderer: Renderer);
}
export declare class MdlTooltipLargeDirective extends AbstractMdlTooltipDirective {
    tooltip: string | MdlTooltipComponent;
    position: string;
    constructor(vcRef: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, renderer: Renderer);
}
