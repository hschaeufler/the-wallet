"use strict";
(self["webpackChunkthe_wallet"] = self["webpackChunkthe_wallet"] || []).push([["main"],{

/***/ 99625:
/*!********************************************************************************!*\
  !*** ./src/app/components/molecules/app-bar/app-bar-end-elements.directive.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppBarEndElementsDirective": () => (/* binding */ AppBarEndElementsDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AppBarEndElementsDirective {
    constructor() { }
}
AppBarEndElementsDirective.ɵfac = function AppBarEndElementsDirective_Factory(t) { return new (t || AppBarEndElementsDirective)(); };
AppBarEndElementsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppBarEndElementsDirective, selectors: [["", "theWalletAppBarEndElements", ""]] });


/***/ }),

/***/ 81722:
/*!**********************************************************************************!*\
  !*** ./src/app/components/molecules/app-bar/app-bar-start-elements.directive.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppBarStartElementsDirective": () => (/* binding */ AppBarStartElementsDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AppBarStartElementsDirective {
    constructor() { }
}
AppBarStartElementsDirective.ɵfac = function AppBarStartElementsDirective_Factory(t) { return new (t || AppBarStartElementsDirective)(); };
AppBarStartElementsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppBarStartElementsDirective, selectors: [["", "theWalletAppBarStartElements", ""]] });


/***/ }),

/***/ 5455:
/*!*******************************************************************!*\
  !*** ./src/app/components/molecules/app-bar/app-bar.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppBarComponent": () => (/* binding */ AppBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);


const _c0 = [[["", "theWalletAppBarStartElements", ""]], [["", "theWalletAppBarEndElements", ""]]];
const _c1 = ["[theWalletAppBarStartElements]", "[theWalletAppBarEndElements]"];
class AppBarComponent {
    constructor() {
        this.title = '';
    }
}
AppBarComponent.ɵfac = function AppBarComponent_Factory(t) { return new (t || AppBarComponent)(); };
AppBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppBarComponent, selectors: [["the-wallet-app-bar"]], inputs: { title: "title" }, ngContentSelectors: _c1, decls: 7, vars: 1, consts: [["color", "primary", 1, "toolbar"], [1, "app-bar-end-elements"], ["color", "primary"]], template: function AppBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-toolbar", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar], styles: [".toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n}\n\n.app-bar-end-elements[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7QUFFRiIsImZpbGUiOiJhcHAtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG59XG4uYXBwLWJhci1lbmQtZWxlbWVudHMge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 96767:
/*!**************************************************************************************!*\
  !*** ./src/app/components/molecules/drag-drop-slider/drag-and-drop-state.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragAndDropStateService": () => (/* binding */ DragAndDropStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class DragAndDropStateService {
    constructor() {
        this.dragAndDropEnabledSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.dragAndDropEnabled$ = this.dragAndDropEnabledSource.asObservable();
    }
    setDragAndDropState(dragDropEnabled) {
        this.dragAndDropEnabledSource.next(dragDropEnabled);
    }
}
DragAndDropStateService.ɵfac = function DragAndDropStateService_Factory(t) { return new (t || DragAndDropStateService)(); };
DragAndDropStateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DragAndDropStateService, factory: DragAndDropStateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 88989:
/*!*************************************************************************************!*\
  !*** ./src/app/components/molecules/drag-drop-slider/drag-drop-slider.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropSliderComponent": () => (/* binding */ DragDropSliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _drag_and_drop_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-and-drop-state.service */ 96767);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 65590);






class DragDropSliderComponent {
    constructor(dragAndDropState) {
        this.dragAndDropEnabled = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(false);
        this.dragAndDropEnabled.valueChanges.subscribe((value) => dragAndDropState.setDragAndDropState(value));
    }
}
DragDropSliderComponent.ɵfac = function DragDropSliderComponent_Factory(t) { return new (t || DragDropSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_drag_and_drop_state_service__WEBPACK_IMPORTED_MODULE_0__.DragAndDropStateService)); };
DragDropSliderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DragDropSliderComponent, selectors: [["the-wallet-drag-drop-slider"]], decls: 3, vars: 1, consts: [[3, "formControl"]], template: function DragDropSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-slide-toggle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "touch_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.dragAndDropEnabled);
    } }, directives: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmFnLWRyb3Atc2xpZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 92167:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/organisms/document-download-button/document-download-button.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentDownloadButtonComponent": () => (/* binding */ DocumentDownloadButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _models_DocumentType_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/DocumentType.enum */ 96649);
/* harmony import */ var _modules_file_system_services_FileSystem_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/file-system/services/FileSystem.service */ 29332);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _modules_health_certificate_components_pages_health_certificate_download_button_health_certificate_download_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/health-certificate/components/pages/health-certificate-download-button/health-certificate-download-button.component */ 10030);
/* harmony import */ var _modules_pkpass_components_pages_pkpass_download_button_pkpass_download_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/pkpass/components/pages/pkpass-download-button/pkpass-download-button.component */ 29910);







function DocumentDownloadButtonComponent_ng_container_0_the_wallet_health_certificate_download_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "the-wallet-health-certificate-download-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("download", function DocumentDownloadButtonComponent_ng_container_0_the_wallet_health_certificate_download_button_1_Template_the_wallet_health_certificate_download_button_download_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r3.onDownload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r1.value.content);
} }
function DocumentDownloadButtonComponent_ng_container_0_the_wallet_pkpass_download_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "the-wallet-pkpass-download-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("download", function DocumentDownloadButtonComponent_ng_container_0_the_wallet_pkpass_download_button_2_Template_the_wallet_pkpass_download_button_download_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.onDownload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r2.value.content);
} }
function DocumentDownloadButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DocumentDownloadButtonComponent_ng_container_0_the_wallet_health_certificate_download_button_1_Template, 1, 1, "the-wallet-health-certificate-download-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DocumentDownloadButtonComponent_ng_container_0_the_wallet_pkpass_download_button_2_Template, 1, 1, "the-wallet-pkpass-download-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx_r0.value.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx_r0.documentTypeEnum.HEALTHCERTIFICATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx_r0.documentTypeEnum.PKPASS);
} }
class DocumentDownloadButtonComponent {
    constructor(fileSystemService) {
        this.fileSystemService = fileSystemService;
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.documentDownloaded = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.documentTypeEnum = _models_DocumentType_enum__WEBPACK_IMPORTED_MODULE_0__.DocumentTypeEnum;
    }
    onDownload(download) {
        const [file, fileName] = download;
        const mimeType = file.type
            ? file.type
            : DocumentDownloadButtonComponent.DEFAULT_MIME_TYPE;
        const fileExtension = file.type
            ? '.' + file.type.split('/')[1]
            : DocumentDownloadButtonComponent.DEFAULT_FILE_EXTENSION;
        let fileTypeRecord = {};
        fileTypeRecord[mimeType] = fileExtension;
        this.fileSystemService
            .writeFile(file, fileName, [
            {
                accept: fileTypeRecord,
            },
        ])
            .subscribe({
            next: () => this.documentDownloaded.emit(this.value),
            error: (err) => this.error.emit(err),
        });
    }
}
DocumentDownloadButtonComponent.DEFAULT_FILE_EXTENSION = '.png';
DocumentDownloadButtonComponent.DEFAULT_MIME_TYPE = 'image/png';
DocumentDownloadButtonComponent.ɵfac = function DocumentDownloadButtonComponent_Factory(t) { return new (t || DocumentDownloadButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_modules_file_system_services_FileSystem_service__WEBPACK_IMPORTED_MODULE_1__.FileSystemService)); };
DocumentDownloadButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DocumentDownloadButtonComponent, selectors: [["the-wallet-document-download-button"]], inputs: { value: "value" }, outputs: { error: "error", documentDownloaded: "documentDownloaded" }, decls: 1, vars: 1, consts: [[3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [3, "value", "download", 4, "ngSwitchCase"], [3, "value", "download"]], template: function DocumentDownloadButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DocumentDownloadButtonComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _modules_health_certificate_components_pages_health_certificate_download_button_health_certificate_download_button_component__WEBPACK_IMPORTED_MODULE_2__.HealthCertificateDownloadButtonComponent, _modules_pkpass_components_pages_pkpass_download_button_pkpass_download_button_component__WEBPACK_IMPORTED_MODULE_3__.PkpassDownloadButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC1kb3dubG9hZC1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1710:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/organisms/document-list-element/document-list-element.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentListElementComponent": () => (/* binding */ DocumentListElementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _models_DocumentType_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/DocumentType.enum */ 96649);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _modules_health_certificate_components_pages_health_certificate_preview_health_certificate_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/health-certificate/components/pages/health-certificate-preview/health-certificate-preview.component */ 77515);
/* harmony import */ var _modules_health_certificate_components_pages_health_certificate_preview_health_certificate_preview_actions_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/health-certificate/components/pages/health-certificate-preview/health-certificate-preview-actions.directive */ 49878);
/* harmony import */ var _modules_ui_components_components_atoms_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/ui-components/components/atoms/icon-button/icon-button.component */ 22361);
/* harmony import */ var _document_share_button_document_share_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../document-share-button/document-share-button.component */ 70170);
/* harmony import */ var _document_download_button_document_download_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../document-download-button/document-download-button.component */ 92167);
/* harmony import */ var _modules_pkpass_components_pages_pkpass_preview_pkpass_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modules/pkpass/components/pages/pkpass-preview/pkpass-preview.component */ 30020);
/* harmony import */ var _modules_pkpass_directives_pkpass_preview_actions_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/pkpass/directives/pkpass-preview-actions.directive */ 33841);











function DocumentListElementComponent_the_wallet_health_certificate_preview_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "the-wallet-health-certificate-preview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("showMore", function DocumentListElementComponent_the_wallet_health_certificate_preview_1_Template_the_wallet_health_certificate_preview_showMore_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r2.showMore.emit(ctx_r2.value.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "the-wallet-icon-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentListElementComponent_the_wallet_health_certificate_preview_1_Template_the_wallet_icon_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r4.delete.emit(ctx_r4.value.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " delete_forever ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "the-wallet-document-share-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function DocumentListElementComponent_the_wallet_health_certificate_preview_1_Template_the_wallet_document_share_button_error_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r5.error.emit($event); })("documentShared", function DocumentListElementComponent_the_wallet_health_certificate_preview_1_Template_the_wallet_document_share_button_documentShared_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r6.documentShared.emit(ctx_r6.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "the-wallet-document-download-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function DocumentListElementComponent_the_wallet_health_certificate_preview_1_Template_the_wallet_document_download_button_error_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r7.error.emit($event); })("documentDownloaded", function DocumentListElementComponent_the_wallet_health_certificate_preview_1_Template_the_wallet_document_download_button_documentDownloaded_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r8.documentDownloaded.emit(ctx_r8.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.value.content)("expand", ctx_r0.isFirst);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.value);
} }
function DocumentListElementComponent_the_wallet_pkpass_preview_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "the-wallet-pkpass-preview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("showMore", function DocumentListElementComponent_the_wallet_pkpass_preview_2_Template_the_wallet_pkpass_preview_showMore_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r9.showMore.emit(ctx_r9.value.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "the-wallet-icon-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DocumentListElementComponent_the_wallet_pkpass_preview_2_Template_the_wallet_icon_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r11.delete.emit(ctx_r11.value.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " delete_forever ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "the-wallet-document-share-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function DocumentListElementComponent_the_wallet_pkpass_preview_2_Template_the_wallet_document_share_button_error_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r12.error.emit($event); })("documentShared", function DocumentListElementComponent_the_wallet_pkpass_preview_2_Template_the_wallet_document_share_button_documentShared_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r13.documentShared.emit(ctx_r13.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "the-wallet-document-download-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function DocumentListElementComponent_the_wallet_pkpass_preview_2_Template_the_wallet_document_download_button_error_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r14.error.emit($event); })("documentDownloaded", function DocumentListElementComponent_the_wallet_pkpass_preview_2_Template_the_wallet_document_download_button_documentDownloaded_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r15.documentDownloaded.emit(ctx_r15.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.value.content)("expand", ctx_r1.isFirst);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.value);
} }
class DocumentListElementComponent {
    constructor() {
        this.isFirst = false;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.showMore = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.documentShared = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.documentDownloaded = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.documentTypeEnum = _models_DocumentType_enum__WEBPACK_IMPORTED_MODULE_0__.DocumentTypeEnum;
    }
}
DocumentListElementComponent.ɵfac = function DocumentListElementComponent_Factory(t) { return new (t || DocumentListElementComponent)(); };
DocumentListElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DocumentListElementComponent, selectors: [["the-wallet-document-list-element"]], inputs: { value: "value", isFirst: "isFirst", link: "link" }, outputs: { delete: "delete", showMore: "showMore", error: "error", documentShared: "documentShared", documentDownloaded: "documentDownloaded" }, decls: 3, vars: 3, consts: [[3, "ngSwitch"], ["class", "cursor-link", 3, "value", "expand", "showMore", 4, "ngSwitchCase"], [1, "cursor-link", 3, "value", "expand", "showMore"], ["theWalletHealthCertificatePreviewActions", ""], [3, "click"], [3, "value", "error", "documentShared"], [3, "value", "error", "documentDownloaded"], ["theWalletPkpassPreviewActions", ""]], template: function DocumentListElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DocumentListElementComponent_the_wallet_health_certificate_preview_1_Template, 6, 4, "the-wallet-health-certificate-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DocumentListElementComponent_the_wallet_pkpass_preview_2_Template, 6, 4, "the-wallet-pkpass-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", ctx.value.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", ctx.documentTypeEnum.HEALTHCERTIFICATE);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", ctx.documentTypeEnum.PKPASS);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitchCase, _modules_health_certificate_components_pages_health_certificate_preview_health_certificate_preview_component__WEBPACK_IMPORTED_MODULE_1__.HealthCertificatePreviewComponent, _modules_health_certificate_components_pages_health_certificate_preview_health_certificate_preview_actions_directive__WEBPACK_IMPORTED_MODULE_2__.HealthCertificatePreviewActionsDirective, _modules_ui_components_components_atoms_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__.IconButtonComponent, _document_share_button_document_share_button_component__WEBPACK_IMPORTED_MODULE_4__.DocumentShareButtonComponent, _document_download_button_document_download_button_component__WEBPACK_IMPORTED_MODULE_5__.DocumentDownloadButtonComponent, _modules_pkpass_components_pages_pkpass_preview_pkpass_preview_component__WEBPACK_IMPORTED_MODULE_6__.PkpassPreviewComponent, _modules_pkpass_directives_pkpass_preview_actions_directive__WEBPACK_IMPORTED_MODULE_7__.PkpassPreviewActionsDirective], styles: [".cursor-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LWxpc3QtZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJkb2N1bWVudC1saXN0LWVsZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Vyc29yLWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ 55226:
/*!*******************************************************************************!*\
  !*** ./src/app/components/organisms/document-list/document-list.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentListComponent": () => (/* binding */ DocumentListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _molecules_drag_drop_slider_drag_and_drop_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../molecules/drag-drop-slider/drag-and-drop-state.service */ 96767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _document_list_element_document_list_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../document-list-element/document-list-element.component */ 1710);







function DocumentListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "the-wallet-document-list-element", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("delete", function DocumentListComponent_div_1_Template_the_wallet_document_list_element_delete_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.delete.emit($event); })("showMore", function DocumentListComponent_div_1_Template_the_wallet_document_list_element_showMore_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.showMore.emit($event); })("error", function DocumentListComponent_div_1_Template_the_wallet_document_list_element_error_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.error.emit($event); })("documentShared", function DocumentListComponent_div_1_Template_the_wallet_document_list_element_documentShared_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.documentShared.emit($event); })("documentDownloaded", function DocumentListComponent_div_1_Template_the_wallet_document_list_element_documentDownloaded_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.documentDownloaded.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const document_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDragDisabled", !ctx_r0.dragAndDropEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", document_r1);
} }
class DocumentListComponent {
    constructor(dragAndDropState) {
        this.documentList = [];
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.showMore = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.documentShared = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.documentDownloaded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.dragAndDropEnabled = false;
        this.dragAndDropEnabledSubscription$ =
            dragAndDropState.dragAndDropEnabled$.subscribe((dragAndDropEnabled) => (this.dragAndDropEnabled = dragAndDropEnabled));
    }
    handleDrop(event) {
        let sortOrder = this.documentList.map((document) => document.id);
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.moveItemInArray)(sortOrder, event.previousIndex, event.currentIndex);
        this.sort.emit(sortOrder);
    }
    ngOnDestroy() {
        if (this.dragAndDropEnabledSubscription$) {
            this.dragAndDropEnabledSubscription$.unsubscribe();
        }
    }
}
DocumentListComponent.ɵfac = function DocumentListComponent_Factory(t) { return new (t || DocumentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_molecules_drag_drop_slider_drag_and_drop_state_service__WEBPACK_IMPORTED_MODULE_0__.DragAndDropStateService)); };
DocumentListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DocumentListComponent, selectors: [["the-wallet-document-list"]], inputs: { documentList: "documentList" }, outputs: { sort: "sort", delete: "delete", showMore: "showMore", error: "error", documentShared: "documentShared", documentDownloaded: "documentDownloaded" }, decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "document-list", 3, "cdkDropListDropped"], ["class", "document-list-element", "cdkDrag", "", 3, "cdkDragDisabled", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "document-list-element", 3, "cdkDragDisabled"], [3, "value", "delete", "showMore", "error", "documentShared", "documentDownloaded"]], template: function DocumentListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function DocumentListComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.handleDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DocumentListComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.documentList);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDropList, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDrag, _document_list_element_document_list_element_component__WEBPACK_IMPORTED_MODULE_1__.DocumentListElementComponent], styles: [".document-list-element[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.document-list[_ngcontent-%COMP%]   .cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0FBQUo7QUFJRTtFQUNFLFVBQUE7QUFGSiIsImZpbGUiOiJkb2N1bWVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3VtZW50LWxpc3Qge1xyXG4gICYtZWxlbWVudCB7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgfVxyXG5cclxuICAvL3NlZTogaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Nkay9kcmFnLWRyb3Avb3ZlcnZpZXdcclxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 70170:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/organisms/document-share-button/document-share-button.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentShareButtonComponent": () => (/* binding */ DocumentShareButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _models_DocumentType_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/DocumentType.enum */ 96649);
/* harmony import */ var _modules_web_share_services_web_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/web-share/services/web-share.service */ 53227);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _modules_health_certificate_components_pages_helth_certificate_share_button_health_certificate_share_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/health-certificate/components/pages/helth-certificate-share-button/health-certificate-share-button.component */ 3553);
/* harmony import */ var _modules_pkpass_components_pages_pkpass_share_button_pkpass_share_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/pkpass/components/pages/pkpass-share-button/pkpass-share-button.component */ 66410);







function DocumentShareButtonComponent_ng_container_0_the_wallet_helth_certificate_share_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "the-wallet-helth-certificate-share-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("shareContentCreated", function DocumentShareButtonComponent_ng_container_0_the_wallet_helth_certificate_share_button_1_Template_the_wallet_helth_certificate_share_button_shareContentCreated_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r3.onShareContentCreated($event); })("share", function DocumentShareButtonComponent_ng_container_0_the_wallet_helth_certificate_share_button_1_Template_the_wallet_helth_certificate_share_button_share_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.onShare($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r1.value.content)("canShare", ctx_r1.canShare);
} }
function DocumentShareButtonComponent_ng_container_0_the_wallet_pkpass_share_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "the-wallet-pkpass-share-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("shareContentCreated", function DocumentShareButtonComponent_ng_container_0_the_wallet_pkpass_share_button_2_Template_the_wallet_pkpass_share_button_shareContentCreated_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r6.onShareContentCreated($event); })("share", function DocumentShareButtonComponent_ng_container_0_the_wallet_pkpass_share_button_2_Template_the_wallet_pkpass_share_button_share_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r8.onShare($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r2.value.content)("canShare", ctx_r2.canShare);
} }
function DocumentShareButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DocumentShareButtonComponent_ng_container_0_the_wallet_helth_certificate_share_button_1_Template, 1, 2, "the-wallet-helth-certificate-share-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DocumentShareButtonComponent_ng_container_0_the_wallet_pkpass_share_button_2_Template, 1, 2, "the-wallet-pkpass-share-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx_r0.value.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx_r0.documentTypeEnum.HEALTHCERTIFICATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", ctx_r0.documentTypeEnum.PKPASS);
} }
class DocumentShareButtonComponent {
    constructor(webShareService) {
        this.webShareService = webShareService;
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.documentShared = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.documentTypeEnum = _models_DocumentType_enum__WEBPACK_IMPORTED_MODULE_0__.DocumentTypeEnum;
        this.canShare = false;
    }
    onShareContentCreated(shareData) {
        this.canShare = this.webShareService.canShare(shareData);
    }
    onShare(shareData) {
        this.webShareService.share(shareData).subscribe({
            error: (err) => {
                this.error.emit(err);
            },
            next: (shareData) => {
                this.documentShared.emit(this.value);
            },
        });
    }
}
DocumentShareButtonComponent.ɵfac = function DocumentShareButtonComponent_Factory(t) { return new (t || DocumentShareButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_modules_web_share_services_web_share_service__WEBPACK_IMPORTED_MODULE_1__.WebShareService)); };
DocumentShareButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DocumentShareButtonComponent, selectors: [["the-wallet-document-share-button"]], inputs: { value: "value" }, outputs: { error: "error", documentShared: "documentShared" }, decls: 1, vars: 1, consts: [[3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [3, "value", "canShare", "shareContentCreated", "share", 4, "ngSwitchCase"], [3, "value", "canShare", "shareContentCreated", "share"]], template: function DocumentShareButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DocumentShareButtonComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _modules_health_certificate_components_pages_helth_certificate_share_button_health_certificate_share_button_component__WEBPACK_IMPORTED_MODULE_2__.HealthCertificateShareButtonComponent, _modules_pkpass_components_pages_pkpass_share_button_pkpass_share_button_component__WEBPACK_IMPORTED_MODULE_3__.PkpassShareButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC1zaGFyZS1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 38054:
/*!*********************************************************************!*\
  !*** ./src/app/components/organisms/document/document.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentComponent": () => (/* binding */ DocumentComponent)
/* harmony export */ });
/* harmony import */ var _models_DocumentType_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/DocumentType.enum */ 96649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _modules_health_certificate_components_pages_health_certificate_health_certificate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/health-certificate/components/pages/health-certificate/health-certificate.component */ 60859);
/* harmony import */ var _modules_pkpass_components_pages_pkpass_pkpass_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/pkpass/components/pages/pkpass/pkpass.component */ 59691);





function DocumentComponent_ng_container_0_the_wallet_health_certificate_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "the-wallet-health-certificate", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r1.value.content);
} }
function DocumentComponent_ng_container_0_the_wallet_pkpass_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "the-wallet-pkpass", 3);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.value.content);
} }
function DocumentComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DocumentComponent_ng_container_0_the_wallet_health_certificate_1_Template, 1, 1, "the-wallet-health-certificate", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DocumentComponent_ng_container_0_the_wallet_pkpass_2_Template, 1, 1, "the-wallet-pkpass", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx_r0.value.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx_r0.documentTypeEnum.HEALTHCERTIFICATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx_r0.documentTypeEnum.PKPASS);
} }
class DocumentComponent {
    constructor() {
        this.documentTypeEnum = _models_DocumentType_enum__WEBPACK_IMPORTED_MODULE_0__.DocumentTypeEnum;
    }
}
DocumentComponent.ɵfac = function DocumentComponent_Factory(t) { return new (t || DocumentComponent)(); };
DocumentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DocumentComponent, selectors: [["the-wallet-document"]], inputs: { value: "value" }, decls: 1, vars: 1, consts: [[3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [3, "value", 4, "ngSwitchCase"], [3, "value"]], template: function DocumentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DocumentComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _modules_health_certificate_components_pages_health_certificate_health_certificate_component__WEBPACK_IMPORTED_MODULE_1__.HealthCertificateComponent, _modules_pkpass_components_pages_pkpass_pkpass_component__WEBPACK_IMPORTED_MODULE_2__.PkpassComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 16715:
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/document-page/document-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentPageComponent": () => (/* binding */ DocumentPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 63853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _store_document_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/document-store.service */ 20149);
/* harmony import */ var _modules_qrcode_generator_services_qrcode_generator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/qrcode-generator/services/qrcode-generator.service */ 77679);
/* harmony import */ var _modules_ui_components_services_user_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/ui-components/services/user-message.service */ 74201);
/* harmony import */ var _templates_page_template_page_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../templates/page-template/page-template.component */ 55582);
/* harmony import */ var _molecules_app_bar_app_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../molecules/app-bar/app-bar.component */ 5455);
/* harmony import */ var _templates_page_template_page_template_header_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../templates/page-template/page-template-header.directive */ 94981);
/* harmony import */ var _molecules_app_bar_app_bar_start_elements_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/app-bar/app-bar-start-elements.directive */ 81722);
/* harmony import */ var _modules_ui_components_components_atoms_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/ui-components/components/atoms/icon-button/icon-button.component */ 22361);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _molecules_app_bar_app_bar_end_elements_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../molecules/app-bar/app-bar-end-elements.directive */ 99625);
/* harmony import */ var _organisms_document_share_button_document_share_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../organisms/document-share-button/document-share-button.component */ 70170);
/* harmony import */ var _organisms_document_download_button_document_download_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../organisms/document-download-button/document-download-button.component */ 92167);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _organisms_document_document_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../organisms/document/document.component */ 38054);

















function DocumentPageComponent_the_wallet_document_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "the-wallet-document", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx_r0.document);
} }
class DocumentPageComponent {
    constructor(route, router, documentStore, qrCodeService, userMessageService) {
        this.route = route;
        this.router = router;
        this.documentStore = documentStore;
        this.qrCodeService = qrCodeService;
        this.userMessageService = userMessageService;
    }
    ngOnInit() {
        this.route.params
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.map)((params) => params['id']), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)((id) => (this.id = id)), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.concatMap)((id) => this.documentStore.getDocument(id)), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.map)((document) => {
            if (!document) {
                throw new DOMException('Document does not Exist');
            }
            return document;
        }))
            .subscribe({
            next: (document) => (this.document = document),
            error: (err) => this.userMessageService.showUserMessage(err),
        });
    }
    goBack($event) {
        this.router.navigate(['wallet']);
    }
    delete($event) {
        if (this.id) {
            this.documentStore.deleteDocument(this.id).subscribe({
                next: () => this.router.navigate(['wallet']),
                error: (err) => {
                    console.error(err);
                },
            });
        }
    }
    onError(err) {
        this.userMessageService.showUserMessage(err);
    }
    onDocumentShared(document) {
        this.userMessageService.showUserMessage('Document shared!');
    }
    onDocumentDownloaded(document) {
        this.userMessageService.showUserMessage('Document downloaded!');
    }
}
DocumentPageComponent.ɵfac = function DocumentPageComponent_Factory(t) { return new (t || DocumentPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_store_document_store_service__WEBPACK_IMPORTED_MODULE_0__.DocumentStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_modules_qrcode_generator_services_qrcode_generator_service__WEBPACK_IMPORTED_MODULE_1__.QRCodeGeneratorService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_modules_ui_components_services_user_message_service__WEBPACK_IMPORTED_MODULE_2__.UserMessageService)); };
DocumentPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: DocumentPageComponent, selectors: [["the-wallet-document-page"]], decls: 13, vars: 3, consts: [["title", "Certificate Details", "theWalletPageTemplateHeader", ""], ["theWalletAppBarStartElements", ""], [3, "click"], ["theWalletAppBarEndElements", ""], [3, "value", "error", "documentShared"], [3, "value", "error", "documentDownloaded"], [3, "value", 4, "ngIf"], [3, "value"]], template: function DocumentPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "the-wallet-page-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "the-wallet-app-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "the-wallet-icon-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentPageComponent_Template_the_wallet_icon_button_click_3_listener($event) { return ctx.goBack($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "arrow_back_ios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "privacy_tip");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](7, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "the-wallet-icon-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DocumentPageComponent_Template_the_wallet_icon_button_click_8_listener($event) { return ctx.delete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, " delete_forever ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "the-wallet-document-share-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("error", function DocumentPageComponent_Template_the_wallet_document_share_button_error_10_listener($event) { return ctx.onError($event); })("documentShared", function DocumentPageComponent_Template_the_wallet_document_share_button_documentShared_10_listener($event) { return ctx.onDocumentShared($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "the-wallet-document-download-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("error", function DocumentPageComponent_Template_the_wallet_document_download_button_error_11_listener($event) { return ctx.onError($event); })("documentDownloaded", function DocumentPageComponent_Template_the_wallet_document_download_button_documentDownloaded_11_listener($event) { return ctx.onDocumentDownloaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, DocumentPageComponent_the_wallet_document_12_Template, 1, 1, "the-wallet-document", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.document);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.document);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.document);
    } }, directives: [_templates_page_template_page_template_component__WEBPACK_IMPORTED_MODULE_3__.PageTemplateComponent, _molecules_app_bar_app_bar_component__WEBPACK_IMPORTED_MODULE_4__.AppBarComponent, _templates_page_template_page_template_header_directive__WEBPACK_IMPORTED_MODULE_5__.PageTemplateHeaderDirective, _molecules_app_bar_app_bar_start_elements_directive__WEBPACK_IMPORTED_MODULE_6__.AppBarStartElementsDirective, _modules_ui_components_components_atoms_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_7__.IconButtonComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _molecules_app_bar_app_bar_end_elements_directive__WEBPACK_IMPORTED_MODULE_8__.AppBarEndElementsDirective, _organisms_document_share_button_document_share_button_component__WEBPACK_IMPORTED_MODULE_9__.DocumentShareButtonComponent, _organisms_document_download_button_document_download_button_component__WEBPACK_IMPORTED_MODULE_10__.DocumentDownloadButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _organisms_document_document_component__WEBPACK_IMPORTED_MODULE_11__.DocumentComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 86694:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/route-not-found-page/route-not-found-page.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteNotFoundPageComponent": () => (/* binding */ RouteNotFoundPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _templates_page_template_page_template_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../templates/page-template/page-template.component */ 55582);
/* harmony import */ var _molecules_app_bar_app_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../molecules/app-bar/app-bar.component */ 5455);
/* harmony import */ var _templates_page_template_page_template_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../templates/page-template/page-template-header.directive */ 94981);
/* harmony import */ var _molecules_app_bar_app_bar_start_elements_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/app-bar/app-bar-start-elements.directive */ 81722);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 65590);






class RouteNotFoundPageComponent {
    constructor() { }
}
RouteNotFoundPageComponent.ɵfac = function RouteNotFoundPageComponent_Factory(t) { return new (t || RouteNotFoundPageComponent)(); };
RouteNotFoundPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RouteNotFoundPageComponent, selectors: [["the-wallet-route-not-found-page"]], decls: 7, vars: 0, consts: [["title", "Wallet", "theWalletPageTemplateHeader", ""], ["theWalletAppBarStartElements", ""]], template: function RouteNotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "the-wallet-page-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "the-wallet-app-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "account_balance_wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Diese Seite existiert nicht!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, directives: [_templates_page_template_page_template_component__WEBPACK_IMPORTED_MODULE_0__.PageTemplateComponent, _molecules_app_bar_app_bar_component__WEBPACK_IMPORTED_MODULE_1__.AppBarComponent, _templates_page_template_page_template_header_directive__WEBPACK_IMPORTED_MODULE_2__.PageTemplateHeaderDirective, _molecules_app_bar_app_bar_start_elements_directive__WEBPACK_IMPORTED_MODULE_3__.AppBarStartElementsDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3V0ZS1ub3QtZm91bmQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 10394:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/wallet-page/map-to-document-model.utils.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapCertificateWrapperToDocumentModel": () => (/* binding */ mapCertificateWrapperToDocumentModel),
/* harmony export */   "mapPkpassWrapperToDocumentModel": () => (/* binding */ mapPkpassWrapperToDocumentModel)
/* harmony export */ });
/* harmony import */ var _models_DocumentType_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/DocumentType.enum */ 96649);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ 62535);


const mapCertificateWrapperToDocumentModel = (certificateWrapper) => {
    return {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        content: certificateWrapper,
        type: _models_DocumentType_enum__WEBPACK_IMPORTED_MODULE_0__.DocumentTypeEnum.HEALTHCERTIFICATE,
    };
};
const mapPkpassWrapperToDocumentModel = (pkpassWrapper) => {
    return {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        content: pkpassWrapper,
        type: _models_DocumentType_enum__WEBPACK_IMPORTED_MODULE_0__.DocumentTypeEnum.PKPASS,
    };
};


/***/ }),

/***/ 79868:
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/wallet-page/wallet-page.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletPageComponent": () => (/* binding */ WalletPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 87580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 64055);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 63853);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var _map_to_document_model_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-to-document-model.utils */ 10394);
/* harmony import */ var _modules_commons_utils_image_conversion_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/commons/utils/image-conversion.utils */ 3828);
/* harmony import */ var _modules_file_system_utils_FilePickerAcceptTypes_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/file-system/utils/FilePickerAcceptTypes.constants */ 81807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _store_document_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/document-store.service */ 20149);
/* harmony import */ var _modules_camera_module_services_camera_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/camera-module/services/camera.service */ 75200);
/* harmony import */ var _modules_health_certificate_services_covid_certificate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/health-certificate/services/covid-certificate.service */ 13995);
/* harmony import */ var _store_sort_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/sort-store.service */ 99613);
/* harmony import */ var _modules_camera_module_services_camera_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/camera-module/services/camera-dialog.service */ 99842);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _modules_ui_components_services_action_menu_sheet_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/ui-components/services/action-menu-sheet.service */ 55827);
/* harmony import */ var _modules_file_system_services_FileSystem_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modules/file-system/services/FileSystem.service */ 29332);
/* harmony import */ var _modules_ui_components_services_user_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../modules/ui-components/services/user-message.service */ 74201);
/* harmony import */ var _modules_camera_module_services_qrcode_reader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../modules/camera-module/services/qrcode-reader.service */ 6615);
/* harmony import */ var _modules_ui_components_services_overlay_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../modules/ui-components/services/overlay.service */ 47173);
/* harmony import */ var _modules_pkpass_services_pkpass_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../modules/pkpass/services/pkpass.service */ 63303);
/* harmony import */ var _templates_page_template_page_template_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../templates/page-template/page-template.component */ 55582);
/* harmony import */ var _molecules_app_bar_app_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../molecules/app-bar/app-bar.component */ 5455);
/* harmony import */ var _templates_page_template_page_template_header_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../templates/page-template/page-template-header.directive */ 94981);
/* harmony import */ var _molecules_app_bar_app_bar_start_elements_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../molecules/app-bar/app-bar-start-elements.directive */ 81722);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _molecules_app_bar_app_bar_end_elements_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../molecules/app-bar/app-bar-end-elements.directive */ 99625);
/* harmony import */ var _modules_commons_components_install_pwabutton_install_pwabutton_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../modules/commons/components/install-pwabutton/install-pwabutton.component */ 44032);
/* harmony import */ var _molecules_drag_drop_slider_drag_drop_slider_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../molecules/drag-drop-slider/drag-drop-slider.component */ 88989);
/* harmony import */ var _organisms_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../organisms/document-list/document-list.component */ 55226);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _pipes_sort_by_array_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../pipes/sort-by-array.pipe */ 87390);




























