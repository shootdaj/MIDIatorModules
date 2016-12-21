import { EventEmitter } from '@angular/core';
export declare enum SlimLoadingBarEventType {
    PROGRESS = 0,
    HEIGHT = 1,
    COLOR = 2,
    VISIBLE = 3,
}
export declare class SlimLoadingBarEvent {
    type: SlimLoadingBarEventType;
    value: any;
    constructor(type: SlimLoadingBarEventType, value: any);
}
export declare function slimLoadingBarServiceFactory(): SlimLoadingBarService;
/**
 * SlimLoadingBar service helps manage Slim Loading bar on the top of screen or parent component
 */
export declare class SlimLoadingBarService {
    events: EventEmitter<SlimLoadingBarEvent>;
    private _progress;
    private _height;
    private _color;
    private _visible;
    private _intervalCounterId;
    interval: number;
    constructor(events: EventEmitter<SlimLoadingBarEvent>);
    progress: number;
    height: string;
    color: string;
    visible: boolean;
    private emitEvent(event);
    start(onCompleted?: Function): void;
    stop(): void;
    reset(): void;
    complete(): void;
}
