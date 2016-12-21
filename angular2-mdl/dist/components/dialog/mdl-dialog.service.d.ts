import { ViewContainerRef, ComponentFactoryResolver, ComponentRef, Type, OpaqueToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdlDialogHostComponent } from './mdl-dialog-host.component';
export declare const MDL_CONFIGUARTION: OpaqueToken;
export declare const MDL_CONTENT_VIEW_CONTAINER_REF: OpaqueToken;
export declare const MIN_DIALOG_Z_INDEX: number;
export declare enum ConfirmResult {
    Confirmed = 0,
    Declined = 1,
}
/**
 * Internal representation of the dialog ref. the service
 * user should not have access to the created components
 * and internal implementations.
 */
export declare class InternalMdlDialogReference {
    private components;
    private onHideSubject;
    hostDialog: MdlDialogHostComponent;
    closeCallback: () => void;
    isModal: boolean;
    addComponentRef(cRef: ComponentRef<any>): void;
    hide(): void;
    onHide(): Observable<void>;
}
/**
 * The reference to the created and displayed dialog.
 */
export declare class MdlDialogReference {
    private internaleRef;
    constructor(internaleRef: InternalMdlDialogReference);
    /**
     * closes the dialog
     */
    hide(): void;
    /**
     * Observable that emits, if the dialog was closed.
     * @returns {Observable<void>}
     */
    onHide(): Observable<void>;
}
/**
 * Every custom dialog should implement this interface. This is needed to get
 * hold of the viewContainerRef of the dialog. The viewcontainerref will be
 * inlcuded in the host dialog. the host dialog is managed by this service.
 */
export interface IMdlCustomDialog {
    viewContainerRef: ViewContainerRef;
}
/**
 * The simple Dialog can have as much actions as needed by the user.
 */
export interface IMdlDialogAction {
    /**
     * the handler is a callback function. this funciton will be called if
     * the action button was clicked.
     */
    handler: () => void;
    /**
     * the text of the action button
     */
    text: string;
    /**
     * is this a closing aciton? means the action is called if the user pressed the esc key.
     */
    isClosingAction?: boolean;
}
/**
 * Dialog configuration for all dialogs (simple or custom)
 */
export interface IMdlDialogConfiguration {
    /**
     * The viewcontainerref the dialog will be attached to.
     * required if not provided by setDefaultViewContainerRef.
     */
    vcRef?: ViewContainerRef;
    /**
     * true if the dialog should be opened as modal.
     */
    isModal?: boolean;
}
/**
 * The simple dialog. Easy to use - dosn't need a special component.
 */
export interface IMdlSimpleDialogConfiguration extends IMdlDialogConfiguration {
    /**
     * the title of the dialog
     */
    title?: string;
    /**
     * the message that should be displayed
     */
    message: string;
    /**
     * the actions that are used for this dialog (the order will be reversed by mdl.
     */
    actions: [IMdlDialogAction];
    /**
     * should the actions be displayed as full width actions. every aciton is one row.
     */
    fullWidthAction?: boolean;
}
/**
 * Configuration for a custom dialog. You need to provide a component that
 * should be used as the content of the dialog. the component mus match the
 * fowllowing conditions:
 * - must implement IMdlCustomDialog
 * - must be an entrycompnent (property of your module)
 * If youn need acces to the MdlDialogReference you may inject it in your constructor:
 *
 * export class MyDialog implements IMdlCustomDialog {
 *
 *   constructor(private dialogref: MdlDialogReference){}
 *
 *   ...
 * }
 */
export interface IMdlCustomDialogConfiguration extends IMdlDialogConfiguration {
    component: Type<any>;
}
/**
 * The MdlDialogService is used to open different kind of dialogs. SimpleDialogs and Custom Dialogs.
 * @experimental
  */
export declare class MdlDialogService {
    private componentFactoryResolver;
    private doc;
    private defaultViewContainerRef;
    private openDialogs;
    private overlay;
    constructor(componentFactoryResolver: ComponentFactoryResolver, doc: any);
    setDefaultViewContainerRef(vcRef: ViewContainerRef): void;
    /**
     * Shows a dialog that is just an alert - e.g. with one button.
     * @param alertMessage The message that should be displayed.
     * @param okTex The text that the button should have
     * @param title The optional title of the dialog
     * @param vcRef The ViewContainerRef where the alert dialog should be attached to.
     * Must not be provided if setDefaultViewContainerRef was set.
     * @returns A promise that is called if the user hits the Ok button.
     */
    alert(alertMessage: string, okText?: string, title?: string, vcRef?: ViewContainerRef): Promise<void>;
    /**
     * Shows a dialog that is just a confirm message - e.g. with two button.
     * @param question The question that should be displayed.
     * @param declineText The text for decline button. defaults to Cancel
     * @param confirmText The text for the confirm button . defaults to Ok
     * @param vcRef The ViewContainerRef where the aletr dialog should be attached to.
     * Must not be provided if setDefaultViewContainerRef was set.
     * @returns A promise that is called if the user hits the Ok button.
     */
    confirm(question: string, declineText?: string, confirmText?: string, vcRef?: ViewContainerRef): Promise<ConfirmResult>;
    /**
     * Shows a dialog that is specified by the provided configuration.
     * @param config The simple dialog configuration.
     * @returns A promise that returns the MdlDialogReference.
     */
    showDialog(config: IMdlSimpleDialogConfiguration): Promise<MdlDialogReference>;
    /**
     * Shows a dialog that is specified by the provided configuration.
     * @param config The custom dialog configuration.
     * @returns A promise that returns the MdlDialogReference.
     */
    showCustomDialog(config: IMdlCustomDialogConfiguration): Promise<MdlDialogReference>;
    private createHostDialog(dialogRef, internalDialogRef, contentDialog, dialogConfig);
    private pushDialog(dialogRef);
    private popDialog(dialogRef);
    private orderDialogStack();
    private createComponentInstance<T>(targetVCRef, providers, component);
}