class WalletPageComponent {
    constructor(documentStore, cameraService, certificateService, sortService, cameraDialogService, router, actionMenuSheetService, fileSystemService, userMessageService, qrcodeReaderService, overlayService, pkpassService) {
        this.documentStore = documentStore;
        this.cameraService = cameraService;
        this.certificateService = certificateService;
        this.sortService = sortService;
        this.cameraDialogService = cameraDialogService;
        this.router = router;
        this.actionMenuSheetService = actionMenuSheetService;
        this.fileSystemService = fileSystemService;
        this.userMessageService = userMessageService;
        this.qrcodeReaderService = qrcodeReaderService;
        this.overlayService = overlayService;
        this.pkpassService = pkpassService;
        this.documentList = [];
        this.sortOrder = [];
        this.actionList = [
            {
                matIcon: 'qr_code_scanner',
                name: 'Scan Health Certificate',
                action: () => {
                    this.openCameraDialog();
                },
            },
            {
                matIcon: 'file_upload',
                name: 'Import Health Certificate',
                action: () => {
                    this.importImage();
                },
            },
            {
                matIcon: 'airplane_ticket',
                name: 'Import PKPass',
                action: () => {
                    this.importPKPass();
                },
            },
        ];
    }
    ngOnInit() {
        this.documentStore.getDocuments().subscribe({
            //Reassign Array so Angular will detect a change and redraw UI
            next: (value) => (this.documentList = [...this.documentList, value]),
            error: (err) => this.userMessageService.showUserMessage(err),
        });
        //Subscribe for changed Documents
        this.documentChangeSubscription =
            this.documentStore.documentChange$.subscribe((documentModelChange) => {
                console.log(documentModelChange);
                const index = this.documentList.findIndex((document) => document.id === documentModelChange.id);
                //Must be an Update
                if (index != -1 && documentModelChange.document) {
                    this.documentList[index] = documentModelChange.document;
                    //Must be a Deletion
                }
                else if (index != -1) {
                    this.documentList.splice(index, 1);
                    //Must be a new Document
                }
                else if (documentModelChange.document) {
                    this.documentList.push(documentModelChange.document);
                }
                //trigger redraw
                this.documentList = [...this.documentList];
            });
        this.sortService.getSortOrder().subscribe((sortOrder) => {
            this.sortOrder = sortOrder;
        });
        this.sortOrderSubscription = this.sortService.sortOrder$.subscribe((sortOrder) => {
            this.sortOrder = sortOrder;
        });
    }
    openActionMenu() {
        this.actionMenuSheetService.open(this.actionList);
    }
    onSort(sort) {
        this.sortService.updateSortOrder(sort).subscribe();
    }
    onDelete(id) {
        if (id) {
            this.documentStore.deleteDocument(id).subscribe({
                error: (err) => this.userMessageService.showUserMessage(err),
            });
        }
    }
    onShowMore(id) {
        if (id) {
            this.router.navigate(['document', id]);
        }
    }
    onDocumentShared(document) {
        this.userMessageService.showUserMessage('Document shared!');
    }
    onDocumentDownloaded(document) {
        this.userMessageService.showUserMessage('Document downloaded!');
    }
    onError(error) {
        this.userMessageService.showUserMessage(error);
    }
    handleError(exception) {
        this.overlayService.close();
        if (!(exception instanceof rxjs__WEBPACK_IMPORTED_MODULE_23__.TimeoutError)) {
            console.error(exception);
            this.userMessageService.showUserMessage(exception);
        }
        else {
            console.log('intended Timeout of Observable.');
        }
    }
    openCameraDialog() {
        this.actionMenuSheetService.close();
        this.cameraDialogService
            .openQRCodeScannerDialog()
            .afterClosed()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_24__.skipWhile)((qrCode) => !qrCode), 
        // @ts-ignore
        (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.concatMap)((qrCode) => this.certificateService.decode(qrCode.value)), (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.map)((certificateWrapper) => (0,_map_to_document_model_utils__WEBPACK_IMPORTED_MODULE_0__.mapCertificateWrapperToDocumentModel)(certificateWrapper)), (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.concatMap)((document) => this.documentStore.saveDocument(document)))
            .subscribe({
            error: (err) => this.handleError(err),
            complete: () => console.log('closed'),
        });
    }
    importImage() {
        this.actionMenuSheetService.close();
        this.fileSystemService
            .readFiles([_modules_file_system_utils_FilePickerAcceptTypes_constants__WEBPACK_IMPORTED_MODULE_2__.FilePickerAcceptTypesConstants.IMAGES], false)
            .pipe(
        //Cleanup Observable when there is no File selected in 100 seconds
        (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.timeout)(100000), (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.tap)(() => this.overlayService.openSpinnerOverlay()), (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.concatMap)((image) => (0,_modules_commons_utils_image_conversion_utils__WEBPACK_IMPORTED_MODULE_1__.blobToImageData)(image[0])), (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.concatMap)((imageData) => (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.from)(this.qrcodeReaderService.detectImage(imageData))), (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.map)((qrCode) => {
            if (!qrCode || qrCode.length < 1) {
                throw new DOMException('No Valid QR-Code!');
            }
            return qrCode;
        }), 
        // @ts-ignore
        (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.concatMap)((qrCode) => this.certificateService.decode(qrCode[0].value)), (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.map)((certificateWrapper) => (0,_map_to_document_model_utils__WEBPACK_IMPORTED_MODULE_0__.mapCertificateWrapperToDocumentModel)(certificateWrapper)), (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.concatMap)((document) => this.documentStore.saveDocument(document)), (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.tap)(() => {
            this.overlayService.close();
        }))
            .subscribe({
            next: (value) => console.log(value),
            error: (err) => this.handleError(err),
        });
    }
    importPKPass() {
        this.actionMenuSheetService.close();
        this.fileSystemService
            .readFiles([_modules_file_system_utils_FilePickerAcceptTypes_constants__WEBPACK_IMPORTED_MODULE_2__.FilePickerAcceptTypesConstants.PKPASS], false)
            .pipe(
        //Cleanup Observable when there is no File selected in 100 seconds
        (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.timeout)(100000), (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.tap)(() => this.overlayService.openSpinnerOverlay()), (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.concatMap)((files) => this.pkpassService.readPkpass(files[0])), (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.map)((pkpassWrapper) => (0,_map_to_document_model_utils__WEBPACK_IMPORTED_MODULE_0__.mapPkpassWrapperToDocumentModel)(pkpassWrapper)), (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.concatMap)((pkpassDocument) => this.documentStore.saveDocument(pkpassDocument)), (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.tap)((documet) => {
            console.log(documet);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.tap)(() => {
            this.overlayService.close();
        }))
            .subscribe({
            next: (pkpassDocument) => console.log(pkpassDocument),
            error: (err) => this.handleError(err),
        });
    }
    ngOnDestroy() {
        if (this.documentChangeSubscription) {
            this.documentChangeSubscription.unsubscribe();
        }
        if (this.sortOrderSubscription) {
            this.sortOrderSubscription.unsubscribe();
        }
    }
}
WalletPageComponent.ɵfac = function WalletPageComponent_Factory(t) { return new (t || WalletPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_store_document_store_service__WEBPACK_IMPORTED_MODULE_3__.DocumentStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_modules_camera_module_services_camera_service__WEBPACK_IMPORTED_MODULE_4__.CameraService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_modules_health_certificate_services_covid_certificate_service__WEBPACK_IMPORTED_MODULE_5__.CovidCertificateService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_store_sort_store_service__WEBPACK_IMPORTED_MODULE_6__.SortStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_modules_camera_module_services_camera_dialog_service__WEBPACK_IMPORTED_MODULE_7__.CameraDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_30__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_modules_ui_components_services_action_menu_sheet_service__WEBPACK_IMPORTED_MODULE_8__.ActionMenuSheetService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_modules_file_system_services_FileSystem_service__WEBPACK_IMPORTED_MODULE_9__.FileSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_modules_ui_components_services_user_message_service__WEBPACK_IMPORTED_MODULE_10__.UserMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_modules_camera_module_services_qrcode_reader_service__WEBPACK_IMPORTED_MODULE_11__.QrcodeReaderService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_modules_ui_components_services_overlay_service__WEBPACK_IMPORTED_MODULE_12__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_modules_pkpass_services_pkpass_service__WEBPACK_IMPORTED_MODULE_13__.PkpassService)); };
WalletPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineComponent"]({ type: WalletPageComponent, selectors: [["the-wallet-wallet-page"]], decls: 13, vars: 4, consts: [["title", "Wallet", "theWalletPageTemplateHeader", ""], ["theWalletAppBarStartElements", ""], ["theWalletAppBarEndElements", ""], [1, "wallet-page-install-pwa-button"], [3, "documentList", "sort", "delete", "showMore", "documentShared", "error", "documentDownloaded"], ["mat-fab", "", "color", "primary", "aria-label", "QR_Code", 3, "click"]], template: function WalletPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "the-wallet-page-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](1, "the-wallet-app-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](4, "wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerStart"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](6, "the-wallet-install-pwabutton", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](7, "the-wallet-drag-drop-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](8, "the-wallet-document-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("sort", function WalletPageComponent_Template_the_wallet_document_list_sort_8_listener($event) { return ctx.onSort($event); })("delete", function WalletPageComponent_Template_the_wallet_document_list_delete_8_listener($event) { return ctx.onDelete($event); })("showMore", function WalletPageComponent_Template_the_wallet_document_list_showMore_8_listener($event) { return ctx.onShowMore($event); })("documentShared", function WalletPageComponent_Template_the_wallet_document_list_documentShared_8_listener($event) { return ctx.onDocumentShared($event); })("error", function WalletPageComponent_Template_the_wallet_document_list_error_8_listener($event) { return ctx.onError($event); })("documentDownloaded", function WalletPageComponent_Template_the_wallet_document_list_documentDownloaded_8_listener($event) { return ctx.onDocumentDownloaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipe"](9, "sortDocumentsByArray");
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("click", function WalletPageComponent_Template_button_click_10_listener() { return ctx.openActionMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](12, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("documentList", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipeBind2"](9, 1, ctx.documentList, ctx.sortOrder));
    } }, directives: [_templates_page_template_page_template_component__WEBPACK_IMPORTED_MODULE_14__.PageTemplateComponent, _molecules_app_bar_app_bar_component__WEBPACK_IMPORTED_MODULE_15__.AppBarComponent, _templates_page_template_page_template_header_directive__WEBPACK_IMPORTED_MODULE_16__.PageTemplateHeaderDirective, _molecules_app_bar_app_bar_start_elements_directive__WEBPACK_IMPORTED_MODULE_17__.AppBarStartElementsDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIcon, _molecules_app_bar_app_bar_end_elements_directive__WEBPACK_IMPORTED_MODULE_18__.AppBarEndElementsDirective, _modules_commons_components_install_pwabutton_install_pwabutton_component__WEBPACK_IMPORTED_MODULE_19__.InstallPWAButtonComponent, _molecules_drag_drop_slider_drag_drop_slider_component__WEBPACK_IMPORTED_MODULE_20__.DragDropSliderComponent, _organisms_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_21__.DocumentListComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_32__.MatButton], pipes: [_pipes_sort_by_array_pipe__WEBPACK_IMPORTED_MODULE_22__.SortDocumentsByArrayPipe], styles: [".mat-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 2%;\n  bottom: 1%;\n}\n\n.wallet-page-install-pwa-button[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6IndhbGxldC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mYWIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyJTtcbiAgYm90dG9tOiAxJTtcbn1cblxuLndhbGxldC1wYWdlLWluc3RhbGwtcHdhLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 94981:
/*!**************************************************************************************!*\
  !*** ./src/app/components/templates/page-template/page-template-header.directive.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTemplateHeaderDirective": () => (/* binding */ PageTemplateHeaderDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PageTemplateHeaderDirective {
    constructor() { }
}
PageTemplateHeaderDirective.ɵfac = function PageTemplateHeaderDirective_Factory(t) { return new (t || PageTemplateHeaderDirective)(); };
PageTemplateHeaderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PageTemplateHeaderDirective, selectors: [["", "theWalletPageTemplateHeader", ""]] });


/***/ }),

/***/ 55582:
/*!*******************************************************************************!*\
  !*** ./src/app/components/templates/page-template/page-template.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTemplateComponent": () => (/* binding */ PageTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ 39910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



const _c0 = [[["", "theWalletPageTemplateHeader", ""]], "*"];
const _c1 = ["[theWalletPageTemplateHeader]", "*"];
class PageTemplateComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.title = '';
        this.isLargeScreen = false;
    }
    ngOnInit() {
        this.beakpointSubscription$ = this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.Breakpoints.XSmall])
            .subscribe((result) => {
            console.log(result);
            this.isLargeScreen = !result.matches;
        });
    }
    ngOnDestroy() {
        if (this.beakpointSubscription$) {
            this.beakpointSubscription$.unsubscribe();
        }
    }
}
PageTemplateComponent.ɵfac = function PageTemplateComponent_Factory(t) { return new (t || PageTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.BreakpointObserver)); };
PageTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageTemplateComponent, selectors: [["the-wallet-page-template"]], inputs: { title: "title" }, ngContentSelectors: _c1, decls: 4, vars: 2, consts: [[1, "container"]], template: function PageTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.isLargeScreen ? "main-large" : "main");
    } }, styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.main-large[_ngcontent-%COMP%] {\n  width: auto;\n}\n\n.right[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoicGFnZS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW4tbGFyZ2Uge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 96649:
/*!*********************************************!*\
  !*** ./src/app/models/DocumentType.enum.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentTypeEnum": () => (/* binding */ DocumentTypeEnum)
/* harmony export */ });
var DocumentTypeEnum;
(function (DocumentTypeEnum) {
    DocumentTypeEnum["HEALTHCERTIFICATE"] = "HEALTHCERTIFICATE";
    DocumentTypeEnum["PKPASS"] = "PKPASS";
})(DocumentTypeEnum || (DocumentTypeEnum = {}));


/***/ }),

/***/ 85771:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/camera-module/camera-control-strip/camera-control-strip.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraControlStripComponent": () => (/* binding */ CameraControlStripComponent)
/* harmony export */ });
/* harmony import */ var _services_CameraTypeEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/CameraTypeEnum */ 53561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_camera_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/camera.service */ 75200);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 65590);






class CameraControlStripComponent {
    constructor(cameraService) {
        this.cameraService = cameraService;
        this.cameraType = _services_CameraTypeEnum__WEBPACK_IMPORTED_MODULE_0__.CameraTypeEnum.DEFAULT;
        this.cameraTypeEnum = _services_CameraTypeEnum__WEBPACK_IMPORTED_MODULE_0__.CameraTypeEnum;
        this.supportsFlash = false;
    }
    ngOnInit() {
        this.supportsFlash = this.cameraService.supportsFlashlight();
    }
    switchCamera() {
        this.cameraService.switchCamera();
    }
    takePhoto() {
        this.cameraService.takePicture();
    }
}
CameraControlStripComponent.ɵfac = function CameraControlStripComponent_Factory(t) { return new (t || CameraControlStripComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_camera_service__WEBPACK_IMPORTED_MODULE_1__.CameraService)); };
CameraControlStripComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CameraControlStripComponent, selectors: [["the-wallet-camera-control-strip"]], inputs: { cameraType: "cameraType" }, decls: 11, vars: 2, consts: [[1, "the-wallet-camera-control-strip"], [1, "the-wallet-camera-control-strip-row"], ["mat-mini-fab", "", "aria-label", "Light!", "color", "primary", 3, "disabled"], ["mat-fab", "", "aria-label", "Photo!", "color", "primary", 3, "disabled", "click"], ["mat-mini-fab", "", "aria-label", "Switch Camera!", "color", "primary", 3, "click"]], template: function CameraControlStripComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "flashlight_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CameraControlStripComponent_Template_button_click_5_listener() { return ctx.takePhoto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "photo_camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CameraControlStripComponent_Template_button_click_8_listener() { return ctx.switchCamera(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "switch_camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.supportsFlash);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.cameraType !== ctx.cameraTypeEnum.DEFAULT);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon], styles: [".the-wallet-camera-control-strip[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.the-wallet-camera-control-strip-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS1jb250cm9sLXN0cmlwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFFSiIsImZpbGUiOiJjYW1lcmEtY29udHJvbC1zdHJpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGUtd2FsbGV0LWNhbWVyYS1jb250cm9sLXN0cmlwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAmLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 88745:
/*!********************************************************************************!*\
  !*** ./src/app/modules/camera-module/camera-dialog/camera-dialog.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDialogComponent": () => (/* binding */ CameraDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _services_CameraTypeEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/CameraTypeEnum */ 53561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _camera_video_camera_video_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../camera-video/camera-video.component */ 4018);
/* harmony import */ var _camera_control_strip_camera_control_strip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../camera-control-strip/camera-control-strip.component */ 85771);








class CameraDialogComponent {
    constructor(data) {
        this.data = data;
        this.cameraTypeEnum = _services_CameraTypeEnum__WEBPACK_IMPORTED_MODULE_0__.CameraTypeEnum;
        console.log(data);
    }
}
CameraDialogComponent.ɵfac = function CameraDialogComponent_Factory(t) { return new (t || CameraDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
CameraDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CameraDialogComponent, selectors: [["the-wallet-camera-dialog"]], decls: 10, vars: 2, consts: [["color", "primary", 1, "camera-dialog-component-title"], [1, "camera-dialog-component-title-row"], ["mat-dialog-title", ""], ["mat-dialog-close", "", 1, "close-button"], [1, "camera-dialog-content"], [1, "camera-dialog-camera-video", 3, "scanForQRCode"], [3, "cameraType"]], template: function CameraDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-dialog-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "the-wallet-camera-video", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "the-wallet-camera-control-strip", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scanForQRCode", ctx.data.cameraType === ctx.cameraTypeEnum.QRCODE);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cameraType", ctx.data.cameraType);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarRow, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _camera_video_camera_video_component__WEBPACK_IMPORTED_MODULE_1__.CameraVideoComponent, _camera_control_strip_camera_control_strip_component__WEBPACK_IMPORTED_MODULE_2__.CameraControlStripComponent], styles: [".camera-dialog-component-title-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.camera-dialog-component-title-row[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.camera-dialog-camera-video[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.camera-dialog-content[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  margin: 0px !important;\n  max-height: 80vh !important;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FBQUo7QUFFSTtFQUNFLGlCQUFBO0FBQU47QUFJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBREY7QUFHQTtFQUVFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREYiLCJmaWxlIjoiY2FtZXJhLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1lcmEtZGlhbG9nLWNvbXBvbmVudC10aXRsZSB7XHJcbiAgJi1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuY2xvc2UtYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jYW1lcmEtZGlhbG9nLWNhbWVyYS12aWRlbyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYW1lcmEtZGlhbG9nLWNvbnRlbnQge1xyXG4gIC8vb3ZlcndyaXRlIEFuZ3VsYXItTWF0ZXJpYWwgU3BlY2lmaWNzIGZvciBEaWFsb2dzXHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiA4MHZoICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4018:
/*!******************************************************************************!*\
  !*** ./src/app/modules/camera-module/camera-video/camera-video.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraVideoComponent": () => (/* binding */ CameraVideoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_camera_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/camera.service */ 75200);


class CameraVideoComponent {
    constructor(cameraService) {
        this.cameraService = cameraService;
        this.scanForQRCode = false;
    }
    ngOnDestroy() {
        var _a;
        (_a = this.mediaStreamSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.cameraService.stop();
    }
    ngOnInit() {
        if (this.cameraService.supportsCameraApi()) {
            this.mediaStreamSubscription = this.cameraService.mediaStream$.subscribe({
                next: (mediaStream) => {
                    this.mediaStream = mediaStream;
                },
                error: (error) => console.log(error),
            });
        }
    }
    //Start streaming after Video-Element is ready
    ngAfterViewInit() {
        this.cameraService.start(undefined, this.scanForQRCode);
    }
}
CameraVideoComponent.ɵfac = function CameraVideoComponent_Factory(t) { return new (t || CameraVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_camera_service__WEBPACK_IMPORTED_MODULE_0__.CameraService)); };
CameraVideoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CameraVideoComponent, selectors: [["the-wallet-camera-video"]], inputs: { scanForQRCode: "scanForQRCode" }, decls: 2, vars: 1, consts: [[1, "video-component"], ["playsinline", "", "autoplay", "", 3, "srcObject"]], template: function CameraVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("srcObject", ctx.mediaStream);
    } }, styles: [".video-component[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: black;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  height: 100%;\n}\n.video-component[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  height: 100%;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS12aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJjYW1lcmEtdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8tY29tcG9uZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIHZpZGVvIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 44098:
/*!********************************************************!*\
  !*** ./src/app/modules/camera-module/camera.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraModule": () => (/* binding */ CameraModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _camera_control_strip_camera_control_strip_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera-control-strip/camera-control-strip.component */ 85771);
/* harmony import */ var _camera_video_camera_video_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera-video/camera-video.component */ 4018);
/* harmony import */ var _camera_dialog_camera_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera-dialog/camera-dialog.component */ 88745);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _services_feature_detection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/feature-detection.service */ 91873);
/* harmony import */ var _services_feature_detection_service_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/feature-detection.service.factory */ 18612);
/* harmony import */ var _services_qrcode_reader_service_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/qrcode-reader.service.provider */ 58384);













class CameraModule {
}
CameraModule.ɵfac = function CameraModule_Factory(t) { return new (t || CameraModule)(); };
CameraModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CameraModule });
CameraModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.APP_INITIALIZER,
            useFactory: _services_feature_detection_service_factory__WEBPACK_IMPORTED_MODULE_4__.featureDetectionServiceFactory,
            deps: [_services_feature_detection_service__WEBPACK_IMPORTED_MODULE_3__.FeatureDetectionService],
            multi: true,
        },
        _services_qrcode_reader_service_provider__WEBPACK_IMPORTED_MODULE_5__.qrcodeReaderServiceProvider,
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CameraModule, { declarations: [_camera_video_camera_video_component__WEBPACK_IMPORTED_MODULE_1__.CameraVideoComponent,
        _camera_control_strip_camera_control_strip_component__WEBPACK_IMPORTED_MODULE_0__.CameraControlStripComponent,
        _camera_dialog_camera_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CameraDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule], exports: [_camera_dialog_camera_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CameraDialogComponent] }); })();


/***/ }),

/***/ 9948:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/camera-module/polyfills/image-capture-api.polyfill.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCaptureApi": () => (/* binding */ ImageCaptureApi)
/* harmony export */ });
/* harmony import */ var C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);


/*
 * This is a Polyfill for the ImageCapture-Api
 * Have a Look at https://www.w3.org/TR/image-capture/
 * Also i seem not the first person to try, to implement a Poly-Fill fot the Image-Capture-Api:
 * https://github.com/GoogleChromeLabs/imagecapture-polyfill/blob/master/src/imagecapture.js
 * */
class ImageCaptureApi {
  constructor(track) {
    if (!track) {
      throw new DOMException('MediaStreamTrack is null or undefined!', 'DataError');
    }

    if (track.kind !== ImageCaptureApi.MEDIA_STREAM_TRACK_KIND_VIDEO) {
      throw new DOMException('MediaStreamTrack must be of the kind video!', 'NotSupportedError');
    }

    this.track = track;
    this._videoElement = document.createElement('video'); //Fix for iOS 10
    //see: https://stackoverflow.com/questions/19521667/disable-fullscreen-iphone-video

    this._videoElement.playsInline = true;
    this._canvasElement = document.createElement('canvas'); // @ts-ignore

    this._context = this._canvasElement.getContext('2d');
    const mediaStream = new MediaStream([this.track]);
    this._videoElement.srcObject = mediaStream;
    this._isPlayingPromise = this._videoElement.play();
  }

  getPhotoCapabilities() {
    console.warn('the getPhotoCapabilities is not implemented and returns only default values!');
    const photoCapabilities = {
      redEyeReduction: 'never',
      fillLightMode: ['off'],
      imageHeight: {
        max: 0,
        min: 0,
        step: 0
      },
      imageWidth: {
        max: 0,
        min: 0,
        step: 0
      }
    };
    return Promise.resolve(photoCapabilities);
  }

  getPhotoSettings() {
    console.warn('the getPhotoSettings is not implemented and returns only default values!');
    const photoCapabilities = {
      redEyeReduction: undefined,
      fillLightMode: undefined,
      imageHeight: undefined,
      imageWidth: undefined
    };
    return Promise.resolve(photoCapabilities);
  }

  grabFrame() {
    var _this = this;

    return (0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        context
      } = yield _this.drawImageToCanvas();
      const imageData = context.getImageData(0, 0, _this._videoElement.width, _this._videoElement.height);
      const imageBitMap = yield createImageBitmap(imageData);
      return imageBitMap;
    })();
  }

  drawImageToCanvas() {
    var _this2 = this;

    return (0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // IE does not support readyState: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/readyState
      if (!_this2.track.readyState || _this2.track.readyState === ImageCaptureApi.READY_STATE_LIVE) {
        return _this2._isPlayingPromise.then(() => {
          const width = _this2._videoElement.videoWidth;
          const height = _this2._videoElement.videoHeight;
          _this2._canvasElement.width = width;
          _this2._canvasElement.height = height;

          if (!_this2._context) {
            throw new DOMException('No 2d-Context from Canvas replied!');
          }

          _this2._context.drawImage(_this2._videoElement, 0, 0);

          return {
            canvas: _this2._canvasElement,
            context: _this2._context
          };
        });
      } else {
        throw new DOMException('VideoStream not active!', 'InvalidStateError');
      }
    })();
  } //take a look at https://w3c.github.io/mediacapture-image/#dom-imagecapture-grabframe


  takePhoto(photoSettings) {
    var _this3 = this;

    return (0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (photoSettings) {
        console.log('PhotoSettings are not supported in Polyfill!');
      }

      const {
        canvas
      } = yield _this3.drawImageToCanvas();
      return new Promise((resolve, reject) => {
        canvas.toBlob(blob => {
          blob ? resolve(blob) : reject(new DOMException('Could not generate Blob!'));
        });
      });
    })();
  }

}
ImageCaptureApi.READY_STATE_LIVE = 'live';
ImageCaptureApi.MEDIA_STREAM_TRACK_KIND_VIDEO = 'video';

if (!('ImageCapture' in window)) {
  window.ImageCapture = ImageCaptureApi;
}

/***/ }),

/***/ 53561:
/*!******************************************************************!*\
  !*** ./src/app/modules/camera-module/services/CameraTypeEnum.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraTypeEnum": () => (/* binding */ CameraTypeEnum)
/* harmony export */ });
var CameraTypeEnum;
(function (CameraTypeEnum) {
    CameraTypeEnum["DEFAULT"] = "DEFAULT";
    CameraTypeEnum["QRCODE"] = "QRCODE";
})(CameraTypeEnum || (CameraTypeEnum = {}));


/***/ }),

/***/ 99842:
/*!*************************************************************************!*\
  !*** ./src/app/modules/camera-module/services/camera-dialog.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDialogService": () => (/* binding */ CameraDialogService)
/* harmony export */ });
/* harmony import */ var _camera_dialog_camera_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../camera-dialog/camera-dialog.component */ 88745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var _CameraTypeEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CameraTypeEnum */ 53561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _camera_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera.service */ 75200);






class CameraDialogService {
    constructor(matDialog, cameraService) {
        this.matDialog = matDialog;
        this.cameraService = cameraService;
    }
    openCameraDialog() {
        //have a look at: https://stackoverflow.com/questions/48688614/angular-custom-style-to-mat-dialog
        //style is in style.css
        return this.matDialog.open(_camera_dialog_camera_dialog_component__WEBPACK_IMPORTED_MODULE_0__.CameraDialogComponent, {
            panelClass: 'camera-dialog',
            data: { cameraType: _CameraTypeEnum__WEBPACK_IMPORTED_MODULE_1__.CameraTypeEnum.DEFAULT },
        });
    }
    openQRCodeScannerDialog() {
        //have a look at: https://stackoverflow.com/questions/48688614/angular-custom-style-to-mat-dialog
        //style is in style.css
        const dialog = this.matDialog.open(_camera_dialog_camera_dialog_component__WEBPACK_IMPORTED_MODULE_0__.CameraDialogComponent, {
            panelClass: 'camera-dialog',
            data: { cameraType: _CameraTypeEnum__WEBPACK_IMPORTED_MODULE_1__.CameraTypeEnum.QRCODE },
        });
        const qrCodeSubscription$ = this.cameraService.qrCode$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.take)(1))
            .subscribe({
            next: (qrCode) => dialog.close(qrCode),
            error: (err) => dialog.close(),
        });
        //unsubscribe when Dialog is closed
        dialog.afterClosed().subscribe(() => qrCodeSubscription$.unsubscribe());
        return dialog;
    }
}
CameraDialogService.ɵfac = function CameraDialogService_Factory(t) { return new (t || CameraDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_camera_service__WEBPACK_IMPORTED_MODULE_2__.CameraService)); };
CameraDialogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CameraDialogService, factory: CameraDialogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 75200:
/*!******************************************************************!*\
  !*** ./src/app/modules/camera-module/services/camera.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraService": () => (/* binding */ CameraService)
/* harmony export */ });
/* harmony import */ var C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _image_capture_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-capture.utils */ 79998);
/* harmony import */ var _polyfills_image_capture_api_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/image-capture-api.polyfill */ 9948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _qrcode_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qrcode-reader.service */ 6615);
/* harmony import */ var _feature_detection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature-detection.service */ 91873);







class CameraService {
  constructor(qrcodeReaderService, featureDetectionService) {
    this.qrcodeReaderService = qrcodeReaderService;
    this.featureDetectionService = featureDetectionService;
    this.mediaStreamSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.pictureSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.qrCodeSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.mediaStream$ = this.mediaStreamSource.asObservable();
    this.picture$ = this.pictureSource.asObservable();
    this.qrCode$ = this.qrCodeSource.asObservable();
    this.DEFAULT_CONSTRAINTS = {
      video: {
        facingMode: 'environment'
      },
      audio: false
    };
    console.log(qrcodeReaderService.getImplementation());
  }

  supportsCameraApi() {
    return this.featureDetectionService.getUserMedia();
  }

  supportsEnumerateDevicesApi() {
    return this.featureDetectionService.enumerateDevices();
  }

  supportsTakingPictures() {
    return this.featureDetectionService.canvas() || this.featureDetectionService.imageCapture();
  }

  supportsFlashlight() {
    return this.featureDetectionService.getSupportedConstraints() && navigator.mediaDevices.getSupportedConstraints().torch;
  }

  switchCamera() {
    this.getAvailableVideoDevices().then(mediaDeviceInfos => {
      if (mediaDeviceInfos.length > 0) {
        this.start({
          video: {
            deviceId: mediaDeviceInfos[0].deviceId
          }
        });
      }
    });
  }

  getAvailableVideoDevices() {
    var _this = this;

    return (0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      if (!_this.supportsCameraApi() && !_this.supportsEnumerateDevicesApi()) {
        throw new DOMException('Feature Enumarate Devices is not supported!');
      }

      const currentDeviceId = ((_a = _this.mediaStream) === null || _a === void 0 ? void 0 : _a.active) ? _this.mediaStream.getTracks()[0].id : null;
      const mediaDevices = yield navigator.mediaDevices.enumerateDevices();
      const otherVideoDevices = mediaDevices.filter(mediaDeviceInfo => mediaDeviceInfo.kind === CameraService.MEDIA_DEVICE_KIND_VIDEOINPUT && mediaDeviceInfo.deviceId !== currentDeviceId);
      return otherVideoDevices;
    })();
  }

  stop() {
    var _a;

    this.imageCaptureApi = undefined;

    if ((_a = this.mediaStream) === null || _a === void 0 ? void 0 : _a.active) {
      const tracks = this.mediaStream.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
    }

    this.mediaStream = undefined;
  }

  scanStreamForQrCodes() {
    var _this2 = this;

    window.requestAnimationFrame( /*#__PURE__*/(0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      if (_this2.mediaStream && ((_a = _this2.mediaStream) === null || _a === void 0 ? void 0 : _a.active)) {
        try {
          if (!_this2.imageCaptureApi) {
            _this2.imageCaptureApi = new _polyfills_image_capture_api_polyfill__WEBPACK_IMPORTED_MODULE_2__.ImageCaptureApi(_this2.mediaStream.getVideoTracks()[0]);
          }

          const {
            canvas,
            context
          } = yield _this2.imageCaptureApi.drawImageToCanvas();
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const qrCode = yield _this2.qrcodeReaderService.detectImage(imageData);

          if (qrCode && qrCode.length > 0) {
            _this2.qrCodeSource.next(qrCode[0]);
          }
        } catch (exception) {
          console.error(exception);
        }

        _this2.scanStreamForQrCodes();
      }
    }));
  }
  /*startScanningForQRCodes(){
    this.imageCaptureApi = undefined;
    this.scanStreamForQrCodes();
  }*/


  takePicture(photoSettings) {
    var _a;

    if ((_a = this.mediaStream) === null || _a === void 0 ? void 0 : _a.active) {
      _image_capture_utils__WEBPACK_IMPORTED_MODULE_1__.ImageCaptureUtils.takePictureOfStream(this.mediaStream, photoSettings).then(blob => {
        this.pictureSource.next(blob);
      }).catch(reason => {
        this.pictureSource.error(reason);
      });
    }
  }

  start(constraints, scanForQRCodes = true) {
    const mediaDevicePromise = navigator.mediaDevices.getUserMedia(constraints ? constraints : this.DEFAULT_CONSTRAINTS);
    mediaDevicePromise.then(mediaStream => {
      this.mediaStream = mediaStream;
      this.mediaStreamSource.next(mediaStream);

      if (scanForQRCodes) {
        this.scanStreamForQrCodes();
      }
    }).catch(reason => {
      this.mediaStreamSource.error(reason);
    });
  }

}
CameraService.MEDIA_DEVICE_KIND_VIDEOINPUT = 'videoinput';

