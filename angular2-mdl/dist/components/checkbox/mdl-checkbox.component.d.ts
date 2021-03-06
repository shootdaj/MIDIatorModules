import { ElementRef, Renderer } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class MdlCheckboxComponent implements ControlValueAccessor {
    private elementRef;
    private renderer;
    disabled: boolean;
    private change;
    private value_;
    private el;
    constructor(elementRef: ElementRef, renderer: Renderer);
    value: boolean;
    writeValue(value: any): void;
    private onTouchedCallback;
    private onChangeCallback;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    protected onFocus(): void;
    protected onBlur(): void;
    protected onClick(): void;
}
export declare class MdlChekboxModule {
}
