import { ViewContainerRef, AfterViewInit, NgZone } from '@angular/core';
import { IMdlDialogAction, MdlDialogReference, IMdlCustomDialog, IMdlSimpleDialogConfiguration } from './mdl-dialog.service';
export declare class MdlDialogComponent implements IMdlCustomDialog, AfterViewInit {
    private vcRef;
    private dialogConfiguration;
    private dialog;
    private ngZone;
    private buttons;
    constructor(vcRef: ViewContainerRef, dialogConfiguration: IMdlSimpleDialogConfiguration, dialog: MdlDialogReference, ngZone: NgZone);
    viewContainerRef: ViewContainerRef;
    ngAfterViewInit(): void;
    actionClicked(action: IMdlDialogAction): void;
    onEsc(): void;
}