CameraService.ɵfac = function CameraService_Factory(t) {
  return new (t || CameraService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_qrcode_reader_service__WEBPACK_IMPORTED_MODULE_3__.QrcodeReaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_feature_detection_service__WEBPACK_IMPORTED_MODULE_4__.FeatureDetectionService));
};

CameraService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: CameraService,
  factory: CameraService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 18612:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/camera-module/services/feature-detection.service.factory.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "featureDetectionServiceFactory": () => (/* binding */ featureDetectionServiceFactory)
/* harmony export */ });
const featureDetectionServiceFactory = (featureDetectionService) => {
    return () => featureDetectionService.init();
};


/***/ }),

/***/ 91873:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/camera-module/services/feature-detection.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureDetectionService": () => (/* binding */ FeatureDetectionService)
/* harmony export */ });
/* harmony import */ var C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _native_qrcode_reader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./native-qrcode-reader.service */ 82441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



/*
 * Service dient der Feature-Detection
 * Die Api orientiert sich an der Modernizer-Api
 * Da bestimmte Features nur Asynchron geprüft werden können (Bsp. BarCode-Api für QR-Codes), aber nicht zu jeder Zeit
 * asynchrone Methoden genutzt werden können (bsp. in einer Factory-Methode Dependecy-Provider) finden diese Prüfungen
 * initial beim Start des Camera-Moduls statt. Hier ist es möglich auch Asynchrone Funktionen zu nutzen. Damit die
 * entsprechende Methode beim Modul-Start gerufen wird, wird der APP_INITIALIZER-Token genutzt.
 * */

class FeatureDetectionService {
  constructor() {
    this._qrCodeReader = false;
    this._isInit = false;
  }

  init() {
    var _this = this;

    return (0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.detectQRCodeReader();
      } catch (e) {
        console.error('Error during Feature-Detection', e);
      } finally {
        _this._isInit = true;
      }
    })();
  }

  get isInit() {
    return this._isInit;
  }

  detectQRCodeReader() {
    var _this2 = this;

    return (0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2._qrCodeReader = yield _native_qrcode_reader_service__WEBPACK_IMPORTED_MODULE_1__.NativeQrcodeReaderService.supportsNativeQRCodeApi();
      return _this2._qrCodeReader;
    })();
  }

  get qrCodeReader() {
    if (!this.isInit) {
      throw new DOMException('Please call init()-Function first!');
    }

    return this._qrCodeReader;
  }

  mediaDevices() {
    return 'mediaDevices' in navigator;
  }

  getUserMedia() {
    return this.mediaDevices() && 'getUserMedia' in navigator.mediaDevices;
  }

  enumerateDevices() {
    return this.mediaDevices() && 'enumerateDevices' in navigator.mediaDevices;
  }

  getSupportedConstraints() {
    return this.mediaDevices() && 'getSupportedConstraints' in navigator.mediaDevices;
  }

  canvas() {
    return !!(document.createElement('canvas').getContext && document.createElement('canvas').getContext('2d') && document.createElement('canvas').toBlob);
  }

  imageCapture() {
    return 'ImageCapture' in window;
  }

}

FeatureDetectionService.ɵfac = function FeatureDetectionService_Factory(t) {
  return new (t || FeatureDetectionService)();
};

FeatureDetectionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: FeatureDetectionService,
  factory: FeatureDetectionService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 79998:
/*!***********************************************************************!*\
  !*** ./src/app/modules/camera-module/services/image-capture.utils.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCaptureUtils": () => (/* binding */ ImageCaptureUtils)
/* harmony export */ });
/* harmony import */ var C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);

class ImageCaptureUtils {
  static takePictureOfStream(mediaStream, photoSettings) {
    return (0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (mediaStream.active) {
        const mediaStreamTracks = mediaStream.getTracks();
        const imageCapture = new ImageCapture(mediaStreamTracks[0]);
        const picture = yield imageCapture.takePhoto(photoSettings);
        return picture;
      } else {
        throw new DOMException('MediaStream not active!');
      }
    })();
  }

}

/***/ }),

/***/ 13575:
/*!****************************************************************************!*\
  !*** ./src/app/modules/camera-module/services/js-qrcode-reader.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsQrcodeReaderService": () => (/* binding */ JsQrcodeReaderService)
/* harmony export */ });
/* harmony import */ var C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsqr */ 81038);
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsqr__WEBPACK_IMPORTED_MODULE_1__);


class JsQrcodeReaderService {
  constructor() {}

  detectImage(imageData) {
    return (0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let qrCodeModel;
      const code = jsqr__WEBPACK_IMPORTED_MODULE_1___default()(imageData.data, imageData.width, imageData.height); //Avoid "False Positives" of QR-Codes (Sometimes the library recognize not exisiting QR-Codes
      //see: https://github.com/cozmo/jsQR/issues/90

      if (code && code.binaryData.length > 0) {
        qrCodeModel = {
          value: code.data
        };
      }

      return qrCodeModel ? [qrCodeModel] : [];
    })();
  }

  getImplementation() {
    return 'JAVASCRIPT';
  }

}

/***/ }),

/***/ 82441:
/*!********************************************************************************!*\
  !*** ./src/app/modules/camera-module/services/native-qrcode-reader.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NativeQrcodeReaderService": () => (/* binding */ NativeQrcodeReaderService)
/* harmony export */ });
/* harmony import */ var C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);

class NativeQrcodeReaderService {
  constructor() {}

  initializeBarcodeDetector(barcodeFormat) {
    return (0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const barcodeFormatIsSupported = yield NativeQrcodeReaderService.detectSupportedBarCodeFormat(barcodeFormat);

      if (barcodeFormatIsSupported) {
        return new BarcodeDetector({
          formats: barcodeFormat
        });
      }

      throw new DOMException('Barcode API or Format is not supported!');
    })();
  }

  initializeQRCodeReader() {
    var _this = this;

    return (0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.qrBarcodeDetector = yield _this.initializeBarcodeDetector([NativeQrcodeReaderService.BARCODE_FORMAT_QR_CODE]);
      return _this.qrBarcodeDetector;
    })();
  }

  static detectSupportedBarCodeFormat(barcodeFormats) {
    return (0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return 'BarcodeDetector' in window && BarcodeDetector.getSupportedFormats && barcodeFormats.every( /*#__PURE__*/function () {
        var _ref = (0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (format) {
          return (yield BarcodeDetector.getSupportedFormats()).includes(format);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  static supportsNativeQRCodeApi() {
    var _this2 = this;

    return (0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this2.detectSupportedBarCodeFormat([NativeQrcodeReaderService.BARCODE_FORMAT_QR_CODE]);
    })();
  }

  detectImage(imageData) {
    var _this3 = this;

    return (0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!(yield NativeQrcodeReaderService.supportsNativeQRCodeApi())) {
        throw new DOMException("Your devices doesn't supports the native QR-Code-Scanner-Api!");
      }

      const qrCodeDetector = _this3.qrBarcodeDetector ? _this3.qrBarcodeDetector : yield _this3.initializeQRCodeReader();
      const codes = yield qrCodeDetector.detect(imageData);
      const qrCodeModel = codes.map(code => {
        return {
          value: code.rawValue
        };
      });
      return qrCodeModel;
    })();
  }

  getImplementation() {
    return 'NATIVE';
  }

}
NativeQrcodeReaderService.BARCODE_FORMAT_QR_CODE = 'qr_code';

/***/ }),

/***/ 58384:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/camera-module/services/qrcode-reader.service.provider.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qrcodeReaderServiceProvider": () => (/* binding */ qrcodeReaderServiceProvider)
/* harmony export */ });
/* harmony import */ var _qrcode_reader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qrcode-reader.service */ 6615);
/* harmony import */ var _native_qrcode_reader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./native-qrcode-reader.service */ 82441);
/* harmony import */ var _js_qrcode_reader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-qrcode-reader.service */ 13575);
/* harmony import */ var _feature_detection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature-detection.service */ 91873);




const qrcodeReaderServiceFactory = (featureDetectionStartupService) => {
    return featureDetectionStartupService.qrCodeReader
        ? new _native_qrcode_reader_service__WEBPACK_IMPORTED_MODULE_1__.NativeQrcodeReaderService()
        : new _js_qrcode_reader_service__WEBPACK_IMPORTED_MODULE_2__.JsQrcodeReaderService();
};
const qrcodeReaderServiceProvider = {
    provide: _qrcode_reader_service__WEBPACK_IMPORTED_MODULE_0__.QrcodeReaderService,
    useFactory: qrcodeReaderServiceFactory,
    deps: [_feature_detection_service__WEBPACK_IMPORTED_MODULE_3__.FeatureDetectionService],
};


/***/ }),

/***/ 6615:
/*!*************************************************************************!*\
  !*** ./src/app/modules/camera-module/services/qrcode-reader.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrcodeReaderService": () => (/* binding */ QrcodeReaderService)
/* harmony export */ });
class QrcodeReaderService {
}


/***/ }),

/***/ 26895:
/*!***************************************************!*\
  !*** ./src/app/modules/commons/commons.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonsModule": () => (/* binding */ CommonsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _pipes_shorten_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/shorten.pipe */ 28552);
/* harmony import */ var _components_install_pwabutton_install_pwabutton_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/install-pwabutton/install-pwabutton.component */ 44032);
/* harmony import */ var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui-components/ui-components.module */ 40358);
/* harmony import */ var _services_install_prompt_service_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/install-prompt.service.provider */ 65063);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








class CommonsModule {
}
CommonsModule.ɵfac = function CommonsModule_Factory(t) { return new (t || CommonsModule)(); };
CommonsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CommonsModule });
CommonsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_services_install_prompt_service_provider__WEBPACK_IMPORTED_MODULE_3__.installPromptServiceProvider], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_2__.UiComponentsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CommonsModule, { declarations: [_pipes_shorten_pipe__WEBPACK_IMPORTED_MODULE_0__.ShortenPipe, _components_install_pwabutton_install_pwabutton_component__WEBPACK_IMPORTED_MODULE_1__.InstallPWAButtonComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_2__.UiComponentsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule], exports: [_pipes_shorten_pipe__WEBPACK_IMPORTED_MODULE_0__.ShortenPipe, _components_install_pwabutton_install_pwabutton_component__WEBPACK_IMPORTED_MODULE_1__.InstallPWAButtonComponent] }); })();


/***/ }),

/***/ 44032:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/commons/components/install-pwabutton/install-pwabutton.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallPWAButtonComponent": () => (/* binding */ InstallPWAButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_install_prompt_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/install-prompt.service */ 16712);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 65590);





function InstallPWAButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InstallPWAButtonComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.installPWA(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "install_mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Install App ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class InstallPWAButtonComponent {
    constructor(installPromptService) {
        this.installPromptService = installPromptService;
    }
    ngOnDestroy() {
        if (this.installPromptEventSubscription) {
            this.installPromptEventSubscription.unsubscribe();
        }
    }
    ngOnInit() {
        this.installPromptEventSubscription =
            this.installPromptService.installPromptEvent$.subscribe((event) => {
                this.installPromptEvent = event;
            });
    }
    installPWA() {
        if (this.installPromptEvent && 'prompt' in this.installPromptEvent) {
            //@ts-ignore
            this.installPromptEvent.prompt();
            //@ts-ignore
            this.installPromptEvent.userChoice.then(({ outcome }) => {
                console.log('AppInstallationState: ' + outcome);
                this.installPromptService.reset();
            });
        }
    }
}
InstallPWAButtonComponent.ɵfac = function InstallPWAButtonComponent_Factory(t) { return new (t || InstallPWAButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_install_prompt_service__WEBPACK_IMPORTED_MODULE_0__.InstallPromptService)); };
InstallPWAButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InstallPWAButtonComponent, selectors: [["the-wallet-install-pwabutton"]], decls: 1, vars: 1, consts: [["class", "install-pwabutton", "color", "accent", "mat-button", "", 3, "click", 4, "ngIf"], ["color", "accent", "mat-button", "", 1, "install-pwabutton", 3, "click"]], template: function InstallPWAButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, InstallPWAButtonComponent_button_0_Template, 4, 0, "button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.installPromptEvent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0YWxsLXB3YWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 28552:
/*!*******************************************************!*\
  !*** ./src/app/modules/commons/pipes/shorten.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortenPipe": () => (/* binding */ ShortenPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ShortenPipe {
    transform(value, maxLength) {
        if (typeof value === 'number') {
            value = value + '';
        }
        return value && value.length > maxLength
            ? value.substring(0, maxLength) + '...'
            : value;
    }
}
ShortenPipe.ɵfac = function ShortenPipe_Factory(t) { return new (t || ShortenPipe)(); };
ShortenPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shorten", type: ShortenPipe, pure: true });


/***/ }),

/***/ 41671:
/*!***************************************************************************!*\
  !*** ./src/app/modules/commons/services/install-pompt.service.factory.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "installPromptServiceFactory": () => (/* binding */ installPromptServiceFactory)
/* harmony export */ });
const installPromptServiceFactory = (installPromptService) => {
    return () => installPromptService.init();
};


/***/ }),

/***/ 65063:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/commons/services/install-prompt.service.provider.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "installPromptServiceProvider": () => (/* binding */ installPromptServiceProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _install_pompt_service_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./install-pompt.service.factory */ 41671);
/* harmony import */ var _install_prompt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./install-prompt.service */ 16712);



const installPromptServiceProvider = {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__.APP_INITIALIZER,
    useFactory: _install_pompt_service_factory__WEBPACK_IMPORTED_MODULE_0__.installPromptServiceFactory,
    deps: [_install_prompt_service__WEBPACK_IMPORTED_MODULE_1__.InstallPromptService],
    multi: true,
};


/***/ }),

/***/ 16712:
/*!********************************************************************!*\
  !*** ./src/app/modules/commons/services/install-prompt.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallPromptService": () => (/* binding */ InstallPromptService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);


class InstallPromptService {
    constructor() {
        this.installPromptEventSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
        this.installPromptEvent$ = this.installPromptEventSource.asObservable();
    }
    reset() {
        this.installPromptEventSource.next(undefined);
    }
    init() {
        console.log('Ich bin hier!');
        (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(window, 'beforeinstallprompt').subscribe((event) => {
            console.log('test 2!');
            event.preventDefault();
            this.installPromptEventSource.next(event);
        });
    }
}
InstallPromptService.ɵfac = function InstallPromptService_Factory(t) { return new (t || InstallPromptService)(); };
InstallPromptService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: InstallPromptService, factory: InstallPromptService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3828:
/*!*****************************************************************!*\
  !*** ./src/app/modules/commons/utils/image-conversion.utils.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blobToDataURL": () => (/* binding */ blobToDataURL),
/* harmony export */   "blobToArrayBuffer": () => (/* binding */ blobToArrayBuffer),
/* harmony export */   "blobToImageData": () => (/* binding */ blobToImageData),
/* harmony export */   "drawImageToCanvas": () => (/* binding */ drawImageToCanvas),
/* harmony export */   "dataUrlToBlob": () => (/* binding */ dataUrlToBlob),
/* harmony export */   "dataURLToFile": () => (/* binding */ dataURLToFile)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 63853);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 94223);

const blobToDataURL = (blob) => {
    const result$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((observer$) => {
        try {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                if (reader.result) {
                    observer$.next(reader.result);
                    observer$.complete();
                }
                else {
                    throw new DOMException('Image Result is empty!');
                }
            });
            reader.readAsDataURL(blob);
        }
        catch (e) {
            observer$.error(e);
        }
    });
    return result$;
};
const blobToArrayBuffer = (blob) => {
    try {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(blob.arrayBuffer());
    }
    catch (e) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => e);
    }
};
const blobToImageData = (blob) => {
    try {
        const objectURL = URL.createObjectURL(blob);
        return drawImageToCanvas(objectURL).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)((err) => {
            URL.revokeObjectURL(objectURL);
            throw err;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((canvas) => {
            URL.revokeObjectURL(objectURL);
            return canvas
                .getContext('2d')
                .getImageData(0, 0, canvas.width, canvas.height);
        }));
    }
    catch (e) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(e);
    }
};
const drawImageToCanvas = (url) => {
    try {
        const image = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const objectURL = url;
        //throw Error when Error occurs or form to ImageData
        const result$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(image, 'error').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((event) => {
            //need to Revoke ObjectURL so no MemoryLeek occurs
            throw event;
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(image, 'load').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(() => {
            const [width, height] = [image.width, image.height];
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(image, 0, 0);
            return canvas;
        })));
        image.src = objectURL;
        return result$;
    }
    catch (e) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(e);
    }
};
const dataUrlToBlob = (dataURL) => {
    if ('fetch' in window) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(fetch(dataURL)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.concatMap)((response) => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(response.blob())));
    }
    else {
        return drawImageToCanvas(dataURL).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.concatMap)((canvas) => {
            const toBlob$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.bindCallback)((callback) => {
                canvas.toBlob(callback);
            });
            return toBlob$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((blob) => {
                if (!blob) {
                    throw new DOMException('Not possible to Build Blob!');
                }
                return blob;
            }));
        }));
    }
};
const dataURLToFile = (dataURL, fileName) => {
    return dataUrlToBlob(dataURL).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((blob) => new File([blob], fileName, { type: blob.type })));
};


/***/ }),

/***/ 5573:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/modules/document-module-api/components/pages/abstract-document-download-button/abstract-document-download-button.component.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractDocumentDownloadButtonComponent": () => (/* binding */ AbstractDocumentDownloadButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class AbstractDocumentDownloadButtonComponent {
    constructor() {
        this.download = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
AbstractDocumentDownloadButtonComponent.ɵfac = function AbstractDocumentDownloadButtonComponent_Factory(t) { return new (t || AbstractDocumentDownloadButtonComponent)(); };
AbstractDocumentDownloadButtonComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AbstractDocumentDownloadButtonComponent, inputs: { value: "value" }, outputs: { download: "download" } });


/***/ }),

/***/ 13873:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/document-module-api/components/pages/abstract-document-preview/abstract-document-preview.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractDocumentPreviewComponent": () => (/* binding */ AbstractDocumentPreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class AbstractDocumentPreviewComponent {
    constructor() {
        this.expand = false;
        this.showMore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
AbstractDocumentPreviewComponent.ɵfac = function AbstractDocumentPreviewComponent_Factory(t) { return new (t || AbstractDocumentPreviewComponent)(); };
AbstractDocumentPreviewComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AbstractDocumentPreviewComponent, inputs: { expand: "expand", value: "value" }, outputs: { showMore: "showMore" } });


/***/ }),

/***/ 81287:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/document-module-api/components/pages/abstract-document-share-button/abstract-document-share-button.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractDocumentShareButtonComponent": () => (/* binding */ AbstractDocumentShareButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class AbstractDocumentShareButtonComponent {
    constructor() {
        this.canShare = false;
        this.share = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.shareContentCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
AbstractDocumentShareButtonComponent.ɵfac = function AbstractDocumentShareButtonComponent_Factory(t) { return new (t || AbstractDocumentShareButtonComponent)(); };
AbstractDocumentShareButtonComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AbstractDocumentShareButtonComponent, inputs: { value: "value", canShare: "canShare" }, outputs: { share: "share", shareContentCreated: "shareContentCreated" } });


/***/ }),

/***/ 6558:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/document-module-api/components/pages/abstract-document/abstract-document.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractDocumentComponent": () => (/* binding */ AbstractDocumentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AbstractDocumentComponent {
}
AbstractDocumentComponent.ɵfac = function AbstractDocumentComponent_Factory(t) { return new (t || AbstractDocumentComponent)(); };
AbstractDocumentComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AbstractDocumentComponent, inputs: { value: "value" } });


/***/ }),

/***/ 41765:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/document-module-api/components/templates/document-preview-template/document-preview-template.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentPreviewTemplateComponent": () => (/* binding */ DocumentPreviewTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ui_components_components_atoms_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ui-components/components/atoms/icon-button/icon-button.component */ 22361);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);





function DocumentPreviewTemplateComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function DocumentPreviewTemplateComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DocumentPreviewTemplateComponent_ng_container_1_ng_container_2_Template, 2, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-footer", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "the-wallet-icon-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentPreviewTemplateComponent_ng_container_1_Template_the_wallet_icon_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.toogleExpand($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.expand);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.expand ? "expand_less" : "expand_more");
} }
function DocumentPreviewTemplateComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
} }
const _c0 = [[["", "theWalletDocumentPreviewHeader", ""]], [["", "theWalletDocumentPreviewActions", ""]], [["", "theWalletDocumentPreviewExpandedContent", ""]]];
const _c1 = ["[theWalletDocumentPreviewHeader]", "[theWalletDocumentPreviewActions]", "[theWalletDocumentPreviewExpandedContent]"];
class DocumentPreviewTemplateComponent {
    constructor() {
        this.expand = false;
        this.isLoading = false;
    }
    toogleExpand($event) {
        this.expand = !this.expand;
    }
}
DocumentPreviewTemplateComponent.ɵfac = function DocumentPreviewTemplateComponent_Factory(t) { return new (t || DocumentPreviewTemplateComponent)(); };
DocumentPreviewTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DocumentPreviewTemplateComponent, selectors: [["the-wallet-document-preview-template"]], inputs: { expand: "expand", isLoading: "isLoading" }, ngContentSelectors: _c1, decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["spinner", ""], [4, "ngIf"], [1, "document-preview-footer"], [3, "click"], [1, "document-preview-actions"]], template: function DocumentPreviewTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DocumentPreviewTemplateComponent_ng_container_1_Template, 8, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DocumentPreviewTemplateComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.expand ? "document-preview-expanded" : "document-preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardFooter, _ui_components_components_atoms_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_0__.IconButtonComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatSpinner], styles: [".document-preview-footer[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.document-preview-actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LXByZXZpZXctdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6ImRvY3VtZW50LXByZXZpZXctdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jdW1lbnQtcHJldmlldy1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5kb2N1bWVudC1wcmV2aWV3LWFjdGlvbnMge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 72133:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/document-module-api/components/templates/document-template/document-template.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentTemplateComponent": () => (/* binding */ DocumentTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const _c0 = ["*"];
class DocumentTemplateComponent {
    constructor() { }
    ngOnInit() { }
}
DocumentTemplateComponent.ɵfac = function DocumentTemplateComponent_Factory(t) { return new (t || DocumentTemplateComponent)(); };
DocumentTemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentTemplateComponent, selectors: [["the-wallet-document-template"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "document"]], template: function DocumentTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 20073:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/document-module-api/directives/document-preview-actions.directive.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentPreviewActionsDirective": () => (/* binding */ DocumentPreviewActionsDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DocumentPreviewActionsDirective {
    constructor() { }
}
DocumentPreviewActionsDirective.ɵfac = function DocumentPreviewActionsDirective_Factory(t) { return new (t || DocumentPreviewActionsDirective)(); };
DocumentPreviewActionsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DocumentPreviewActionsDirective, selectors: [["", "theWalletDocumentPreviewActions", ""]] });


/***/ }),

/***/ 52941:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/document-module-api/directives/document-preview-expanded-content.directive.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentPreviewExpandedContentDirective": () => (/* binding */ DocumentPreviewExpandedContentDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DocumentPreviewExpandedContentDirective {
    constructor() { }
}
DocumentPreviewExpandedContentDirective.ɵfac = function DocumentPreviewExpandedContentDirective_Factory(t) { return new (t || DocumentPreviewExpandedContentDirective)(); };
DocumentPreviewExpandedContentDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DocumentPreviewExpandedContentDirective, selectors: [["", "theWalletDocumentPreviewExpandedContent", ""]] });


/***/ }),

/***/ 6458:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/document-module-api/directives/document-preview-header.directive.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentPreviewHeaderDirective": () => (/* binding */ DocumentPreviewHeaderDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DocumentPreviewHeaderDirective {
    constructor() { }
}
DocumentPreviewHeaderDirective.ɵfac = function DocumentPreviewHeaderDirective_Factory(t) { return new (t || DocumentPreviewHeaderDirective)(); };
DocumentPreviewHeaderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DocumentPreviewHeaderDirective, selectors: [["", "theWalletDocumentPreviewHeader", ""]] });


/***/ }),

/***/ 15522:
/*!***************************************************************************!*\
  !*** ./src/app/modules/document-module-api/document-module-api.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentModuleApiModule": () => (/* binding */ DocumentModuleApiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _components_templates_document_preview_template_document_preview_template_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/templates/document-preview-template/document-preview-template.component */ 41765);
/* harmony import */ var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui-components/ui-components.module */ 40358);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _directives_document_preview_actions_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/document-preview-actions.directive */ 20073);
/* harmony import */ var _directives_document_preview_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/document-preview-header.directive */ 6458);
/* harmony import */ var _directives_document_preview_expanded_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/document-preview-expanded-content.directive */ 52941);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _components_templates_document_template_document_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/templates/document-template/document-template.component */ 72133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);










class DocumentModuleApiModule {
}
DocumentModuleApiModule.ɵfac = function DocumentModuleApiModule_Factory(t) { return new (t || DocumentModuleApiModule)(); };
DocumentModuleApiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: DocumentModuleApiModule });
DocumentModuleApiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_1__.UiComponentsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DocumentModuleApiModule, { declarations: [_components_templates_document_preview_template_document_preview_template_component__WEBPACK_IMPORTED_MODULE_0__.DocumentPreviewTemplateComponent,
        _directives_document_preview_actions_directive__WEBPACK_IMPORTED_MODULE_2__.DocumentPreviewActionsDirective,
        _directives_document_preview_header_directive__WEBPACK_IMPORTED_MODULE_3__.DocumentPreviewHeaderDirective,
        _directives_document_preview_expanded_content_directive__WEBPACK_IMPORTED_MODULE_4__.DocumentPreviewExpandedContentDirective,
        _components_templates_document_template_document_template_component__WEBPACK_IMPORTED_MODULE_5__.DocumentTemplateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_1__.UiComponentsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule], exports: [_components_templates_document_preview_template_document_preview_template_component__WEBPACK_IMPORTED_MODULE_0__.DocumentPreviewTemplateComponent,
        _directives_document_preview_actions_directive__WEBPACK_IMPORTED_MODULE_2__.DocumentPreviewActionsDirective,
        _directives_document_preview_expanded_content_directive__WEBPACK_IMPORTED_MODULE_4__.DocumentPreviewExpandedContentDirective,
        _directives_document_preview_header_directive__WEBPACK_IMPORTED_MODULE_3__.DocumentPreviewHeaderDirective,
        _components_templates_document_template_document_template_component__WEBPACK_IMPORTED_MODULE_5__.DocumentTemplateComponent] }); })();


/***/ }),

/***/ 25877:
/*!***********************************************************!*\
  !*** ./src/app/modules/file-system/file-system.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileSystemModule": () => (/* binding */ FileSystemModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _services_FileSystem_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/FileSystem.service */ 29332);
/* harmony import */ var _utils_file_system_access_api_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/file-system-access-api.utils */ 45866);
/* harmony import */ var _services_dom_file_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/dom-file-api.service */ 27490);
/* harmony import */ var _services_file_system_access_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/file-system-access-api.service */ 30482);







class FileSystemModule {
}
FileSystemModule.ɵfac = function FileSystemModule_Factory(t) { return new (t || FileSystemModule)(); };
FileSystemModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FileSystemModule });
FileSystemModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _services_FileSystem_service__WEBPACK_IMPORTED_MODULE_0__.FileSystemService,
            useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => {
                return (0,_utils_file_system_access_api_utils__WEBPACK_IMPORTED_MODULE_1__.detectFileSystemAccessApi)()
                    ? _services_file_system_access_api_service__WEBPACK_IMPORTED_MODULE_3__.FileSystemAccessApiService
                    : _services_dom_file_api_service__WEBPACK_IMPORTED_MODULE_2__.DomFileApiService;
            }),
        },
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FileSystemModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule] }); })();


/***/ }),

/***/ 29332:
/*!********************************************************************!*\
  !*** ./src/app/modules/file-system/services/FileSystem.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileSystemService": () => (/* binding */ FileSystemService)
/* harmony export */ });
class FileSystemService {
}


/***/ }),

/***/ 27490:
/*!**********************************************************************!*\
  !*** ./src/app/modules/file-system/services/dom-file-api.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomFileApiService": () => (/* binding */ DomFileApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var _utils_dom_file_api_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom-file-api.utils */ 58651);
/* harmony import */ var _commons_utils_image_conversion_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/utils/image-conversion.utils */ 3828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);




class DomFileApiService {
    constructor() { }
    writeFile(file, suggestedName) {
        try {
            const aElement = document.createElement('a');
            return (0,_commons_utils_image_conversion_utils__WEBPACK_IMPORTED_MODULE_1__.blobToDataURL)(file).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((dataURL) => {
                aElement.href = dataURL;
                aElement.download = suggestedName || '';
                aElement.click();
                return;
            }));
        }
        catch (e) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => e);
        }
    }
    readFiles(types, allowMultipleFiles) {
        try {
            const inputElement = document.createElement('input');
            inputElement.type = 'file';
            inputElement.multiple = allowMultipleFiles || false;
            inputElement.accept = types
                ? (0,_utils_dom_file_api_utils__WEBPACK_IMPORTED_MODULE_0__.filePickerAcceptTypesToAcceptString)(types)
                : '';
            //Browsers does not send a change event when the file picker is closed.
            const blob$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(inputElement, 'change').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(() => {
                const fileList = inputElement.files;
                if (!fileList || fileList.length < 1) {
                    throw new DOMException('No File selected!');
                }
                return Array.from(fileList);
            }));
            inputElement.click();
            return blob$;
        }
        catch (e) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => e);
        }
    }
}
DomFileApiService.ɵfac = function DomFileApiService_Factory(t) { return new (t || DomFileApiService)(); };
DomFileApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: DomFileApiService, factory: DomFileApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 30482:
/*!********************************************************************************!*\
  !*** ./src/app/modules/file-system/services/file-system-access-api.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileSystemAccessApiService": () => (/* binding */ FileSystemAccessApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 63853);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var _utils_file_system_access_api_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/file-system-access-api.utils */ 45866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);



class FileSystemAccessApiService {
    constructor() { }
    isSupported() {
        return (0,_utils_file_system_access_api_utils__WEBPACK_IMPORTED_MODULE_0__.detectFileSystemAccessApi)();
    }
    writeFile(file, suggestedName, types, excludeAcceptAllOption) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(window.showSaveFilePicker({
            suggestedName: suggestedName,
            types: types,
            excludeAcceptAllOption: excludeAcceptAllOption || true,
        })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.concatMap)((fileHandle) => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(fileHandle.createWritable())), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.concatMap)((writable) => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(writable.write(file)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => writable))), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.concatMap)((writable) => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(writable.close())));
    }
    readFiles(types, allowMultipleFiles, excludeAcceptAllOption) {
        try {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(window.showOpenFilePicker({
                multiple: allowMultipleFiles || false,
                excludeAcceptAllOption: excludeAcceptAllOption || true,
                types: types,
            })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((fileHandles) => {
                if (!fileHandles || fileHandles.length < 1) {
                    throw new DOMException('No File selected!');
                }
                return fileHandles;
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.concatMap)((fileHandles) => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(fileHandles.map((fileHandle) => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(fileHandle.getFile())))));
        }
        catch (exception) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => exception);
        }
    }
}
FileSystemAccessApiService.ɵfac = function FileSystemAccessApiService_Factory(t) { return new (t || FileSystemAccessApiService)(); };
FileSystemAccessApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: FileSystemAccessApiService, factory: FileSystemAccessApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 81807:
/*!******************************************************************************!*\
  !*** ./src/app/modules/file-system/utils/FilePickerAcceptTypes.constants.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilePickerAcceptTypesConstants": () => (/* binding */ FilePickerAcceptTypesConstants)
/* harmony export */ });
const FilePickerAcceptTypesConstants = {
    IMAGES: {
        description: 'Images',
        accept: {
            'image/jpeg+jpg+png': ['.jpeg', '.jpg', '.png'],
        },
    },
    PKPASS: {
        description: 'PKPASS',
        accept: {
            'application/vnd.apple.pkpass': ['.pkpass'],
        },
    },
};


/***/ }),

/***/ 58651:
/*!*****************************************************************!*\
  !*** ./src/app/modules/file-system/utils/dom-file-api.utils.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filePickerAcceptTypesToAcceptString": () => (/* binding */ filePickerAcceptTypesToAcceptString)
/* harmony export */ });
const filePickerAcceptTypesToAcceptString = (types) => {
    return types
        .map((type) => {
        const mimeTypes = Object.keys(type.accept);
        return mimeTypes
            .map((mimeType) => {
            const fileExtensions = type.accept[mimeType];
            if (Array.isArray(fileExtensions)) {
                return mimeTypes + ',' + fileExtensions.join();
            }
            else {
                return mimeTypes + fileExtensions;
            }
        })
            .join();
    })
        .join();
};


/***/ }),

/***/ 45866:
/*!***************************************************************************!*\
  !*** ./src/app/modules/file-system/utils/file-system-access-api.utils.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "detectFSAOpenApiFilePicker": () => (/* binding */ detectFSAOpenApiFilePicker),
/* harmony export */   "detectFSASaveApiFilePicker": () => (/* binding */ detectFSASaveApiFilePicker),
/* harmony export */   "detectFileSystemAccessApi": () => (/* binding */ detectFileSystemAccessApi)
/* harmony export */ });
const detectFSAOpenApiFilePicker = () => {
    return 'showOpenFilePicker' in window;
};
const detectFSASaveApiFilePicker = () => {
    return 'showSaveFilePicker' in window;
};
const detectFileSystemAccessApi = () => {
    return detectFSASaveApiFilePicker() && detectFSAOpenApiFilePicker();
};


/***/ }),

/***/ 54824:
/*!********************************************************************!*\
  !*** ./src/app/modules/health-certificate/CertificateType.enum.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificateTypeEnum": () => (/* binding */ CertificateTypeEnum)
/* harmony export */ });
var CertificateTypeEnum;
(function (CertificateTypeEnum) {
    CertificateTypeEnum["VACCINATION"] = "VACCINATION";
    CertificateTypeEnum["TEST"] = "TEST";
    CertificateTypeEnum["RECOVERY"] = "RECOVERY";
    CertificateTypeEnum["NOTDETERMINABLE"] = "NOTDETERMINABLE";
})(CertificateTypeEnum || (CertificateTypeEnum = {}));


/***/ }),

