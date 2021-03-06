import { ElementRef, OnChanges, Renderer } from '@angular/core';
import { MdlError } from './../common/mdl-error';
export declare class MdlUnsupportedButtonTypeError extends MdlError {
    constructor(type: string);
}
export declare class MdlUnsupportedColoredTypeError extends MdlError {
    constructor(type: string);
}
export declare class MdlButtonComponent implements OnChanges {
    private elementRef;
    private renderer;
    private element;
    private mdlButtonType;
    private mdlColoredType;
    disabled: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer);
    ngOnChanges(): void;
    onMouseUp(): void;
    onMouseLeave(): void;
    blurIt(): void;
}
export declare class MdlButtonModule {
}