/***/ 93322:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/health-certificate/components/molecules/certificate-card-chip-list/certificate-card-chip-list.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificateCardChipListComponent": () => (/* binding */ CertificateCardChipListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function CertificateCardChipListComponent_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CertificateCardChipListComponent_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.type);
} }
class CertificateCardChipListComponent {
    constructor() {
        this.isVerified = false;
        this.type = '';
    }
}
CertificateCardChipListComponent.ɵfac = function CertificateCardChipListComponent_Factory(t) { return new (t || CertificateCardChipListComponent)(); };
CertificateCardChipListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CertificateCardChipListComponent, selectors: [["the-wallet-certificate-card-chip-list"]], inputs: { isVerified: "isVerified", type: "type" }, decls: 3, vars: 2, consts: [["aria-label", "Details"], ["color", "primary", "selected", "", 4, "ngIf"], ["color", "accent", "selected", "", 4, "ngIf"], ["color", "primary", "selected", ""], ["color", "accent", "selected", ""]], template: function CertificateCardChipListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CertificateCardChipListComponent_mat_chip_1_Template, 2, 0, "mat-chip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CertificateCardChipListComponent_mat_chip_2_Template, 2, 1, "mat-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVerified);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type);
    } }, directives: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_1__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_1__.MatChip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZXJ0aWZpY2F0ZS1jYXJkLWNoaXAtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 74487:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/health-certificate/components/molecules/certificate-card-header/certificate-card-header.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificateCardHeaderComponent": () => (/* binding */ CertificateCardHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _certificate_card_chip_list_certificate_card_chip_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../certificate-card-chip-list/certificate-card-chip-list.component */ 93322);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _pipes_to_certificate_type_icon_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/to-certificate-type-icon.pipe */ 69580);
/* harmony import */ var _pipes_to_display_name_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/to-display-name.pipe */ 19521);
/* harmony import */ var _pipes_certificate_type_name_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/certificate-type-name.pipe */ 76367);









function CertificateCardHeaderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "toCertificateTypeIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "toDisplayName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-card-subtitle", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "certificateTypeName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "the-wallet-certificate-card-chip-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "certificateTypeName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 5, ctx_r0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 7, ctx_r0.value.nam));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 9, ctx_r0.value), " Certificate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isVerified", ctx_r0.isVerified)("type", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 11, ctx_r0.value));
} }
function CertificateCardHeaderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class CertificateCardHeaderComponent {
    constructor() {
        this.isVerified = false;
    }
}
CertificateCardHeaderComponent.ɵfac = function CertificateCardHeaderComponent_Factory(t) { return new (t || CertificateCardHeaderComponent)(); };
CertificateCardHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CertificateCardHeaderComponent, selectors: [["the-wallet-certificate-card-header"]], inputs: { value: "value", isVerified: "isVerified" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["progressspinner", ""], [1, "certificate-card-header"], ["mat-card-avatar", "", "mat-fab-mini", "", "disabled", "", 1, "document-header-avatar"], ["aria-label", "Vaccination Image", 1, "certificate-header-icon"], [1, "secondary-text"], [1, "certificate-card-header-chip-list", 3, "isVerified", "type"], [1, "progress-spinner-card-header"]], template: function CertificateCardHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CertificateCardHeaderComponent_ng_container_0_Template, 14, 13, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CertificateCardHeaderComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.value)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _certificate_card_chip_list_certificate_card_chip_list_component__WEBPACK_IMPORTED_MODULE_0__.CertificateCardChipListComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatSpinner], pipes: [_pipes_to_certificate_type_icon_pipe__WEBPACK_IMPORTED_MODULE_1__.ToCertificateTypeIconPipe, _pipes_to_display_name_pipe__WEBPACK_IMPORTED_MODULE_2__.ToDisplayNamePipe, _pipes_certificate_type_name_pipe__WEBPACK_IMPORTED_MODULE_3__.CertificateTypeNamePipe], styles: [".progress-spinner-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.certificate-card-header-chip-list[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlcnRpZmljYXRlLWNhcmQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFRTtFQUNFLGlCQUFBO0FBQ0oiLCJmaWxlIjoiY2VydGlmaWNhdGUtY2FyZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3Mtc3Bpbm5lci1jYXJkLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jZXJ0aWZpY2F0ZS1jYXJkLWhlYWRlciB7XHJcbiAgJi1jaGlwLWxpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 49082:
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/health-certificate/components/molecules/person-detail/person-detail.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonDetailComponent": () => (/* binding */ PersonDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _pipes_to_display_name_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipes/to-display-name.pipe */ 19521);
/* harmony import */ var _pipes_to_locale_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/to-locale-date.pipe */ 25352);






class PersonDetailComponent {
}
PersonDetailComponent.ɵfac = function PersonDetailComponent_Factory(t) { return new (t || PersonDetailComponent)(); };
PersonDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PersonDetailComponent, selectors: [["the-wallet-person-detail"]], inputs: { value: "value" }, decls: 16, vars: 6, consts: [["mat-line", ""]], template: function PersonDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "toDisplayName");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Birthday");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "toLocaleDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 2, ctx.value.nam));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 4, ctx.value.dob));
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatList, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatLine], pipes: [_pipes_to_display_name_pipe__WEBPACK_IMPORTED_MODULE_0__.ToDisplayNamePipe, _pipes_to_locale_date_pipe__WEBPACK_IMPORTED_MODULE_1__.ToLocaleDatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 28808:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/health-certificate/components/molecules/recovery-detail/recovery-detail.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveryDetailComponent": () => (/* binding */ RecoveryDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _ui_components_components_molecules_default_expansion_panel_default_expansion_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ui-components/components/molecules/default-expansion-panel/default-expansion-panel.component */ 26761);
/* harmony import */ var _pipes_target_disease_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/target-disease.pipe */ 26787);
/* harmony import */ var _pipes_to_locale_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/to-locale-date.pipe */ 25352);
/* harmony import */ var _pipes_to_country_name_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/to-country-name.pipe */ 22316);








class RecoveryDetailComponent {
}
RecoveryDetailComponent.ɵfac = function RecoveryDetailComponent_Factory(t) { return new (t || RecoveryDetailComponent)(); };
RecoveryDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RecoveryDetailComponent, selectors: [["the-wallet-recovery-detail"]], inputs: { value: "value" }, decls: 51, vars: 17, consts: [["mat-line", ""], ["title", "Details"]], template: function RecoveryDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Target Disease");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "targetDisease");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Date of first positive Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "toLocaleDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Valid from");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "toLocaleDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Valid until");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "toLocaleDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "the-wallet-default-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](37, "toCountryName");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Certificate Issuer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Unique Certificate ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 7, ctx.value.tg));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 9, ctx.value.fr));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 11, ctx.value.df));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 13, ctx.value.du));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](37, 15, ctx.value.co));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.value.is);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.value.ci);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatList, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatLine, _ui_components_components_molecules_default_expansion_panel_default_expansion_panel_component__WEBPACK_IMPORTED_MODULE_0__.DefaultExpansionPanelComponent], pipes: [_pipes_target_disease_pipe__WEBPACK_IMPORTED_MODULE_1__.TargetDiseasePipe, _pipes_to_locale_date_pipe__WEBPACK_IMPORTED_MODULE_2__.ToLocaleDatePipe, _pipes_to_country_name_pipe__WEBPACK_IMPORTED_MODULE_3__.ToCountryNamePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvdmVyeS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 63881:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/health-certificate/components/molecules/test-detail/test-detail.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestDetailComponent": () => (/* binding */ TestDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ui_components_components_molecules_default_expansion_panel_default_expansion_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ui-components/components/molecules/default-expansion-panel/default-expansion-panel.component */ 26761);
/* harmony import */ var _pipes_to_test_result_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/to-test-result.pipe */ 17060);
/* harmony import */ var _pipes_test_type_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/test-type.pipe */ 66742);
/* harmony import */ var _pipes_to_locale_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/to-locale-date.pipe */ 25352);
/* harmony import */ var _pipes_target_disease_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/target-disease.pipe */ 26787);
/* harmony import */ var _pipes_test_manufacturer_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/test-manufacturer.pipe */ 12461);
/* harmony import */ var _pipes_to_country_name_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/to-country-name.pipe */ 22316);












function TestDetailComponent_mat_list_item_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Test Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h1", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.value.nm);
} }
function TestDetailComponent_mat_list_item_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Manufacturer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h1", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "testManufacturer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 1, ctx_r1.value.ma));
} }
class TestDetailComponent {
    constructor() { }
}
TestDetailComponent.ɵfac = function TestDetailComponent_Factory(t) { return new (t || TestDetailComponent)(); };
TestDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TestDetailComponent, selectors: [["the-wallet-test-detail"]], inputs: { value: "value" }, decls: 61, vars: 20, consts: [["mat-line", ""], [4, "ngIf"], ["title", "Details"]], template: function TestDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Test Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "toTestResult");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Test Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "testType");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Sample Collection Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "toLocaleDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Target Disease");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "targetDisease");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, TestDetailComponent_mat_list_item_30_Template, 5, 1, "mat-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Testing Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "the-wallet-default-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, TestDetailComponent_mat_list_item_40_Template, 6, 3, "mat-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Country of Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](47, "toCountryName");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Certificate Issuer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Unique Certificate ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 10, ctx.value.tr));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 12, ctx.value.tt));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 14, ctx.value.sc));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 16, ctx.value.tg));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.value.nm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.value.tc);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.value.ma);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](47, 18, ctx.value.co));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.value.is);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.value.ci);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatList, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatLine, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ui_components_components_molecules_default_expansion_panel_default_expansion_panel_component__WEBPACK_IMPORTED_MODULE_0__.DefaultExpansionPanelComponent], pipes: [_pipes_to_test_result_pipe__WEBPACK_IMPORTED_MODULE_1__.ToTestResultPipe, _pipes_test_type_pipe__WEBPACK_IMPORTED_MODULE_2__.TestTypePipe, _pipes_to_locale_date_pipe__WEBPACK_IMPORTED_MODULE_3__.ToLocaleDatePipe, _pipes_target_disease_pipe__WEBPACK_IMPORTED_MODULE_4__.TargetDiseasePipe, _pipes_test_manufacturer_pipe__WEBPACK_IMPORTED_MODULE_5__.TestManufacturerPipe, _pipes_to_country_name_pipe__WEBPACK_IMPORTED_MODULE_6__.ToCountryNamePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 669:
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/health-certificate/components/molecules/vaccination-detail/vaccination-detail.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaccinationDetailComponent": () => (/* binding */ VaccinationDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _ui_components_components_molecules_default_expansion_panel_default_expansion_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ui-components/components/molecules/default-expansion-panel/default-expansion-panel.component */ 26761);
/* harmony import */ var _pipes_vaccine_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/vaccine.pipe */ 33094);
/* harmony import */ var _pipes_VaccineManufacturer_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/VaccineManufacturer.pipe */ 77858);
/* harmony import */ var _pipes_target_disease_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/target-disease.pipe */ 26787);
/* harmony import */ var _pipes_to_locale_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/to-locale-date.pipe */ 25352);
/* harmony import */ var _pipes_vaccine_type_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/vaccine-type.pipe */ 17772);
/* harmony import */ var _pipes_to_country_name_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/to-country-name.pipe */ 22316);











class VaccinationDetailComponent {
}
VaccinationDetailComponent.ɵfac = function VaccinationDetailComponent_Factory(t) { return new (t || VaccinationDetailComponent)(); };
VaccinationDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: VaccinationDetailComponent, selectors: [["the-wallet-vaccination-detail"]], inputs: { value: "value" }, decls: 58, vars: 22, consts: [["mat-line", ""], ["title", "Details"]], template: function VaccinationDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Vaccine - Manufacturer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "vaccine");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "vaccineManufacturer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Target Disease");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "targetDisease");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Vaccination Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "toLocaleDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Dose Nr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "the-wallet-default-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Vaccine Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "vaccineType");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Country of Vaccination");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](44, "toCountryName");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Certificate Issuer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Unique Certificate ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 10, ctx.value.mp), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 12, ctx.value.ma), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 14, ctx.value.tg));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 16, ctx.value.dt));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.value.dn, " / ", ctx.value.sd, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](37, 18, ctx.value.vp));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](44, 20, ctx.value.co));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.value.is);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.value.ci);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatList, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatLine, _ui_components_components_molecules_default_expansion_panel_default_expansion_panel_component__WEBPACK_IMPORTED_MODULE_0__.DefaultExpansionPanelComponent], pipes: [_pipes_vaccine_pipe__WEBPACK_IMPORTED_MODULE_1__.VaccinePipe, _pipes_VaccineManufacturer_pipe__WEBPACK_IMPORTED_MODULE_2__.VaccineManufacturerPipe, _pipes_target_disease_pipe__WEBPACK_IMPORTED_MODULE_3__.TargetDiseasePipe, _pipes_to_locale_date_pipe__WEBPACK_IMPORTED_MODULE_4__.ToLocaleDatePipe, _pipes_vaccine_type_pipe__WEBPACK_IMPORTED_MODULE_5__.VaccineTypePipe, _pipes_to_country_name_pipe__WEBPACK_IMPORTED_MODULE_6__.ToCountryNamePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWNjaW5hdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 89921:
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/health-certificate/components/organisms/health-certificate-abstract-button/health-certificate-abstract-button.component.ts ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthCertificateAbstractButtonComponent": () => (/* binding */ HealthCertificateAbstractButtonComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 63853);
/* harmony import */ var _commons_utils_image_conversion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../commons/utils/image-conversion.utils */ 3828);
/* harmony import */ var _pages_helth_certificate_share_button_health_certificate_share_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/helth-certificate-share-button/health-certificate-share-button.component */ 3553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _qrcode_generator_services_qrcode_generator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../qrcode-generator/services/qrcode-generator.service */ 77679);





class HealthCertificateAbstractButtonComponent {
    constructor(qrCodeService) {
        this.qrCodeService = qrCodeService;
        this.qrCodeFileSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.qrCodeFile$ = this.qrCodeFileSource.asObservable();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (value) {
            this._value = value;
            this.qrCodeService
                .toDataURL(value.qrCode)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.concatMap)((dataURL) => (0,_commons_utils_image_conversion_utils__WEBPACK_IMPORTED_MODULE_0__.dataURLToFile)(dataURL, _pages_helth_certificate_share_button_health_certificate_share_button_component__WEBPACK_IMPORTED_MODULE_1__.HealthCertificateShareButtonComponent.FILE_NAME)))
                .subscribe({
                next: (file) => this.qrCodeFileSource.next(file),
            });
        }
    }
}
HealthCertificateAbstractButtonComponent.ɵfac = function HealthCertificateAbstractButtonComponent_Factory(t) { return new (t || HealthCertificateAbstractButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_qrcode_generator_services_qrcode_generator_service__WEBPACK_IMPORTED_MODULE_2__.QRCodeGeneratorService)); };
HealthCertificateAbstractButtonComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: HealthCertificateAbstractButtonComponent, inputs: { value: "value" } });


/***/ }),

/***/ 87612:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/health-certificate/components/organisms/health-certificate-card/certificate-type.utils.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCertificateType": () => (/* binding */ getCertificateType)
/* harmony export */ });
/* harmony import */ var _CertificateType_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../CertificateType.enum */ 54824);

function getCertificateType(hcert) {
    if (hcert.v && hcert.v.length > 0) {
        return _CertificateType_enum__WEBPACK_IMPORTED_MODULE_0__.CertificateTypeEnum.VACCINATION;
    }
    if (hcert.t && hcert.t.length > 0) {
        return _CertificateType_enum__WEBPACK_IMPORTED_MODULE_0__.CertificateTypeEnum.TEST;
    }
    if (hcert.r && hcert.r.length > 0) {
        return _CertificateType_enum__WEBPACK_IMPORTED_MODULE_0__.CertificateTypeEnum.RECOVERY;
    }
    return _CertificateType_enum__WEBPACK_IMPORTED_MODULE_0__.CertificateTypeEnum.NOTDETERMINABLE;
}


/***/ }),

/***/ 38814:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/health-certificate/components/organisms/health-certificate-card/heatlh-certificate-card.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeatlhCertificateCardComponent": () => (/* binding */ HeatlhCertificateCardComponent)
/* harmony export */ });
/* harmony import */ var _CertificateType_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../CertificateType.enum */ 54824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _molecules_certificate_card_header_certificate_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../molecules/certificate-card-header/certificate-card-header.component */ 74487);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _qrcode_generator_components_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../qrcode-generator/components/qrcode/qrcode.component */ 48622);
/* harmony import */ var _molecules_person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/person-detail/person-detail.component */ 49082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _molecules_vaccination_detail_vaccination_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../molecules/vaccination-detail/vaccination-detail.component */ 669);
/* harmony import */ var _molecules_test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../molecules/test-detail/test-detail.component */ 63881);
/* harmony import */ var _molecules_recovery_detail_recovery_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/recovery-detail/recovery-detail.component */ 28808);
/* harmony import */ var _pipes_certificate_type_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/certificate-type.pipe */ 43718);












function HeatlhCertificateCardComponent_the_wallet_vaccination_detail_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "the-wallet-vaccination-detail", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r0.value.v[0]);
} }
function HeatlhCertificateCardComponent_the_wallet_test_detail_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "the-wallet-test-detail", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r1.value.t[0]);
} }
function HeatlhCertificateCardComponent_the_wallet_recovery_detail_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "the-wallet-recovery-detail", 3);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r2.value.r[0]);
} }
class HeatlhCertificateCardComponent {
    constructor() {
        this.certificateTypeEnum = _CertificateType_enum__WEBPACK_IMPORTED_MODULE_0__.CertificateTypeEnum;
        this.isVerified = false;
    }
}
HeatlhCertificateCardComponent.ɵfac = function HeatlhCertificateCardComponent_Factory(t) { return new (t || HeatlhCertificateCardComponent)(); };
HeatlhCertificateCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: HeatlhCertificateCardComponent, selectors: [["the-wallet-heatlh-certificate-card"]], inputs: { value: "value", qrCode: "qrCode", isVerified: "isVerified" }, decls: 18, vars: 10, consts: [[1, "health-certificate-card"], [3, "isVerified", "value"], ["mat-card-image", "", 3, "value"], [3, "value"], ["]", "", 3, "ngSwitch"], [3, "value", 4, "ngSwitchCase"]], template: function HeatlhCertificateCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "the-wallet-certificate-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "the-wallet-qrcode", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Person Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "the-wallet-person-detail", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Certificate Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](13, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "certificateType");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, HeatlhCertificateCardComponent_the_wallet_vaccination_detail_15_Template, 1, 1, "the-wallet-vaccination-detail", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, HeatlhCertificateCardComponent_the_wallet_test_detail_16_Template, 1, 1, "the-wallet-test-detail", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, HeatlhCertificateCardComponent_the_wallet_recovery_detail_17_Template, 1, 1, "the-wallet-recovery-detail", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isVerified", ctx.isVerified)("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.qrCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 8, ctx.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", ctx.certificateTypeEnum.VACCINATION);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", ctx.certificateTypeEnum.TEST);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", ctx.certificateTypeEnum.RECOVERY);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _molecules_certificate_card_header_certificate_card_header_component__WEBPACK_IMPORTED_MODULE_1__.CertificateCardHeaderComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, _qrcode_generator_components_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_2__.QRCodeComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _molecules_person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_3__.PersonDetailComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitchCase, _molecules_vaccination_detail_vaccination_detail_component__WEBPACK_IMPORTED_MODULE_4__.VaccinationDetailComponent, _molecules_test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_5__.TestDetailComponent, _molecules_recovery_detail_recovery_detail_component__WEBPACK_IMPORTED_MODULE_6__.RecoveryDetailComponent], pipes: [_pipes_certificate_type_pipe__WEBPACK_IMPORTED_MODULE_7__.CertificateTypePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWF0bGgtY2VydGlmaWNhdGUtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 10030:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/health-certificate/components/pages/health-certificate-download-button/health-certificate-download-button.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthCertificateDownloadButtonComponent": () => (/* binding */ HealthCertificateDownloadButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _organisms_health_certificate_abstract_button_health_certificate_abstract_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../organisms/health-certificate-abstract-button/health-certificate-abstract-button.component */ 89921);
/* harmony import */ var _qrcode_generator_services_qrcode_generator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../qrcode-generator/services/qrcode-generator.service */ 77679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ui_components_components_molecules_download_button_download_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui-components/components/molecules/download-button/download-button.component */ 87492);







function HealthCertificateDownloadButtonComponent_the_wallet_download_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "the-wallet-download-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HealthCertificateDownloadButtonComponent_the_wallet_download_button_0_Template_the_wallet_download_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const qrCodeFile_r1 = restoredCtx.ngIf;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r2.download.emit([qrCodeFile_r1, ctx_r2.FILE_NAME]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

class HealthCertificateDownloadButtonComponent extends _organisms_health_certificate_abstract_button_health_certificate_abstract_button_component__WEBPACK_IMPORTED_MODULE_0__.HealthCertificateAbstractButtonComponent {
  constructor(_qrCodeService) {
    super(_qrCodeService);
    this.FILE_NAME = 'Health_Certificate.png';
    this.download = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }

}

HealthCertificateDownloadButtonComponent.ɵfac = function HealthCertificateDownloadButtonComponent_Factory(t) {
  return new (t || HealthCertificateDownloadButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_qrcode_generator_services_qrcode_generator_service__WEBPACK_IMPORTED_MODULE_1__.QRCodeGeneratorService));
};

HealthCertificateDownloadButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HealthCertificateDownloadButtonComponent,
  selectors: [["the-wallet-health-certificate-download-button"]],
  outputs: {
    download: "download"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 3,
  consts: [[3, "click", 4, "ngIf"], [3, "click"]],
  template: function HealthCertificateDownloadButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HealthCertificateDownloadButtonComponent_the_wallet_download_button_0_Template, 1, 0, "the-wallet-download-button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.qrCodeFile$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ui_components_components_molecules_download_button_download_button_component__WEBPACK_IMPORTED_MODULE_2__.DownloadButtonComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtY2VydGlmaWNhdGUtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 49878:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/health-certificate/components/pages/health-certificate-preview/health-certificate-preview-actions.directive.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthCertificatePreviewActionsDirective": () => (/* binding */ HealthCertificatePreviewActionsDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HealthCertificatePreviewActionsDirective {
    constructor() { }
}
HealthCertificatePreviewActionsDirective.ɵfac = function HealthCertificatePreviewActionsDirective_Factory(t) { return new (t || HealthCertificatePreviewActionsDirective)(); };
HealthCertificatePreviewActionsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HealthCertificatePreviewActionsDirective, selectors: [["", "theWalletHealthCertificatePreviewActions", ""]] });


/***/ }),

/***/ 77515:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/health-certificate/components/pages/health-certificate-preview/health-certificate-preview.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthCertificatePreviewComponent": () => (/* binding */ HealthCertificatePreviewComponent)
/* harmony export */ });
/* harmony import */ var _document_module_api_components_pages_abstract_document_preview_abstract_document_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../document-module-api/components/pages/abstract-document-preview/abstract-document-preview.component */ 13873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _document_module_api_components_templates_document_preview_template_document_preview_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../document-module-api/components/templates/document-preview-template/document-preview-template.component */ 41765);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _molecules_certificate_card_header_certificate_card_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/certificate-card-header/certificate-card-header.component */ 74487);
/* harmony import */ var _document_module_api_directives_document_preview_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../document-module-api/directives/document-preview-header.directive */ 6458);
/* harmony import */ var _document_module_api_directives_document_preview_expanded_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../document-module-api/directives/document-preview-expanded-content.directive */ 52941);
/* harmony import */ var _qrcode_generator_components_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../qrcode-generator/components/qrcode/qrcode.component */ 48622);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _document_module_api_directives_document_preview_actions_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../document-module-api/directives/document-preview-actions.directive */ 20073);










function HealthCertificatePreviewComponent_the_wallet_certificate_card_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "the-wallet-certificate-card-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HealthCertificatePreviewComponent_the_wallet_certificate_card_header_1_Template_the_wallet_certificate_card_header_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r2.showMore.emit(ctx_r2.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.value.healthCertificate)("isVerified", ctx_r0.value.isVerified);
} }
function HealthCertificatePreviewComponent_the_wallet_qrcode_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "the-wallet-qrcode", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HealthCertificatePreviewComponent_the_wallet_qrcode_3_Template_the_wallet_qrcode_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r4.showMore.emit(ctx_r4.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r1.value.qrCode);
} }
const _c0 = [[["", "theWalletHealthCertificatePreviewActions", ""]]];
const _c1 = ["[theWalletHealthCertificatePreviewActions]"];
class HealthCertificatePreviewComponent extends _document_module_api_components_pages_abstract_document_preview_abstract_document_preview_component__WEBPACK_IMPORTED_MODULE_0__.AbstractDocumentPreviewComponent {
}
HealthCertificatePreviewComponent.ɵfac = /*@__PURE__*/ function () { let ɵHealthCertificatePreviewComponent_BaseFactory; return function HealthCertificatePreviewComponent_Factory(t) { return (ɵHealthCertificatePreviewComponent_BaseFactory || (ɵHealthCertificatePreviewComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](HealthCertificatePreviewComponent)))(t || HealthCertificatePreviewComponent); }; }();
HealthCertificatePreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HealthCertificatePreviewComponent, selectors: [["the-wallet-health-certificate-preview"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 6, vars: 3, consts: [[3, "isLoading"], ["theWalletDocumentPreviewHeader", "", 3, "value", "isVerified", "click", 4, "ngIf"], ["theWalletDocumentPreviewExpandedContent", ""], ["mat-card-image", "", 3, "value", "click", 4, "ngIf"], ["theWalletDocumentPreviewActions", ""], ["theWalletDocumentPreviewHeader", "", 3, "value", "isVerified", "click"], ["mat-card-image", "", 3, "value", "click"]], template: function HealthCertificatePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "the-wallet-document-preview-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HealthCertificatePreviewComponent_the_wallet_certificate_card_header_1_Template, 1, 2, "the-wallet-certificate-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HealthCertificatePreviewComponent_the_wallet_qrcode_3_Template, 1, 1, "the-wallet-qrcode", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoading", !ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_document_module_api_components_templates_document_preview_template_document_preview_template_component__WEBPACK_IMPORTED_MODULE_1__.DocumentPreviewTemplateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _molecules_certificate_card_header_certificate_card_header_component__WEBPACK_IMPORTED_MODULE_2__.CertificateCardHeaderComponent, _document_module_api_directives_document_preview_header_directive__WEBPACK_IMPORTED_MODULE_3__.DocumentPreviewHeaderDirective, _document_module_api_directives_document_preview_expanded_content_directive__WEBPACK_IMPORTED_MODULE_4__.DocumentPreviewExpandedContentDirective, _qrcode_generator_components_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_5__.QRCodeComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardImage, _document_module_api_directives_document_preview_actions_directive__WEBPACK_IMPORTED_MODULE_6__.DocumentPreviewActionsDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtY2VydGlmaWNhdGUtcHJldmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 60859:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/health-certificate/components/pages/health-certificate/health-certificate.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthCertificateComponent": () => (/* binding */ HealthCertificateComponent)
/* harmony export */ });
/* harmony import */ var _document_module_api_components_pages_abstract_document_abstract_document_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../document-module-api/components/pages/abstract-document/abstract-document.component */ 6558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_covid_certificate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/covid-certificate.service */ 13995);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _document_module_api_components_templates_document_template_document_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../document-module-api/components/templates/document-template/document-template.component */ 72133);
/* harmony import */ var _organisms_health_certificate_card_heatlh_certificate_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../organisms/health-certificate-card/heatlh-certificate-card.component */ 38814);







function HealthCertificateComponent_the_wallet_document_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "the-wallet-document-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "the-wallet-heatlh-certificate-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const healthCertificateClaim_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", healthCertificateClaim_r1.healthCertificate)("qrCode", ctx_r0.value.qrCode)("isVerified", healthCertificateClaim_r1.isVerified);
  }
}

class HealthCertificateComponent extends _document_module_api_components_pages_abstract_document_abstract_document_component__WEBPACK_IMPORTED_MODULE_0__.AbstractDocumentComponent {
  constructor(covidCertificateService) {
    super();
    this.covidCertificateService = covidCertificateService;
  }

  ngOnChanges(changes) {
    if (changes && changes['value'] && changes['value'].currentValue) {
      this.healthCertificateClaim$ = this.covidCertificateService.decode(changes['value'].currentValue.qrCode);
    }
  }

}

HealthCertificateComponent.ɵfac = function HealthCertificateComponent_Factory(t) {
  return new (t || HealthCertificateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_covid_certificate_service__WEBPACK_IMPORTED_MODULE_1__.CovidCertificateService));
};

HealthCertificateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: HealthCertificateComponent,
  selectors: [["the-wallet-health-certificate"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [3, "value", "qrCode", "isVerified"]],
  template: function HealthCertificateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, HealthCertificateComponent_the_wallet_document_template_0_Template, 2, 3, "the-wallet-document-template", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.healthCertificateClaim$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _document_module_api_components_templates_document_template_document_template_component__WEBPACK_IMPORTED_MODULE_2__.DocumentTemplateComponent, _organisms_health_certificate_card_heatlh_certificate_card_component__WEBPACK_IMPORTED_MODULE_3__.HeatlhCertificateCardComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtY2VydGlmaWNhdGUuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 3553:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/health-certificate/components/pages/helth-certificate-share-button/health-certificate-share-button.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthCertificateShareButtonComponent": () => (/* binding */ HealthCertificateShareButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _organisms_health_certificate_abstract_button_health_certificate_abstract_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../organisms/health-certificate-abstract-button/health-certificate-abstract-button.component */ 89921);
/* harmony import */ var _qrcode_generator_services_qrcode_generator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../qrcode-generator/services/qrcode-generator.service */ 77679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ui_components_components_molecules_share_button_share_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui-components/components/molecules/share-button/share-button.component */ 36734);






function HealthCertificateShareButtonComponent_the_wallet_share_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "the-wallet-share-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HealthCertificateShareButtonComponent_the_wallet_share_button_0_Template_the_wallet_share_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.share.emit(ctx_r1._shareData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class HealthCertificateShareButtonComponent extends _organisms_health_certificate_abstract_button_health_certificate_abstract_button_component__WEBPACK_IMPORTED_MODULE_0__.HealthCertificateAbstractButtonComponent {
    constructor(_qrCodeService) {
        super(_qrCodeService);
        this._qrCodeService = _qrCodeService;
        this.canShare = false;
        this.share = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.shareContentCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.qrCodeFile$.subscribe((file) => {
            this._shareData = {
                files: [file],
                text: HealthCertificateShareButtonComponent.SHARE_TEXT,
                title: HealthCertificateShareButtonComponent.SHARE_TITLE,
            };
            this.shareContentCreated.emit(this._shareData);
        });
    }
}
HealthCertificateShareButtonComponent.FILE_NAME = 'Health_Certificate.png';
HealthCertificateShareButtonComponent.SHARE_TEXT = 'EU Health Certificate';
HealthCertificateShareButtonComponent.SHARE_TITLE = 'Health Certificate';
HealthCertificateShareButtonComponent.ɵfac = function HealthCertificateShareButtonComponent_Factory(t) { return new (t || HealthCertificateShareButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_qrcode_generator_services_qrcode_generator_service__WEBPACK_IMPORTED_MODULE_1__.QRCodeGeneratorService)); };
HealthCertificateShareButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HealthCertificateShareButtonComponent, selectors: [["the-wallet-helth-certificate-share-button"]], inputs: { canShare: "canShare" }, outputs: { share: "share", shareContentCreated: "shareContentCreated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "click", 4, "ngIf"], [3, "click"]], template: function HealthCertificateShareButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HealthCertificateShareButtonComponent_the_wallet_share_button_0_Template, 1, 0, "the-wallet-share-button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.canShare);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ui_components_components_molecules_share_button_share_button_component__WEBPACK_IMPORTED_MODULE_2__.ShareButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtY2VydGlmaWNhdGUtc2hhcmUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 97942:
/*!*************************************************************************!*\
  !*** ./src/app/modules/health-certificate/health-certificate.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthCertificateModule": () => (/* binding */ HealthCertificateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _components_pages_health_certificate_health_certificate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/health-certificate/health-certificate.component */ 60859);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _components_molecules_vaccination_detail_vaccination_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/molecules/vaccination-detail/vaccination-detail.component */ 669);
/* harmony import */ var _components_molecules_test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/molecules/test-detail/test-detail.component */ 63881);
/* harmony import */ var _components_molecules_recovery_detail_recovery_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/molecules/recovery-detail/recovery-detail.component */ 28808);
/* harmony import */ var _components_molecules_person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/molecules/person-detail/person-detail.component */ 49082);
/* harmony import */ var _pipes_certificate_type_name_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/certificate-type-name.pipe */ 76367);
/* harmony import */ var _components_organisms_health_certificate_card_heatlh_certificate_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/organisms/health-certificate-card/heatlh-certificate-card.component */ 38814);
/* harmony import */ var _pipes_test_type_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/test-type.pipe */ 66742);
/* harmony import */ var _pipes_target_disease_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/target-disease.pipe */ 26787);
/* harmony import */ var _pipes_vaccine_type_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/vaccine-type.pipe */ 17772);
/* harmony import */ var _pipes_vaccine_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/vaccine.pipe */ 33094);
/* harmony import */ var _pipes_VaccineManufacturer_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/VaccineManufacturer.pipe */ 77858);
/* harmony import */ var _pipes_to_locale_date_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/to-locale-date.pipe */ 25352);
/* harmony import */ var _pipes_to_country_name_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/to-country-name.pipe */ 22316);
/* harmony import */ var _pipes_test_manufacturer_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/test-manufacturer.pipe */ 12461);
/* harmony import */ var _pipes_to_test_result_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/to-test-result.pipe */ 17060);
/* harmony import */ var _pipes_to_display_name_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/to-display-name.pipe */ 19521);
/* harmony import */ var _pipes_certificate_type_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/certificate-type.pipe */ 43718);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _components_molecules_certificate_card_chip_list_certificate_card_chip_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/molecules/certificate-card-chip-list/certificate-card-chip-list.component */ 93322);
/* harmony import */ var _components_pages_health_certificate_preview_health_certificate_preview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/health-certificate-preview/health-certificate-preview.component */ 77515);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _pipes_to_certificate_type_icon_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/to-certificate-type-icon.pipe */ 69580);
/* harmony import */ var _components_molecules_certificate_card_header_certificate_card_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/molecules/certificate-card-header/certificate-card-header.component */ 74487);
/* harmony import */ var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../ui-components/ui-components.module */ 40358);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _components_pages_health_certificate_preview_health_certificate_preview_actions_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pages/health-certificate-preview/health-certificate-preview-actions.directive */ 49878);
/* harmony import */ var _components_pages_helth_certificate_share_button_health_certificate_share_button_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pages/helth-certificate-share-button/health-certificate-share-button.component */ 3553);
/* harmony import */ var _components_pages_health_certificate_download_button_health_certificate_download_button_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pages/health-certificate-download-button/health-certificate-download-button.component */ 10030);
/* harmony import */ var _document_module_api_document_module_api_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../document-module-api/document-module-api.module */ 15522);
/* harmony import */ var _qrcode_generator_qrcode_generator_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../qrcode-generator/qrcode-generator.module */ 58294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 3184);







































class HealthCertificateModule {
}
HealthCertificateModule.ɵfac = function HealthCertificateModule_Factory(t) { return new (t || HealthCertificateModule)(); };
HealthCertificateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: HealthCertificateModule });
HealthCertificateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_29__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_31__.MatCardModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_33__.MatListModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__.MatExpansionModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__.MatChipsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_36__.MatIconModule,
            _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_22__.UiComponentsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_37__.RouterModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_38__.MatButtonModule,
            _document_module_api_document_module_api_module__WEBPACK_IMPORTED_MODULE_26__.DocumentModuleApiModule,
            _qrcode_generator_qrcode_generator_module__WEBPACK_IMPORTED_MODULE_27__.QRCodeGeneratorModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](HealthCertificateModule, { declarations: [_components_pages_health_certificate_health_certificate_component__WEBPACK_IMPORTED_MODULE_0__.HealthCertificateComponent,
        _components_organisms_health_certificate_card_heatlh_certificate_card_component__WEBPACK_IMPORTED_MODULE_6__.HeatlhCertificateCardComponent,
        _components_molecules_vaccination_detail_vaccination_detail_component__WEBPACK_IMPORTED_MODULE_1__.VaccinationDetailComponent,
        _components_molecules_test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_2__.TestDetailComponent,
        _components_molecules_recovery_detail_recovery_detail_component__WEBPACK_IMPORTED_MODULE_3__.RecoveryDetailComponent,
        _pipes_target_disease_pipe__WEBPACK_IMPORTED_MODULE_8__.TargetDiseasePipe,
        _pipes_vaccine_type_pipe__WEBPACK_IMPORTED_MODULE_9__.VaccineTypePipe,
        _pipes_vaccine_pipe__WEBPACK_IMPORTED_MODULE_10__.VaccinePipe,
        _pipes_VaccineManufacturer_pipe__WEBPACK_IMPORTED_MODULE_11__.VaccineManufacturerPipe,
        _pipes_to_locale_date_pipe__WEBPACK_IMPORTED_MODULE_12__.ToLocaleDatePipe,
        _pipes_to_country_name_pipe__WEBPACK_IMPORTED_MODULE_13__.ToCountryNamePipe,
        _pipes_test_type_pipe__WEBPACK_IMPORTED_MODULE_7__.TestTypePipe,
        _pipes_test_type_pipe__WEBPACK_IMPORTED_MODULE_7__.TestTypePipe,
        _pipes_test_manufacturer_pipe__WEBPACK_IMPORTED_MODULE_14__.TestManufacturerPipe,
        _pipes_to_test_result_pipe__WEBPACK_IMPORTED_MODULE_15__.ToTestResultPipe,
        _components_molecules_person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_4__.PersonDetailComponent,
        _pipes_to_display_name_pipe__WEBPACK_IMPORTED_MODULE_16__.ToDisplayNamePipe,
        _pipes_certificate_type_name_pipe__WEBPACK_IMPORTED_MODULE_5__.CertificateTypeNamePipe,
        _pipes_certificate_type_pipe__WEBPACK_IMPORTED_MODULE_17__.CertificateTypePipe,
        _components_molecules_certificate_card_chip_list_certificate_card_chip_list_component__WEBPACK_IMPORTED_MODULE_18__.CertificateCardChipListComponent,
        _components_pages_health_certificate_preview_health_certificate_preview_component__WEBPACK_IMPORTED_MODULE_19__.HealthCertificatePreviewComponent,
        _pipes_to_certificate_type_icon_pipe__WEBPACK_IMPORTED_MODULE_20__.ToCertificateTypeIconPipe,
        _components_molecules_certificate_card_header_certificate_card_header_component__WEBPACK_IMPORTED_MODULE_21__.CertificateCardHeaderComponent,
        _components_pages_health_certificate_preview_health_certificate_preview_actions_directive__WEBPACK_IMPORTED_MODULE_23__.HealthCertificatePreviewActionsDirective,
        _components_pages_helth_certificate_share_button_health_certificate_share_button_component__WEBPACK_IMPORTED_MODULE_24__.HealthCertificateShareButtonComponent,
        _components_pages_health_certificate_download_button_health_certificate_download_button_component__WEBPACK_IMPORTED_MODULE_25__.HealthCertificateDownloadButtonComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_31__.MatCardModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_33__.MatListModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__.MatExpansionModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_36__.MatIconModule,
        _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_22__.UiComponentsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_37__.RouterModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_38__.MatButtonModule,
        _document_module_api_document_module_api_module__WEBPACK_IMPORTED_MODULE_26__.DocumentModuleApiModule,
        _qrcode_generator_qrcode_generator_module__WEBPACK_IMPORTED_MODULE_27__.QRCodeGeneratorModule], exports: [_components_pages_health_certificate_health_certificate_component__WEBPACK_IMPORTED_MODULE_0__.HealthCertificateComponent,
        _components_pages_health_certificate_preview_health_certificate_preview_component__WEBPACK_IMPORTED_MODULE_19__.HealthCertificatePreviewComponent,
        _components_pages_health_certificate_preview_health_certificate_preview_actions_directive__WEBPACK_IMPORTED_MODULE_23__.HealthCertificatePreviewActionsDirective,
        _components_pages_helth_certificate_share_button_health_certificate_share_button_component__WEBPACK_IMPORTED_MODULE_24__.HealthCertificateShareButtonComponent,
        _components_pages_health_certificate_download_button_health_certificate_download_button_component__WEBPACK_IMPORTED_MODULE_25__.HealthCertificateDownloadButtonComponent] }); })();


/***/ }),

/***/ 77858:
/*!******************************************************************************!*\
  !*** ./src/app/modules/health-certificate/pipes/VaccineManufacturer.pipe.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaccineManufacturerPipe": () => (/* binding */ VaccineManufacturerPipe)
/* harmony export */ });
/* harmony import */ var _assets_ehn_dcc_valuesets_vaccine_mah_manf_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/ehn-dcc-valuesets/vaccine-mah-manf.json */ 25922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class VaccineManufacturerPipe {
    transform(value) {
        const valueSets = _assets_ehn_dcc_valuesets_vaccine_mah_manf_json__WEBPACK_IMPORTED_MODULE_0__.valueSetValues;
        const manufacturerObject = valueSets[value];
        const vaccine = manufacturerObject ? manufacturerObject.display : value;
        return vaccine;
    }
}
VaccineManufacturerPipe.ɵfac = function VaccineManufacturerPipe_Factory(t) { return new (t || VaccineManufacturerPipe)(); };
VaccineManufacturerPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "vaccineManufacturer", type: VaccineManufacturerPipe, pure: true });


/***/ }),

/***/ 76367:
/*!********************************************************************************!*\
  !*** ./src/app/modules/health-certificate/pipes/certificate-type-name.pipe.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificateTypeNamePipe": () => (/* binding */ CertificateTypeNamePipe)
/* harmony export */ });
/* harmony import */ var _components_organisms_health_certificate_card_certificate_type_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/organisms/health-certificate-card/certificate-type.utils */ 87612);
/* harmony import */ var _CertificateType_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CertificateType.enum */ 54824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class CertificateTypeNamePipe {
    transform(value) {
        const certificateType = (0,_components_organisms_health_certificate_card_certificate_type_utils__WEBPACK_IMPORTED_MODULE_0__.getCertificateType)(value);
        switch (certificateType) {
            case _CertificateType_enum__WEBPACK_IMPORTED_MODULE_1__.CertificateTypeEnum.VACCINATION:
                return CertificateTypeNamePipe.VACCINATION_DISPLAY_NAME;
                break;
            case _CertificateType_enum__WEBPACK_IMPORTED_MODULE_1__.CertificateTypeEnum.TEST:
                return CertificateTypeNamePipe.TEST_DISPLAY_NAME;
                break;
            case _CertificateType_enum__WEBPACK_IMPORTED_MODULE_1__.CertificateTypeEnum.RECOVERY:
                return CertificateTypeNamePipe.RECOVERY_DISPLAY_NAME;
                break;
            default:
                return '';
                break;
        }
    }
}
CertificateTypeNamePipe.VACCINATION_DISPLAY_NAME = 'Vaccination';
CertificateTypeNamePipe.TEST_DISPLAY_NAME = 'Test';
CertificateTypeNamePipe.RECOVERY_DISPLAY_NAME = 'Recovery';
CertificateTypeNamePipe.ɵfac = function CertificateTypeNamePipe_Factory(t) { return new (t || CertificateTypeNamePipe)(); };
CertificateTypeNamePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "certificateTypeName", type: CertificateTypeNamePipe, pure: true });


/***/ }),

/***/ 43718:
/*!***************************************************************************!*\
  !*** ./src/app/modules/health-certificate/pipes/certificate-type.pipe.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificateTypePipe": () => (/* binding */ CertificateTypePipe)
/* harmony export */ });
/* harmony import */ var _components_organisms_health_certificate_card_certificate_type_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/organisms/health-certificate-card/certificate-type.utils */ 87612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class CertificateTypePipe {
    transform(hcert) {
        return (0,_components_organisms_health_certificate_card_certificate_type_utils__WEBPACK_IMPORTED_MODULE_0__.getCertificateType)(hcert);
    }
}
CertificateTypePipe.ɵfac = function CertificateTypePipe_Factory(t) { return new (t || CertificateTypePipe)(); };
CertificateTypePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "certificateType", type: CertificateTypePipe, pure: true });


/***/ }),

/***/ 26787:
/*!*************************************************************************!*\
  !*** ./src/app/modules/health-certificate/pipes/target-disease.pipe.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TargetDiseasePipe": () => (/* binding */ TargetDiseasePipe)
/* harmony export */ });
/* harmony import */ var _assets_ehn_dcc_valuesets_disease_agent_targeted_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/ehn-dcc-valuesets/disease-agent-targeted.json */ 36471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class TargetDiseasePipe {
    transform(value) {
        const valueSets = _assets_ehn_dcc_valuesets_disease_agent_targeted_json__WEBPACK_IMPORTED_MODULE_0__.valueSetValues;
        const diseaseObject = valueSets[value];
        const disease = diseaseObject ? diseaseObject.display : value;
        return disease;
    }
}
TargetDiseasePipe.ɵfac = function TargetDiseasePipe_Factory(t) { return new (t || TargetDiseasePipe)(); };
TargetDiseasePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "targetDisease", type: TargetDiseasePipe, pure: true });


/***/ }),

/***/ 12461:
/*!****************************************************************************!*\
  !*** ./src/app/modules/health-certificate/pipes/test-manufacturer.pipe.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestManufacturerPipe": () => (/* binding */ TestManufacturerPipe)
/* harmony export */ });
/* harmony import */ var _assets_ehn_dcc_valuesets_test_manf_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/ehn-dcc-valuesets/test-manf.json */ 23287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class TestManufacturerPipe {
    transform(value, ...args) {
        const valueSets = _assets_ehn_dcc_valuesets_test_manf_json__WEBPACK_IMPORTED_MODULE_0__.valueSetValues;
        const testManufaturerObject = valueSets[value];
        const testManufacturer = testManufaturerObject
            ? testManufaturerObject.display
            : value;
        return testManufacturer;
    }
}
TestManufacturerPipe.ɵfac = function TestManufacturerPipe_Factory(t) { return new (t || TestManufacturerPipe)(); };
TestManufacturerPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "testManufacturer", type: TestManufacturerPipe, pure: true });


/***/ }),

/***/ 66742:
/*!********************************************************************!*\
  !*** ./src/app/modules/health-certificate/pipes/test-type.pipe.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestTypePipe": () => (/* binding */ TestTypePipe)
/* harmony export */ });
/* harmony import */ var _assets_ehn_dcc_valuesets_test_type_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/ehn-dcc-valuesets/test-type.json */ 57626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class TestTypePipe {
    transform(value) {
        const valueSets = _assets_ehn_dcc_valuesets_test_type_json__WEBPACK_IMPORTED_MODULE_0__.valueSetValues;
        const testTypeObject = valueSets[value];
        const testType = testTypeObject ? testTypeObject.display : value;
        return testType;
    }
}
TestTypePipe.ɵfac = function TestTypePipe_Factory(t) { return new (t || TestTypePipe)(); };
TestTypePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "testType", type: TestTypePipe, pure: true });


/***/ }),

/***/ 69580:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/health-certificate/pipes/to-certificate-type-icon.pipe.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToCertificateTypeIconPipe": () => (/* binding */ ToCertificateTypeIconPipe)
/* harmony export */ });
/* harmony import */ var _components_organisms_health_certificate_card_certificate_type_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/organisms/health-certificate-card/certificate-type.utils */ 87612);
/* harmony import */ var _CertificateType_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CertificateType.enum */ 54824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class ToCertificateTypeIconPipe {
    transform(value) {
        const certificateType = (0,_components_organisms_health_certificate_card_certificate_type_utils__WEBPACK_IMPORTED_MODULE_0__.getCertificateType)(value);
        switch (certificateType) {
            case _CertificateType_enum__WEBPACK_IMPORTED_MODULE_1__.CertificateTypeEnum.VACCINATION:
                return ToCertificateTypeIconPipe.VACCINATION_ICON;
                break;
            case _CertificateType_enum__WEBPACK_IMPORTED_MODULE_1__.CertificateTypeEnum.TEST:
                return ToCertificateTypeIconPipe.TEST_ICON;
                break;
            case _CertificateType_enum__WEBPACK_IMPORTED_MODULE_1__.CertificateTypeEnum.RECOVERY:
                return ToCertificateTypeIconPipe.RECOVERY_ICON;
                break;
            default:
                return '';
                break;
        }
    }
}
ToCertificateTypeIconPipe.VACCINATION_ICON = 'vaccines';
ToCertificateTypeIconPipe.TEST_ICON = 'policiy';
ToCertificateTypeIconPipe.RECOVERY_ICON = 'health_and_safety';
ToCertificateTypeIconPipe.ɵfac = function ToCertificateTypeIconPipe_Factory(t) { return new (t || ToCertificateTypeIconPipe)(); };
ToCertificateTypeIconPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "toCertificateTypeIcon", type: ToCertificateTypeIconPipe, pure: true });


/***/ }),

/***/ 22316:
/*!**************************************************************************!*\
  !*** ./src/app/modules/health-certificate/pipes/to-country-name.pipe.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToCountryNamePipe": () => (/* binding */ ToCountryNamePipe)
/* harmony export */ });
/* harmony import */ var _assets_ehn_dcc_valuesets_country_2_codes_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/ehn-dcc-valuesets/country-2-codes.json */ 25988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ToCountryNamePipe {
    transform(value) {
        const valueSets = _assets_ehn_dcc_valuesets_country_2_codes_json__WEBPACK_IMPORTED_MODULE_0__.valueSetValues;
        const countryCode = valueSets[value];
        const country = countryCode ? countryCode.display : value;
        return country;
    }
}
ToCountryNamePipe.ɵfac = function ToCountryNamePipe_Factory(t) { return new (t || ToCountryNamePipe)(); };
ToCountryNamePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "toCountryName", type: ToCountryNamePipe, pure: true });


/***/ }),

/***/ 19521:
/*!**************************************************************************!*\
  !*** ./src/app/modules/health-certificate/pipes/to-display-name.pipe.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDisplayNamePipe": () => (/* binding */ ToDisplayNamePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ToDisplayNamePipe {
    transform(value) {
        const foreName = value.gn ? value.gn : '';
        const standardisedForename = value.gnt ? value.gn : '';
        const displayForeName = foreName ? foreName : standardisedForename;
        const surName = value.fn ? value.fn : '';
        const standardisedSurName = value.fnt ? value.fnt : '';
        const displaySurName = surName ? surName : standardisedSurName;
        return surName + ', ' + foreName;
    }
}
ToDisplayNamePipe.ɵfac = function ToDisplayNamePipe_Factory(t) { return new (t || ToDisplayNamePipe)(); };
ToDisplayNamePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toDisplayName", type: ToDisplayNamePipe, pure: true });


/***/ }),

/***/ 25352:
/*!*************************************************************************!*\
  !*** ./src/app/modules/health-certificate/pipes/to-locale-date.pipe.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToLocaleDatePipe": () => (/* binding */ ToLocaleDatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ToLocaleDatePipe {
    transform(value) {
        try {
            const date = new Date(value);
            return date.toLocaleDateString();
        }
        catch (e) {
            console.error(e);
            return value;
        }
    }
}
ToLocaleDatePipe.ɵfac = function ToLocaleDatePipe_Factory(t) { return new (t || ToLocaleDatePipe)(); };
ToLocaleDatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toLocaleDate", type: ToLocaleDatePipe, pure: true });


/***/ }),

/***/ 17060:
/*!*************************************************************************!*\
  !*** ./src/app/modules/health-certificate/pipes/to-test-result.pipe.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToTestResultPipe": () => (/* binding */ ToTestResultPipe)
/* harmony export */ });
/* harmony import */ var _assets_ehn_dcc_valuesets_test_result_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/ehn-dcc-valuesets/test-result.json */ 14496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ToTestResultPipe {
    transform(value) {
        const valueSets = _assets_ehn_dcc_valuesets_test_result_json__WEBPACK_IMPORTED_MODULE_0__.valueSetValues;
        const testResultObject = valueSets[value];
        const testResult = testResultObject ? testResultObject.display : value;
        return testResult;
    }
}
ToTestResultPipe.ɵfac = function ToTestResultPipe_Factory(t) { return new (t || ToTestResultPipe)(); };
ToTestResultPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "toTestResult", type: ToTestResultPipe, pure: true });


/***/ }),

/***/ 17772:
/*!***********************************************************************!*\
  !*** ./src/app/modules/health-certificate/pipes/vaccine-type.pipe.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaccineTypePipe": () => (/* binding */ VaccineTypePipe)
/* harmony export */ });
/* harmony import */ var _assets_ehn_dcc_valuesets_vaccine_prophylaxis_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/ehn-dcc-valuesets/vaccine-prophylaxis.json */ 83513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class VaccineTypePipe {
    transform(value) {
        const valueSets = _assets_ehn_dcc_valuesets_vaccine_prophylaxis_json__WEBPACK_IMPORTED_MODULE_0__.valueSetValues;
        const vaccineTypeObject = valueSets[value];
        const vaccineType = vaccineTypeObject ? vaccineTypeObject.display : value;
        return vaccineType;
    }
}
VaccineTypePipe.ɵfac = function VaccineTypePipe_Factory(t) { return new (t || VaccineTypePipe)(); };
VaccineTypePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "vaccineType", type: VaccineTypePipe, pure: true });


/***/ }),

/***/ 33094:
/*!******************************************************************!*\
  !*** ./src/app/modules/health-certificate/pipes/vaccine.pipe.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaccinePipe": () => (/* binding */ VaccinePipe)
/* harmony export */ });
/* harmony import */ var _assets_ehn_dcc_valuesets_vaccine_medicinal_product_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/ehn-dcc-valuesets/vaccine-medicinal-product.json */ 72946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class VaccinePipe {
    transform(value) {
        const valueSets = _assets_ehn_dcc_valuesets_vaccine_medicinal_product_json__WEBPACK_IMPORTED_MODULE_0__.valueSetValues;
        const vaccineObject = valueSets[value];
        const vaccine = vaccineObject ? vaccineObject.display : value;
        return vaccine;
    }
}
VaccinePipe.ɵfac = function VaccinePipe_Factory(t) { return new (t || VaccinePipe)(); };
VaccinePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "vaccine", type: VaccinePipe, pure: true });


/***/ }),

/***/ 13995:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/health-certificate/services/covid-certificate.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CovidCertificateService": () => (/* binding */ CovidCertificateService)
/* harmony export */ });
/* harmony import */ var covid_certificate_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! covid-certificate-checker */ 94316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _document_signer_certificate_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-signer-certificate-service.service */ 67843);




class CovidCertificateService {
    constructor(documentSignerCertificateService) {
        this.documentSignerCertificateService = documentSignerCertificateService;
        this.documentSignerCertificateService.getDSCList().subscribe({
            next: (dscList) => (this.dscList = dscList),
            error: (err) => console.log('No DSCList ascertainable', err),
        });
    }
    isVerifiable() {
        return (!!this.dscList &&
            covid_certificate_checker__WEBPACK_IMPORTED_MODULE_0__["default"].supportsWebCryptoApi());
    }
    decode(certificate) {
        if (this.isVerifiable()) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(covid_certificate_checker__WEBPACK_IMPORTED_MODULE_0__["default"].verifyWithTrustList(certificate, this.dscList)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((val) => ({
                healthCertificate: val.healthCertificateClaim.hcert,
                isVerified: val.isVerified,
                qrCode: certificate,
            })));
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(covid_certificate_checker__WEBPACK_IMPORTED_MODULE_0__["default"].decode(certificate)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((healthCertificateClaim) => ({
                healthCertificate: healthCertificateClaim.hcert,
                isVerified: false,
                qrCode: certificate,
            })));
        }
    }
}
CovidCertificateService.ɵfac = function CovidCertificateService_Factory(t) { return new (t || CovidCertificateService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_document_signer_certificate_service_service__WEBPACK_IMPORTED_MODULE_1__.DocumentSignerCertificateServiceService)); };
CovidCertificateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CovidCertificateService, factory: CovidCertificateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 67843:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/health-certificate/services/document-signer-certificate-service.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentSignerCertificateServiceService": () => (/* binding */ DocumentSignerCertificateServiceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class DocumentSignerCertificateServiceService {
    constructor(http) {
        this.http = http;
        this.configURL = 'https://de.test.dscg.ubirch.com/trustList/DSC/';
    }
    getDSCList() {
        return this.http.get(this.configURL, { responseType: 'text' }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)((result) => {
            const certificates = result.match(/({\"certificates\")[\s\S]*$/);
            if (certificates && certificates.length > 0) {
                return JSON.parse(certificates[0]);
            }
            else {
                throw new DOMException('No valid DocumentSignerCertificateList');
            }
        }));
    }
}
DocumentSignerCertificateServiceService.ɵfac = function DocumentSignerCertificateServiceService_Factory(t) { return new (t || DocumentSignerCertificateServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DocumentSignerCertificateServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DocumentSignerCertificateServiceService, factory: DocumentSignerCertificateServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4486:
/*!*************************************************!*\
  !*** ./src/app/modules/pkpass/PassType.enum.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassTypeEnum": () => (/* binding */ PassTypeEnum)
/* harmony export */ });
var PassTypeEnum;
(function (PassTypeEnum) {
    PassTypeEnum["BOARDINGPASS"] = "Boarding Pass";
    PassTypeEnum["COUPON"] = "Coupon";
    PassTypeEnum["EVENTICKET"] = "Event Ticket";
    PassTypeEnum["GENERIC"] = "Generic";
    PassTypeEnum["STORECARD"] = "Store Card";
})(PassTypeEnum || (PassTypeEnum = {}));


/***/ }),

/***/ 8955:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/pkpass/components/atoms/boarding-pass-primary-field/boarding-pass-primary-field.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardingPassPrimaryFieldComponent": () => (/* binding */ BoardingPassPrimaryFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 26131);



function BoardingPassPrimaryFieldComponent_mat_list_item_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.field.value || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.field.label || "", " ");
} }
class BoardingPassPrimaryFieldComponent {
}
BoardingPassPrimaryFieldComponent.ɵfac = function BoardingPassPrimaryFieldComponent_Factory(t) { return new (t || BoardingPassPrimaryFieldComponent)(); };
BoardingPassPrimaryFieldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardingPassPrimaryFieldComponent, selectors: [["the-wallet-boarding-pass-primary-field"]], inputs: { field: "field" }, decls: 1, vars: 1, consts: [["class", "boarding-pass-primary-field", 4, "ngIf"], [1, "boarding-pass-primary-field"], [1, "boarding-pass-primary-field-line"], [1, "boarding-pass-primary-field-line", "secondary-text"]], template: function BoardingPassPrimaryFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BoardingPassPrimaryFieldComponent_mat_list_item_0_Template, 5, 2, "mat-list-item", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.field);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem], styles: [".boarding-pass-primary-field[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkaW5nLXBhc3MtcHJpbWFyeS1maWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiYm9hcmRpbmctcGFzcy1wcmltYXJ5LWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJkaW5nLXBhc3MtcHJpbWFyeS1maWVsZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 90361:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/pkpass/components/atoms/transit-type-icon/transit-type-icon.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransitTypeIconComponent": () => (/* binding */ TransitTypeIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _pipes_pkpass_transit_type_icon_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipes/pkpass-transit-type-icon.pipe */ 64308);



class TransitTypeIconComponent {
}
TransitTypeIconComponent.ɵfac = function TransitTypeIconComponent_Factory(t) { return new (t || TransitTypeIconComponent)(); };
TransitTypeIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TransitTypeIconComponent, selectors: [["the-wallet-transit-type-icon"]], inputs: { transitType: "transitType" }, decls: 3, vars: 3, consts: [[1, "transit-type-icon"]], template: function TransitTypeIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "pkpassTransitTypeIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.transitType));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], pipes: [_pipes_pkpass_transit_type_icon_pipe__WEBPACK_IMPORTED_MODULE_0__.PkpassTransitTypeIconPipe], styles: [".transit-type-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zaXQtdHlwZS1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJ0cmFuc2l0LXR5cGUtaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc2l0LXR5cGUtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 74483:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/pkpass/components/molecules/boarding-pass-primary-field-list/boarding-pass-primary-field-list.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardingPassPrimaryFieldListComponent": () => (/* binding */ BoardingPassPrimaryFieldListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _atoms_boarding_pass_primary_field_boarding_pass_primary_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atoms/boarding-pass-primary-field/boarding-pass-primary-field.component */ 8955);
/* harmony import */ var _atoms_transit_type_icon_transit_type_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/transit-type-icon/transit-type-icon.component */ 90361);
/* harmony import */ var _pkpass_field_list_pkpass_field_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pkpass-field-list/pkpass-field-list.component */ 42591);





function BoardingPassPrimaryFieldListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "the-wallet-boarding-pass-primary-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "the-wallet-transit-type-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "the-wallet-boarding-pass-primary-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r0.fields[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("transitType", ctx_r0.transitType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", ctx_r0.fields[1]);
} }
function BoardingPassPrimaryFieldListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "the-wallet-pkpass-field-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fields", ctx_r1.fields.slice(2));
} }
class BoardingPassPrimaryFieldListComponent {
    constructor() {
        this.fields = [];
    }
}
BoardingPassPrimaryFieldListComponent.ɵfac = function BoardingPassPrimaryFieldListComponent_Factory(t) { return new (t || BoardingPassPrimaryFieldListComponent)(); };
BoardingPassPrimaryFieldListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BoardingPassPrimaryFieldListComponent, selectors: [["the-wallet-boarding-pass-primary-field-list"]], inputs: { fields: "fields", transitType: "transitType" }, decls: 2, vars: 2, consts: [["class", "boarding-pass-primary-field-list", 4, "ngIf"], [4, "ngIf"], [1, "boarding-pass-primary-field-list"], [3, "field"], [3, "transitType"], [3, "fields"]], template: function BoardingPassPrimaryFieldListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, BoardingPassPrimaryFieldListComponent_div_0_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoardingPassPrimaryFieldListComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fields && ctx.fields.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fields && ctx.fields.length > 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _atoms_boarding_pass_primary_field_boarding_pass_primary_field_component__WEBPACK_IMPORTED_MODULE_0__.BoardingPassPrimaryFieldComponent, _atoms_transit_type_icon_transit_type_icon_component__WEBPACK_IMPORTED_MODULE_1__.TransitTypeIconComponent, _pkpass_field_list_pkpass_field_list_component__WEBPACK_IMPORTED_MODULE_2__.PkpassFieldListComponent], styles: [".boarding-pass-primary-field-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkaW5nLXBhc3MtcHJpbWFyeS1maWVsZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRiIsImZpbGUiOiJib2FyZGluZy1wYXNzLXByaW1hcnktZmllbGQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2FyZGluZy1wYXNzLXByaW1hcnktZmllbGQtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 79336:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/pkpass/components/molecules/pkpass-barcode/pkpass-barcode.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PkpassBarcodeComponent": () => (/* binding */ PkpassBarcodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _qrcode_generator_components_barcode_barcode_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../qrcode-generator/components/barcode/barcode.component */ 84129);
/* harmony import */ var _pipes_transform_pkpass_barcode_format_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/transform-pkpass-barcode-format.pipe */ 98053);




function PkpassBarcodeComponent_the_wallet_barcode_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "the-wallet-barcode", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "transformPKPassBarcodeFormat");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.barcode.message)("format", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r0.barcode.format));
} }
class PkpassBarcodeComponent {
}
PkpassBarcodeComponent.ɵfac = function PkpassBarcodeComponent_Factory(t) { return new (t || PkpassBarcodeComponent)(); };
PkpassBarcodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PkpassBarcodeComponent, selectors: [["the-wallet-pkpass-barcode"]], inputs: { barcode: "barcode" }, decls: 1, vars: 1, consts: [[3, "value", "format", 4, "ngIf"], [3, "value", "format"]], template: function PkpassBarcodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PkpassBarcodeComponent_the_wallet_barcode_0_Template, 2, 4, "the-wallet-barcode", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.barcode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _qrcode_generator_components_barcode_barcode_component__WEBPACK_IMPORTED_MODULE_0__.BarcodeComponent], pipes: [_pipes_transform_pkpass_barcode_format_pipe__WEBPACK_IMPORTED_MODULE_1__.TransformPKPassBarcodeFormatPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwa3Bhc3MtYmFyY29kZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 42591:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/pkpass/components/molecules/pkpass-field-list/pkpass-field-list.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PkpassFieldListComponent": () => (/* binding */ PkpassFieldListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _commons_pipes_shorten_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../commons/pipes/shorten.pipe */ 28552);






function PkpassFieldListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-list-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "shorten");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "shorten");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 2, field_r1.label, ctx_r0.DEFAULT_SHORT_VALUE));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 5, field_r1.value, ctx_r0.DEFAULT_SHORT_VALUE), " ");
} }
class PkpassFieldListComponent {
    constructor() {
        this.DEFAULT_SHORT_VALUE = 40;
    }
}
PkpassFieldListComponent.ɵfac = function PkpassFieldListComponent_Factory(t) { return new (t || PkpassFieldListComponent)(); };
PkpassFieldListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PkpassFieldListComponent, selectors: [["the-wallet-pkpass-field-list"]], inputs: { fields: "fields" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "pkpass-field-list-item"], ["mat-line", ""], ["mat-line", "", 1, "pkpass-field-list-item-value"]], template: function PkpassFieldListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PkpassFieldListComponent_ng_container_1_Template, 9, 8, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fields);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatList, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatLine, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider], pipes: [_commons_pipes_shorten_pipe__WEBPACK_IMPORTED_MODULE_0__.ShortenPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwa3Bhc3MtZmllbGQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 86740:
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/pkpass/components/molecules/pkpass-header-field-list/pkpass-header-field-list.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PkpassHeaderFieldListComponent": () => (/* binding */ PkpassHeaderFieldListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function PkpassHeaderFieldListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r1.label);
} }
class PkpassHeaderFieldListComponent {
}
PkpassHeaderFieldListComponent.ɵfac = function PkpassHeaderFieldListComponent_Factory(t) { return new (t || PkpassHeaderFieldListComponent)(); };
PkpassHeaderFieldListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PkpassHeaderFieldListComponent, selectors: [["the-wallet-pkpass-header-field-list"]], inputs: { fields: "fields" }, decls: 2, vars: 1, consts: [[1, "pkpass-header-field-list"], ["class", "pkpass-header-field-list-item", 4, "ngFor", "ngForOf"], [1, "pkpass-header-field-list-item"], [1, "pkpass-header-field-list-item-line"]], template: function PkpassHeaderFieldListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PkpassHeaderFieldListComponent_div_1_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".pkpass-header-field-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1rem;\n}\n.pkpass-header-field-list-item[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBrcGFzcy1oZWFkZXItZmllbGQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0FBQ0oiLCJmaWxlIjoicGtwYXNzLWhlYWRlci1maWVsZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBrcGFzcy1oZWFkZXItZmllbGQtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICYtaXRlbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3255:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/pkpass/components/molecules/pkpass-primary-fields/pkpass-primary-fields.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PkpassPrimaryFieldsComponent": () => (/* binding */ PkpassPrimaryFieldsComponent)
/* harmony export */ });
/* harmony import */ var _PassType_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../PassType.enum */ 4486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _boarding_pass_primary_field_list_boarding_pass_primary_field_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../boarding-pass-primary-field-list/boarding-pass-primary-field-list.component */ 74483);
/* harmony import */ var _pkpass_header_field_list_pkpass_header_field_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pkpass-header-field-list/pkpass-header-field-list.component */ 86740);
/* harmony import */ var _pipes_pass_structure_to_transit_type_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/pass-structure-to-transit-type.pipe */ 10413);






function PkpassPrimaryFieldsComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "the-wallet-boarding-pass-primary-field-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "passStructureToTransitType");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fields", ctx_r1.passFields.primaryFields)("transitType", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx_r1.passFields));
} }
function PkpassPrimaryFieldsComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Primary Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "the-wallet-pkpass-header-field-list", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fields", ctx_r3.passFields.primaryFields);
} }
function PkpassPrimaryFieldsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PkpassPrimaryFieldsComponent_ng_container_0_ng_container_1_Template, 3, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PkpassPrimaryFieldsComponent_ng_container_0_ng_template_2_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.passType === ctx_r0.passTypeEnum.BOARDINGPASS)("ngIfElse", _r2);
} }
class PkpassPrimaryFieldsComponent {
    constructor() {
        this.passTypeEnum = _PassType_enum__WEBPACK_IMPORTED_MODULE_0__.PassTypeEnum;
    }
}
PkpassPrimaryFieldsComponent.ɵfac = function PkpassPrimaryFieldsComponent_Factory(t) { return new (t || PkpassPrimaryFieldsComponent)(); };
PkpassPrimaryFieldsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PkpassPrimaryFieldsComponent, selectors: [["the-wallet-pkpass-primary-fields"]], inputs: { passType: "passType", passFields: "passFields" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngIf", "ngIfElse"], ["primaryfields", ""], [3, "fields", "transitType"], [3, "fields"]], template: function PkpassPrimaryFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PkpassPrimaryFieldsComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.passFields);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _boarding_pass_primary_field_list_boarding_pass_primary_field_list_component__WEBPACK_IMPORTED_MODULE_1__.BoardingPassPrimaryFieldListComponent, _pkpass_header_field_list_pkpass_header_field_list_component__WEBPACK_IMPORTED_MODULE_2__.PkpassHeaderFieldListComponent], pipes: [_pipes_pass_structure_to_transit_type_pipe__WEBPACK_IMPORTED_MODULE_3__.PassStructureToTransitTypePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwa3Bhc3MtcHJpbWFyeS1maWVsZHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 16107:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/pkpass/components/organisms/pkpass-card-header/pkpass-card-header.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PkpassCardHeaderComponent": () => (/* binding */ PkpassCardHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _molecules_pkpass_header_field_list_pkpass_header_field_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../molecules/pkpass-header-field-list/pkpass-header-field-list.component */ 86740);
/* harmony import */ var _ui_components_components_atoms_blob_image_blob_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui-components/components/atoms/blob-image/blob-image.component */ 29937);






function PkpassCardHeaderComponent_ng_container_0_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " airplane_ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PkpassCardHeaderComponent_ng_container_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "the-wallet-blob-image", 8);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blob", ctx_r3.value.logo);
} }
function PkpassCardHeaderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PkpassCardHeaderComponent_ng_container_0_button_2_Template, 3, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-subtitle", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "the-wallet-pkpass-header-field-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PkpassCardHeaderComponent_ng_container_0_ng_template_9_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.value.logo)("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.value.passData.logoText || ctx_r0.value.passType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.value.passData.logoText ? ctx_r0.value.passType : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fields", ctx_r0.value.passFields.headerFields);
} }
class PkpassCardHeaderComponent {
}
PkpassCardHeaderComponent.ɵfac = function PkpassCardHeaderComponent_Factory(t) { return new (t || PkpassCardHeaderComponent)(); };
PkpassCardHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PkpassCardHeaderComponent, selectors: [["the-wallet-pkpass-card-header"]], inputs: { value: "value" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "pkpass-card-header"], ["mat-card-avatar", "", "mat-fab-mini", "", "disabled", "", "class", "certificate-header-avatar", 4, "ngIf", "ngIfElse"], [1, "secondary-text"], [1, "secondary-text", "pkpass-card-header-field-list", 3, "fields"], ["pkpasslogo", ""], ["mat-card-avatar", "", "mat-fab-mini", "", "disabled", "", 1, "certificate-header-avatar"], ["aria-label", "Pass Icon"], ["aria-label", "PKPASS Logo", 1, "pkpass-header-logo", 3, "blob"]], template: function PkpassCardHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PkpassCardHeaderComponent_ng_container_0_Template, 11, 5, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardAvatar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardSubtitle, _molecules_pkpass_header_field_list_pkpass_header_field_list_component__WEBPACK_IMPORTED_MODULE_0__.PkpassHeaderFieldListComponent, _ui_components_components_atoms_blob_image_blob_image_component__WEBPACK_IMPORTED_MODULE_1__.BlobImageComponent], styles: [".pkpass-card-header[_ngcontent-%COMP%]   .pkpass-header-logo[_ngcontent-%COMP%] {\n  display: block;\n  max-height: 3rem;\n  max-width: 3rem;\n}\n.pkpass-card-header-field-list[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBrcGFzcy1jYXJkLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUdFO0VBQ0UsaUJBQUE7QUFESiIsImZpbGUiOiJwa3Bhc3MtY2FyZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGtwYXNzLWNhcmQtaGVhZGVyIHtcclxuICAucGtwYXNzLWhlYWRlci1sb2dvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LWhlaWdodDogM3JlbTtcclxuICAgIG1heC13aWR0aDogM3JlbTtcclxuICB9XHJcblxyXG4gICYtZmllbGQtbGlzdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 12509:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/pkpass/components/organisms/pkpass-card/pkpass-card.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PkpassCardComponent": () => (/* binding */ PkpassCardComponent)
/* harmony export */ });
/* harmony import */ var _PassType_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../PassType.enum */ 4486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _pkpass_card_header_pkpass_card_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pkpass-card-header/pkpass-card-header.component */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _molecules_pkpass_primary_fields_pkpass_primary_fields_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/pkpass-primary-fields/pkpass-primary-fields.component */ 3255);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _molecules_pkpass_barcode_pkpass_barcode_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/pkpass-barcode/pkpass-barcode.component */ 79336);
/* harmony import */ var _molecules_pkpass_field_list_pkpass_field_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../molecules/pkpass-field-list/pkpass-field-list.component */ 42591);
/* harmony import */ var _ui_components_components_molecules_default_expansion_panel_default_expansion_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui-components/components/molecules/default-expansion-panel/default-expansion-panel.component */ 26761);










function PkpassCardComponent_the_wallet_pkpass_primary_fields_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "the-wallet-pkpass-primary-fields", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("passType", ctx_r0.value.passType)("passFields", ctx_r0.value.passFields);
} }
function PkpassCardComponent_the_wallet_pkpass_barcode_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "the-wallet-pkpass-barcode", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("barcode", ctx_r1.value.barcode);
} }
function PkpassCardComponent_mat_card_content_6_the_wallet_default_expansion_panel_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "the-wallet-default-expansion-panel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "the-wallet-pkpass-field-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("expanded", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fields", ctx_r3.value.passFields.backFields);
} }
function PkpassCardComponent_mat_card_content_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "the-wallet-pkpass-field-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "the-wallet-pkpass-field-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, PkpassCardComponent_mat_card_content_6_the_wallet_default_expansion_panel_8_Template, 2, 2, "the-wallet-default-expansion-panel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fields", ctx_r2.value.passFields.secondaryFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fields", ctx_r2.value.passFields.auxiliaryFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.value.passFields.backFields);
} }
class PkpassCardComponent {
    constructor() {
        this.passType = _PassType_enum__WEBPACK_IMPORTED_MODULE_0__.PassTypeEnum;
    }
}
PkpassCardComponent.ɵfac = function PkpassCardComponent_Factory(t) { return new (t || PkpassCardComponent)(); };
PkpassCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PkpassCardComponent, selectors: [["the-wallet-pkpass-card"]], inputs: { value: "value" }, decls: 7, vars: 4, consts: [[1, "pkpass-card"], [3, "value"], [3, "passType", "passFields", 4, "ngIf"], ["mat-card-image", "", 3, "barcode", 4, "ngIf"], [4, "ngIf"], [3, "passType", "passFields"], ["mat-card-image", "", 3, "barcode"], [3, "fields"], ["title", "Backside", 3, "expanded", 4, "ngIf"], ["title", "Backside", 3, "expanded"]], template: function PkpassCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "the-wallet-pkpass-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, PkpassCardComponent_the_wallet_pkpass_primary_fields_2_Template, 1, 2, "the-wallet-pkpass-primary-fields", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PkpassCardComponent_the_wallet_pkpass_barcode_4_Template, 1, 1, "the-wallet-pkpass-barcode", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PkpassCardComponent_mat_card_content_6_Template, 9, 3, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _pkpass_card_header_pkpass_card_header_component__WEBPACK_IMPORTED_MODULE_1__.PkpassCardHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _molecules_pkpass_primary_fields_pkpass_primary_fields_component__WEBPACK_IMPORTED_MODULE_2__.PkpassPrimaryFieldsComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _molecules_pkpass_barcode_pkpass_barcode_component__WEBPACK_IMPORTED_MODULE_3__.PkpassBarcodeComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _molecules_pkpass_field_list_pkpass_field_list_component__WEBPACK_IMPORTED_MODULE_4__.PkpassFieldListComponent, _ui_components_components_molecules_default_expansion_panel_default_expansion_panel_component__WEBPACK_IMPORTED_MODULE_5__.DefaultExpansionPanelComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwa3Bhc3MtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 29910:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/pkpass/components/pages/pkpass-download-button/pkpass-download-button.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PkpassDownloadButtonComponent": () => (/* binding */ PkpassDownloadButtonComponent)
/* harmony export */ });
/* harmony import */ var _document_module_api_components_pages_abstract_document_download_button_abstract_document_download_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../document-module-api/components/pages/abstract-document-download-button/abstract-document-download-button.component */ 5573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ui_components_components_molecules_download_button_download_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui-components/components/molecules/download-button/download-button.component */ 87492);




function PkpassDownloadButtonComponent_the_wallet_download_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "the-wallet-download-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PkpassDownloadButtonComponent_the_wallet_download_button_0_Template_the_wallet_download_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.download.emit([ctx_r1.value.file, ctx_r1.value.passType + ctx_r1.PKPASS_DEFAUL_FILE_EXTENSION]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class PkpassDownloadButtonComponent extends _document_module_api_components_pages_abstract_document_download_button_abstract_document_download_button_component__WEBPACK_IMPORTED_MODULE_0__.AbstractDocumentDownloadButtonComponent {
    constructor() {
        super();
        this.PKPASS_DEFAUL_FILE_EXTENSION = '.pkpass';
    }
}
PkpassDownloadButtonComponent.ɵfac = function PkpassDownloadButtonComponent_Factory(t) { return new (t || PkpassDownloadButtonComponent)(); };
PkpassDownloadButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PkpassDownloadButtonComponent, selectors: [["the-wallet-pkpass-download-button"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "click", 4, "ngIf"], [3, "click"]], template: function PkpassDownloadButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PkpassDownloadButtonComponent_the_wallet_download_button_0_Template, 1, 0, "the-wallet-download-button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ui_components_components_molecules_download_button_download_button_component__WEBPACK_IMPORTED_MODULE_1__.DownloadButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwa3Bhc3MtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 30020:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/pkpass/components/pages/pkpass-preview/pkpass-preview.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PkpassPreviewComponent": () => (/* binding */ PkpassPreviewComponent)
/* harmony export */ });
/* harmony import */ var _document_module_api_components_pages_abstract_document_preview_abstract_document_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../document-module-api/components/pages/abstract-document-preview/abstract-document-preview.component */ 13873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _document_module_api_components_templates_document_preview_template_document_preview_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../document-module-api/components/templates/document-preview-template/document-preview-template.component */ 41765);
/* harmony import */ var _organisms_pkpass_card_header_pkpass_card_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../organisms/pkpass-card-header/pkpass-card-header.component */ 16107);
/* harmony import */ var _document_module_api_directives_document_preview_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../document-module-api/directives/document-preview-header.directive */ 6458);
/* harmony import */ var _document_module_api_directives_document_preview_expanded_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../document-module-api/directives/document-preview-expanded-content.directive */ 52941);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _molecules_pkpass_primary_fields_pkpass_primary_fields_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../molecules/pkpass-primary-fields/pkpass-primary-fields.component */ 3255);
/* harmony import */ var _molecules_pkpass_barcode_pkpass_barcode_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/pkpass-barcode/pkpass-barcode.component */ 79336);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _document_module_api_directives_document_preview_actions_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../document-module-api/directives/document-preview-actions.directive */ 20073);











function PkpassPreviewComponent_the_wallet_pkpass_primary_fields_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "the-wallet-pkpass-primary-fields", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PkpassPreviewComponent_the_wallet_pkpass_primary_fields_3_Template_the_wallet_pkpass_primary_fields_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r2.showMore.emit(ctx_r2.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("passType", ctx_r0.value.passType)("passFields", ctx_r0.value.passFields);
} }
function PkpassPreviewComponent_the_wallet_pkpass_barcode_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "the-wallet-pkpass-barcode", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PkpassPreviewComponent_the_wallet_pkpass_barcode_4_Template_the_wallet_pkpass_barcode_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r4.showMore.emit(ctx_r4.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("barcode", ctx_r1.value.barcode);
} }
const _c0 = [[["", "theWalletPkpassPreviewActions", ""]]];
const _c1 = ["[theWalletPkpassPreviewActions]"];
class PkpassPreviewComponent extends _document_module_api_components_pages_abstract_document_preview_abstract_document_preview_component__WEBPACK_IMPORTED_MODULE_0__.AbstractDocumentPreviewComponent {
    constructor() {
        super();
    }
}
PkpassPreviewComponent.ɵfac = function PkpassPreviewComponent_Factory(t) { return new (t || PkpassPreviewComponent)(); };
PkpassPreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PkpassPreviewComponent, selectors: [["the-wallet-pkpass-preview"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 7, vars: 4, consts: [[3, "isLoading"], ["theWalletDocumentPreviewHeader", "", 3, "value", "click"], ["theWalletDocumentPreviewExpandedContent", ""], [3, "passType", "passFields", "click", 4, "ngIf"], ["mat-card-image", "", 3, "barcode", "click", 4, "ngIf"], ["theWalletDocumentPreviewActions", ""], [3, "passType", "passFields", "click"], ["mat-card-image", "", 3, "barcode", "click"]], template: function PkpassPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "the-wallet-document-preview-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "the-wallet-pkpass-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PkpassPreviewComponent_Template_the_wallet_pkpass_card_header_click_1_listener() { return ctx.showMore.emit(ctx.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, PkpassPreviewComponent_the_wallet_pkpass_primary_fields_3_Template, 1, 2, "the-wallet-pkpass-primary-fields", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, PkpassPreviewComponent_the_wallet_pkpass_barcode_4_Template, 1, 1, "the-wallet-pkpass-barcode", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isLoading", !ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_document_module_api_components_templates_document_preview_template_document_preview_template_component__WEBPACK_IMPORTED_MODULE_1__.DocumentPreviewTemplateComponent, _organisms_pkpass_card_header_pkpass_card_header_component__WEBPACK_IMPORTED_MODULE_2__.PkpassCardHeaderComponent, _document_module_api_directives_document_preview_header_directive__WEBPACK_IMPORTED_MODULE_3__.DocumentPreviewHeaderDirective, _document_module_api_directives_document_preview_expanded_content_directive__WEBPACK_IMPORTED_MODULE_4__.DocumentPreviewExpandedContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _molecules_pkpass_primary_fields_pkpass_primary_fields_component__WEBPACK_IMPORTED_MODULE_5__.PkpassPrimaryFieldsComponent, _molecules_pkpass_barcode_pkpass_barcode_component__WEBPACK_IMPORTED_MODULE_6__.PkpassBarcodeComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardImage, _document_module_api_directives_document_preview_actions_directive__WEBPACK_IMPORTED_MODULE_7__.DocumentPreviewActionsDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwa3Bhc3MtcHJldmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 66410:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/pkpass/components/pages/pkpass-share-button/pkpass-share-button.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PkpassShareButtonComponent": () => (/* binding */ PkpassShareButtonComponent)
/* harmony export */ });
/* harmony import */ var _document_module_api_components_pages_abstract_document_share_button_abstract_document_share_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../document-module-api/components/pages/abstract-document-share-button/abstract-document-share-button.component */ 81287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ui_components_components_molecules_share_button_share_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui-components/components/molecules/share-button/share-button.component */ 36734);
/* harmony import */ var _web_share_pipes_file_to_share_data_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../web-share/pipes/file-to-share-data.pipe */ 14961);





function PkpassShareButtonComponent_ng_container_0_the_wallet_share_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "the-wallet-share-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PkpassShareButtonComponent_ng_container_0_the_wallet_share_button_1_Template_the_wallet_share_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const _shareData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.share.emit(_shareData_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PkpassShareButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PkpassShareButtonComponent_ng_container_0_the_wallet_share_button_1_Template, 1, 0, "the-wallet-share-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.canShare);
} }
class PkpassShareButtonComponent extends _document_module_api_components_pages_abstract_document_share_button_abstract_document_share_button_component__WEBPACK_IMPORTED_MODULE_0__.AbstractDocumentShareButtonComponent {
    constructor() {
        super();
        this.SHARE_TITLE = '';
    }
    ngOnChanges(changes) {
        if (changes &&
            changes['_shareData'] &&
            changes['_shareData'].currentValue) {
            this.shareContentCreated.emit(changes['_shareData'].currentValue);
        }
    }
}
PkpassShareButtonComponent.ɵfac = function PkpassShareButtonComponent_Factory(t) { return new (t || PkpassShareButtonComponent)(); };
PkpassShareButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PkpassShareButtonComponent, selectors: [["the-wallet-pkpass-share-button"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 5, consts: [[4, "ngIf"], [3, "click", 4, "ngIf"], [3, "click"]], template: function PkpassShareButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PkpassShareButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "fileToShareData");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.value && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](1, 1, ctx.value.file, ctx.value.passType, ctx.value.passType));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ui_components_components_molecules_share_button_share_button_component__WEBPACK_IMPORTED_MODULE_1__.ShareButtonComponent], pipes: [_web_share_pipes_file_to_share_data_pipe__WEBPACK_IMPORTED_MODULE_2__.FileToShareDataPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwa3Bhc3Mtc2hhcmUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 59691:
/*!****************************************************************************!*\
  !*** ./src/app/modules/pkpass/components/pages/pkpass/pkpass.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PkpassComponent": () => (/* binding */ PkpassComponent)
/* harmony export */ });
/* harmony import */ var _document_module_api_components_pages_abstract_document_abstract_document_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../document-module-api/components/pages/abstract-document/abstract-document.component */ 6558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _document_module_api_components_templates_document_template_document_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../document-module-api/components/templates/document-template/document-template.component */ 72133);
/* harmony import */ var _organisms_pkpass_card_pkpass_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../organisms/pkpass-card/pkpass-card.component */ 12509);




class PkpassComponent extends _document_module_api_components_pages_abstract_document_abstract_document_component__WEBPACK_IMPORTED_MODULE_0__.AbstractDocumentComponent {
    constructor() {
        super();
    }
}
PkpassComponent.ɵfac = function PkpassComponent_Factory(t) { return new (t || PkpassComponent)(); };
PkpassComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PkpassComponent, selectors: [["the-wallet-pkpass"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [[3, "value"]], template: function PkpassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "the-wallet-document-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "the-wallet-pkpass-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.value);
    } }, directives: [_document_module_api_components_templates_document_template_document_template_component__WEBPACK_IMPORTED_MODULE_1__.DocumentTemplateComponent, _organisms_pkpass_card_pkpass_card_component__WEBPACK_IMPORTED_MODULE_2__.PkpassCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwa3Bhc3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 33841:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pkpass/directives/pkpass-preview-actions.directive.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PkpassPreviewActionsDirective": () => (/* binding */ PkpassPreviewActionsDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PkpassPreviewActionsDirective {
    constructor() { }
}
PkpassPreviewActionsDirective.ɵfac = function PkpassPreviewActionsDirective_Factory(t) { return new (t || PkpassPreviewActionsDirective)(); };
PkpassPreviewActionsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PkpassPreviewActionsDirective, selectors: [["", "theWalletPkpassPreviewActions", ""]] });


/***/ }),

/***/ 10413:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/pkpass/pipes/pass-structure-to-transit-type.pipe.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassStructureToTransitTypePipe": () => (/* binding */ PassStructureToTransitTypePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PassStructureToTransitTypePipe {
    transform(value) {
        if ('transitType' in value) {
            return value.transitType;
        }
        return undefined;
    }
}
PassStructureToTransitTypePipe.ɵfac = function PassStructureToTransitTypePipe_Factory(t) { return new (t || PassStructureToTransitTypePipe)(); };
PassStructureToTransitTypePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "passStructureToTransitType", type: PassStructureToTransitTypePipe, pure: true });


/***/ }),

/***/ 64308:
/*!***********************************************************************!*\
  !*** ./src/app/modules/pkpass/pipes/pkpass-transit-type-icon.pipe.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PkpassTransitTypeIconPipe": () => (/* binding */ PkpassTransitTypeIconPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PkpassTransitTypeIconPipe {
    transform(transitType) {
        switch (transitType) {
            case "PKTransitTypeAir" /* Air */:
                return 'connecting_airports';
            case "PKTransitTypeBoat" /* Boat */:
                return 'directions_boat';
            case "PKTransitTypeBus" /* Bus */:
                return 'directions_bus';
            case "PKTransitTypeTrain" /* Train */:
                return 'directions_bus';
            case "PKTransitTypeGeneric" /* Generic */:
                return 'multiple_stop';
            default:
                return transitType;
        }
    }
}
PkpassTransitTypeIconPipe.ɵfac = function PkpassTransitTypeIconPipe_Factory(t) { return new (t || PkpassTransitTypeIconPipe)(); };
PkpassTransitTypeIconPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pkpassTransitTypeIcon", type: PkpassTransitTypeIconPipe, pure: true });


/***/ }),

/***/ 98053:
/*!******************************************************************************!*\
  !*** ./src/app/modules/pkpass/pipes/transform-pkpass-barcode-format.pipe.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransformPKPassBarcodeFormatPipe": () => (/* binding */ TransformPKPassBarcodeFormatPipe)
/* harmony export */ });
/* harmony import */ var _qrcode_generator_services_BarcodeType_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../qrcode-generator/services/BarcodeType.enum */ 45519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class TransformPKPassBarcodeFormatPipe {
    transform(value) {
        switch (value) {
            case "PKBarcodeFormatAztec" /* Aztec */:
                return _qrcode_generator_services_BarcodeType_enum__WEBPACK_IMPORTED_MODULE_0__.BarcodeTypeEnum.AZTECCODE;
            case "PKBarcodeFormatCode128" /* Code128 */:
                return _qrcode_generator_services_BarcodeType_enum__WEBPACK_IMPORTED_MODULE_0__.BarcodeTypeEnum.CODE128;
            case "PKBarcodeFormatPDF417" /* PDF417 */:
                return _qrcode_generator_services_BarcodeType_enum__WEBPACK_IMPORTED_MODULE_0__.BarcodeTypeEnum.PDF417;
            case "PKBarcodeFormatQR" /* QR */:
                return _qrcode_generator_services_BarcodeType_enum__WEBPACK_IMPORTED_MODULE_0__.BarcodeTypeEnum.QRCODE;
        }
    }
}
TransformPKPassBarcodeFormatPipe.ɵfac = function TransformPKPassBarcodeFormatPipe_Factory(t) { return new (t || TransformPKPassBarcodeFormatPipe)(); };
TransformPKPassBarcodeFormatPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "transformPKPassBarcodeFormat", type: TransformPKPassBarcodeFormatPipe, pure: true });


/***/ }),

/***/ 3625:
/*!*************************************************!*\
  !*** ./src/app/modules/pkpass/pkpass.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PkpassModule": () => (/* binding */ PkpassModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _components_pages_pkpass_preview_pkpass_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/pkpass-preview/pkpass-preview.component */ 30020);
/* harmony import */ var _components_pages_pkpass_pkpass_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/pkpass/pkpass.component */ 59691);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _document_module_api_document_module_api_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../document-module-api/document-module-api.module */ 15522);
/* harmony import */ var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui-components/ui-components.module */ 40358);
/* harmony import */ var _directives_pkpass_preview_actions_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/pkpass-preview-actions.directive */ 33841);
/* harmony import */ var _components_organisms_pkpass_card_header_pkpass_card_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/organisms/pkpass-card-header/pkpass-card-header.component */ 16107);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _components_molecules_pkpass_header_field_list_pkpass_header_field_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/molecules/pkpass-header-field-list/pkpass-header-field-list.component */ 86740);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _health_certificate_health_certificate_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../health-certificate/health-certificate.module */ 97942);
/* harmony import */ var _components_molecules_pkpass_barcode_pkpass_barcode_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/molecules/pkpass-barcode/pkpass-barcode.component */ 79336);
/* harmony import */ var _qrcode_generator_qrcode_generator_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../qrcode-generator/qrcode-generator.module */ 58294);
/* harmony import */ var _pipes_transform_pkpass_barcode_format_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/transform-pkpass-barcode-format.pipe */ 98053);
/* harmony import */ var _components_organisms_pkpass_card_pkpass_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/organisms/pkpass-card/pkpass-card.component */ 12509);
/* harmony import */ var _components_molecules_pkpass_field_list_pkpass_field_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/molecules/pkpass-field-list/pkpass-field-list.component */ 42591);
/* harmony import */ var _commons_commons_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../commons/commons.module */ 26895);
/* harmony import */ var _pipes_pkpass_transit_type_icon_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/pkpass-transit-type-icon.pipe */ 64308);
/* harmony import */ var _components_atoms_transit_type_icon_transit_type_icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/atoms/transit-type-icon/transit-type-icon.component */ 90361);
/* harmony import */ var _components_molecules_boarding_pass_primary_field_list_boarding_pass_primary_field_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/molecules/boarding-pass-primary-field-list/boarding-pass-primary-field-list.component */ 74483);
/* harmony import */ var _pipes_pass_structure_to_transit_type_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/pass-structure-to-transit-type.pipe */ 10413);
/* harmony import */ var _components_molecules_pkpass_primary_fields_pkpass_primary_fields_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/molecules/pkpass-primary-fields/pkpass-primary-fields.component */ 3255);
/* harmony import */ var _components_atoms_boarding_pass_primary_field_boarding_pass_primary_field_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/atoms/boarding-pass-primary-field/boarding-pass-primary-field.component */ 8955);
/* harmony import */ var _components_pages_pkpass_download_button_pkpass_download_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/pkpass-download-button/pkpass-download-button.component */ 29910);
/* harmony import */ var _components_pages_pkpass_share_button_pkpass_share_button_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/pkpass-share-button/pkpass-share-button.component */ 66410);
/* harmony import */ var _web_share_web_share_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../web-share/web-share.module */ 99111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 3184);




























class PkpassModule {
}
PkpassModule.ɵfac = function PkpassModule_Factory(t) { return new (t || PkpassModule)(); };
PkpassModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: PkpassModule });
PkpassModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule,
            _document_module_api_document_module_api_module__WEBPACK_IMPORTED_MODULE_2__.DocumentModuleApiModule,
            _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_3__.UiComponentsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_27__.MatListModule,
            _health_certificate_health_certificate_module__WEBPACK_IMPORTED_MODULE_7__.HealthCertificateModule,
            _qrcode_generator_qrcode_generator_module__WEBPACK_IMPORTED_MODULE_9__.QRCodeGeneratorModule,
            _commons_commons_module__WEBPACK_IMPORTED_MODULE_13__.CommonsModule,
            _document_module_api_document_module_api_module__WEBPACK_IMPORTED_MODULE_2__.DocumentModuleApiModule,
            _web_share_web_share_module__WEBPACK_IMPORTED_MODULE_22__.WebShareModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](PkpassModule, { declarations: [_components_pages_pkpass_preview_pkpass_preview_component__WEBPACK_IMPORTED_MODULE_0__.PkpassPreviewComponent,
        _components_pages_pkpass_pkpass_component__WEBPACK_IMPORTED_MODULE_1__.PkpassComponent,
        _directives_pkpass_preview_actions_directive__WEBPACK_IMPORTED_MODULE_4__.PkpassPreviewActionsDirective,
        _components_organisms_pkpass_card_header_pkpass_card_header_component__WEBPACK_IMPORTED_MODULE_5__.PkpassCardHeaderComponent,
        _components_molecules_pkpass_header_field_list_pkpass_header_field_list_component__WEBPACK_IMPORTED_MODULE_6__.PkpassHeaderFieldListComponent,
        _components_molecules_pkpass_barcode_pkpass_barcode_component__WEBPACK_IMPORTED_MODULE_8__.PkpassBarcodeComponent,
        _pipes_transform_pkpass_barcode_format_pipe__WEBPACK_IMPORTED_MODULE_10__.TransformPKPassBarcodeFormatPipe,
        _components_organisms_pkpass_card_pkpass_card_component__WEBPACK_IMPORTED_MODULE_11__.PkpassCardComponent,
        _components_molecules_pkpass_field_list_pkpass_field_list_component__WEBPACK_IMPORTED_MODULE_12__.PkpassFieldListComponent,
        _pipes_pkpass_transit_type_icon_pipe__WEBPACK_IMPORTED_MODULE_14__.PkpassTransitTypeIconPipe,
        _components_atoms_transit_type_icon_transit_type_icon_component__WEBPACK_IMPORTED_MODULE_15__.TransitTypeIconComponent,
        _components_molecules_boarding_pass_primary_field_list_boarding_pass_primary_field_list_component__WEBPACK_IMPORTED_MODULE_16__.BoardingPassPrimaryFieldListComponent,
        _pipes_pass_structure_to_transit_type_pipe__WEBPACK_IMPORTED_MODULE_17__.PassStructureToTransitTypePipe,
        _components_molecules_pkpass_primary_fields_pkpass_primary_fields_component__WEBPACK_IMPORTED_MODULE_18__.PkpassPrimaryFieldsComponent,
        _components_atoms_boarding_pass_primary_field_boarding_pass_primary_field_component__WEBPACK_IMPORTED_MODULE_19__.BoardingPassPrimaryFieldComponent,
        _components_pages_pkpass_download_button_pkpass_download_button_component__WEBPACK_IMPORTED_MODULE_20__.PkpassDownloadButtonComponent,
        _components_pages_pkpass_share_button_pkpass_share_button_component__WEBPACK_IMPORTED_MODULE_21__.PkpassShareButtonComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule,
        _document_module_api_document_module_api_module__WEBPACK_IMPORTED_MODULE_2__.DocumentModuleApiModule,
        _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_3__.UiComponentsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_27__.MatListModule,
        _health_certificate_health_certificate_module__WEBPACK_IMPORTED_MODULE_7__.HealthCertificateModule,
        _qrcode_generator_qrcode_generator_module__WEBPACK_IMPORTED_MODULE_9__.QRCodeGeneratorModule,
        _commons_commons_module__WEBPACK_IMPORTED_MODULE_13__.CommonsModule,
        _document_module_api_document_module_api_module__WEBPACK_IMPORTED_MODULE_2__.DocumentModuleApiModule,
        _web_share_web_share_module__WEBPACK_IMPORTED_MODULE_22__.WebShareModule], exports: [_components_pages_pkpass_preview_pkpass_preview_component__WEBPACK_IMPORTED_MODULE_0__.PkpassPreviewComponent,
        _components_pages_pkpass_pkpass_component__WEBPACK_IMPORTED_MODULE_1__.PkpassComponent,
        _components_pages_pkpass_download_button_pkpass_download_button_component__WEBPACK_IMPORTED_MODULE_20__.PkpassDownloadButtonComponent,
        _components_pages_pkpass_share_button_pkpass_share_button_component__WEBPACK_IMPORTED_MODULE_21__.PkpassShareButtonComponent,
        _directives_pkpass_preview_actions_directive__WEBPACK_IMPORTED_MODULE_4__.PkpassPreviewActionsDirective] }); })();


/***/ }),

/***/ 63303:
/*!***********************************************************!*\
  !*** ./src/app/modules/pkpass/services/pkpass.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PkpassService": () => (/* binding */ PkpassService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var _pkpass_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pkpass.utils */ 83958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class PkpassService {
    constructor() { }
    readPkpass(file) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)((0,_pkpass_utils__WEBPACK_IMPORTED_MODULE_0__.readPKPASS)(file));
    }
}
PkpassService.ɵfac = function PkpassService_Factory(t) { return new (t || PkpassService)(); };
PkpassService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PkpassService, factory: PkpassService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 83958:
/*!*********************************************************!*\
  !*** ./src/app/modules/pkpass/services/pkpass.utils.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "passDataToPassStructure": () => (/* binding */ passDataToPassStructure),
/* harmony export */   "getLogoName": () => (/* binding */ getLogoName),
/* harmony export */   "readPKPASS": () => (/* binding */ readPKPASS)
/* harmony export */ });
/* harmony import */ var C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zip.js/zip.js */ 89292);
/* harmony import */ var _PassType_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PassType.enum */ 4486);



const passDataToPassStructure = passData => {
  if ('boardingPass' in passData) {
    return [_PassType_enum__WEBPACK_IMPORTED_MODULE_2__.PassTypeEnum.BOARDINGPASS, passData.boardingPass];
  } else if ('coupon' in passData) {
    return [_PassType_enum__WEBPACK_IMPORTED_MODULE_2__.PassTypeEnum.COUPON, passData.coupon];
  } else if ('eventTicket' in passData) {
    return [_PassType_enum__WEBPACK_IMPORTED_MODULE_2__.PassTypeEnum.EVENTICKET, passData.eventTicket];
  } else if ('generic' in passData) {
    return [_PassType_enum__WEBPACK_IMPORTED_MODULE_2__.PassTypeEnum.GENERIC, passData.generic];
  } else if ('storeCard' in passData) {
    return [_PassType_enum__WEBPACK_IMPORTED_MODULE_2__.PassTypeEnum.STORECARD, passData.storeCard];
  }

  throw new DOMException('No valid PassData found!');
};
const getLogoName = (manifest, highResolution) => {
  const manifestEntries = Object.entries(manifest);
  const logos = manifestEntries.filter(entry => entry[0].startsWith('logo')).map(entry => entry[0]).sort();
  return logos.length > 0 ? logos[highResolution ? logos.length - 1 : 0] : undefined;
};
const readPKPASS = /*#__PURE__*/function () {
  var _ref = (0,C_workspaces_the_wallet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (file) {
    const reader = new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_1__.ZipReader(new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_1__.BlobReader(file));
    const entries = yield reader.getEntries();
    const passJSONEntry = entries.find(entry => entry.filename === 'pass.json');
    const manifestJSONEntry = entries.find(entry => entry.filename === 'manifest.json');

    if (passJSONEntry && passJSONEntry.getData && manifestJSONEntry && manifestJSONEntry.getData) {
      const passText = yield passJSONEntry.getData(new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_1__.TextWriter());
      const manifestText = yield manifestJSONEntry.getData(new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_1__.TextWriter());
      const passData = JSON.parse(passText);
      const manifest = JSON.parse(manifestText);
      const [passType, passStructure] = passDataToPassStructure(passData);
      const deprecatedBarcode = passData.barcode ? passData.barcode : undefined;
      const barcodeArrayElement = passData.barcodes && passData.barcodes.length > 0 ? passData.barcodes[0] : undefined;
      const barcode = barcodeArrayElement ? barcodeArrayElement : deprecatedBarcode;
      let logo;
      const logoName = getLogoName(manifest, false);

      if (logoName) {
        const logoEntry = entries.find(entry => entry.filename === logoName);
        logo = logoEntry && logoEntry.getData ? yield logoEntry.getData(new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_1__.BlobWriter('image/png')) : undefined;
        console.log(logo);
      }

      const pkpassWrapper = {
        file: file,
        passType: passType,
        passData: passData,
        passFields: passStructure,
        manifest: manifest,
        barcode: barcode,
        logo: logo
      };
      return pkpassWrapper;
    } else {
      throw new DOMException('No valid Pkpass!');
    }
  });

  return function readPKPASS(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 84129:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/qrcode-generator/components/barcode/barcode.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeComponent": () => (/* binding */ BarcodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _pipes_to_barcode_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/to-barcode.pipe */ 17555);




function BarcodeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "toBarcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r0.value, ctx_r0.format), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function BarcodeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
} }
class BarcodeComponent {
}
BarcodeComponent.ɵfac = function BarcodeComponent_Factory(t) { return new (t || BarcodeComponent)(); };
BarcodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BarcodeComponent, selectors: [["the-wallet-barcode"]], inputs: { value: "value", format: "format" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["spinner", ""], [1, "barcode", 3, "src"]], template: function BarcodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BarcodeComponent_ng_container_0_Template, 3, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BarcodeComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.value && ctx.format)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatSpinner], pipes: [_pipes_to_barcode_pipe__WEBPACK_IMPORTED_MODULE_0__.ToBarcodePipe], styles: [".barcode[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  background-color: white;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhcmNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJiYXJjb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhcmNvZGUge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 48622:
/*!********************************************************************************!*\
  !*** ./src/app/modules/qrcode-generator/components/qrcode/qrcode.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QRCodeComponent": () => (/* binding */ QRCodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_qrcode_generator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/qrcode-generator.service */ 77679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);




function QRCodeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.qrCodeDataURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function QRCodeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
} }
class QRCodeComponent {
    constructor(qrCodeGenerator) {
        this.qrCodeGenerator = qrCodeGenerator;
    }
    ngOnChanges(changes) {
        if (this.value) {
            this.qrCodeGenerator.toDataURL(this.value).subscribe({
                next: (qrCodeDataURL) => (this.qrCodeDataURL = qrCodeDataURL),
                error: (err) => console.error(err),
            });
        }
    }
}
QRCodeComponent.ɵfac = function QRCodeComponent_Factory(t) { return new (t || QRCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_qrcode_generator_service__WEBPACK_IMPORTED_MODULE_0__.QRCodeGeneratorService)); };
QRCodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QRCodeComponent, selectors: [["the-wallet-qrcode"]], inputs: { value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["spinner", ""], [3, "src"]], template: function QRCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, QRCodeComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QRCodeComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.value)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxcmNvZGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 17555:
/*!*******************************************************************!*\
  !*** ./src/app/modules/qrcode-generator/pipes/to-barcode.pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToBarcodePipe": () => (/* binding */ ToBarcodePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_barcode_generator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/barcode-generator.service */ 8639);


class ToBarcodePipe {
    constructor(barcodeService) {
        this.barcodeService = barcodeService;
    }
    transform(value, barcodeType) {
        try {
            if (value && barcodeType) {
                return this.barcodeService.generateBarcode(value, barcodeType, ToBarcodePipe.DEFAULT_WIDTH_IN_MM, ToBarcodePipe.DEFAULT_HEIGTH_IN_MM);
            }
        }
        catch (e) {
            console.error(e);
        }
        return undefined;
    }
}
ToBarcodePipe.DEFAULT_WIDTH_IN_MM = 50;
ToBarcodePipe.DEFAULT_HEIGTH_IN_MM = 50;
ToBarcodePipe.ɵfac = function ToBarcodePipe_Factory(t) { return new (t || ToBarcodePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_barcode_generator_service__WEBPACK_IMPORTED_MODULE_0__.BarcodeGeneratorService, 16)); };
ToBarcodePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "toBarcode", type: ToBarcodePipe, pure: true });


/***/ }),

/***/ 58294:
/*!*********************************************************************!*\
  !*** ./src/app/modules/qrcode-generator/qrcode-generator.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QRCodeGeneratorModule": () => (/* binding */ QRCodeGeneratorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _components_barcode_barcode_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/barcode/barcode.component */ 84129);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _pipes_to_barcode_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/to-barcode.pipe */ 17555);
/* harmony import */ var _components_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/qrcode/qrcode.component */ 48622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class QRCodeGeneratorModule {
}
QRCodeGeneratorModule.ɵfac = function QRCodeGeneratorModule_Factory(t) { return new (t || QRCodeGeneratorModule)(); };
QRCodeGeneratorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: QRCodeGeneratorModule });
QRCodeGeneratorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinnerModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](QRCodeGeneratorModule, { declarations: [_components_barcode_barcode_component__WEBPACK_IMPORTED_MODULE_0__.BarcodeComponent, _pipes_to_barcode_pipe__WEBPACK_IMPORTED_MODULE_1__.ToBarcodePipe, _components_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_2__.QRCodeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinnerModule], exports: [_components_barcode_barcode_component__WEBPACK_IMPORTED_MODULE_0__.BarcodeComponent, _components_qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_2__.QRCodeComponent] }); })();


/***/ }),

/***/ 45519:
/*!***********************************************************************!*\
  !*** ./src/app/modules/qrcode-generator/services/BarcodeType.enum.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeTypeEnum": () => (/* binding */ BarcodeTypeEnum)
/* harmony export */ });
var BarcodeTypeEnum;
(function (BarcodeTypeEnum) {
    BarcodeTypeEnum["AZTECCODE"] = "azteccode";
    BarcodeTypeEnum["CODE128"] = "code128";
    BarcodeTypeEnum["PDF417"] = "pdf417";
    BarcodeTypeEnum["QRCODE"] = "qrcode";
})(BarcodeTypeEnum || (BarcodeTypeEnum = {}));


/***/ }),

/***/ 8639:
/*!********************************************************************************!*\
  !*** ./src/app/modules/qrcode-generator/services/barcode-generator.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeGeneratorService": () => (/* binding */ BarcodeGeneratorService)
/* harmony export */ });
/* harmony import */ var bwip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bwip-js */ 45891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class BarcodeGeneratorService {
    constructor() { }
    generateBarcode(content, format, width, heigth) {
        const offscreenCanvas = document.createElement('canvas');
        const canvas = bwip_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCanvas(offscreenCanvas, {
            width: width,
            height: heigth,
            bcid: format,
            text: content,
        });
        return canvas.toDataURL();
    }
}
BarcodeGeneratorService.ɵfac = function BarcodeGeneratorService_Factory(t) { return new (t || BarcodeGeneratorService)(); };
BarcodeGeneratorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BarcodeGeneratorService, factory: BarcodeGeneratorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 77679:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/qrcode-generator/services/qrcode-generator.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QRCodeGeneratorService": () => (/* binding */ QRCodeGeneratorService)
/* harmony export */ });
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode */ 35646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class QRCodeGeneratorService {
    constructor() { }
    toDataURL(value) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(qrcode__WEBPACK_IMPORTED_MODULE_0__.toDataURL(value));
    }
}
QRCodeGeneratorService.ɵfac = function QRCodeGeneratorService_Factory(t) { return new (t || QRCodeGeneratorService)(); };
QRCodeGeneratorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: QRCodeGeneratorService, factory: QRCodeGeneratorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 29937:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/ui-components/components/atoms/blob-image/blob-image.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlobImageComponent": () => (/* binding */ BlobImageComponent)
/* harmony export */ });
/* harmony import */ var _commons_utils_image_conversion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../commons/utils/image-conversion.utils */ 3828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);




function BlobImageComponent_img_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 1);
  }

  if (rf & 2) {
    const imageURL_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", imageURL_r1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}

class BlobImageComponent {
  constructor() {}

  get blob() {
    return this._blob;
  }

  set blob(blob) {
    this._blob = blob;

    if (blob) {
      console.log(blob);
      this.imageURL$ = (0,_commons_utils_image_conversion_utils__WEBPACK_IMPORTED_MODULE_0__.blobToDataURL)(blob);
    }
  }

}

BlobImageComponent.ɵfac = function BlobImageComponent_Factory(t) {
  return new (t || BlobImageComponent)();
};

BlobImageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BlobImageComponent,
  selectors: [["the-wallet-blob-image"]],
  inputs: {
    blob: "blob"
  },
  decls: 2,
  vars: 3,
  consts: [["class", "blob-image", 3, "src", 4, "ngIf"], [1, "blob-image", 3, "src"]],
  template: function BlobImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BlobImageComponent_img_0_Template, 1, 1, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.imageURL$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: [".blob-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: inherit;\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ItaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImJsb2ItaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvYi1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogaW5oZXJpdDtcclxuICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 8909:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/ui-components/components/atoms/empty/empty.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyComponent": () => (/* binding */ EmptyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class EmptyComponent {
}
EmptyComponent.ɵfac = function EmptyComponent_Factory(t) { return new (t || EmptyComponent)(); };
EmptyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmptyComponent, selectors: [["the-wallet-empty"]], decls: 0, vars: 0, template: function EmptyComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 22361:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/ui-components/components/atoms/icon-button/icon-button.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconButtonComponent": () => (/* binding */ IconButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 65590);



const _c0 = ["*"];
class IconButtonComponent {
}
IconButtonComponent.ɵfac = function IconButtonComponent_Factory(t) { return new (t || IconButtonComponent)(); };
IconButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconButtonComponent, selectors: [["the-wallet-icon-button"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [["mat-icon-button", ""]], template: function IconButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29uLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 88970:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/ui-components/components/atoms/non-freezing-spinner/non-freezing-spinner.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonFreezingSpinnerComponent": () => (/* binding */ NonFreezingSpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/* Spinner doesn't freeze when Thread is blocked, because it uses CSS animations
 * */
class NonFreezingSpinnerComponent {
}
NonFreezingSpinnerComponent.ɵfac = function NonFreezingSpinnerComponent_Factory(t) { return new (t || NonFreezingSpinnerComponent)(); };
NonFreezingSpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NonFreezingSpinnerComponent, selectors: [["the-wallet-non-freezing-spinner"]], decls: 1, vars: 0, consts: [[1, "the-wallet-spinner"]], template: function NonFreezingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".the-wallet-spinner[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 0.75rem;\n  border-radius: 5rem;\n  width: 5rem;\n  height: 5rem;\n  animation: 1s rotate infinite linear;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vbi1mcmVlemluZy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxvQkFBQTtFQUNGO0VBQ0E7SUFDRSx5QkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoibm9uLWZyZWV6aW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhlLXdhbGxldC1zcGlubmVyIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIGhlaWdodDogNXJlbTtcclxuICBhbmltYXRpb246IDFzIHJvdGF0ZSBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 47254:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/ui-components/components/molecules/action-menu/action-menu.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionMenuComponent": () => (/* binding */ ActionMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 88133);





function ActionMenuComponent_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionMenuComponent_mat_list_item_1_Template_mat_list_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const actionItem_r1 = restoredCtx.$implicit; return actionItem_r1.action(actionItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actionItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](actionItem_r1.matIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](actionItem_r1.name);
} }
class ActionMenuComponent {
    constructor() {
        this.actionList = [];
    }
}
ActionMenuComponent.ɵfac = function ActionMenuComponent_Factory(t) { return new (t || ActionMenuComponent)(); };
ActionMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionMenuComponent, selectors: [["the-wallet-action-menu"]], inputs: { actionList: "actionList" }, decls: 2, vars: 1, consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ActionMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-action-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActionMenuComponent_mat_list_item_1_Template, 5, 2, "mat-list-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.actionList);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatList, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatListItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatListIconCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatLine], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 26761:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/ui-components/components/molecules/default-expansion-panel/default-expansion-panel.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultExpansionPanelComponent": () => (/* binding */ DefaultExpansionPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ 12928);


const _c0 = ["*"];
class DefaultExpansionPanelComponent {
    constructor() {
        this.title = '';
        this.expanded = true;
    }
}
DefaultExpansionPanelComponent.ɵfac = function DefaultExpansionPanelComponent_Factory(t) { return new (t || DefaultExpansionPanelComponent)(); };
DefaultExpansionPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultExpansionPanelComponent, selectors: [["the-wallet-default-expansion-panel"]], inputs: { title: "title", expanded: "expanded" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[1, "default-expansion-panel", 3, "expanded"], ["expandedHeight", "48px"]], template: function DefaultExpansionPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanelTitle], styles: [".default-expansion-panel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6ImRlZmF1bHQtZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlZmF1bHQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 87492:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/ui-components/components/molecules/download-button/download-button.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadButtonComponent": () => (/* binding */ DownloadButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _atoms_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atoms/icon-button/icon-button.component */ 22361);


class DownloadButtonComponent {
    constructor() { }
    ngOnInit() { }
}
DownloadButtonComponent.ɵfac = function DownloadButtonComponent_Factory(t) { return new (t || DownloadButtonComponent)(); };
DownloadButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DownloadButtonComponent, selectors: [["the-wallet-download-button"]], decls: 2, vars: 0, template: function DownloadButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "the-wallet-icon-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_atoms_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_0__.IconButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3dubG9hZC1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36734:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/ui-components/components/molecules/share-button/share-button.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareButtonComponent": () => (/* binding */ ShareButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _atoms_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../atoms/icon-button/icon-button.component */ 22361);


class ShareButtonComponent {
}
ShareButtonComponent.ɵfac = function ShareButtonComponent_Factory(t) { return new (t || ShareButtonComponent)(); };
ShareButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShareButtonComponent, selectors: [["the-wallet-share-button"]], decls: 2, vars: 0, template: function ShareButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "the-wallet-icon-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_atoms_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_0__.IconButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZS1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 27432:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/ui-components/components/organisms/action-menu-sheet/action-menu-sheet.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionMenuSheetComponent": () => (/* binding */ ActionMenuSheetComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 43672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _molecules_action_menu_action_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../molecules/action-menu/action-menu.component */ 47254);



class ActionMenuSheetComponent {
    constructor(actionList) {
        this.actionList = actionList;
    }
}
ActionMenuSheetComponent.ɵfac = function ActionMenuSheetComponent_Factory(t) { return new (t || ActionMenuSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__.MAT_BOTTOM_SHEET_DATA)); };
ActionMenuSheetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ActionMenuSheetComponent, selectors: [["the-wallet-action-menu-sheet"]], decls: 1, vars: 1, consts: [[3, "actionList"]], template: function ActionMenuSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "the-wallet-action-menu", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("actionList", ctx.actionList);
    } }, directives: [_molecules_action_menu_action_menu_component__WEBPACK_IMPORTED_MODULE_0__.ActionMenuComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tbWVudS1zaGVldC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 55827:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/ui-components/services/action-menu-sheet.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionMenuSheetService": () => (/* binding */ ActionMenuSheetService)
/* harmony export */ });
/* harmony import */ var _components_organisms_action_menu_sheet_action_menu_sheet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/organisms/action-menu-sheet/action-menu-sheet.component */ 27432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 43672);



class ActionMenuSheetService {
    constructor(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    open(actionList) {
        this.bottomSheetRef = this.bottomSheet.open(_components_organisms_action_menu_sheet_action_menu_sheet_component__WEBPACK_IMPORTED_MODULE_0__.ActionMenuSheetComponent, {
            data: actionList,
        });
    }
    close() {
        if (this.bottomSheetRef && this.bottomSheetRef) {
            this.bottomSheetRef.dismiss();
            this.bottomSheetRef = undefined;
        }
    }
}
ActionMenuSheetService.ɵfac = function ActionMenuSheetService_Factory(t) { return new (t || ActionMenuSheetService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__.MatBottomSheet)); };
ActionMenuSheetService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ActionMenuSheetService, factory: ActionMenuSheetService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 47173:
/*!*******************************************************************!*\
  !*** ./src/app/modules/ui-components/services/overlay.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverlayService": () => (/* binding */ OverlayService)
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ 24476);
/* harmony import */ var _components_atoms_non_freezing_spinner_non_freezing_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/atoms/non-freezing-spinner/non-freezing-spinner.component */ 88970);
/* harmony import */ var _components_atoms_empty_empty_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/atoms/empty/empty.component */ 8909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 54244);





class OverlayService {
    constructor(overlay) {
        this.overlay = overlay;
        this.overlayRef = this.overlay.create({
            hasBackdrop: true,
            positionStrategy: this.overlay
                .position()
                .global()
                .centerHorizontally()
                .centerVertically(),
        });
    }
    open(component) {
        const progressSpinnerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.ComponentPortal(component);
        this.overlayRef.detach();
        this.overlayRef.attach(progressSpinnerPortal);
    }
    openEmptyOverlay() {
        this.open(_components_atoms_empty_empty_component__WEBPACK_IMPORTED_MODULE_1__.EmptyComponent);
    }
    openSpinnerOverlay() {
        this.open(_components_atoms_non_freezing_spinner_non_freezing_spinner_component__WEBPACK_IMPORTED_MODULE_0__.NonFreezingSpinnerComponent);
    }
    close() {
        this.overlayRef.detach();
    }
}
OverlayService.ɵfac = function OverlayService_Factory(t) { return new (t || OverlayService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay)); };
OverlayService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: OverlayService, factory: OverlayService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 74201:
/*!************************************************************************!*\
  !*** ./src/app/modules/ui-components/services/user-message.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMessageService": () => (/* binding */ UserMessageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);


class UserMessageService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    showUserMessage(message, action = UserMessageService.MESSAGE_ACTION, config = UserMessageService.MESSAGE_CONFIG) {
        this.snackBar.open(message, action, config);
    }
}
UserMessageService.MESSAGE_ACTION = 'OK';
UserMessageService.MESSAGE_CONFIG = {
    duration: 5000,
};
UserMessageService.ɵfac = function UserMessageService_Factory(t) { return new (t || UserMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar)); };
UserMessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserMessageService, factory: UserMessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 40358:
/*!***************************************************************!*\
  !*** ./src/app/modules/ui-components/ui-components.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiComponentsModule": () => (/* binding */ UiComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _components_atoms_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/atoms/icon-button/icon-button.component */ 22361);
/* harmony import */ var _components_molecules_action_menu_action_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/molecules/action-menu/action-menu.component */ 47254);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _components_organisms_action_menu_sheet_action_menu_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/organisms/action-menu-sheet/action-menu-sheet.component */ 27432);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 43672);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _components_atoms_non_freezing_spinner_non_freezing_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/atoms/non-freezing-spinner/non-freezing-spinner.component */ 88970);
/* harmony import */ var _components_atoms_empty_empty_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/atoms/empty/empty.component */ 8909);
/* harmony import */ var _components_molecules_share_button_share_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/molecules/share-button/share-button.component */ 36734);
/* harmony import */ var _components_molecules_download_button_download_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/molecules/download-button/download-button.component */ 87492);
/* harmony import */ var _components_atoms_blob_image_blob_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/atoms/blob-image/blob-image.component */ 29937);
/* harmony import */ var _components_molecules_default_expansion_panel_default_expansion_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/molecules/default-expansion-panel/default-expansion-panel.component */ 26761);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);

















class UiComponentsModule {
}
UiComponentsModule.ɵfac = function UiComponentsModule_Factory(t) { return new (t || UiComponentsModule)(); };
UiComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: UiComponentsModule });
UiComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule,
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__.MatBottomSheetModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](UiComponentsModule, { declarations: [_components_atoms_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_0__.IconButtonComponent,
        _components_molecules_action_menu_action_menu_component__WEBPACK_IMPORTED_MODULE_1__.ActionMenuComponent,
        _components_organisms_action_menu_sheet_action_menu_sheet_component__WEBPACK_IMPORTED_MODULE_2__.ActionMenuSheetComponent,
        _components_atoms_non_freezing_spinner_non_freezing_spinner_component__WEBPACK_IMPORTED_MODULE_3__.NonFreezingSpinnerComponent,
        _components_atoms_empty_empty_component__WEBPACK_IMPORTED_MODULE_4__.EmptyComponent,
        _components_molecules_share_button_share_button_component__WEBPACK_IMPORTED_MODULE_5__.ShareButtonComponent,
        _components_molecules_download_button_download_button_component__WEBPACK_IMPORTED_MODULE_6__.DownloadButtonComponent,
        _components_atoms_blob_image_blob_image_component__WEBPACK_IMPORTED_MODULE_7__.BlobImageComponent,
        _components_molecules_default_expansion_panel_default_expansion_panel_component__WEBPACK_IMPORTED_MODULE_8__.DefaultExpansionPanelComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__.MatBottomSheetModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule], exports: [_components_atoms_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_0__.IconButtonComponent,
        _components_molecules_action_menu_action_menu_component__WEBPACK_IMPORTED_MODULE_1__.ActionMenuComponent,
        _components_organisms_action_menu_sheet_action_menu_sheet_component__WEBPACK_IMPORTED_MODULE_2__.ActionMenuSheetComponent,
        _components_atoms_non_freezing_spinner_non_freezing_spinner_component__WEBPACK_IMPORTED_MODULE_3__.NonFreezingSpinnerComponent,
        _components_molecules_share_button_share_button_component__WEBPACK_IMPORTED_MODULE_5__.ShareButtonComponent,
        _components_molecules_download_button_download_button_component__WEBPACK_IMPORTED_MODULE_6__.DownloadButtonComponent,
        _components_atoms_blob_image_blob_image_component__WEBPACK_IMPORTED_MODULE_7__.BlobImageComponent,
        _components_molecules_default_expansion_panel_default_expansion_panel_component__WEBPACK_IMPORTED_MODULE_8__.DefaultExpansionPanelComponent] }); })();


/***/ }),

/***/ 14961:
/*!********************************************************************!*\
  !*** ./src/app/modules/web-share/pipes/file-to-share-data.pipe.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileToShareDataPipe": () => (/* binding */ FileToShareDataPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FileToShareDataPipe {
    transform(value, text, title) {
        return {
            files: [value],
            text: text,
            title: title,
        };
    }
}
FileToShareDataPipe.ɵfac = function FileToShareDataPipe_Factory(t) { return new (t || FileToShareDataPipe)(); };
FileToShareDataPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fileToShareData", type: FileToShareDataPipe, pure: true });


/***/ }),

/***/ 53227:
/*!*****************************************************************!*\
  !*** ./src/app/modules/web-share/services/web-share.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebShareService": () => (/* binding */ WebShareService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class WebShareService {
    constructor() { }
    isSupported() {
        return 'canShare' in navigator && 'share' in navigator;
    }
    canShare(data) {
        return this.isSupported() && navigator.canShare(data);
    }
    share(data) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(navigator.share(data));
    }
}
WebShareService.ɵfac = function WebShareService_Factory(t) { return new (t || WebShareService)(); };
WebShareService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WebShareService, factory: WebShareService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 99111:
/*!*******************************************************!*\
  !*** ./src/app/modules/web-share/web-share.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebShareModule": () => (/* binding */ WebShareModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _pipes_file_to_share_data_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/file-to-share-data.pipe */ 14961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class WebShareModule {
}
WebShareModule.ɵfac = function WebShareModule_Factory(t) { return new (t || WebShareModule)(); };
WebShareModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WebShareModule });
WebShareModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WebShareModule, { declarations: [_pipes_file_to_share_data_pipe__WEBPACK_IMPORTED_MODULE_0__.FileToShareDataPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_pipes_file_to_share_data_pipe__WEBPACK_IMPORTED_MODULE_0__.FileToShareDataPipe] }); })();


/***/ }),

/***/ 87390:
/*!*********************************************!*\
  !*** ./src/app/pipes/sort-by-array.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortDocumentsByArrayPipe": () => (/* binding */ SortDocumentsByArrayPipe)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class SortDocumentsByArrayPipe {
    transform(documents, sortOrder) {
        const sortedArray = lodash__WEBPACK_IMPORTED_MODULE_0___default().sortBy(documents, (document) => {
            return sortOrder.indexOf(document.id);
        });
        return sortedArray;
    }
}
SortDocumentsByArrayPipe.ɵfac = function SortDocumentsByArrayPipe_Factory(t) { return new (t || SortDocumentsByArrayPipe)(); };
SortDocumentsByArrayPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "sortDocumentsByArray", type: SortDocumentsByArrayPipe, pure: true });


/***/ }),

/***/ 20149:
/*!*************************************************!*\
  !*** ./src/app/store/document-store.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentStoreService": () => (/* binding */ DocumentStoreService)
/* harmony export */ });
/* harmony import */ var ngforage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngforage */ 94152);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var localforage_memoryStorageDriver_dist_localforage_memoryStorageDriver_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage-memoryStorageDriver/dist/localforage-memoryStorageDriver.es6 */ 10764);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ 62535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _sort_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort-store.service */ 99613);


// @ts-ignore





class DocumentStoreService {
    constructor(dedicatedInstanceFactory, sortStore) {
        this.dedicatedInstanceFactory = dedicatedInstanceFactory;
        this.sortStore = sortStore;
        this.documentChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.documentChange$ = this.documentChangeSource.asObservable();
        //Custom Config for NG-Forage is necessary because we need two StoreInstance. One for this Service and one for sort-store.
        //See: https://github.com/Alorel/ngforage/issues/53
        this.ngForage = dedicatedInstanceFactory.createNgForage({
            name: 'DocumentStore',
            driver: [
                ngforage__WEBPACK_IMPORTED_MODULE_3__.Driver.INDEXED_DB,
                ngforage__WEBPACK_IMPORTED_MODULE_3__.Driver.WEB_SQL,
                ngforage__WEBPACK_IMPORTED_MODULE_3__.Driver.LOCAL_STORAGE,
                localforage_memoryStorageDriver_dist_localforage_memoryStorageDriver_es6__WEBPACK_IMPORTED_MODULE_0__["default"],
            ],
        });
    }
    getDocuments() {
        const documentSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        const document$ = documentSource.asObservable();
        this.ngForage
            .iterate((document, key, number) => {
            documentSource.next(document);
        })
            .then(() => {
            documentSource.complete();
        })
            .catch((err) => {
            documentSource.error(err);
        });
        return document$;
    }
    getDocument(id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(this.ngForage.getItem(id));
    }
    updateDocument(id, document) {
        document.id = id;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(this.ngForage.setItem(id, document)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)((resultDocument) => this.documentChangeSource.next({
            id: resultDocument.id,
            document: resultDocument,
        })));
    }
    saveDocument(document) {
        console.log(document);
        document.id = document.id ? document.id : (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(this.ngForage.setItem(document.id, document)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)((resultDocument) => {
            console.log(resultDocument);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)((resultDocument) => this.documentChangeSource.next({
            id: resultDocument.id,
            document: resultDocument,
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(() => {
            this.sortStore.addKey(document.id).subscribe();
        }));
    }
    deleteDocument(id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(this.ngForage.removeItem(id)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.documentChangeSource.next({ id: id, document: null })), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(() => {
            this.sortStore.removeKey(id).subscribe();
        }));
    }
}
DocumentStoreService.ɵfac = function DocumentStoreService_Factory(t) { return new (t || DocumentStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ngforage__WEBPACK_IMPORTED_MODULE_3__.DedicatedInstanceFactory), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_sort_store_service__WEBPACK_IMPORTED_MODULE_1__.SortStoreService)); };
DocumentStoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: DocumentStoreService, factory: DocumentStoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 99613:
/*!*********************************************!*\
  !*** ./src/app/store/sort-store.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortStoreService": () => (/* binding */ SortStoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 63853);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var ngforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngforage */ 94152);
/* harmony import */ var localforage_memoryStorageDriver_dist_localforage_memoryStorageDriver_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage-memoryStorageDriver/dist/localforage-memoryStorageDriver.es6 */ 10764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);


// @ts-ignore



class SortStoreService {
    constructor(ngForage, dedicatedInstanceFactory) {
        this.ngForage = ngForage;
        this.dedicatedInstanceFactory = dedicatedInstanceFactory;
        this.sortOrderSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.sortOrder$ = this.sortOrderSource.asObservable();
        this.ngForage = dedicatedInstanceFactory.createNgForage({
            name: 'SortStore',
            driver: [
                ngforage__WEBPACK_IMPORTED_MODULE_2__.Driver.INDEXED_DB,
                ngforage__WEBPACK_IMPORTED_MODULE_2__.Driver.WEB_SQL,
                ngforage__WEBPACK_IMPORTED_MODULE_2__.Driver.LOCAL_STORAGE,
                localforage_memoryStorageDriver_dist_localforage_memoryStorageDriver_es6__WEBPACK_IMPORTED_MODULE_0__["default"],
            ],
        });
    }
    updateSortOrder(ids) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.ngForage.setItem(SortStoreService.SORT_ORDER_KEY, ids)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)((sortOrder) => this.sortOrderSource.next(sortOrder)));
    }
    addKey(id) {
        return this.getSortOrder().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.concatMap)((sortOrder) => {
            sortOrder.push(id);
            return this.updateSortOrder(sortOrder);
        }));
    }
    removeKey(id) {
        return this.getSortOrder().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((sortOrder) => sortOrder.filter((key) => key !== id)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.concatMap)((sortOrder) => this.updateSortOrder(sortOrder)));
    }
    getSortOrder() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.ngForage.getItem(SortStoreService.SORT_ORDER_KEY)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((sortOrder) => (sortOrder ? sortOrder : [])));
    }
}
SortStoreService.SORT_ORDER_KEY = 'SORT_ORDER';
SortStoreService.ɵfac = function SortStoreService_Factory(t) { return new (t || SortStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ngforage__WEBPACK_IMPORTED_MODULE_2__.NgForage), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ngforage__WEBPACK_IMPORTED_MODULE_2__.DedicatedInstanceFactory)); };
SortStoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: SortStoreService, factory: SortStoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4319:
/*!**********************************************!*\
  !*** ./src/app/the-wallet-routing.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TheWalletRoutingModule": () => (/* binding */ TheWalletRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_pages_wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/wallet-page/wallet-page.component */ 79868);
/* harmony import */ var _components_pages_route_not_found_page_route_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/route-not-found-page/route-not-found-page.component */ 86694);
/* harmony import */ var _components_pages_document_page_document_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/document-page/document-page.component */ 16715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: 'wallet', component: _components_pages_wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_0__.WalletPageComponent },
    { path: 'document/:id', component: _components_pages_document_page_document_page_component__WEBPACK_IMPORTED_MODULE_2__.DocumentPageComponent },
    { path: '404', component: _components_pages_route_not_found_page_route_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__.RouteNotFoundPageComponent },
    { path: '', redirectTo: '/wallet', pathMatch: 'full' },
    { path: '**', redirectTo: '/404' },
];
class TheWalletRoutingModule {
}
TheWalletRoutingModule.ɵfac = function TheWalletRoutingModule_Factory(t) { return new (t || TheWalletRoutingModule)(); };
TheWalletRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TheWalletRoutingModule });
TheWalletRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TheWalletRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 85715:
/*!*****************************************!*\
  !*** ./src/app/the-wallet.component.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TheWalletComponent": () => (/* binding */ TheWalletComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class TheWalletComponent {
}
TheWalletComponent.ɵfac = function TheWalletComponent_Factory(t) { return new (t || TheWalletComponent)(); };
TheWalletComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TheWalletComponent, selectors: [["the-wallet-root"]], decls: 1, vars: 0, template: function TheWalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGUtd2FsbGV0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 65720:
/*!**************************************!*\
  !*** ./src/app/the-wallet.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TheWalletModule": () => (/* binding */ TheWalletModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _the_wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./the-wallet-routing.module */ 4319);
/* harmony import */ var _the_wallet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./the-wallet.component */ 85715);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/service-worker */ 64933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _modules_camera_module_camera_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/camera-module/camera.module */ 44098);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _modules_health_certificate_health_certificate_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/health-certificate/health-certificate.module */ 97942);
/* harmony import */ var ngforage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngforage */ 94152);
/* harmony import */ var localforage_memoryStorageDriver_dist_localforage_memoryStorageDriver_es6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! localforage-memoryStorageDriver/dist/localforage-memoryStorageDriver.es6 */ 10764);
/* harmony import */ var _components_pages_document_page_document_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/document-page/document-page.component */ 16715);
/* harmony import */ var _components_pages_route_not_found_page_route_not_found_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/route-not-found-page/route-not-found-page.component */ 86694);
/* harmony import */ var _components_templates_page_template_page_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/templates/page-template/page-template.component */ 55582);
/* harmony import */ var _components_pages_wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/wallet-page/wallet-page.component */ 79868);
/* harmony import */ var _components_organisms_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/organisms/document-list/document-list.component */ 55226);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _components_organisms_document_list_element_document_list_element_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/organisms/document-list-element/document-list-element.component */ 1710);
/* harmony import */ var _pipes_sort_by_array_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/sort-by-array.pipe */ 87390);
/* harmony import */ var _modules_ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/ui-components/ui-components.module */ 40358);
/* harmony import */ var _components_templates_page_template_page_template_header_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/templates/page-template/page-template-header.directive */ 94981);
/* harmony import */ var _components_molecules_app_bar_app_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/molecules/app-bar/app-bar.component */ 5455);
/* harmony import */ var _components_molecules_app_bar_app_bar_start_elements_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/molecules/app-bar/app-bar-start-elements.directive */ 81722);
/* harmony import */ var _components_molecules_app_bar_app_bar_end_elements_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/molecules/app-bar/app-bar-end-elements.directive */ 99625);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _modules_file_system_file_system_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/file-system/file-system.module */ 25877);
/* harmony import */ var _components_organisms_document_document_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/organisms/document/document.component */ 38054);
/* harmony import */ var _components_organisms_document_share_button_document_share_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/organisms/document-share-button/document-share-button.component */ 70170);
/* harmony import */ var _components_organisms_document_download_button_document_download_button_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/organisms/document-download-button/document-download-button.component */ 92167);
/* harmony import */ var _modules_qrcode_generator_qrcode_generator_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/qrcode-generator/qrcode-generator.module */ 58294);
/* harmony import */ var _modules_commons_commons_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/commons/commons.module */ 26895);
/* harmony import */ var _modules_pkpass_pkpass_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/pkpass/pkpass.module */ 3625);
/* harmony import */ var _components_molecules_drag_drop_slider_drag_drop_slider_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/molecules/drag-drop-slider/drag-drop-slider.component */ 88989);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 3184);












// @ts-ignore



























class TheWalletModule {
}
TheWalletModule.ɵfac = function TheWalletModule_Factory(t) { return new (t || TheWalletModule)(); };
TheWalletModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: TheWalletModule, bootstrap: [_the_wallet_component__WEBPACK_IMPORTED_MODULE_1__.TheWalletComponent] });
TheWalletModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ providers: [
        {
            // Initilaize Local Forage Driver
            provide: ngforage__WEBPACK_IMPORTED_MODULE_27__.DEFAULT_CONFIG,
            useValue: {
                name: 'theWalletCertificateStore',
                //Use default Indexdb -> WebSQL -> LocalStorage -> MemoryStorage
                driver: [
                    ngforage__WEBPACK_IMPORTED_MODULE_27__.Driver.INDEXED_DB,
                    ngforage__WEBPACK_IMPORTED_MODULE_27__.Driver.WEB_SQL,
                    ngforage__WEBPACK_IMPORTED_MODULE_27__.Driver.LOCAL_STORAGE,
                    localforage_memoryStorageDriver_dist_localforage_memoryStorageDriver_es6__WEBPACK_IMPORTED_MODULE_5__["default"],
                ],
            },
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule,
            _the_wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__.TheWalletRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000',
            }),
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule,
            _modules_camera_module_camera_module__WEBPACK_IMPORTED_MODULE_3__.CameraModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButtonModule,
            _modules_health_certificate_health_certificate_module__WEBPACK_IMPORTED_MODULE_4__.HealthCertificateModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__.DragDropModule,
            _modules_ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_13__.UiComponentsModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__.MatProgressSpinnerModule,
            _modules_file_system_file_system_module__WEBPACK_IMPORTED_MODULE_18__.FileSystemModule,
            _modules_qrcode_generator_qrcode_generator_module__WEBPACK_IMPORTED_MODULE_22__.QRCodeGeneratorModule,
            _modules_commons_commons_module__WEBPACK_IMPORTED_MODULE_23__.CommonsModule,
            _modules_pkpass_pkpass_module__WEBPACK_IMPORTED_MODULE_24__.PkpassModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__.MatSlideToggleModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](TheWalletModule, { declarations: [_the_wallet_component__WEBPACK_IMPORTED_MODULE_1__.TheWalletComponent,
        _components_pages_document_page_document_page_component__WEBPACK_IMPORTED_MODULE_6__.DocumentPageComponent,
        _components_pages_wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_9__.WalletPageComponent,
        _components_pages_route_not_found_page_route_not_found_page_component__WEBPACK_IMPORTED_MODULE_7__.RouteNotFoundPageComponent,
        _components_templates_page_template_page_template_component__WEBPACK_IMPORTED_MODULE_8__.PageTemplateComponent,
        _components_organisms_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_10__.DocumentListComponent,
        _components_organisms_document_list_element_document_list_element_component__WEBPACK_IMPORTED_MODULE_11__.DocumentListElementComponent,
        _pipes_sort_by_array_pipe__WEBPACK_IMPORTED_MODULE_12__.SortDocumentsByArrayPipe,
        _components_templates_page_template_page_template_header_directive__WEBPACK_IMPORTED_MODULE_14__.PageTemplateHeaderDirective,
        _components_molecules_app_bar_app_bar_component__WEBPACK_IMPORTED_MODULE_15__.AppBarComponent,
        _components_molecules_app_bar_app_bar_start_elements_directive__WEBPACK_IMPORTED_MODULE_16__.AppBarStartElementsDirective,
        _components_molecules_app_bar_app_bar_end_elements_directive__WEBPACK_IMPORTED_MODULE_17__.AppBarEndElementsDirective,
        _components_organisms_document_document_component__WEBPACK_IMPORTED_MODULE_19__.DocumentComponent,
        _components_organisms_document_share_button_document_share_button_component__WEBPACK_IMPORTED_MODULE_20__.DocumentShareButtonComponent,
        _components_organisms_document_download_button_document_download_button_component__WEBPACK_IMPORTED_MODULE_21__.DocumentDownloadButtonComponent,
        _components_molecules_drag_drop_slider_drag_drop_slider_component__WEBPACK_IMPORTED_MODULE_25__.DragDropSliderComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule,
        _the_wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__.TheWalletRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_30__.ServiceWorkerModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule,
        _modules_camera_module_camera_module__WEBPACK_IMPORTED_MODULE_3__.CameraModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButtonModule,
        _modules_health_certificate_health_certificate_module__WEBPACK_IMPORTED_MODULE_4__.HealthCertificateModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__.DragDropModule,
        _modules_ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_13__.UiComponentsModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__.MatProgressSpinnerModule,
        _modules_file_system_file_system_module__WEBPACK_IMPORTED_MODULE_18__.FileSystemModule,
        _modules_qrcode_generator_qrcode_generator_module__WEBPACK_IMPORTED_MODULE_22__.QRCodeGeneratorModule,
        _modules_commons_commons_module__WEBPACK_IMPORTED_MODULE_23__.CommonsModule,
        _modules_pkpass_pkpass_module__WEBPACK_IMPORTED_MODULE_24__.PkpassModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__.MatSlideToggleModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule], exports: [_components_organisms_document_document_component__WEBPACK_IMPORTED_MODULE_19__.DocumentComponent] }); })();


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_the_wallet_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/the-wallet.module */ 65720);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_the_wallet_module__WEBPACK_IMPORTED_MODULE_0__.TheWalletModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 25988:
/*!***********************************************************!*\
  !*** ./src/assets/ehn-dcc-valuesets/country-2-codes.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"valueSetId":"country-2-codes","valueSetDate":"2019-11-01","valueSetValues":{"AD":{"display":"Andorra","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"AE":{"display":"United Arab Emirates","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"AF":{"display":"Afghanistan","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"AG":{"display":"Antigua and Barbuda","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"AI":{"display":"Anguilla","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"AL":{"display":"Albania","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"AM":{"display":"Armenia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"AO":{"display":"Angola","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"AQ":{"display":"Antarctica","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"AR":{"display":"Argentina","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"AS":{"display":"American Samoa","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"AT":{"display":"Austria","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"AU":{"display":"Australia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"AW":{"display":"Aruba","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"AX":{"display":"Åland Islands","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"AZ":{"display":"Azerbaijan","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BA":{"display":"Bosnia and Herzegovina","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BB":{"display":"Barbados","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BD":{"display":"Bangladesh","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BE":{"display":"Belgium","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BF":{"display":"Burkina Faso","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BG":{"display":"Bulgaria","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BH":{"display":"Bahrain","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BI":{"display":"Burundi","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BJ":{"display":"Benin","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BL":{"display":"Saint Barthélemy","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BM":{"display":"Bermuda","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BN":{"display":"Brunei Darussalam","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BO":{"display":"Bolivia, Plurinational State of","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BQ":{"display":"Bonaire, Sint Eustatius and Saba","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BR":{"display":"Brazil","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BS":{"display":"Bahamas","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BT":{"display":"Bhutan","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BV":{"display":"Bouvet Island","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BW":{"display":"Botswana","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BY":{"display":"Belarus","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"BZ":{"display":"Belize","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CA":{"display":"Canada","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CC":{"display":"Cocos (Keeling) Islands","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CD":{"display":"Congo, the Democratic Republic of the","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CF":{"display":"Central African Republic","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CG":{"display":"Congo","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CH":{"display":"Switzerland","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CI":{"display":"Côte d\'\'Ivoire","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CK":{"display":"Cook Islands","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CL":{"display":"Chile","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CM":{"display":"Cameroon","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CN":{"display":"China","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CO":{"display":"Colombia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CR":{"display":"Costa Rica","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CU":{"display":"Cuba","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CV":{"display":"Cabo Verde","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CW":{"display":"Curaçao","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CX":{"display":"Christmas Island","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CY":{"display":"Cyprus","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"CZ":{"display":"Czechia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"DE":{"display":"Germany","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"DJ":{"display":"Djibouti","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"DK":{"display":"Denmark","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"DM":{"display":"Dominica","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"DO":{"display":"Dominican Republic","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"DZ":{"display":"Algeria","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"EC":{"display":"Ecuador","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"EE":{"display":"Estonia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"EG":{"display":"Egypt","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"EH":{"display":"Western Sahara","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"ER":{"display":"Eritrea","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"ES":{"display":"Spain","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"ET":{"display":"Ethiopia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"FI":{"display":"Finland","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"FJ":{"display":"Fiji","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"FK":{"display":"Falkland Islands (Malvinas)","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"FM":{"display":"Micronesia, Federated States of","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"FO":{"display":"Faroe Islands","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"FR":{"display":"France","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GA":{"display":"Gabon","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GB":{"display":"United Kingdom of Great Britain and Northern Ireland","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GD":{"display":"Grenada","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GE":{"display":"Georgia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GF":{"display":"French Guiana","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GG":{"display":"Guernsey","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GH":{"display":"Ghana","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GI":{"display":"Gibraltar","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GL":{"display":"Greenland","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GM":{"display":"Gambia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GN":{"display":"Guinea","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GP":{"display":"Guadeloupe","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GQ":{"display":"Equatorial Guinea","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GR":{"display":"Greece","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GS":{"display":"South Georgia and the South Sandwich Islands","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GT":{"display":"Guatemala","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GU":{"display":"Guam","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GW":{"display":"Guinea-Bissau","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"GY":{"display":"Guyana","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"HK":{"display":"Hong Kong","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"HM":{"display":"Heard Island and McDonald Islands","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"HN":{"display":"Honduras","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"HR":{"display":"Croatia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"HT":{"display":"Haiti","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"HU":{"display":"Hungary","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"ID":{"display":"Indonesia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"IE":{"display":"Ireland","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"IL":{"display":"Israel","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"IM":{"display":"Isle of Man","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"IN":{"display":"India","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"IO":{"display":"British Indian Ocean Territory","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"IQ":{"display":"Iraq","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"IR":{"display":"Iran, Islamic Republic of","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"IS":{"display":"Iceland","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"IT":{"display":"Italy","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"JE":{"display":"Jersey","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"JM":{"display":"Jamaica","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"JO":{"display":"Jordan","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"JP":{"display":"Japan","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"KE":{"display":"Kenya","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"KG":{"display":"Kyrgyzstan","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"KH":{"display":"Cambodia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"KI":{"display":"Kiribati","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"KM":{"display":"Comoros","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"KN":{"display":"Saint Kitts and Nevis","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"KP":{"display":"Korea, Democratic People\'\'s Republic of","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"KR":{"display":"Korea, Republic of","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"KW":{"display":"Kuwait","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"KY":{"display":"Cayman Islands","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"KZ":{"display":"Kazakhstan","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"LA":{"display":"Lao People\'\'s Democratic Republic","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"LB":{"display":"Lebanon","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"LC":{"display":"Saint Lucia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"LI":{"display":"Liechtenstein","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"LK":{"display":"Sri Lanka","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"LR":{"display":"Liberia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"LS":{"display":"Lesotho","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"LT":{"display":"Lithuania","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"LU":{"display":"Luxembourg","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"LV":{"display":"Latvia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"LY":{"display":"Libya","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MA":{"display":"Morocco","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MC":{"display":"Monaco","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MD":{"display":"Moldova, Republic of","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"ME":{"display":"Montenegro","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MF":{"display":"Saint Martin (French part)","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MG":{"display":"Madagascar","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MH":{"display":"Marshall Islands","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MK":{"display":"Macedonia, the former Yugoslav Republic of","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"ML":{"display":"Mali","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MM":{"display":"Myanmar","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MN":{"display":"Mongolia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MO":{"display":"Macao","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MP":{"display":"Northern Mariana Islands","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MQ":{"display":"Martinique","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MR":{"display":"Mauritania","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MS":{"display":"Montserrat","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MT":{"display":"Malta","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MU":{"display":"Mauritius","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MV":{"display":"Maldives","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MW":{"display":"Malawi","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MX":{"display":"Mexico","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MY":{"display":"Malaysia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"MZ":{"display":"Mozambique","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"NA":{"display":"Namibia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"NC":{"display":"New Caledonia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"NE":{"display":"Niger","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"NF":{"display":"Norfolk Island","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"NG":{"display":"Nigeria","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"NI":{"display":"Nicaragua","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"NL":{"display":"Netherlands","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"NO":{"display":"Norway","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"NP":{"display":"Nepal","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"NR":{"display":"Nauru","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"NU":{"display":"Niue","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"NZ":{"display":"New Zealand","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"OM":{"display":"Oman","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"PA":{"display":"Panama","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"PE":{"display":"Peru","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"PF":{"display":"French Polynesia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"PG":{"display":"Papua New Guinea","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"PH":{"display":"Philippines","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"PK":{"display":"Pakistan","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"PL":{"display":"Poland","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"PM":{"display":"Saint Pierre and Miquelon","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"PN":{"display":"Pitcairn","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"PR":{"display":"Puerto Rico","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"PS":{"display":"Palestine, State of","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"PT":{"display":"Portugal","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"PW":{"display":"Palau","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"PY":{"display":"Paraguay","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"QA":{"display":"Qatar","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"RE":{"display":"Réunion","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"RO":{"display":"Romania","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"RS":{"display":"Serbia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"RU":{"display":"Russian Federation","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"RW":{"display":"Rwanda","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SA":{"display":"Saudi Arabia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SB":{"display":"Solomon Islands","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SC":{"display":"Seychelles","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SD":{"display":"Sudan","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SE":{"display":"Sweden","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SG":{"display":"Singapore","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SH":{"display":"Saint Helena, Ascension and Tristan da Cunha","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SI":{"display":"Slovenia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SJ":{"display":"Svalbard and Jan Mayen","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SK":{"display":"Slovakia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SL":{"display":"Sierra Leone","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SM":{"display":"San Marino","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SN":{"display":"Senegal","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SO":{"display":"Somalia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SR":{"display":"Suriname","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SS":{"display":"South Sudan","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"ST":{"display":"Sao Tome and Principe","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SV":{"display":"El Salvador","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SX":{"display":"Sint Maarten (Dutch part)","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SY":{"display":"Syrian Arab Republic","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"SZ":{"display":"Swaziland","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TC":{"display":"Turks and Caicos Islands","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TD":{"display":"Chad","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TF":{"display":"French Southern Territories","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TG":{"display":"Togo","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TH":{"display":"Thailand","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TJ":{"display":"Tajikistan","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TK":{"display":"Tokelau","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TL":{"display":"Timor-Leste","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TM":{"display":"Turkmenistan","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TN":{"display":"Tunisia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TO":{"display":"Tonga","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TR":{"display":"Turkey","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TT":{"display":"Trinidad and Tobago","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TV":{"display":"Tuvalu","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TW":{"display":"Taiwan, Province of China","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"TZ":{"display":"Tanzania, United Republic of","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"UA":{"display":"Ukraine","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"UG":{"display":"Uganda","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"UM":{"display":"United States Minor Outlying Islands","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"US":{"display":"United States of America","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"UY":{"display":"Uruguay","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"UZ":{"display":"Uzbekistan","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"VA":{"display":"Holy See","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"VC":{"display":"Saint Vincent and the Grenadines","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"VE":{"display":"Venezuela, Bolivarian Republic of","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"VG":{"display":"Virgin Islands, British","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"VI":{"display":"Virgin Islands,","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"VN":{"display":"Viet Nam","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"VU":{"display":"Vanuatu","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"WF":{"display":"Wallis and Futuna","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"WS":{"display":"Samoa","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"YE":{"display":"Yemen","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"YT":{"display":"Mayotte","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"ZA":{"display":"South Africa","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"ZM":{"display":"Zambia","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"ZW":{"display":"Zimbabwe","lang":"en","active":true,"system":"urn:iso:std:iso:3166","version":""},"XK":{"display":"Kosovo, Republic of","lang":"en","active":true,"system":"http://ec.europa.eu/temp/countrycodes","version":"1.4"}}}');

/***/ }),

/***/ 36471:
/*!******************************************************************!*\
  !*** ./src/assets/ehn-dcc-valuesets/disease-agent-targeted.json ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"valueSetId":"disease-agent-targeted","valueSetDate":"2021-04-27","valueSetValues":{"840539006":{"display":"COVID-19","lang":"en","active":true,"version":"http://snomed.info/sct/900000000000207008/version/20210131","system":"http://snomed.info/sct"}}}');

/***/ }),

/***/ 23287:
/*!*****************************************************!*\
  !*** ./src/assets/ehn-dcc-valuesets/test-manf.json ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"valueSetId":"covid-19-lab-test-manufacturer-and-name","valueSetDate":"2021-07-01","valueSetValues":{"308":{"display":"PCL Inc, PCL COVID19 Ag Rapid FIA","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"344":{"display":"SD BIOSENSOR Inc, STANDARD F COVID-19 Ag FIA","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"345":{"display":"SD BIOSENSOR Inc, STANDARD Q COVID-19 Ag Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"768":{"display":"ArcDia International Ltd, mariPOC SARS-CoV-2","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-19"},"1065":{"display":"Becton Dickinson, BD Veritor™ System for Rapid Detection of SARS CoV 2","lang":"en","active":false,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-11"},"1097":{"display":"Quidel Corporation, Sofia SARS Antigen FIA","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1114":{"display":"Sugentech, Inc, SGTi-flex COVID-19 Ag","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1144":{"display":"Green Cross Medical Science Corp., GENEDIA W COVID-19 Ag","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-11"},"1162":{"display":"Nal von minden GmbH, NADAL COVID-19 Ag Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1173":{"display":"CerTest Biotec, CerTest SARS-CoV-2 Card test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1180":{"display":"MEDsan GmbH, MEDsan SARS-CoV-2 Antigen Rapid Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1190":{"display":"möLab, mö-screen Corona Antigen Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-15"},"1199":{"display":"Oncosem Onkolojik Sistemler San. ve Tic. A.S., CAT","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1201":{"display":"ScheBo Biotech AG, ScheBo SARS CoV-2 Quick Antigen","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-16"},"1215":{"display":"Hangzhou Laihe Biotech Co., Ltd, LYHER Novel Coronavirus (COVID-19) Antigen Test Kit(Colloidal Gold)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1218":{"display":"Siemens Healthineers, CLINITEST Rapid Covid-19 Antigen Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1223":{"display":"BIOSYNEX S.A., BIOSYNEX COVID-19 Ag BSS","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1225":{"display":"DDS DIAGNOSTIC, Test Rapid Covid-19 Antigen (tampon nazofaringian)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1232":{"display":"Abbott Rapid Diagnostics, Panbio COVID-19 Ag Rapid Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-17"},"1236":{"display":"BTNX Inc, Rapid Response COVID-19 Antigen Rapid Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1242":{"display":"Bionote, Inc, NowCheck COVID-19 Ag Test","lang":"en","active":false,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-11"},"1244":{"display":"GenBody, Inc, Genbody COVID-19 Ag Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1253":{"display":"GenSure Biotech Inc, GenSure COVID-19 Antigen Rapid Kit","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-14"},"1257":{"display":"Hangzhou AllTest Biotech Co., Ltd, COVID-19 Antigen Rapid Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-18"},"1263":{"display":"Humasis, Humasis COVID-19 Ag Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1266":{"display":"Labnovation Technologies Inc, SARS-CoV-2 Antigen Rapid Test Kit","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1267":{"display":"LumiQuick Diagnostics Inc, QuickProfile COVID-19 Antigen Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1268":{"display":"LumiraDX, LumiraDx SARS-CoV-2 Ag Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1271":{"display":"Precision Biosensor, Inc, Exdia COVID-19 Ag","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1278":{"display":"Xiamen Boson Biotech Co. Ltd, Rapid SARS-CoV-2 Antigen Test Card","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-18"},"1295":{"display":"Zhejiang Anji Saianfu Biotech Co., Ltd, reOpenTest COVID-19 Antigen Rapid Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1296":{"display":"Zhejiang Anji Saianfu Biotech Co., Ltd, AndLucky COVID-19 Antigen Rapid Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1304":{"display":"AMEDA Labordiagnostik GmbH, AMP Rapid Test SARS-CoV-2 Ag","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-25"},"1319":{"display":"SGA Medikal, V-Chek SARS-CoV-2 Ag Rapid Test Kit (Colloidal Gold)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1331":{"display":"Beijing Lepu Medical Technology Co., Ltd, SARS-CoV-2 Antigen Rapid Test Kit","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1333":{"display":"Joinstar Biomedical Technology Co., Ltd, COVID-19 Rapid Antigen Test (Colloidal Gold)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1341":{"display":"Qingdao Hightop Biotech Co., Ltd, SARS-CoV-2 Antigen Rapid Test (Immunochromatography)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1343":{"display":"Zhezhiang Orient Gene Biotech Co., Ltd, Coronavirus Ag Rapid Test Cassette (Swab)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1360":{"display":"Guangdong Wesail Biotech Co., Ltd, COVID-19 Ag Test Kit","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1363":{"display":"Hangzhou Clongene Biotech Co., Ltd, Covid-19 Antigen Rapid Test Kit","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1365":{"display":"Hangzhou Clongene Biotech Co., Ltd, COVID-19/Influenza A+B Antigen Combo Rapid Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1375":{"display":"DIALAB GmbH, DIAQUICK COVID-19 Ag Cassette","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1392":{"display":"Hangzhou Testsea Biotechnology Co., Ltd, COVID-19 Antigen Test Cassette","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1420":{"display":"NanoEntek, FREND COVID-19 Ag","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-04"},"1437":{"display":"Guangzhou Wondfo Biotech Co., Ltd, Wondfo 2019-nCoV Antigen Test (Lateral Flow Method)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1443":{"display":"Vitrosens Biotechnology Co., Ltd, RapidFor SARS-CoV-2 Rapid Ag Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1456":{"display":"Xiamen Wiz Biotech Co., Ltd, SARS-CoV-2 Antigen Rapid Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-19"},"1466":{"display":"TODA PHARMA, TODA CORONADIAG Ag","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1468":{"display":"ACON Laboratories, Inc, Flowflex SARS-CoV-2 Antigen rapid test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1481":{"display":"MP Biomedicals, Rapid SARS-CoV-2 Antigen Test Card","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-18"},"1484":{"display":"Beijing Wantai Biological Pharmacy Enterprise Co., Ltd, Wantai SARS-CoV-2 Ag Rapid Test (FIA)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1489":{"display":"Safecare Biotech (Hangzhou) Co. Ltd, COVID-19 Antigen Rapid Test Kit (Swab)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-12"},"1490":{"display":"Safecare Biotech (Hangzhou) Co. Ltd, Multi-Respiratory Virus Antigen Test Kit(Swab)  (Influenza A+B/ COVID-19)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1501":{"display":"New Gene (Hangzhou) Bioengineering Co., Ltd, COVID-19 Antigen Detection Kit","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-16"},"1574":{"display":"Shenzhen Zhenrui Biotechnology Co., Ltd, Zhenrui ®COVID-19 Antigen Test Cassette","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1604":{"display":"Roche (SD BIOSENSOR), SARS-CoV-2 Rapid Antigen Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-30"},"1606":{"display":"RapiGEN Inc, BIOCREDIT COVID-19 Ag - SARS-CoV 2 Antigen test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1654":{"display":"Asan Pharmaceutical CO., LTD, Asan Easy Test COVID-19 Ag","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1736":{"display":"Anhui Deep Blue Medical Technology Co., Ltd, COVID-19 (SARS-CoV-2) Antigen Test Kit(Colloidal Gold)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1747":{"display":"Guangdong Hecin Scientific, Inc., 2019-nCoV Antigen Test Kit (colloidal gold method)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1763":{"display":"Xiamen AmonMed Biotechnology Co., Ltd, COVID-19 Antigen Rapid Test Kit (Colloidal Gold)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1764":{"display":"JOYSBIO (Tianjin) Biotechnology Co., Ltd, SARS-CoV-2 Antigen Rapid Test Kit (Colloidal Gold)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-11"},"1767":{"display":"Healgen Scientific, Coronavirus Ag Rapid Test Cassette","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1769":{"display":"Shenzhen Watmind Medical Co., Ltd, SARS-CoV-2 Ag Diagnostic Test Kit (Colloidal Gold)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1815":{"display":"Anhui Deep Blue Medical Technology Co., Ltd, COVID-19 (SARS-CoV-2) Antigen Test Kit (Colloidal Gold) - Nasal Swab","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-12"},"1822":{"display":"Anbio (Xiamen) Biotechnology Co., Ltd, Rapid COVID-19 Antigen Test(Colloidal Gold)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1833":{"display":"AAZ-LMB, COVID-VIRO","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-17"},"1844":{"display":"Hangzhou Immuno Biotech Co.,Ltd, Immunobio SARS-CoV-2 Antigen ANTERIOR NASAL Rapid Test Kit (minimal invasive)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1870":{"display":"Beijing Hotgen Biotech Co., Ltd, Novel Coronavirus 2019-nCoV Antigen Test (Colloidal Gold)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1884":{"display":"Xiamen Wiz Biotech Co., Ltd, SARS-CoV-2 Antigen Rapid Test (Colloidal Gold)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-20"},"1906":{"display":"Azure Biotech Inc, COVID-19 Antigen Rapid Test Device","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-19"},"1919":{"display":"Core Technology Co., Ltd, Coretests COVID-19 Ag Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-10"},"1934":{"display":"Tody Laboratories Int., Coronavirus (SARS-CoV 2) Antigen - Oral Fluid","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-19"},"2010":{"display":"Atlas Link Technology Co., Ltd., NOVA Test® SARS-CoV-2 Antigen Rapid Test Kit (Colloidal Gold Immunochromatography)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-11"},"2017":{"display":"Shenzhen Ultra-Diagnostics Biotec.Co.,Ltd, SARS-CoV-2 Antigen Test Kit","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-19"},"2029":{"display":"Merlin Biomedical (Xiamen) Co., Ltd., SARS-CoV-2 Antigen Rapid Test Cassette","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-16"},"2074":{"display":"Triplex International Biosciences (China) Co., LTD., SARS-CoV-2 Antigen Rapid Test Kit","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-16"},"2098":{"display":"Wuhan EasyDiagnosis Biomedicine Co., Ltd., COVID-19 (SARS-CoV-2) Antigen Test Kit","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-01"},"2101":{"display":"AXIOM Gesellschaft für Diagnostica und Biochemica mbH, COVID-19 Antigen Rapid Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-03"},"2103":{"display":"VivaChek Biotech (Hangzhou) Co., Ltd, VivaDiag Pro SARS-CoV-2 Ag Rapid Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-31"},"2104":{"display":"Nal von minden GmbH, NADAL COVID -19 Ag +Influenza A/B Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-31"},"2108":{"display":"AESKU.DIAGNOSTICS GmbH & Co. KG, AESKU.RAPID SARS-CoV-2","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-18"},"2109":{"display":"Shenzhen Lvshiyuan Biotechnology Co., Ltd., Green Spring SARS-CoV-2 Antigen-Rapid test-Set","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-31"},"2116":{"display":"PerGrande BioTech Development Co., Ltd., SARS-CoV-2 Antigen Detection Kit (Colloidal Gold Immunochromatographic Assay)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-31"},"2128":{"display":"Lumigenex (Suzhou) Co., Ltd, PocRoc®SARS-CoV-2 Antigen Rapid Test Kit (Colloidal Gold)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-31"},"2130":{"display":"Affimedix, Inc., TestNOW® - COVID-19 Antigen Test","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-05-31"},"2139":{"display":"HANGZHOU LYSUN BIOTECHNOLOGY CO., LTD., COVID-19 Antigen Rapid Test Device（Colloidal Gold）","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-01"},"2183":{"display":"Getein Biotech, Inc., One Step Test for SARS-CoV-2 Antigen (Colloidal Gold)","lang":"en","active":true,"system":"https://covid-19-diagnostics.jrc.ec.europa.eu/devices","version":"2021-06-16"}}}');

/***/ }),

/***/ 14496:
/*!*******************************************************!*\
  !*** ./src/assets/ehn-dcc-valuesets/test-result.json ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"valueSetId":"covid-19-lab-result","valueSetDate":"2021-04-27","valueSetValues":{"260373001":{"display":"Detected","lang":"en","active":true,"version":"http://snomed.info/sct/900000000000207008/version/20210131","system":"http://snomed.info/sct"},"260415000":{"display":"Not detected","lang":"en","active":true,"version":"http://snomed.info/sct/900000000000207008/version/20210131","system":"http://snomed.info/sct"}}}');

/***/ }),

/***/ 57626:
/*!*****************************************************!*\
  !*** ./src/assets/ehn-dcc-valuesets/test-type.json ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"valueSetId":"covid-19-lab-test-type","valueSetDate":"2021-04-27","valueSetValues":{"LP6464-4":{"display":"Nucleic acid amplification with probe detection","lang":"en","active":true,"version":"2.69","system":"http://loinc.org"},"LP217198-3":{"display":"Rapid immunoassay","lang":"en","active":true,"version":"2.69","system":"http://loinc.org"}}}');

/***/ }),

/***/ 25922:
/*!************************************************************!*\
  !*** ./src/assets/ehn-dcc-valuesets/vaccine-mah-manf.json ***!
  \************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"valueSetId":"vaccines-covid-19-auth-holders","valueSetDate":"2022-01-26","valueSetValues":{"ORG-100001699":{"display":"AstraZeneca AB","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""},"ORG-100030215":{"display":"Biontech Manufacturing GmbH","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""},"ORG-100001417":{"display":"Janssen-Cilag International","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""},"ORG-100031184":{"display":"Moderna Biotech Spain S.L.","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""},"ORG-100006270":{"display":"Curevac AG","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""},"ORG-100013793":{"display":"CanSino Biologics","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""},"ORG-100020693":{"display":"China Sinopharm International Corp. - Beijing location","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""},"ORG-100010771":{"display":"Sinopharm Weiqida Europe Pharmaceutical s.r.o. - Prague location","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""},"ORG-100024420":{"display":"Sinopharm Zhijun (Shenzhen) Pharmaceutical Co. Ltd. - Shenzhen location","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""},"ORG-100032020":{"display":"Novavax CZ a.s.","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""},"Gamaleya-Research-Institute":{"display":"Gamaleya Research Institute","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccinemanufacturer","version":"1.0"},"Vector-Institute":{"display":"Vector Institute","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccinemanufacturer","version":"1.0"},"Sinovac-Biotech":{"display":"Sinovac Biotech","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccinemanufacturer","version":"1.0"},"Bharat-Biotech":{"display":"Bharat Biotech","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccinemanufacturer","version":"1.0"},"ORG-100001981":{"display":"Serum Institute Of India Private Limited","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""},"Fiocruz":{"display":"Fiocruz","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccinemanufacturer","version":"1.3"},"ORG-100007893":{"display":"R-Pharm CJSC","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""},"Chumakov-Federal-Scientific-Center":{"display":"Chumakov Federal Scientific Center for Research and Development of Immune-and-Biological Products","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccinemanufacturer","version":"1.4"},"ORG-100023050":{"display":"Gulf Pharmaceutical Industries","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""},"CIGB":{"display":"Center for Genetic Engineering and Biotechnology","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccinemanufacturer","version":"1.5"},"Sinopharm-WIBP":{"display":"Sinopharm - Wuhan Institute of Biological Products","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccinemanufacturer","version":"1.5"},"ORG-100033914":{"display":"Medigen Vaccine Biologics Corporation","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""},"ORG-100000788":{"display":"Sanofi Pasteur","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""},"ORG-100036422":{"display":"Valneva France","lang":"en","active":true,"system":"https://spor.ema.europa.eu/v1/organisations","version":""}}}');

/***/ }),

/***/ 72946:
/*!*********************************************************************!*\
  !*** ./src/assets/ehn-dcc-valuesets/vaccine-medicinal-product.json ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"valueSetId":"vaccines-covid-19-names","valueSetDate":"2022-01-26","valueSetValues":{"EU/1/20/1528":{"display":"Comirnaty","lang":"en","active":true,"system":"https://ec.europa.eu/health/documents/community-register/html/","version":""},"EU/1/20/1507":{"display":"Spikevax","lang":"en","active":true,"system":"https://ec.europa.eu/health/documents/community-register/html/","version":""},"EU/1/21/1529":{"display":"Vaxzevria","lang":"en","active":true,"system":"https://ec.europa.eu/health/documents/community-register/html/","version":""},"EU/1/20/1525":{"display":"COVID-19 Vaccine Janssen","lang":"en","active":true,"system":"https://ec.europa.eu/health/documents/community-register/html/","version":""},"CVnCoV":{"display":"CVnCoV","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.0"},"NVX-CoV2373":{"display":"NVX-CoV2373 (deprecated)","lang":"en","active":false,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.0"},"Sputnik-V":{"display":"Sputnik-V","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.0"},"Convidecia":{"display":"Convidecia","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.0"},"EpiVacCorona":{"display":"EpiVacCorona","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.0"},"BBIBP-CorV":{"display":"BBIBP-CorV","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.0"},"Inactivated-SARS-CoV-2-Vero-Cell":{"display":"Inactivated SARS-CoV-2 (Vero Cell) (deprecated)","lang":"en","active":false,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.0"},"CoronaVac":{"display":"CoronaVac","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.0"},"Covaxin":{"display":"Covaxin (also known as BBV152 A, B, C)","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.0"},"Covishield":{"display":"Covishield (ChAdOx1_nCoV-19)","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.2"},"Covid-19-recombinant":{"display":"Covid-19 (recombinant)","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.3"},"R-COVI":{"display":"R-COVI","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.3"},"CoviVac":{"display":"CoviVac","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.4"},"Sputnik-Light":{"display":"Sputnik Light","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.4"},"Hayat-Vax":{"display":"Hayat-Vax","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.4"},"Abdala":{"display":"Abdala","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.5"},"WIBP-CorV":{"display":"WIBP-CorV","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.5"},"MVC-COV1901":{"display":"MVC COVID-19 vaccine","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.6"},"EU/1/21/1618":{"display":"Nuvaxovid","lang":"en","active":true,"system":"https://ec.europa.eu/health/documents/community-register/html/","version":""},"Covovax":{"display":"Covovax","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.8"},"Vidprevtyn":{"display":"Vidprevtyn","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.8"},"VLA2001":{"display":"VLA2001","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.8"},"EpiVacCorona-N":{"display":"EpiVacCorona-N","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.8"},"Sputnik-M":{"display":"Sputnik M","lang":"en","active":true,"system":"http://ec.europa.eu/temp/vaccineproductname","version":"1.8"}}}');

/***/ }),

/***/ 83513:
/*!***************************************************************!*\
  !*** ./src/assets/ehn-dcc-valuesets/vaccine-prophylaxis.json ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"valueSetId":"sct-vaccines-covid-19","valueSetDate":"2021-04-27","valueSetValues":{"1119305005":{"display":"SARS-CoV-2 antigen vaccine","lang":"en","active":true,"version":"http://snomed.info/sct/900000000000207008/version/20210131","system":"http://snomed.info/sct"},"1119349007":{"display":"SARS-CoV-2 mRNA vaccine","lang":"en","active":true,"version":"http://snomed.info/sct/900000000000207008/version/20210131","system":"http://snomed.info/sct"},"J07BX03":{"display":"covid-19 vaccines","lang":"en","active":true,"version":"2021-01","system":"http://www.whocc.no/atc"}}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map