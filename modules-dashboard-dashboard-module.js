(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-module"],{

/***/ "./src/app/modules/dashboard/api/dashboard-properties/dashboard-properties.mapper.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/dashboard/api/dashboard-properties/dashboard-properties.mapper.ts ***!
  \*******************************************************************************************/
/*! exports provided: propertiesDashboardBuilderUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertiesDashboardBuilderUI", function() { return propertiesDashboardBuilderUI; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function propertiesDashboardBuilderUI(properties) {
    return properties.map(function (property) {
        return __assign({}, property);
    });
}


/***/ }),

/***/ "./src/app/modules/dashboard/api/dashboard-properties/dashboard-properties.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/dashboard/api/dashboard-properties/dashboard-properties.service.ts ***!
  \********************************************************************************************/
/*! exports provided: DashboardPropertiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPropertiesService", function() { return DashboardPropertiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_utilities_formatEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/utilities/formatEmail */ "./src/app/shared/utilities/formatEmail.ts");
/* harmony import */ var _dashboard_properties_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-properties.mapper */ "./src/app/modules/dashboard/api/dashboard-properties/dashboard-properties.mapper.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/environment */ "./src/environment/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
var DashboardPropertiesService = /** @class */ (function () {
    function DashboardPropertiesService(_http) {
        this._http = _http;
    }
    DashboardPropertiesService.prototype.getProperties = function (userName, data) {
        return this._http
            .post(baseUrl + "/users/" + Object(_shared_utilities_formatEmail__WEBPACK_IMPORTED_MODULE_3__["format"])(userName) + "/properties-table", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_dashboard_properties_mapper__WEBPACK_IMPORTED_MODULE_4__["propertiesDashboardBuilderUI"]));
    };
    DashboardPropertiesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardPropertiesService);
    return DashboardPropertiesService;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/api/index.ts":
/*!************************************************!*\
  !*** ./src/app/modules/dashboard/api/index.ts ***!
  \************************************************/
/*! exports provided: Api, PortfolioService, PreorderDashboardService, DashboardPropertiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var _portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio/portfolio.service */ "./src/app/modules/dashboard/api/portfolio/portfolio.service.ts");
/* harmony import */ var _preorder_dashboard_preorder_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preorder-dashboard/preorder-dashboard.service */ "./src/app/modules/dashboard/api/preorder-dashboard/preorder-dashboard.service.ts");
/* harmony import */ var _dashboard_properties_dashboard_properties_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-properties/dashboard-properties.service */ "./src/app/modules/dashboard/api/dashboard-properties/dashboard-properties.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return _portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_0__["PortfolioService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreorderDashboardService", function() { return _preorder_dashboard_preorder_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["PreorderDashboardService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardPropertiesService", function() { return _dashboard_properties_dashboard_properties_service__WEBPACK_IMPORTED_MODULE_2__["DashboardPropertiesService"]; });




var Api = [
    _portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_0__["PortfolioService"],
    _preorder_dashboard_preorder_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["PreorderDashboardService"],
    _dashboard_properties_dashboard_properties_service__WEBPACK_IMPORTED_MODULE_2__["DashboardPropertiesService"]
];





/***/ }),

/***/ "./src/app/modules/dashboard/api/portfolio/portfolio.mapper.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/dashboard/api/portfolio/portfolio.mapper.ts ***!
  \*********************************************************************/
/*! exports provided: portfolioGraphBuilderUI, portfolioAssetPerformanceUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portfolioGraphBuilderUI", function() { return portfolioGraphBuilderUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portfolioAssetPerformanceUI", function() { return portfolioAssetPerformanceUI; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function portfolioGraphBuilderUI(values) {
    return __assign({}, values);
}
function portfolioAssetPerformanceUI(values) {
    return __assign({}, values);
}


/***/ }),

/***/ "./src/app/modules/dashboard/api/portfolio/portfolio.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/dashboard/api/portfolio/portfolio.service.ts ***!
  \**********************************************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environment/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_utilities_formatEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/utilities/formatEmail */ "./src/app/shared/utilities/formatEmail.ts");
/* harmony import */ var _portfolio_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio.mapper */ "./src/app/modules/dashboard/api/portfolio/portfolio.mapper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PortfolioService = /** @class */ (function () {
    function PortfolioService(_http) {
        this._http = _http;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    PortfolioService.prototype.getPortfolioValue = function (userName, params) {
        return this._http
            .post(this.baseUrl + "/users/" + Object(_shared_utilities_formatEmail__WEBPACK_IMPORTED_MODULE_4__["format"])(userName) + "/portfolio-value", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_portfolio_mapper__WEBPACK_IMPORTED_MODULE_5__["portfolioGraphBuilderUI"]));
    };
    PortfolioService.prototype.getAssetPerformance = function (userName, params) {
        return this._http
            .post(this.baseUrl + "/users/" + Object(_shared_utilities_formatEmail__WEBPACK_IMPORTED_MODULE_4__["format"])(userName) + "/asset-performance", params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_portfolio_mapper__WEBPACK_IMPORTED_MODULE_5__["portfolioAssetPerformanceUI"]));
    };
    PortfolioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PortfolioService);
    return PortfolioService;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/api/preorder-dashboard/preorder-dashboard.mapper.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/dashboard/api/preorder-dashboard/preorder-dashboard.mapper.ts ***!
  \***************************************************************************************/
/*! exports provided: preorderDashboardBuilderUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preorderDashboardBuilderUI", function() { return preorderDashboardBuilderUI; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function preorderDashboardBuilderUI(details) {
    return __assign({}, details);
}


/***/ }),

/***/ "./src/app/modules/dashboard/api/preorder-dashboard/preorder-dashboard.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/dashboard/api/preorder-dashboard/preorder-dashboard.service.ts ***!
  \****************************************************************************************/
/*! exports provided: PreorderDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreorderDashboardService", function() { return PreorderDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environment/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _preorder_dashboard_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preorder-dashboard.mapper */ "./src/app/modules/dashboard/api/preorder-dashboard/preorder-dashboard.mapper.ts");
/* harmony import */ var _shared_utilities_formatEmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/utilities/formatEmail */ "./src/app/shared/utilities/formatEmail.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PreorderDashboardService = /** @class */ (function () {
    function PreorderDashboardService(_http) {
        this._http = _http;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    PreorderDashboardService.prototype.getPreOrderDetails = function (userName) {
        return this._http
            .get(this.baseUrl + "/users/" + Object(_shared_utilities_formatEmail__WEBPACK_IMPORTED_MODULE_5__["format"])(userName) + "/temp-dashboard")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_preorder_dashboard_mapper__WEBPACK_IMPORTED_MODULE_4__["preorderDashboardBuilderUI"]));
    };
    PreorderDashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PreorderDashboardService);
    return PreorderDashboardService;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/components/add-funds-banner/add-funds-banner.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/add-funds-banner/add-funds-banner.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"welcome-alert-container\"\r\n  *ngIf=\"\r\n    isNoCurrentValue && verificationStatus === VERIFICATION_STATUS.APPROVED\r\n  \"\r\n>\r\n  <div class=\"left\">\r\n    <div class=\"icon-info\"><i class=\"fa fa-info\"></i></div>\r\n    <span>\r\n      Welcome {{ firstName }}! Please get started by depositing funds, so that\r\n      you have available funds to purchase parts.\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"right\" (click)=\"showAddFundsModal($event)\">\r\n    <i class=\"fa fa-plus\"></i>Add Funds\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/dashboard/components/add-funds-banner/add-funds-banner.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/add-funds-banner/add-funds-banner.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-alert-container {\n  background-color: rgba(16, 207, 189, 0.1);\n  padding: 15px;\n  border-radius: 2px;\n  display: inline-block;\n  width: 100%;\n  margin: 15px 0; }\n  .welcome-alert-container > .left {\n    display: inline-flex;\n    align-items: center;\n    font-size: 13px;\n    color: #0a7c71;\n    height: 42px; }\n  .welcome-alert-container > .left > .icon-info {\n      width: 14px;\n      height: 14px;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 10px;\n      color: white;\n      background-color: #10cfbd;\n      border-radius: 2px;\n      margin-right: 10px; }\n  .welcome-alert-container .right {\n    float: right;\n    font-size: 14px;\n    color: #ffffff;\n    text-align: center;\n    font-weight: bold;\n    background-color: #10cfbd;\n    padding: 10px 25px;\n    border-radius: 2px;\n    cursor: pointer;\n    display: inline-flex;\n    justify-content: center; }\n  .welcome-alert-container .right > i {\n      font-size: 16px;\n      padding: 3px 8px 3px 0; }\n  @media (max-width: 426px) {\n  .welcome-alert-container > .left {\n    font-size: 12px;\n    line-height: 15px;\n    margin-bottom: 0;\n    height: 55px;\n    align-items: normal; }\n    .welcome-alert-container > .left > .icon-info {\n      padding: 8px; }\n  .welcome-alert-container .right {\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/modules/dashboard/components/add-funds-banner/add-funds-banner.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/add-funds-banner/add-funds-banner.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddFundsBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFundsBannerComponent", function() { return AddFundsBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _shared_components_modals_add_funds_add_funds_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/modals/add-funds/add-funds.component */ "./src/app/shared/components/modals/add-funds/add-funds.component.ts");
/* harmony import */ var _shared_services_current_user_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/current-user/current-user.service */ "./src/app/shared/services/current-user/current-user.service.ts");
/* harmony import */ var _shared_constants_verification_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/constants/verification-status */ "./src/app/shared/constants/verification-status.ts");
/* harmony import */ var _shared_services_drag_and_drop_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/drag-and-drop/drag-and-drop.service */ "./src/app/shared/services/drag-and-drop/drag-and-drop.service.ts");
/* harmony import */ var _shared_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/modal/modal.service */ "./src/app/shared/services/modal/modal.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services */ "./src/app/shared/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddFundsBannerComponent = /** @class */ (function () {
    function AddFundsBannerComponent(_dragAndDropService, bsModalService, _currentUserService, _modalService, _validationShared) {
        var _this = this;
        this._dragAndDropService = _dragAndDropService;
        this.bsModalService = bsModalService;
        this._currentUserService = _currentUserService;
        this._modalService = _modalService;
        this._validationShared = _validationShared;
        this.VERIFICATION_STATUS = _shared_constants_verification_status__WEBPACK_IMPORTED_MODULE_4__["VERIFICATION_STATUS"];
        this.modalConfig = {
            ignoreBackdropClick: true,
            class: 'modal-lg plaid-modal'
        };
        this.isNoCurrentValue = false;
        this._dragAndDropService.showingAddFundsBanner.subscribe(function (status) {
            _this.isNoCurrentValue = status;
        });
    }
    AddFundsBannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._currentUserService.loanUserInfo().then(function () {
            _this.firstName = _this._currentUserService.getUserInfo().firstName;
            _this.verificationStatus = _this._currentUserService.getUserInfo().verificationStatus;
        });
    };
    AddFundsBannerComponent.prototype.showAddFundsModal = function (e) {
        e.preventDefault();
        var isAccreditedInvestor = this._currentUserService.getUserInfo().isAccreditedInvestor;
        if (!isAccreditedInvestor) {
            this._validationShared.openWarningForNonAccredited();
            return;
        }
        this.modalRef = this._modalService.modalInstance(_shared_components_modals_add_funds_add_funds_component__WEBPACK_IMPORTED_MODULE_2__["AddFundsComponent"], this.modalConfig);
    };
    AddFundsBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-funds-banner',
            template: __webpack_require__(/*! ./add-funds-banner.component.html */ "./src/app/modules/dashboard/components/add-funds-banner/add-funds-banner.component.html"),
            styles: [__webpack_require__(/*! ./add-funds-banner.component.scss */ "./src/app/modules/dashboard/components/add-funds-banner/add-funds-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_drag_and_drop_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_5__["DragAndDropService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _shared_services_current_user_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"],
            _shared_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_7__["ValidationSharedService"]])
    ], AddFundsBannerComponent);
    return AddFundsBannerComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/components/investor-verification-banner/investor-verification-banner.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/investor-verification-banner/investor-verification-banner.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"welcome-alert-container\"\r\n  *ngIf=\"verificationStatus !== VERIFICATION_STATUS.APPROVED\"\r\n>\r\n  <div class=\"left\">\r\n    <div class=\"icon-info\"><i class=\"fa fa-info\"></i></div>\r\n    <span\r\n      *ngIf=\"\r\n        verificationStatus === VERIFICATION_STATUS.NONE ||\r\n        verificationStatus === VERIFICATION_STATUS.NOT_APPROVED ||\r\n        verificationStatus === VERIFICATION_STATUS.DRAFT ||\r\n        verificationStatus === VERIFICATION_STATUS.FAILED\r\n      \"\r\n    >\r\n      Welcome {{ firstName }}! We will need to verify your status as an\r\n      Accredited Investor. In order to do so please upload required documents.\r\n    </span>\r\n    <span *ngIf=\"verificationStatus === VERIFICATION_STATUS.PENDING\">\r\n      Welcome {{ firstName }}! Thank you for submitting your Accredited Investor\r\n      documents, our team will review these and contact you should any more\r\n      information be required.</span\r\n    >\r\n  </div>\r\n\r\n  <div\r\n    class=\"right\"\r\n    *ngIf=\"\r\n      verificationStatus === VERIFICATION_STATUS.NONE ||\r\n      verificationStatus === VERIFICATION_STATUS.NOT_APPROVED ||\r\n      verificationStatus === VERIFICATION_STATUS.DRAFT ||\r\n      verificationStatus === VERIFICATION_STATUS.FAILED\r\n    \"\r\n    (click)=\"showUploadDocumentsModal($event)\"\r\n  >\r\n    <i class=\"fa fa-plus\"></i>Upload Documents\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/dashboard/components/investor-verification-banner/investor-verification-banner.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/investor-verification-banner/investor-verification-banner.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-alert-container {\n  background-color: rgba(16, 207, 189, 0.1);\n  padding: 15px;\n  border-radius: 2px;\n  display: inline-block;\n  width: 100%;\n  margin: 15px 0; }\n  .welcome-alert-container > .left {\n    display: inline-flex;\n    align-items: center;\n    font-size: 13px;\n    color: #0a7c71;\n    height: 42px; }\n  .welcome-alert-container > .left > .icon-info {\n      width: 14px;\n      height: 14px;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 10px;\n      color: white;\n      background-color: #10cfbd;\n      border-radius: 2px;\n      margin-right: 10px; }\n  .welcome-alert-container .right {\n    float: right;\n    font-size: 14px;\n    color: #ffffff;\n    text-align: center;\n    font-weight: bold;\n    background-color: #10cfbd;\n    padding: 10px 25px;\n    border-radius: 2px;\n    cursor: pointer;\n    display: inline-flex;\n    justify-content: center; }\n  .welcome-alert-container .right > i {\n      font-size: 16px;\n      padding: 3px 8px 3px 0; }\n  @media (max-width: 426px) {\n  .welcome-alert-container > .left {\n    font-size: 12px;\n    line-height: 15px;\n    margin-bottom: 0;\n    height: 55px;\n    align-items: normal; }\n    .welcome-alert-container > .left > .icon-info {\n      padding: 8px; }\n  .welcome-alert-container .right {\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/modules/dashboard/components/investor-verification-banner/investor-verification-banner.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/investor-verification-banner/investor-verification-banner.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: InvestorVerificationBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorVerificationBannerComponent", function() { return InvestorVerificationBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_verification_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/verification-status */ "./src/app/shared/constants/verification-status.ts");
/* harmony import */ var _shared_services_drag_and_drop_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/drag-and-drop/drag-and-drop.service */ "./src/app/shared/services/drag-and-drop/drag-and-drop.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _shared_components_modals_investor_verification_investor_verification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/modals/investor-verification/investor-verification.component */ "./src/app/shared/components/modals/investor-verification/investor-verification.component.ts");
/* harmony import */ var _shared_services_current_user_current_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/current-user/current-user.service */ "./src/app/shared/services/current-user/current-user.service.ts");
/* harmony import */ var _shared_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/modal/modal.service */ "./src/app/shared/services/modal/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InvestorVerificationBannerComponent = /** @class */ (function () {
    function InvestorVerificationBannerComponent(_dragAndDropService, bsModalService, _currentUserService, _modalService) {
        var _this = this;
        this._dragAndDropService = _dragAndDropService;
        this.bsModalService = bsModalService;
        this._currentUserService = _currentUserService;
        this._modalService = _modalService;
        this.VERIFICATION_STATUS = _shared_constants_verification_status__WEBPACK_IMPORTED_MODULE_1__["VERIFICATION_STATUS"];
        this.modalConfig = {
            ignoreBackdropClick: true,
            class: 'modal-lg'
        };
        this._dragAndDropService.updatingVerificationStatus.subscribe(function (status) {
            _this.verificationStatus = status;
        });
    }
    InvestorVerificationBannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.verificationStatus = _shared_constants_verification_status__WEBPACK_IMPORTED_MODULE_1__["VERIFICATION_STATUS"].APPROVED;
        this._currentUserService.loanUserInfo().then(function () {
            _this.firstName = _this._currentUserService.getUserInfo().firstName;
            var status = _this._currentUserService.getUserInfo().verificationStatus;
            _this.verificationStatus = !!status ? status : _shared_constants_verification_status__WEBPACK_IMPORTED_MODULE_1__["VERIFICATION_STATUS"].NONE;
        });
    };
    InvestorVerificationBannerComponent.prototype.showUploadDocumentsModal = function (e) {
        e.preventDefault();
        this.modalRef = this._modalService.modalInstance(_shared_components_modals_investor_verification_investor_verification_component__WEBPACK_IMPORTED_MODULE_4__["InvestorVerificationComponent"], this.modalConfig);
    };
    InvestorVerificationBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'investor-verification-banner',
            template: __webpack_require__(/*! ./investor-verification-banner.component.html */ "./src/app/modules/dashboard/components/investor-verification-banner/investor-verification-banner.component.html"),
            styles: [__webpack_require__(/*! ./investor-verification-banner.component.scss */ "./src/app/modules/dashboard/components/investor-verification-banner/investor-verification-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_drag_and_drop_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_2__["DragAndDropService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _shared_services_current_user_current_user_service__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"],
            _shared_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]])
    ], InvestorVerificationBannerComponent);
    return InvestorVerificationBannerComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: routes, DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/layouts */ "./src/app/@pages/layouts/index.ts");
/* harmony import */ var _pages_my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/my-properties/my-properties.component */ "./src/app/modules/dashboard/pages/my-properties/my-properties.component.ts");
/* harmony import */ var _shared_components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/my-profile/my-profile.component */ "./src/app/shared/components/my-profile/my-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _pages_layouts__WEBPACK_IMPORTED_MODULE_2__["ExecutiveLayout"],
        data: { module: 'dashboard' },
        children: [
            // { path: '', redirectTo: 'portfolio', pathMatch: 'full' }, // commented for the promo period
            { path: '', redirectTo: 'properties', pathMatch: 'full' },
            // {
            //   path: 'portfolio',
            //   component: PortfolioComponent,
            //   data: { pageTitle: 'Partbnb - My Portfolio', pageName: 'My Portfolio' }
            // }, // uncommented for development of this particular page
            {
                path: 'properties',
                component: _pages_my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_3__["MyPropertiesComponent"],
                data: {
                    pageTitle: 'Partbnb - My Properties',
                    pageName: 'My Properties'
                }
            },
            // {
            //   path: 'wallet',
            //   component: WalletComponent,
            //   data: {
            //     pageTitle: 'Partbnb - My Wallet',
            //     pageName: 'My Wallet'
            //   }
            // },
            {
                path: 'my-profile',
                component: _shared_components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__["MyProfileComponent"],
                data: {
                    pageTitle: 'Partbnb - My Profile',
                    pageName: 'My Profile'
                }
            },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/modules/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/components/shared.module */ "./src/app/@pages/components/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/shared-app.module */ "./src/app/shared/shared-app.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pages/pages.module */ "./src/app/@pages/pages.module.ts");
/* harmony import */ var _pages_components_select_select_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pages/components/select/select.module */ "./src/app/@pages/components/select/select.module.ts");
/* harmony import */ var _pages_components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pages/components/tabs/tabs.module */ "./src/app/@pages/components/tabs/tabs.module.ts");
/* harmony import */ var ngx_plaid_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-plaid-link */ "./node_modules/ngx-plaid-link/fesm5/ngx-plaid-link.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api */ "./src/app/modules/dashboard/api/index.ts");
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ "./src/app/modules/dashboard/pages/portfolio/portfolio.component.ts");
/* harmony import */ var _pages_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/wallet/wallet.component */ "./src/app/modules/dashboard/pages/wallet/wallet.component.ts");
/* harmony import */ var _pages_preorder_dashboard_preorder_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/preorder-dashboard/preorder-dashboard.component */ "./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.ts");
/* harmony import */ var _pages_my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/my-properties/my-properties.component */ "./src/app/modules/dashboard/pages/my-properties/my-properties.component.ts");
/* harmony import */ var _components_investor_verification_banner_investor_verification_banner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/investor-verification-banner/investor-verification-banner.component */ "./src/app/modules/dashboard/components/investor-verification-banner/investor-verification-banner.component.ts");
/* harmony import */ var _components_add_funds_banner_add_funds_banner_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/add-funds-banner/add-funds-banner.component */ "./src/app/modules/dashboard/components/add-funds-banner/add-funds-banner.component.ts");
/* harmony import */ var _pages_book_to_stay_book_to_stay_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/book-to-stay/book-to-stay.component */ "./src/app/modules/dashboard/pages/book-to-stay/book-to-stay.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _shared_shared_app_module__WEBPACK_IMPORTED_MODULE_6__["SharedAppModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"],
                _pages_components_select_select_module__WEBPACK_IMPORTED_MODULE_8__["pgSelectModule"],
                _pages_components_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_9__["pgTabsModule"],
                ngx_plaid_link__WEBPACK_IMPORTED_MODULE_10__["NgxPlaidLinkModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            declarations: [
                _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"],
                _pages_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_13__["WalletComponent"],
                _pages_preorder_dashboard_preorder_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["PreorderDashboardComponent"],
                _pages_my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_15__["MyPropertiesComponent"],
                _components_investor_verification_banner_investor_verification_banner_component__WEBPACK_IMPORTED_MODULE_16__["InvestorVerificationBannerComponent"],
                _components_add_funds_banner_add_funds_banner_component__WEBPACK_IMPORTED_MODULE_17__["AddFundsBannerComponent"],
                _pages_book_to_stay_book_to_stay_component__WEBPACK_IMPORTED_MODULE_18__["BookToStayComponent"]
            ],
            exports: [_components_investor_verification_banner_investor_verification_banner_component__WEBPACK_IMPORTED_MODULE_16__["InvestorVerificationBannerComponent"]],
            providers: _api__WEBPACK_IMPORTED_MODULE_11__["Api"].slice()
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/pages/book-to-stay/book-to-stay.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/book-to-stay/book-to-stay.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"properties-head-container\">\r\n  <div class=\"container\">\r\n    <div class=\"title\" [ngClass]=\"{ 'collapse-filter': filterCollapse }\">\r\n      <h2>Book to Stay</h2>\r\n    </div>\r\n    <icon-filter\r\n      class=\"svg-filter d-xl-none d-lg-none d-md-none d-block\"\r\n      (click)=\"toggleFilter()\"\r\n    ></icon-filter>\r\n    <div\r\n      class=\"properties-buttons-wrapper row collapse\"\r\n      [ngClass]=\"{ show: !filterCollapse }\"\r\n    >\r\n      <div class=\"button-col col-12 col-sm-12 col-md-5\">\r\n        <pg-select\r\n          class=\"button-col-item\"\r\n          [(ngModel)]=\"countrySortSelected\"\r\n          [PlaceHolder]=\"'Select Country'\"\r\n          (ngModelChange)=\"\r\n            updatePropertiesFilter(countrySortSelected, latestListingSelected)\r\n          \"\r\n        >\r\n          <pg-option\r\n            *ngFor=\"let option of countrySortOptions\"\r\n            [Label]=\"option.countryName\"\r\n            [Value]=\"option.countryId\"\r\n            [Disabled]=\"option.disabled\"\r\n          >\r\n          </pg-option>\r\n        </pg-select>\r\n      </div>\r\n      <div class=\"button-col col-6 col-sm-6 col-md-4\">\r\n        <pg-select\r\n          class=\"button-col-item\"\r\n          [(ngModel)]=\"latestListingSelected\"\r\n          [PlaceHolder]=\"'Latest Listing'\"\r\n          (ngModelChange)=\"\r\n            updatePropertiesFilter(countrySortSelected, latestListingSelected)\r\n          \"\r\n        >\r\n          <pg-option\r\n            *ngFor=\"let option of latestListingOptions\"\r\n            [Label]=\"option.label\"\r\n            [Value]=\"option.value\"\r\n            [Disabled]=\"option.disabled\"\r\n          >\r\n          </pg-option>\r\n        </pg-select>\r\n      </div>\r\n      <div class=\"button-col map-btn col-6 col-sm-6 col-md-3\">\r\n        <button\r\n          class=\"btn btn-cons button-col-item\"\r\n          (click)=\"mapClose = !mapClose\"\r\n          [ngClass]=\"{ 'btn-success': !mapClose }\"\r\n        >\r\n          <icon-eye *ngIf=\"mapClose\"></icon-eye>\r\n          <icon-eye-close *ngIf=\"!mapClose\"></icon-eye-close>\r\n          {{ mapClose ? 'Show' : 'Hide' }} Map\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"google-map-wrapper\" [ngClass]=\"mapClose ? 'map-close' : 'map-open'\">\r\n  <div class=\"container\" *ngIf=\"propertiesForMap\">\r\n    <google-map\r\n      [PropertyLocations]=\"propertiesForMap\"\r\n      [IsForPropertyDetails]=\"isForPropertyDetails\"\r\n    ></google-map>\r\n  </div>\r\n</div>\r\n<div class=\"properties-content\" [ngClass]=\"{ 'mt-2': !mapClose }\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div\r\n        class=\"col-lg-4 col-md-6 col-sm-12 col-12 property-card-wrapper\"\r\n        *ngFor=\"let property of properties\"\r\n      >\r\n        <div\r\n          class=\"property-card\"\r\n          [ngClass]=\"{\r\n            'coming-soon': isPropertyComingSoon(property.propertyListingTypeId)\r\n          }\"\r\n        >\r\n          <div\r\n            class=\"property-image\"\r\n            setImage=\"{{ property.mainImageUrl }}\"\r\n            (click)=\"bookNow(property.bookingUrl)\"\r\n          ></div>\r\n          <div\r\n            class=\"coming-flag-wrapper\"\r\n            *ngIf=\"isPropertyComingSoon(property.propertyListingTypeId)\"\r\n          >\r\n            <div class=\"coming-flag\">\r\n              <icon-hour-glass class=\"icon-md\"></icon-hour-glass> Coming Soon...\r\n            </div>\r\n          </div>\r\n          <div class=\"property-details\">\r\n            <div class=\"property-name\">\r\n              <img\r\n                class=\"property-flag\"\r\n                [src]=\"baseUrl + property.flagImagePath\"\r\n                alt=\"\"\r\n              />\r\n              <div class=\"name\">\r\n                <span>{{ property.countryName }}</span>\r\n                <p>{{ property.propertyName }}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"place-details\">\r\n              <div\r\n                class=\"detail-wrapper\"\r\n                [ngStyle]=\"{\r\n                  backgroundColor: isPropertyComingSoon(\r\n                    property.propertyListingTypeId\r\n                  )\r\n                    ? 'rgba(44, 44, 44, 0.4)'\r\n                    : '#6580b6'\r\n                }\"\r\n              >\r\n                <icon-home-white\r\n                  class=\"icon\"\r\n                  [ngStyle]=\"{\r\n                    visibility: isPropertyComingSoon(\r\n                      property.propertyListingTypeId\r\n                    )\r\n                      ? 'hidden'\r\n                      : 'visible'\r\n                  }\"\r\n                ></icon-home-white>\r\n                <span\r\n                  [ngStyle]=\"{\r\n                    visibility: isPropertyComingSoon(\r\n                      property.propertyListingTypeId\r\n                    )\r\n                      ? 'hidden'\r\n                      : 'visible'\r\n                  }\"\r\n                  >{{ property.propertyTypeName }}\r\n                </span>\r\n              </div>\r\n              <div\r\n                class=\"detail-wrapper\"\r\n                [ngStyle]=\"{\r\n                  backgroundColor: isPropertyComingSoon(\r\n                    property.propertyListingTypeId\r\n                  )\r\n                    ? 'rgba(44, 44, 44, 0.4)'\r\n                    : '#6580b6'\r\n                }\"\r\n              >\r\n                <icon-bed-white\r\n                  class=\"icon\"\r\n                  [ngStyle]=\"{\r\n                    visibility: isPropertyComingSoon(\r\n                      property.propertyListingTypeId\r\n                    )\r\n                      ? 'hidden'\r\n                      : 'visible'\r\n                  }\"\r\n                ></icon-bed-white>\r\n                <span\r\n                  [ngStyle]=\"{\r\n                    visibility: isPropertyComingSoon(\r\n                      property.propertyListingTypeId\r\n                    )\r\n                      ? 'hidden'\r\n                      : 'visible'\r\n                  }\"\r\n                  >{{ property.noOfBedrooms }} Beds</span\r\n                >\r\n              </div>\r\n              <div\r\n                class=\"detail-wrapper\"\r\n                [ngStyle]=\"{\r\n                  backgroundColor: isPropertyComingSoon(\r\n                    property.propertyListingTypeId\r\n                  )\r\n                    ? 'rgba(44, 44, 44, 0.4)'\r\n                    : '#6580b6'\r\n                }\"\r\n              >\r\n                <icon-bath-white\r\n                  class=\"icon\"\r\n                  [ngStyle]=\"{\r\n                    visibility: isPropertyComingSoon(\r\n                      property.propertyListingTypeId\r\n                    )\r\n                      ? 'hidden'\r\n                      : 'visible'\r\n                  }\"\r\n                ></icon-bath-white>\r\n                <span\r\n                  [ngStyle]=\"{\r\n                    visibility: isPropertyComingSoon(\r\n                      property.propertyListingTypeId\r\n                    )\r\n                      ? 'hidden'\r\n                      : 'visible'\r\n                  }\"\r\n                  >{{ property.noOfBathrooms }} Baths</span\r\n                >\r\n              </div>\r\n            </div>\r\n            <div class=\"location-summary\">\r\n              <span\r\n                *ngIf=\"!isPropertyComingSoon(property.propertyListingTypeId)\"\r\n                >{{ property.locationSummary }}</span\r\n              >\r\n              <div\r\n                class=\"blank-wrapper\"\r\n                *ngIf=\"isPropertyComingSoon(property.propertyListingTypeId)\"\r\n              >\r\n                <div class=\"full-width\"></div>\r\n                <div class=\"full-width\"></div>\r\n                <div class=\"half-width\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"funds\" [ngClass]=\"{ empty: !property.bookingUrl }\">\r\n              <div class=\"flex\">\r\n                <div class=\"item centered\">\r\n                  <label>Activities</label>\r\n                </div>\r\n                <div class=\"item value\">\r\n                  <span\r\n                    *ngIf=\"\r\n                      !isPropertyComingSoon(property.propertyListingTypeId) &&\r\n                      property.bookingUrl\r\n                    \"\r\n                  >\r\n                    {{ property.activities }}\r\n                  </span>\r\n                  <span\r\n                    class=\"badge badge-secondary blank darker\"\r\n                    *ngIf=\"\r\n                      isPropertyComingSoon(property.propertyListingTypeId) ||\r\n                      !property.bookingUrl\r\n                    \"\r\n                  >\r\n                    blanks\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"flex\">\r\n                <div class=\"item centered\">\r\n                  <label>Rate per Night</label>\r\n                </div>\r\n                <div class=\"item value\">\r\n                  <span\r\n                    *ngIf=\"\r\n                      !isPropertyComingSoon(property.propertyListingTypeId) &&\r\n                      property.bookingUrl\r\n                    \"\r\n                  >\r\n                    ${{ property.bookingRatePerNightMin }} - $\r\n                    {{ property.bookingRatePerNightMax }}\r\n                  </span>\r\n                  <span\r\n                    class=\"badge badge-secondary blank darker\"\r\n                    *ngIf=\"\r\n                      isPropertyComingSoon(property.propertyListingTypeId) ||\r\n                      !property.bookingUrl\r\n                    \"\r\n                  >\r\n                    blank\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"flex\">\r\n                <div class=\"item centered\"><label>Customer Ratings</label></div>\r\n                <div class=\"item value ttip\">\r\n                  <span\r\n                    class=\"tooltiptext\"\r\n                    *ngIf=\"\r\n                      !isPropertyComingSoon(property.propertyListingTypeId)\r\n                    \"\r\n                    >{{ property.customerRating }}</span\r\n                  >\r\n                  <span class=\"tbc\">\r\n                    <i\r\n                      class=\" fa fa-{{ i }} star\"\r\n                      [ngClass]=\"{\r\n                        'disabled-star':\r\n                          isPropertyComingSoon(\r\n                            property.propertyListingTypeId\r\n                          ) || !property.bookingUrl\r\n                      }\"\r\n                      *ngFor=\"\r\n                        let i of customerRatingStars(\r\n                          isPropertyComingSoon(\r\n                            property.propertyListingTypeId\r\n                          ) || !property.bookingUrl\r\n                            ? 5\r\n                            : property.customerRating\r\n                        )\r\n                      \"\r\n                    ></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"buttons\">\r\n              <button\r\n                class=\"btn btn-success btn-cons\"\r\n                [ngClass]=\"{\r\n                  disabled:\r\n                    isPropertyComingSoon(property.propertyListingTypeId) ||\r\n                    !property.bookingUrl\r\n                }\"\r\n                (click)=\"bookNow(property.bookingUrl)\"\r\n                [ngStyle]=\"{\r\n                  border: isPropertyComingSoon(property.propertyListingTypeId)\r\n                    ? 'none'\r\n                    : 'initial'\r\n                }\"\r\n                [disabled]=\"\r\n                  isPropertyComingSoon(property.propertyListingTypeId) ||\r\n                  !property.bookingUrl\r\n                \"\r\n              >\r\n                Book Now\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/book-to-stay/book-to-stay.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/book-to-stay/book-to-stay.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  font-display: 'swap';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  font-display: 'swap';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  font-display: 'swap';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/assets/fonts/roboto/roboto-v20-latin-regular.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(\"/assets/fonts/roboto/roboto-v20-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/roboto/roboto-v20-latin-regular.woff\") format(\"woff\"), url(\"/assets/fonts/roboto/roboto-v20-latin-regular.ttf\") format(\"truetype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-regular.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n/* roboto-italic - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: url(\"/assets/fonts/roboto/roboto-v20-latin-italic.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Italic\"), local(\"Roboto-Italic\"), url(\"/assets/fonts/roboto/roboto-v20-latin-italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-italic.woff2\") format(\"woff2\"), url(\"/assets/fonts/roboto/roboto-v20-latin-italic.woff\") format(\"woff\"), url(\"/assets/fonts/roboto/roboto-v20-latin-italic.ttf\") format(\"truetype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-italic.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n/* roboto-500 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"/assets/fonts/roboto/roboto-v20-latin-500.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"/assets/fonts/roboto/roboto-v20-latin-500.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-500.woff2\") format(\"woff2\"), url(\"/assets/fonts/roboto/roboto-v20-latin-500.woff\") format(\"woff\"), url(\"/assets/fonts/roboto/roboto-v20-latin-500.ttf\") format(\"truetype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-500.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n/* roboto-700 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"/assets/fonts/roboto/roboto-v20-latin-700.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700.woff2\") format(\"woff2\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700.woff\") format(\"woff\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700.ttf\") format(\"truetype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n/* roboto-700italic - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold Italic\"), local(\"Roboto-BoldItalic\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.woff2\") format(\"woff2\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.woff\") format(\"woff\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.ttf\") format(\"truetype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n/* bradhitc */\n@font-face {\n  font-family: 'bradhitc';\n  font-style: normal;\n  src: url(\"/assets/fonts/bradhitc/bradhitc.ttf\") format(\"truetype\"); }\n/* anton */\n@font-face {\n  font-family: 'anton';\n  font-style: normal;\n  src: url(\"/assets/fonts/anton/Anton-Regular.ttf\") format(\"truetype\"); }\n/* anton */\n@font-face {\n  font-family: 'mansalva';\n  font-style: normal;\n  src: url(\"/assets/fonts/mansalva/Mansalva-Regular.ttf\") format(\"truetype\"); }\n/* raleway */\n@font-face {\n  font-family: 'raleway';\n  font-style: normal;\n  src: url(\"/assets/fonts/raleway/Raleway-Regular.ttf\") format(\"truetype\"); }\n.properties-head-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  min-height: 100px;\n  background-color: #fff; }\n.properties-head-container .svg-filter {\n    float: right;\n    position: relative;\n    top: 3px; }\n.properties-head-container .svg-filter svg {\n      width: 40px;\n      height: 40px; }\n.properties-head-container .container:first-child > .title {\n    float: left;\n    height: 100%;\n    align-items: center; }\n.properties-head-container .container:first-child > .title > h2 {\n      font-size: 24px;\n      font-weight: 400;\n      margin: 0; }\n.properties-head-container .container:first-child .properties-buttons-wrapper {\n    float: right;\n    height: 100%;\n    align-items: center;\n    min-width: 600px;\n    padding-right: 1em;\n    display: flex !important; }\n.properties-head-container .container:first-child .properties-buttons-wrapper > .button-col {\n      padding: 0; }\n.properties-head-container .container:first-child .properties-buttons-wrapper > .button-col > .pg-select {\n        width: 100%; }\n.properties-head-container .container:first-child .properties-buttons-wrapper > .map-btn {\n      padding-left: 5px; }\n.properties-head-container .container:first-child .properties-buttons-wrapper > .map-btn > button {\n        width: 100%;\n        line-height: 39px;\n        padding: 0; }\n.properties-head-container .container:first-child .properties-buttons-wrapper > button {\n      height: 40px;\n      width: 125px;\n      color: #626262;\n      font-size: 14px;\n      border-radius: 2px;\n      margin: 0 9px; }\n@media (max-width: 426px) {\n    .properties-head-container .title {\n      float: initial; }\n    .properties-head-container .properties-buttons-wrapper {\n      margin-top: 15px;\n      margin-bottom: 20px;\n      padding: 0 11px;\n      width: 100vw;\n      display: inline-flex !important;\n      min-width: unset !important;\n      float: left !important; }\n      .properties-head-container .properties-buttons-wrapper .button-col {\n        padding: 0; }\n        .properties-head-container .properties-buttons-wrapper .button-col.map-btn {\n          padding-right: 5px !important; }\n        .properties-head-container .properties-buttons-wrapper .button-col-item,\n        .properties-head-container .properties-buttons-wrapper .button-col button {\n          width: 100%; }\n          .properties-head-container .properties-buttons-wrapper .button-col-item div,\n          .properties-head-container .properties-buttons-wrapper .button-col button div {\n            margin: 0; }\n        .properties-head-container .properties-buttons-wrapper .button-col:first-child {\n          margin-bottom: 10px; } }\n@media (max-width: 768px) {\n  .properties-head-container {\n    min-height: unset;\n    padding: 0.5em 0 0.5em 0; }\n    .properties-head-container .container:first-child .properties-buttons-wrapper {\n      width: 100%;\n      float: left;\n      padding: 0;\n      margin: 0;\n      margin-top: 0px;\n      display: flex;\n      min-width: unset; }\n      .properties-head-container .container:first-child .properties-buttons-wrapper.collapse {\n        transition: max-height 1s;\n        overflow: hidden;\n        max-height: 0; }\n        .properties-head-container .container:first-child .properties-buttons-wrapper.collapse.show {\n          max-height: 300px; }\n      .properties-head-container .container:first-child .properties-buttons-wrapper .button-col:first-child {\n        margin-bottom: 10px; } }\n@media (min-width: 427px) and (max-width: 768px) {\n  .properties-content .property-card-wrapper .property-card-header h4 {\n    font-size: 12px !important; }\n  .properties-content .property-card-wrapper .property-image > .property-type-row .property-type {\n    font-size: 9px !important; }\n  .properties-content .property-card-wrapper .property-image > .property-type-row > p {\n    font-size: 10px; }\n  .properties-content .property-card-wrapper .property-details > div > .property-percent-value-text > div > p {\n    font-size: 9px !important; }\n  .properties-content .property-card-wrapper .property-details > div > .property-percent-value-text > p {\n    font-size: 9px !important; }\n  .properties-content .property-card-wrapper .property-details > div > .property-percent-value {\n    width: 100%;\n    min-width: unset !important;\n    font-size: 14px !important; }\n  .properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper > .btn:first-child {\n    width: 50%;\n    margin-left: -3px;\n    font-size: 12px;\n    padding: 0; }\n  .properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper > .btn:last-child {\n    width: 50%;\n    margin: 0;\n    font-size: 12px;\n    padding: 0; } }\n@media (max-width: 426px) {\n  .google-map-wrapper > .container {\n    padding: 0; } }\n@media (min-width: 427px) and (max-width: 575px) {\n  .google-map-wrapper > .container {\n    padding: 0; } }\n@media (min-width: 769px) and (max-width: 991px) {\n  .properties-head-container .container:first-child .properties-buttons-wrapper {\n    min-width: 500px;\n    padding-right: 1.7em; }\n  .google-map-wrapper > .container {\n    padding: 0 1.2em; } }\n.properties-content {\n  margin-bottom: 50px; }\n.properties-content .property-card-wrapper {\n    padding-top: 1em;\n    padding-bottom: 1em; }\n.properties-content .property-card-wrapper .property-card {\n      width: 100%;\n      display: flow-root !important; }\n.properties-content .property-card-wrapper .property-card .property-card-header {\n        width: 100%;\n        background-color: #fff;\n        padding: 1em;\n        display: flex;\n        border: 1px solid #e6e6e6;\n        border-radius: 2px 2px 0 0; }\n.properties-content .property-card-wrapper .property-card .property-card-header .property-card-header-img {\n          max-width: 35px;\n          max-height: 35px;\n          overflow: hidden;\n          border-radius: 50px; }\n.properties-content .property-card-wrapper .property-card .property-card-header .property-card-header-img img {\n            width: 100%; }\n.properties-content .property-card-wrapper .property-card .property-card-header h4 {\n          font-size: 16px;\n          font-weight: 700;\n          margin: 0 0 0 0.7em; }\n.properties-content .property-card-wrapper .property-image {\n      position: relative;\n      width: 100%;\n      height: 205px !important;\n      background-size: cover !important;\n      cursor: pointer; }\n.properties-content .property-card-wrapper .property-image:before {\n        content: '';\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        opacity: 0.9;\n        height: 50%; }\n.properties-content .property-card-wrapper .property-image > .property-funded-percent-wrapper {\n        text-align: right;\n        padding: 0.5em; }\n.properties-content .property-card-wrapper .property-image > .property-funded-percent-wrapper > .property-funded-percent {\n          display: inline-flex;\n          color: #fff;\n          font-size: 11px;\n          border-radius: 2px;\n          justify-content: center;\n          align-items: center;\n          height: 22px;\n          min-width: 85px;\n          padding: 0.3em 0.5em; }\n.properties-content .property-card-wrapper .property-image > .property-type-row {\n        display: flex;\n        align-items: center;\n        width: 100%;\n        position: absolute;\n        bottom: 0;\n        padding: 0.5em; }\n.properties-content .property-card-wrapper .property-image > .property-type-row .property-type {\n          display: flex;\n          color: #fff;\n          font-size: 11px;\n          background-color: #48b0f7;\n          border-radius: 2px;\n          height: 22px;\n          justify-content: center;\n          align-items: center;\n          min-width: 60px;\n          padding: 0.3em 0.5em;\n          text-transform: uppercase; }\n.properties-content .property-card-wrapper .property-image > .property-type-row > p {\n          margin: 0;\n          padding: 0 0.8em;\n          color: #fff; }\n.properties-content .property-card-wrapper .property-image > .property-type-row > .vertical-line {\n          height: 14px;\n          border-right: 1px solid #fff; }\n.properties-content .property-card-wrapper .property-details {\n      width: 100%;\n      margin: 0;\n      background-color: #fff; }\n.properties-content .property-card-wrapper .property-details > div {\n        text-align: center;\n        padding: 0.8em;\n        border-right: 1px solid #e6e6e6;\n        border-bottom: 1px solid #e6e6e6;\n        color: #2c2c2c; }\n.properties-content .property-card-wrapper .property-details > div > .property-percent-value-text {\n          min-height: 45px;\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n.properties-content .property-card-wrapper .property-details > div > .property-percent-value-text > div > p {\n            font-size: 11px;\n            margin: 0;\n            line-height: 1.5;\n            font-family: \"Roboto\", Arial, sans-serif; }\n.properties-content .property-card-wrapper .property-details > div > .property-percent-value-text > p {\n            font-size: 11px;\n            margin: 0;\n            line-height: 1.5;\n            font-family: \"Roboto\", Arial, sans-serif; }\n.properties-content .property-card-wrapper .property-details > div > .property-percent-value {\n          min-width: 75px;\n          height: 40px;\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          background: #f7f7f7;\n          font-size: 20px;\n          font-weight: 700;\n          font-family: \"Roboto\", Arial, sans-serif; }\n.properties-content .property-card-wrapper .property-pre-order-section {\n      background-color: #fff;\n      text-align: center;\n      padding: 0.8em;\n      border: 1px solid #e6e6e6;\n      border-top: 0;\n      border-radius: 0 0 2px 2px; }\n.properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper {\n        display: flex; }\n.properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper > .btn {\n          flex-grow: 1; }\n.properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper > .btn:first-child {\n            margin-right: 5px; }\n.properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper > .btn:last-child {\n            margin-left: 5px; }\n.properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper > .pre-order-btn {\n          height: 40px;\n          border: 0;\n          background: #6d5cae;\n          border-radius: 2px;\n          color: #fff;\n          font-size: 14px;\n          font-family: \"Roboto\", Arial, sans-serif; }\n.properties-content .property-card-wrapper .property-pre-order-section > .button-wrapper > .view-details-btn {\n          height: 40px;\n          background: #fff;\n          border-radius: 2px;\n          color: #5e5e5e;\n          font-size: 14px;\n          border: 1px solid #e6e6e6;\n          font-family: \"Roboto\", Arial, sans-serif; }\n.properties-content .property-card-wrapper .property-pre-order-section > .note-wrapper {\n        margin: 1em; }\n.properties-content .property-card-wrapper .property-pre-order-section > .note-wrapper > div {\n          display: inline-flex;\n          justify-content: center;\n          align-items: center; }\n.properties-content .property-card-wrapper .property-pre-order-section > .note-wrapper > div > i {\n            color: #f8d053;\n            font-size: 14px;\n            margin-right: 0.5em; }\n.properties-content .property-card-wrapper .property-pre-order-section > .note-wrapper > div > p {\n            margin: 0;\n            font-size: 12px;\n            font-style: italic;\n            line-height: 12px;\n            color: #626262;\n            font-family: \"Roboto\", Arial, sans-serif;\n            text-align: left; }\n.properties-content .property-card-wrapper .property-pre-order-section > .note-wrapper > p {\n          margin: 0;\n          font-size: 12px;\n          font-style: italic;\n          line-height: 12px;\n          font-family: \"Roboto\", Arial, sans-serif; }\n.google-map-wrapper {\n  overflow-y: hidden;\n  margin: 0px 20px;\n  transition-property: all;\n  transition-duration: 0.5s;\n  transition-timing-function: cubic-bezier(0, 0.7, 0.5, 1); }\n.google-map-wrapper.map-close {\n  height: 0; }\n.google-map-wrapper.map-open {\n  height: 300px; }\n.properties-content .property-card {\n  background: #ffffff;\n  box-shadow: 0 0 8px 0 rgba(185, 185, 185, 0.5);\n  border-radius: 5px; }\n.properties-content .property-card.coming-soon .property-image {\n    -webkit-filter: grayscale(100%);\n    /* Safari 6.0 - 9.0 */\n    filter: grayscale(100%);\n    cursor: unset; }\n.properties-content .property-card.coming-soon .property-image .property-info {\n      display: none; }\n.properties-content .property-card.coming-soon .property-details * {\n    cursor: unset;\n    opacity: 0.6; }\n.properties-content .property-card.coming-soon .property-details .property-name img {\n    -webkit-filter: grayscale(100%);\n    /* Safari 6.0 - 9.0 */\n    filter: grayscale(100%); }\n.properties-content .property-card.coming-soon .property-details .status > div {\n    background: #f8f8f8;\n    height: 46px;\n    padding: 15px;\n    padding-bottom: 0; }\n.properties-content .property-card.coming-soon .property-details .status > div p:first-child {\n      height: 4px;\n      width: 100%;\n      border-radius: 3px;\n      background: #7f7f7f; }\n.properties-content .property-card.coming-soon .property-details .status > div p:last-child {\n      display: flex;\n      position: relative; }\n.properties-content .property-card.coming-soon .property-details .status > div p:last-child > span {\n        height: 6px;\n        width: 60px;\n        border-radius: 3px;\n        background: #7f7f7f; }\n.properties-content .property-card.coming-soon .property-details .status > div p:last-child > span:first-child {\n          margin-left: 20px; }\n.properties-content .property-card.coming-soon .property-details .status > div p:last-child > span:last-child {\n          position: absolute;\n          right: 0;\n          margin-right: 20px; }\n.properties-content .property-card.coming-soon .property-details .price label,\n  .properties-content .property-card.coming-soon .property-details .btn {\n    background: rgba(44, 44, 44, 0.4) !important;\n    color: #fff !important; }\n.properties-content .property-card.coming-soon .property-details .blank {\n    color: transparent !important;\n    height: 10px;\n    position: relative;\n    top: 3px;\n    background-color: #c1bfbf;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n.properties-content .property-card.coming-soon .property-details .blank.darker {\n      color: transparent;\n      background-color: rgba(44, 44, 44, 0.5);\n      height: 12px; }\n.properties-content .property-card .property-details .btc-price {\n    display: none; }\n.properties-content .property-card.TBC .property-details .price {\n    display: none; }\n.properties-content .property-card.TBC .property-details .btc-price {\n    display: block;\n    margin-top: 15px;\n    text-align: left; }\n.properties-content .property-card.TBC .property-details .btc-price label {\n      background: #6580b6;\n      color: #fff;\n      border-radius: 2px;\n      padding: 7px 17px;\n      margin-right: 10px;\n      margin-bottom: 0;\n      font-size: 13px;\n      font-weight: bold; }\n.properties-content .property-card.TBC .property-details .funds .flex .item.value {\n    display: flex;\n    align-items: flex-start; }\n.properties-content .property-card.TBC .property-details .funds .flex .item.value span {\n      line-height: 12px; }\n.properties-content .property-card.TBC .property-details .funds .flex .item.value span.tbc {\n        font-size: 14px;\n        line-height: 14px; }\n@media (max-width: 575px) {\n        .properties-content .property-card.TBC .property-details .funds .flex .item.value span.tbc {\n          font-size: 12px; } }\n.properties-content .property-card.TBC .property-details .buttons .view {\n    cursor: not-allowed;\n    background: #828282 !important;\n    color: #fff !important; }\n.properties-content .property-card .property-image {\n    position: relative;\n    display: flex;\n    align-items: flex-end; }\n.properties-content .property-card .property-image > .property-info {\n      display: flex;\n      align-items: center;\n      height: 33px;\n      width: 100%;\n      background: rgba(32, 35, 40, 0.6);\n      border-radius: 1.65px;\n      margin: 0 10px 10px; }\n.properties-content .property-card .property-image > .property-info > .info-item {\n        flex-grow: 1;\n        display: flex;\n        align-items: flex-end;\n        justify-content: center;\n        border-right: 1px solid #e6e6e6;\n        border-left: 1px solid #e6e6e6;\n        height: 10px; }\n.properties-content .property-card .property-image > .property-info > .info-item:first-child {\n          border: 0;\n          justify-content: flex-start;\n          padding-left: 15px; }\n.properties-content .property-card .property-image > .property-info > .info-item:last-child {\n          border: 0;\n          justify-content: flex-end;\n          padding-right: 15px; }\n.properties-content .property-card .property-image > .property-info > .info-item > span {\n          font-weight: 600;\n          font-size: 11.55px;\n          line-height: 10px;\n          color: #fff; }\n.properties-content .property-card .property-image > .country-flag-wrapper {\n      position: absolute;\n      bottom: 10px;\n      right: 10px; }\n.properties-content .property-card .property-image > .country-flag-wrapper > .country-flag {\n        width: 41px;\n        height: 41px;\n        border-radius: 50%;\n        background-color: #fff;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n.properties-content .property-card .property-image > .country-flag-wrapper > .country-flag > img {\n          width: 35px;\n          height: 35px; }\n.properties-content .property-card .coming-flag-wrapper {\n    position: absolute;\n    left: 35px;\n    top: 180px; }\n.properties-content .property-card .coming-flag-wrapper > .coming-flag {\n      background-color: #48b0f7;\n      color: #fff;\n      padding: 3px 10px;\n      border-radius: 5px;\n      font-size: 12px;\n      display: inline-flex;\n      align-items: center; }\n.properties-content .property-card .coming-flag-wrapper > .coming-flag > .icon-md {\n        padding-right: 3px; }\n.properties-content .property-card .property-details {\n    padding: 20px; }\n.properties-content .property-card .property-details div {\n      padding: 0;\n      border: 0; }\n.properties-content .property-card .property-details .property-name {\n      display: flex;\n      text-align: left; }\n.properties-content .property-card .property-details .property-name > .property-flag {\n        width: 35px;\n        height: 35px;\n        margin-right: 10px; }\n.properties-content .property-card .property-details .property-name > .name {\n        display: flex;\n        flex-direction: column; }\n.properties-content .property-card .property-details .property-name > .name > span {\n          font-size: 12px;\n          color: #626262;\n          line-height: 12px;\n          margin-bottom: 5px; }\n.properties-content .property-card .property-details .property-name > .name > p {\n          font-weight: bold;\n          font-size: 16px;\n          line-height: 20px;\n          color: #2c2c2c; }\n.properties-content .property-card .property-details .property-name span.latest {\n        display: flex;\n        background: #f55753;\n        border-radius: 2px;\n        padding: 2px 10px;\n        font-size: 12px;\n        color: #ffffff;\n        margin-right: 10px; }\n.properties-content .property-card .property-details .property-name p {\n        display: inline-block;\n        font-size: 20px;\n        color: #302a45;\n        line-height: 25px;\n        margin-bottom: 0;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden; }\n.properties-content .property-card .property-details .place-details {\n      padding: 10px 0px;\n      text-align: left; }\n.properties-content .property-card .property-details .place-details > .detail-wrapper {\n        margin: 3px;\n        border-radius: 20px;\n        display: inline-flex;\n        padding: 0px 10px;\n        color: white;\n        font-size: 11px;\n        font-weight: bold;\n        letter-spacing: 0.5px;\n        line-height: 23px;\n        height: 23px; }\n.properties-content .property-card .property-details .place-details > .detail-wrapper .icon {\n          margin-top: 2px;\n          margin-right: 4px; }\n.properties-content .property-card .property-details .status {\n      margin-top: 12px;\n      margin-bottom: 5px; }\n.properties-content .property-card .property-details .minimum {\n      text-align: left;\n      height: 21px; }\n.properties-content .property-card .property-details .minimum > a {\n        cursor: pointer;\n        color: #10cfbd; }\n.properties-content .property-card .property-details .minimum > a > .fa {\n          margin-right: 5px; }\n.properties-content .property-card .property-details .minimum > a > span {\n          font-family: \"Roboto\", Arial, sans-serif;\n          font-size: 12px;\n          text-decoration: underline; }\n.properties-content .property-card .property-details .desc {\n      margin-top: 15px; }\n.properties-content .property-card .property-details .desc div {\n        border-right: 1px solid #e6e6e6; }\n.properties-content .property-card .property-details .desc div:last-child {\n          border: 0; }\n.properties-content .property-card .property-details .desc div span {\n          font-size: 14px;\n          color: #2c2c2c; }\n.properties-content .property-card .property-details .price {\n      margin-top: 15px;\n      text-align: left; }\n.properties-content .property-card .property-details .price label {\n        background: #6580b6;\n        color: #fff;\n        border-radius: 2px;\n        padding: 7px 17px;\n        margin-right: 10px;\n        margin-bottom: 0;\n        font-size: 13px;\n        font-weight: bold; }\n.properties-content .property-card .property-details .price label:last-child {\n          margin-right: 0; }\n.properties-content .property-card .property-details .location-summary {\n      font-size: 12px;\n      text-align: justify;\n      line-height: 16px; }\n.properties-content .property-card .property-details .location-summary > .blank-wrapper .full-width {\n        width: 100%;\n        height: 5px;\n        border-radius: 10px;\n        background-color: rgba(44, 44, 44, 0.4);\n        margin: 8px 0; }\n.properties-content .property-card .property-details .location-summary > .blank-wrapper .half-width {\n        width: 50%;\n        height: 5px;\n        border-radius: 10px;\n        background-color: rgba(44, 44, 44, 0.4);\n        margin: 8px 0; }\n.properties-content .property-card .property-details .funds {\n      margin-top: 15px; }\n.properties-content .property-card .property-details .funds.empty,\n      .properties-content .property-card .property-details .funds.empty * {\n        cursor: unset;\n        opacity: 0.6; }\n.properties-content .property-card .property-details .funds.empty .flex .value span.blank {\n        color: transparent;\n        background-color: rgba(44, 44, 44, 0.5);\n        height: 12px; }\n.properties-content .property-card .property-details .funds .flex {\n        display: flex;\n        background: #fafafa;\n        padding: 8px 15px;\n        margin-bottom: 5px;\n        color: #626262; }\n.properties-content .property-card .property-details .funds .flex .item {\n          flex-grow: 1;\n          text-align: left; }\n.properties-content .property-card .property-details .funds .flex .item.value {\n            flex-grow: 0;\n            font-weight: bold;\n            text-align: right; }\n.properties-content .property-card .property-details .funds .flex .item.value span {\n              font-size: 12px;\n              font-weight: 600;\n              color: #2c2c2c;\n              opacity: 1; }\n.properties-content .property-card .property-details .funds .flex .item.value span .star {\n                padding: 0 1px;\n                font-size: 12px;\n                font-weight: 600;\n                color: #10cfbd;\n                cursor: pointer; }\n.properties-content .property-card .property-details .funds .flex .item.value span .disabled-star {\n                color: #2c2c2c;\n                cursor: initial; }\n@media (max-width: 575px) {\n              .properties-content .property-card .property-details .funds .flex .item.value span {\n                font-size: 12px; } }\n.properties-content .property-card .property-details .funds .flex .item.ttip {\n            position: relative;\n            display: inline-block; }\n.properties-content .property-card .property-details .funds .flex .item.ttip .tooltiptext {\n            visibility: hidden;\n            width: 35px;\n            background-color: #10cfbd;\n            color: #fff;\n            text-align: center;\n            border-radius: 6px;\n            padding: 5px 0;\n            position: absolute;\n            z-index: 1;\n            top: -5px;\n            left: 110%;\n            opacity: 0;\n            transition: opacity 1s; }\n.properties-content .property-card .property-details .funds .flex .item.ttip .tooltiptext::after {\n            content: '';\n            position: absolute;\n            top: 50%;\n            right: 100%;\n            margin-top: -5px;\n            border-width: 5px;\n            border-style: solid;\n            border-color: transparent #10cfbd transparent transparent; }\n.properties-content .property-card .property-details .funds .flex .item.ttip:hover .tooltiptext {\n            visibility: visible;\n            opacity: 1; }\n.properties-content .property-card .property-details .funds .flex .item.centered {\n            display: flex;\n            align-items: center; }\n.properties-content .property-card .property-details .funds .flex .item label {\n            display: block;\n            margin-bottom: 0;\n            font-size: 12px;\n            color: #2c2c2c;\n            line-height: 10px; }\n.properties-content .property-card .property-details .funds .flex .item span {\n            font-size: 10px;\n            opacity: 0.7; }\n.properties-content .property-card .property-details .buttons {\n      display: flex;\n      margin-top: 20px; }\n.properties-content .property-card .property-details .buttons .btn {\n        flex-grow: 1;\n        font-family: \"Roboto\", Arial, sans-serif;\n        font-size: 14px;\n        padding: 10px;\n        border-radius: 2px; }\n.properties-content .property-card .property-details .buttons .btn.disabled {\n          cursor: unset;\n          background: #d8dadc;\n          color: #fff;\n          border-radius: 2px; }\n.properties-content .property-card .property-details .buttons .btn.view {\n          background: rgba(16, 207, 189, 0.1);\n          border: 0;\n          color: #10cfbd;\n          margin-right: 0;\n          margin-left: 5px; }\n.properties-content .property-card .property-details .others {\n      text-align: left;\n      margin-top: 10px;\n      height: 22px; }\n.properties-content .property-card .property-details .others.min {\n        height: 48px; }\n.properties-content .property-card .property-details .others p {\n        font-family: \"Roboto\", Arial, sans-serif;\n        font-size: 12px;\n        margin: 0;\n        color: #626262; }\n.properties-content .property-card .property-details .others p a {\n          cursor: pointer;\n          color: #10cfbd;\n          text-decoration: underline; }\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/book-to-stay/book-to-stay.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/book-to-stay/book-to-stay.component.ts ***!
  \********************************************************************************/
/*! exports provided: BookToStayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookToStayComponent", function() { return BookToStayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/api */ "./src/app/shared/api/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environment/environment.ts");
/* harmony import */ var _shared_constants_property_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/constants/property-details */ "./src/app/shared/constants/property-details.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookToStayComponent = /** @class */ (function () {
    function BookToStayComponent(router, _propertyService, title, _users) {
        this.router = router;
        this._propertyService = _propertyService;
        this.title = title;
        this._users = _users;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.filterCollapse = false;
        this.closeBanner = false;
        this.countrySortOptions = [];
        this.latestListingOptions = [
            { value: 'DateDesc', label: 'Latest Listing' },
            { value: 'DateAsc', label: 'Oldest Listing' },
            { value: 'PriceAsc', label: 'Lowest Price' },
            { value: 'PriceDesc', label: 'Highest Price' },
            { value: 'RentalYieldAsc', label: 'Lowest Rental Yield' },
            { value: 'RentalYieldDesc', label: 'Highest Rental Yield' }
        ];
        this.countrySortSelected = {};
        this.latestListingSelected = {};
        this.pageNumber = 1;
        this.pageSize = null;
        this.propertiesParams = {};
        this.isForPropertyDetails = false;
        this.isLogin = false;
        if (window.screen.width <= 767) {
            this.filterCollapse = true;
        }
    }
    BookToStayComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth <= 767) {
            this.filterCollapse = true;
        }
    };
    BookToStayComponent.prototype.ngOnInit = function () {
        this.title.setTitle("Partbnb - Book to Stay");
        this.init();
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    };
    BookToStayComponent.prototype.init = function () {
        this.mapClose = true;
        this.countrySortOptions = [];
        this.countrySortOptions.push({
            countryId: 0,
            countryName: 'All Countries',
            stampDuty: 0.0,
            capitalGrowth: 0.0
        });
        this.countrySortSelected = this.countrySortOptions[0].countryId;
        this.latestListingSelected = this.latestListingOptions[0].value;
        this.updatePropertiesFilter(this.countrySortSelected, this.latestListingSelected);
        this.getCountry();
    };
    BookToStayComponent.prototype.getCountry = function () {
        var _this = this;
        this._propertyService.getCountry().subscribe(function (data) {
            _this.countrySortOptions = _this.countrySortOptions.concat(data);
        });
    };
    BookToStayComponent.prototype.getProperties = function (params) {
        var _this = this;
        this._propertyService.getProperties(params).subscribe(function (data) {
            _this.properties = data;
            _this.checkProperties();
            _this.propertiesForMap = _this.properties.filter(function (i) { return i.propertyListingTypeId !== _shared_constants_property_details__WEBPACK_IMPORTED_MODULE_4__["PROPERTY_STATUS"].COMING_SOON; });
        });
    };
    BookToStayComponent.prototype.checkProperties = function () {
        var _this = this;
        if (!this.properties || !this.properties.length) {
            return;
        }
        var currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
        this.properties.map(function (obj) {
            if (obj.propertyListingTypeId !== _shared_constants_property_details__WEBPACK_IMPORTED_MODULE_4__["PROPERTY_STATUS"].COMING_SOON &&
                currentUser.isLogin) {
                _this._users
                    .checkUserForPreOrder(currentUser.username, obj.propertyId)
                    .subscribe(function (res) {
                    obj.isNotAllow = !(res && res.canPreOrder);
                });
            }
            else {
                obj.isNotAllow = true;
            }
            return obj;
        });
    };
    BookToStayComponent.prototype.updatePropertiesFilter = function (countryId, sortingMode) {
        this.propertiesParams = {};
        this.propertiesParams = {
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
            sortingMode: sortingMode
        };
        if (!!countryId) {
            this.propertiesParams.countryId = countryId;
        }
        this.getProperties(this.propertiesParams);
    };
    BookToStayComponent.prototype.viewDetails = function (id, invalid) {
        if (invalid === void 0) { invalid = false; }
        if (invalid) {
            return;
        }
        this.router.navigate(["/property/" + id]);
    };
    BookToStayComponent.prototype.bookNow = function (url) {
        if (!!url) {
            window.open(url, '_blank');
        }
    };
    BookToStayComponent.prototype.toggleFilter = function () {
        this.filterCollapse = !this.filterCollapse;
    };
    BookToStayComponent.prototype.isPropertyComingSoon = function (status) {
        return status !== _shared_constants_property_details__WEBPACK_IMPORTED_MODULE_4__["PROPERTY_STATUS"].LIVE;
        // return (
        //   status === PROPERTY_STATUS.COMING_SOON ||
        //   status === PROPERTY_STATUS.PLACEHOLDER
        // );
    };
    BookToStayComponent.prototype.customerRatingStars = function (customerRating) {
        var ratings = new Array(5).fill('star-o');
        ratings = ratings.fill('star', 0, parseInt(customerRating, 10));
        if (customerRating % 1 !== 0 && customerRating !== 5) {
            // console.log('d');
            ratings = ratings.fill('star-half-o', parseInt(customerRating, 10), parseInt(customerRating, 10) + 1);
        }
        return ratings;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BookToStayComponent.prototype, "onResize", null);
    BookToStayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'book-to-stay',
            template: __webpack_require__(/*! ./book-to-stay.component.html */ "./src/app/modules/dashboard/pages/book-to-stay/book-to-stay.component.html"),
            styles: [__webpack_require__(/*! ./book-to-stay.component.scss */ "./src/app/modules/dashboard/pages/book-to-stay/book-to-stay.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_api__WEBPACK_IMPORTED_MODULE_1__["PropertyService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            _shared_api__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], BookToStayComponent);
    return BookToStayComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/pages/my-properties/my-properties.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/my-properties/my-properties.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-properties\">\r\n  <div class=\"container\">\r\n    <!-- <investor-verification-banner\r\n      *ngIf=\"!isPropertyBlank\"\r\n    ></investor-verification-banner> -->\r\n    <div class=\"my-header\">\r\n      <h3>My Properties</h3>\r\n      <div class=\"my-options\">\r\n        <pg-select class=\"toggler\" [(ngModel)]=\"display\" [PlaceHolder]=\"'Select'\" [customIcon]=\"'toggler'\">\r\n          <pg-option *ngFor=\"let option of displayOptions\" [Label]=\"option.name\" [Value]=\"option.value\">\r\n          </pg-option>\r\n        </pg-select>\r\n        <pg-select class=\"properties\" [(ngModel)]=\"property\" [PlaceHolder]=\"'Select'\">\r\n          <pg-option *ngFor=\"let option of sampleOptions\" [Label]=\"option.name\" [Value]=\"option.value\">\r\n          </pg-option>\r\n        </pg-select>\r\n        <pg-select class=\"sorts\" [(ngModel)]=\"sorts\" [PlaceHolder]=\"'Select'\" [customIcon]=\"'sorts'\"\r\n          (ngModelChange)=\"getProperties()\">\r\n          <pg-option *ngFor=\"let option of sortsOptions\" [Label]=\"option.name\" [Value]=\"option.value\">\r\n          </pg-option>\r\n        </pg-select>\r\n        <button class=\"btn btn-success btn-cons\" *ngIf=\"!isPropertyBlank\" routerLink=\"/properties\">\r\n          <icon-plus-white class=\"mr-1 add-property-icon\"></icon-plus-white>\r\n          Add Property\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"desktop-content\" *ngIf=\"!isPropertyBlank\">\r\n      <div class=\"property\">\r\n        <div class=\"property-name\">\r\n          <div class=\"content-row header radius-left\"></div>\r\n          <div class=\"content-row\" *ngFor=\"let item of myProperties\">\r\n            <div class=\"content-column align-left pointer\" routerLink=\"//property/{{ item.propertyID }}\">\r\n              <div class=\"image-preview\" [ngStyle]=\"{\r\n                  'background-image': 'url(' + baseUrl + item.imagePath + ')'\r\n                }\"></div>\r\n              <div class=\"name\">\r\n                <p>{{ item.propertyName }}</p>\r\n                <span class=\"bullet\" [ngClass]=\"{ owned: item.orderStatus !== 'Pre-Order' }\">\r\n                  {{ item.orderStatus }}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"property-details\">\r\n          <div class=\"content-row header border\">\r\n            <div class=\"content-column\" *ngIf=\"display === 'holding'\">\r\n              <p>Parts</p>\r\n            </div>\r\n            <div class=\"content-column\" *ngIf=\"display === 'holding'\">\r\n              <p>Initial Part Value</p>\r\n            </div>\r\n            <div class=\"content-column\" *ngIf=\"display === 'holding'\">\r\n              <p>Current Part Value</p>\r\n            </div>\r\n            <div class=\"content-column no-padding\" *ngIf=\"display !== 'holding'\">\r\n              <p>Capital Growth</p>\r\n            </div>\r\n            <div class=\"content-column no-padding\" *ngIf=\"display !== 'holding'\">\r\n              <p>Capital Yield</p>\r\n            </div>\r\n            <div class=\"content-column no-padding\" *ngIf=\"display !== 'holding'\">\r\n              <p>Net Income</p>\r\n            </div>\r\n            <div class=\"content-column no-padding\" *ngIf=\"display !== 'holding'\">\r\n              <p>Income Yield</p>\r\n            </div>\r\n            <div class=\"content-column no-padding\" *ngIf=\"display !== 'holding'\">\r\n              <p>Total Return</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"content-row border\" *ngFor=\"let item of myProperties\">\r\n            <div class=\"content-column\" *ngIf=\"display === 'holding'\">\r\n              <div class=\"details\">\r\n                <p>\r\n                  {{\r\n                    item.parts > 1\r\n                      ? item.parts + ' Parts'\r\n                      : item.parts + ' Part'\r\n                  }}\r\n                </p>\r\n                <!-- <span>Parts</span> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"content-column\" *ngIf=\"display === 'holding'\">\r\n              <div class=\"details\">\r\n                <p>\r\n                  {{ item.initialValue | currency: 'USD':'symbol':'1.2-2' }}\r\n                </p>\r\n                <!-- <span>Initial Value</span> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"content-column\" *ngIf=\"display === 'holding'\">\r\n              <div class=\"details\">\r\n                <p>\r\n                  {{ item.currentValue | currency: 'USD':'symbol':'1.2-2' }}\r\n                </p>\r\n                <!-- <span>Current Value</span> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"content-column\" *ngIf=\"display !== 'holding'\">\r\n              <div class=\"details\">\r\n                <p>\r\n                  {{\r\n                    item.yieldDetails?.capitalGrowth || 0\r\n                      | currency: 'USD':'symbol':'1.2-2'\r\n                  }}\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"content-column\" *ngIf=\"display !== 'holding'\">\r\n              <div class=\"details\">\r\n                <p>{{ item.yieldDetails?.capitalYield || 0 }}%</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"content-column\" *ngIf=\"display !== 'holding'\">\r\n              <div class=\"details\">\r\n                <p>\r\n                  {{\r\n                    item.yieldDetails?.netIncome || 0\r\n                      | currency: 'USD':'symbol':'1.2-2'\r\n                  }}\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"content-column\" *ngIf=\"display !== 'holding'\">\r\n              <div class=\"details\">\r\n                <p>{{ item.yieldDetails?.incomeYield || 0 }}%</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"content-column\" *ngIf=\"display !== 'holding'\">\r\n              <div class=\"details\">\r\n                <p>\r\n                  {{\r\n                    item.yieldDetails?.totalReturn || 0\r\n                      | currency: 'USD':'symbol':'1.2-2'\r\n                  }}\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"property-action\">\r\n          <div class=\"content-row header radius-right\"></div>\r\n          <div class=\"content-row\" *ngFor=\"let item of myProperties\">\r\n            <div class=\"content-column\">\r\n              <div class=\"content-body\">\r\n                <div class=\"action\" *ngIf=\"item.orderStatus === 'Pre-Order'\">\r\n                  <button class=\"btn btn-primary\" [ngClass]=\"{\r\n                      waiting: openingPlaid,\r\n                      pending: isPropertyPending(item),\r\n                      disabled: isPropertyInActive(item.propertyStatus)\r\n                    }\" [disabled]=\"isPropertyInActive(item.propertyStatus)\"\r\n                    (click)=\"makePayment(item, isPropertyPending(item))\">\r\n                    {{\r\n                      isPropertyPending(item)\r\n                        ? 'Payment Processing'\r\n                        : 'Make Payment'\r\n                    }}\r\n                  </button>\r\n                </div>\r\n                <div class=\"action\" *ngIf=\"item.orderStatus !== 'Pre-Order'\">\r\n                  <button class=\"btn btn-success buy\" (click)=\"buyParts(item)\">\r\n                    Buy Parts\r\n                  </button>\r\n                  <button class=\"btn btn-success sell disabled\" [disabled]=\"true\">\r\n                    Sell Parts\r\n                  </button>\r\n                  <button class=\"btn btn-success book-to-stay\" (click)=\"bookNow(item.bookingUrl)\">\r\n                    Book to Stay\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mobile-content\" *ngIf=\"!isPropertyBlank\">\r\n      <div class=\"property\" *ngFor=\"let item of myProperties\">\r\n        <div class=\"property-header\">\r\n          <div (click)=\"toggleProperty(item)\" class=\"image-preview\" [ngStyle]=\"{\r\n              'background-image': 'url(' + baseUrl + item.imagePath + ')'\r\n            }\"></div>\r\n          <div class=\"info\" (click)=\"toggleProperty(item)\">\r\n            <p class=\"name\">\r\n              <span>{{ item.propertyName }}</span>\r\n            </p>\r\n            <p>\r\n              <span>{{ item.orderStatus }}</span>\r\n              <span>\r\n                {{\r\n                  item.parts > 1 ? item.parts + ' Parts' : item.parts + ' Part'\r\n                }}\r\n              </span>\r\n            </p>\r\n          </div>\r\n          <i class=\"fa icon-toggle\" [ngClass]=\"item.toggle ? 'fa-minus-circle' : 'fa-plus-circle'\"\r\n            (click)=\"toggleProperty(item)\"></i>\r\n        </div>\r\n        <div class=\"property-details\" [ngClass]=\"{ open: item.toggle }\">\r\n          <pg-select class=\"pg-display\" [(ngModel)]=\"item.display\" [PlaceHolder]=\"'Select Details'\">\r\n            <pg-option *ngFor=\"let option of displayOptions\" [Label]=\"option.name\" [Value]=\"option.value\">\r\n            </pg-option>\r\n          </pg-select>\r\n          <div class=\"details-info\" *ngIf=\"item.display === 'holding'\">\r\n            <p>\r\n              <span>Initial Value</span>\r\n              <span>{{\r\n                item.initialValue | currency: 'USD':'symbol':'1.2-2'\r\n              }}</span>\r\n            </p>\r\n            <p>\r\n              <span>Current Value</span>\r\n              <span>{{\r\n                item.currentValue | currency: 'USD':'symbol':'1.2-2'\r\n              }}</span>\r\n            </p>\r\n          </div>\r\n          <div class=\"details-info\" *ngIf=\"item.display === 'yield'\">\r\n            <p>\r\n              <span>Capital Growth</span>\r\n              <span>{{\r\n                item.yieldDetails?.capitalGrowth || 0\r\n                  | currency: 'USD':'symbol':'1.2-2'\r\n              }}</span>\r\n            </p>\r\n            <p>\r\n              <span>Capital Yield</span>\r\n              <span> {{ item.yieldDetails?.capitalYield || 0 }}% </span>\r\n            </p>\r\n            <p>\r\n              <span>Net Income</span>\r\n              <span>{{\r\n                item.yieldDetails?.netIncome || 0\r\n                  | currency: 'USD':'symbol':'1.2-2'\r\n              }}</span>\r\n            </p>\r\n            <p>\r\n              <span>Income Yield</span>\r\n              <span> {{ item.yieldDetails?.incomeYield || 0 }}% </span>\r\n            </p>\r\n            <p>\r\n              <span>Total Return</span>\r\n              <span>{{\r\n                item.yieldDetails?.totalReturn || 0\r\n                  | currency: 'USD':'symbol':'1.2-2'\r\n              }}</span>\r\n            </p>\r\n          </div>\r\n          <div class=\"details-button\">\r\n            <div class=\"flex\" [ngClass]=\"{ paid: item.orderStatus !== 'Pre-Order' }\">\r\n              <button class=\"btn btn-primary\" *ngIf=\"item.orderStatus === 'Pre-Order'\" [ngClass]=\"{\r\n                  pending: isPropertyPending(item),\r\n                  disabled: isPropertyInActive(item.propertyStatus)\r\n                }\" [disabled]=\"isPropertyInActive(item.propertyStatus)\"\r\n                (click)=\"makePayment(item, isPropertyPending(item))\">\r\n                {{\r\n                  isPropertyPending(item)\r\n                    ? 'Payment Processing'\r\n                    : 'Make Payment'\r\n                }}\r\n              </button>\r\n              <button class=\"btn btn-success buy\" *ngIf=\"item.orderStatus === 'Owned'\" (click)=\"buyParts(item)\">\r\n                Buy Parts\r\n              </button>\r\n              <button class=\"btn btn-success sell disabled\" *ngIf=\"item.orderStatus === 'Owned'\" [disabled]=\"true\">\r\n                Sell Parts\r\n              </button>\r\n              <button class=\"btn btn-success book-to-stay\" *ngIf=\"item.orderStatus === 'Owned'\"\r\n                (click)=\"bookNow(item.bookingUrl)\">\r\n                Book to Stay\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"blank-content\" *ngIf=\"isPropertyBlank\">\r\n      <icon-empty-property></icon-empty-property>\r\n      <button class=\"btn btn-success\" routerLink=\"/properties\">\r\n        <icon-plus-white class=\"icon-md svg\"></icon-plus-white> Add Property\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/my-properties/my-properties.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/my-properties/my-properties.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  font-display: 'swap';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  font-display: 'swap';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  font-display: 'swap';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/assets/fonts/roboto/roboto-v20-latin-regular.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(\"/assets/fonts/roboto/roboto-v20-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/roboto/roboto-v20-latin-regular.woff\") format(\"woff\"), url(\"/assets/fonts/roboto/roboto-v20-latin-regular.ttf\") format(\"truetype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-regular.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n/* roboto-italic - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: url(\"/assets/fonts/roboto/roboto-v20-latin-italic.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Italic\"), local(\"Roboto-Italic\"), url(\"/assets/fonts/roboto/roboto-v20-latin-italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-italic.woff2\") format(\"woff2\"), url(\"/assets/fonts/roboto/roboto-v20-latin-italic.woff\") format(\"woff\"), url(\"/assets/fonts/roboto/roboto-v20-latin-italic.ttf\") format(\"truetype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-italic.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n/* roboto-500 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"/assets/fonts/roboto/roboto-v20-latin-500.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"/assets/fonts/roboto/roboto-v20-latin-500.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-500.woff2\") format(\"woff2\"), url(\"/assets/fonts/roboto/roboto-v20-latin-500.woff\") format(\"woff\"), url(\"/assets/fonts/roboto/roboto-v20-latin-500.ttf\") format(\"truetype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-500.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n/* roboto-700 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"/assets/fonts/roboto/roboto-v20-latin-700.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700.woff2\") format(\"woff2\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700.woff\") format(\"woff\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700.ttf\") format(\"truetype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n/* roboto-700italic - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold Italic\"), local(\"Roboto-BoldItalic\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.woff2\") format(\"woff2\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.woff\") format(\"woff\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.ttf\") format(\"truetype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n/* bradhitc */\n@font-face {\n  font-family: 'bradhitc';\n  font-style: normal;\n  src: url(\"/assets/fonts/bradhitc/bradhitc.ttf\") format(\"truetype\"); }\n/* anton */\n@font-face {\n  font-family: 'anton';\n  font-style: normal;\n  src: url(\"/assets/fonts/anton/Anton-Regular.ttf\") format(\"truetype\"); }\n/* anton */\n@font-face {\n  font-family: 'mansalva';\n  font-style: normal;\n  src: url(\"/assets/fonts/mansalva/Mansalva-Regular.ttf\") format(\"truetype\"); }\n/* raleway */\n@font-face {\n  font-family: 'raleway';\n  font-style: normal;\n  src: url(\"/assets/fonts/raleway/Raleway-Regular.ttf\") format(\"truetype\"); }\n.my-properties .my-header {\n  display: flex;\n  padding-top: 20px;\n  margin-bottom: 20px; }\n.my-properties .my-header h3 {\n    font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n    flex-grow: 1;\n    font-size: 22px;\n    line-height: 22px;\n    margin: 0;\n    color: #2c2c2c; }\n.my-properties .my-header .my-options .pg-select {\n    min-width: 160px; }\n.my-properties .my-header .my-options .pg-select.toggler {\n      min-width: 200px; }\n.my-properties .my-header .my-options .btn {\n    height: 40px;\n    border-radius: 2px;\n    font-size: 12px;\n    min-width: 140px; }\n.my-properties .image-preview {\n  width: 30px;\n  min-width: 30px;\n  height: 30px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-right: 10px;\n  border-radius: 2px; }\n.my-properties span.bullet.owned:before {\n  background-color: #10cfbd; }\n.my-properties span.bullet:before {\n  content: '';\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  margin-right: 7px;\n  border-radius: 7.5px;\n  background-color: #6d5cae; }\n.my-properties .desktop-content {\n  min-height: 530px;\n  background: #fff;\n  border-radius: 3px;\n  padding: 30px 20px;\n  padding-bottom: 20px;\n  margin-bottom: 50px; }\n.my-properties .desktop-content .property {\n    display: flex; }\n.my-properties .desktop-content .property .content-row {\n      display: flex;\n      width: 100%;\n      background: #fafafa;\n      margin-bottom: 5px; }\n.my-properties .desktop-content .property .content-row.header {\n        height: 40px;\n        background: #6580b6;\n        margin-bottom: 0;\n        padding: 0 !important;\n        z-index: 0; }\n.my-properties .desktop-content .property .content-row.header.border {\n          border: 0 !important; }\n.my-properties .desktop-content .property .content-row.header.border .content-column {\n            border-right: 1px solid;\n            border-color: rgba(230, 230, 230, 0.3); }\n.my-properties .desktop-content .property .content-row.header.border .content-column:first-child {\n              border-left: 1px solid;\n              border-color: rgba(230, 230, 230, 0.3); }\n.my-properties .desktop-content .property .content-row.header .content-column {\n          height: 40px; }\n.my-properties .desktop-content .property .content-row.header .content-column p {\n            font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n            font-size: 12px;\n            color: #ffffff;\n            margin: 0; }\n.my-properties .desktop-content .property .content-row.radius-left {\n        border-radius: 2px 0 0 2px; }\n.my-properties .desktop-content .property .content-row.radius-right {\n        border-radius: 0 2px 2px 0; }\n.my-properties .desktop-content .property .content-row.border {\n        border: 0 !important; }\n.my-properties .desktop-content .property .content-row.border .content-column {\n          border-right: 1px solid #e6e6e6; }\n.my-properties .desktop-content .property .content-row.border .content-column:first-child {\n            border-left: 1px solid #e6e6e6; }\n.my-properties .desktop-content .property .content-row .content-column {\n        height: 55px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 0 10px;\n        width: inherit; }\n.my-properties .desktop-content .property .content-row .content-column.no-padding {\n          padding: 0; }\n.my-properties .desktop-content .property .content-row .content-column.align-left {\n          justify-content: flex-start; }\n.my-properties .desktop-content .property .content-row .content-column.pointer {\n          cursor: pointer !important; }\n.my-properties .desktop-content .property-name {\n      width: 300px; }\n.my-properties .desktop-content .property-name .content-row .content-column {\n        width: 100%; }\n.my-properties .desktop-content .property-name .name {\n        display: flex;\n        flex-direction: column; }\n.my-properties .desktop-content .property-name .name p {\n          margin: 0;\n          font-size: 14px;\n          color: #2c2c2c;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          overflow: hidden; }\n.my-properties .desktop-content .property-name .name span {\n          font-size: 11px;\n          line-height: 11px;\n          color: #626262; }\n.my-properties .desktop-content .property-details {\n      flex-grow: 1; }\n.my-properties .desktop-content .property-details .content-row .content-column {\n        width: 100%; }\n.my-properties .desktop-content .property-details .content-row .content-column .details {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center; }\n.my-properties .desktop-content .property-details .content-row .content-column .details p {\n            font-weight: 600;\n            font-size: 14px;\n            line-height: 18px;\n            color: #626262;\n            margin: 0; }\n.my-properties .desktop-content .property-details .content-row .content-column .details span {\n            opacity: 0.5;\n            font-size: 11px;\n            color: #626262; }\n.my-properties .desktop-content .property-action {\n      width: 300px; }\n.my-properties .desktop-content .property-action .content-body {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        width: inherit; }\n.my-properties .desktop-content .property-action .content-body .action {\n          width: 95%;\n          display: flex; }\n.my-properties .desktop-content .property-action .content-body .action .btn {\n            font-family: \"Roboto\", Arial, sans-serif;\n            flex-grow: 1;\n            width: 100%;\n            border-radius: 2px;\n            font-size: 12px;\n            line-height: 16px;\n            padding: 0;\n            height: 30px; }\n.my-properties .desktop-content .property-action .content-body .action .btn.pending {\n              background: transparent;\n              border: 1px solid #d1d1d1;\n              font-size: 12px;\n              color: #626262;\n              cursor: unset; }\n.my-properties .desktop-content .property-action .content-body .action .btn.waiting {\n              opacity: 0.7; }\n.my-properties .desktop-content .property-action .content-body .action .btn:nth-child(2) {\n              margin-left: 7px; }\n.my-properties .desktop-content .property-action .content-body .action .btn.sell {\n              background-color: #cff5f2;\n              border-color: #cff5f2;\n              color: #0dad9e; }\n.my-properties .desktop-content .property-action .content-body .action .btn.sell:hover {\n                opacity: 0.7; }\n.my-properties .desktop-content .property-action .content-body .action .btn.book-to-stay {\n              margin-left: 7px;\n              background-color: white;\n              border: 1px solid #0dad9e;\n              color: #0dad9e; }\n.my-properties .desktop-content .property-action .content-body .action .btn.disabled {\n              cursor: unset;\n              background: #828282;\n              color: #fff;\n              border: 0; }\n@media (max-width: 1199px) {\n      .my-properties .desktop-content .property-name, .my-properties .desktop-content .property-action {\n        width: 200px; } }\n.my-properties .mobile-content {\n  display: none; }\n.my-properties .blank-content {\n  background: #ffffff;\n  border-radius: 2px;\n  min-height: 500px;\n  margin-bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 70px; }\n.my-properties .blank-content > .btn {\n    font-family: \"Roboto\", Arial, sans-serif;\n    font-size: 14px;\n    color: #ffffff;\n    height: 45px;\n    min-width: 265px;\n    margin-top: 30px; }\n.my-properties .blank-content > .btn > .svg {\n      margin-right: 5px; }\n@media (max-width: 991px) {\n  .my-properties .my-header {\n    flex-direction: column; }\n    .my-properties .my-header .my-options {\n      margin-top: 20px;\n      margin-left: -4px; }\n      .my-properties .my-header .my-options .toggler {\n        display: none; }\n      .my-properties .my-header .my-options .pg-select {\n        min-width: 50%; }\n      .my-properties .my-header .my-options .btn {\n        display: none; }\n  .my-properties .desktop-content {\n    display: none; }\n  .my-properties .mobile-content {\n    display: block; }\n    .my-properties .mobile-content .property {\n      background: #fff;\n      padding: 10px;\n      margin-bottom: 10px; }\n      .my-properties .mobile-content .property .property-header {\n        display: flex;\n        position: relative;\n        align-items: center;\n        margin-bottom: 10px; }\n        .my-properties .mobile-content .property .property-header > .icon-toggle {\n          font-size: 18px;\n          color: #626262;\n          margin-right: 5px; }\n          .my-properties .mobile-content .property .property-header > .icon-toggle.fa-plus-circle {\n            color: #10cfbd; }\n        .my-properties .mobile-content .property .property-header .image-preview {\n          width: 30px;\n          height: 30px; }\n        .my-properties .mobile-content .property .property-header .info {\n          display: flex;\n          flex-direction: column;\n          flex-grow: 1; }\n          .my-properties .mobile-content .property .property-header .info p {\n            margin: 0;\n            display: flex; }\n            .my-properties .mobile-content .property .property-header .info p span {\n              font-size: 11px;\n              line-height: 15px;\n              margin-right: 10px; }\n              .my-properties .mobile-content .property .property-header .info p span:before {\n                content: '';\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                margin-right: 7px;\n                border-radius: 7.5px;\n                background-color: #6d5cae; }\n              .my-properties .mobile-content .property .property-header .info p span:last-child:before {\n                margin-right: 5px;\n                background-color: #e6e6e6; }\n            .my-properties .mobile-content .property .property-header .info p.name span {\n              font-weight: 600;\n              font-size: 13px;\n              color: #2c2c2c; }\n              .my-properties .mobile-content .property .property-header .info p.name span:before {\n                content: none; }\n      .my-properties .mobile-content .property .property-details {\n        transition: max-height 1s;\n        overflow: hidden;\n        max-height: 0; }\n        .my-properties .mobile-content .property .property-details.open {\n          max-height: 500px; }\n        .my-properties .mobile-content .property .property-details .pg-display {\n          width: 100%;\n          margin-left: -4px; }\n        .my-properties .mobile-content .property .property-details .details-info {\n          padding: 0 10px;\n          margin-top: 10px; }\n          .my-properties .mobile-content .property .property-details .details-info > p {\n            display: flex; }\n            .my-properties .mobile-content .property .property-details .details-info > p span {\n              font-size: 12px;\n              color: #626262; }\n              .my-properties .mobile-content .property .property-details .details-info > p span:first-child {\n                flex-grow: 1; }\n        .my-properties .mobile-content .property .property-details .details-button {\n          padding-top: 5px;\n          margin-bottom: 5px; }\n          .my-properties .mobile-content .property .property-details .details-button > .flex {\n            display: flex; }\n            .my-properties .mobile-content .property .property-details .details-button > .flex.paid > .btn {\n              font-size: 12px; }\n              .my-properties .mobile-content .property .property-details .details-button > .flex.paid > .btn:first-child {\n                margin-right: 5px; }\n              .my-properties .mobile-content .property .property-details .details-button > .flex.paid > .btn:last-child {\n                margin-left: 5px; }\n            .my-properties .mobile-content .property .property-details .details-button > .flex > .btn {\n              border-radius: 2px;\n              font-family: \"Roboto\", Arial, sans-serif;\n              font-size: 14px;\n              color: #ffffff;\n              height: 45px;\n              flex-grow: 1; }\n              .my-properties .mobile-content .property .property-details .details-button > .flex > .btn.sell {\n                background: rgba(16, 207, 189, 0.1);\n                border-color: rgba(16, 207, 189, 0.1);\n                color: #10cfbd; }\n              .my-properties .mobile-content .property .property-details .details-button > .flex > .btn.pending {\n                background: #fff;\n                border: 1px solid #d1d1d1;\n                font-size: 12px;\n                color: #626262;\n                cursor: unset; }\n              .my-properties .mobile-content .property .property-details .details-button > .flex > .btn.disabled {\n                cursor: unset;\n                background: #828282;\n                color: #fff;\n                border: 0; }\n              .my-properties .mobile-content .property .property-details .details-button > .flex > .btn.book-to-stay {\n                background-color: white;\n                border: 1px solid #0dad9e;\n                color: #0dad9e; } }\n@media (max-width: 768px) {\n  .my-properties .my-header {\n    padding-top: 20px; }\n    .my-properties .my-header h3 {\n      font-size: 16px; }\n    .my-properties .my-header .my-options {\n      margin-top: 15px;\n      margin-left: unset; }\n  .my-properties .mobile-content .property .property-details .pg-select {\n    margin-left: unset; }\n  .my-properties .blank-content {\n    padding: 0 15px;\n    padding-top: 50px;\n    min-height: unset; }\n    .my-properties .blank-content > .btn {\n      width: 100%;\n      margin-bottom: 40px; } }\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/my-properties/my-properties.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/my-properties/my-properties.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MyPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPropertiesComponent", function() { return MyPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_dashboard_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/dashboard/api */ "./src/app/modules/dashboard/api/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environment/environment.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_components_modals_confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/modals/confirmation */ "./src/app/shared/components/modals/confirmation/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_plaid_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-plaid-link */ "./node_modules/ngx-plaid-link/fesm5/ngx-plaid-link.js");
/* harmony import */ var _shared_components_plaid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/plaid */ "./src/app/shared/components/plaid/index.ts");
/* harmony import */ var _shared_constants_verification_status__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/constants/verification-status */ "./src/app/shared/constants/verification-status.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_modals_investor_verification_investor_verification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/components/modals/investor-verification/investor-verification.component */ "./src/app/shared/components/modals/investor-verification/investor-verification.component.ts");
/* harmony import */ var _shared_components_modals_order_property_modal_order_property_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/components/modals/order-property-modal/order-property-modal.component */ "./src/app/shared/components/modals/order-property-modal/order-property-modal.component.ts");
/* harmony import */ var _shared_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/api */ "./src/app/shared/api/index.ts");
/* harmony import */ var _shared_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/services/modal/modal.service */ "./src/app/shared/services/modal/modal.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MyPropertiesComponent = /** @class */ (function () {
    function MyPropertiesComponent(router, title, bsModalService, plaidLinkService, _currentUser, _dashboardProperties, _proertyService, _walletShared, _general, _modalService, _validationShared) {
        this.router = router;
        this.title = title;
        this.bsModalService = bsModalService;
        this.plaidLinkService = plaidLinkService;
        this._currentUser = _currentUser;
        this._dashboardProperties = _dashboardProperties;
        this._proertyService = _proertyService;
        this._walletShared = _walletShared;
        this._general = _general;
        this._modalService = _modalService;
        this._validationShared = _validationShared;
        this.isPayment = false;
        this.isPropertyBlank = true;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.display = 'holding';
        this.displayOptions = [
            {
                name: 'Display Holding Details',
                value: 'holding'
            },
            {
                name: 'Display Yield Details',
                value: 'yield'
            }
        ];
        this.property = 0;
        this.sampleOptions = [
            {
                name: 'All Properties',
                value: 0
            }
        ];
        this.sorts = 'PurchaseDateDesc';
        this.sortsOptions = [
            {
                name: 'Latest Purchase',
                value: 'PurchaseDateDesc'
            },
            {
                name: 'Oldest Purchase',
                value: 'PurchaseDateAsc'
            },
            {
                name: 'Most Parts',
                value: 'PartsDesc'
            },
            {
                name: 'Least Parts',
                value: 'PartsAsc'
            },
            {
                name: 'Highest Initial Value',
                value: 'InitialValueDesc'
            },
            {
                name: 'Lowest Initial Value',
                value: 'InitialValueAsc'
            },
            {
                name: 'Highest Current Value',
                value: 'CurrentValueDesc'
            },
            {
                name: 'Lowest Current Value',
                value: 'CurrentValueAsc'
            }
        ];
        // Plaid
        this.openingPlaid = false;
        this.config = {
            clientName: 'Partbnb',
            apiVersion: 'v2',
            env: _env_environment__WEBPACK_IMPORTED_MODULE_2__["PLAID"].ENV,
            institution: null,
            token: null,
            webhook: _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/" + _env_environment__WEBPACK_IMPORTED_MODULE_2__["PLAID"].WEBHOOK,
            product: _env_environment__WEBPACK_IMPORTED_MODULE_2__["PLAID"].PRODUCTS,
            key: _env_environment__WEBPACK_IMPORTED_MODULE_2__["PLAID"].PUBLIC_KEY
        };
    }
    MyPropertiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle("Partbnb - My Properties");
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.username = currentUser.username;
        this.getProperties();
        this._walletShared.updatePlaid.subscribe(function (plaid) {
            _this.isPayment = plaid === 'payment';
        });
        this._walletShared.togglePlaid('payment');
    };
    MyPropertiesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.plaidLinkService
            .createPlaid(Object.assign({}, this.config, {
            onSuccess: function (token, metadata) { return _this.onSuccess(token, metadata); },
            onExit: function () {
                _this.openingPlaid = false;
            },
            onEvent: function () { }
        }))
            .then(function (handler) {
            _this.plaidLinkHandler = handler;
            _this.isPayment = true;
        });
    };
    MyPropertiesComponent.prototype.ngOnDestroy = function () {
        this.isPayment = false;
    };
    MyPropertiesComponent.prototype.getProperties = function () {
        var _this = this;
        var postData = { PropertyId: this.property, SortingMode: this.sorts };
        this._dashboardProperties.getProperties(this.username, postData).subscribe(function (res) {
            _this.isPropertyBlank = false;
            _this._general.setPropertiesStatus(false);
            if (!res || !res.length) {
                _this.myProperties = [];
                _this.isPropertyBlank = true;
                _this._general.setPropertiesStatus(true);
                return;
            }
            _this.myProperties = res.map(function (obj, idx) {
                if (idx === 0) {
                    obj.toggle = true;
                }
                else {
                    obj.toggle = false;
                }
                obj.display = 'holding';
                return obj;
            });
        }, function () {
            _this.myProperties = [];
            _this.isPropertyBlank = true;
        });
    };
    MyPropertiesComponent.prototype.isPropertyInActive = function (status) {
        return status === 'Inactive';
    };
    MyPropertiesComponent.prototype.isPropertyPending = function (item) {
        return (item && item.preOrderPaymentStatusID === 1) || false;
    };
    MyPropertiesComponent.prototype.plaidOpen = function () {
        this.plaidLinkHandler.open();
    };
    MyPropertiesComponent.prototype.plaidExit = function () {
        this.plaidLinkHandler.exit();
    };
    MyPropertiesComponent.prototype.onSuccess = function (token, metadata) {
        if (!this.isPayment) {
            return;
        }
        this.openingPlaid = false;
        var postData = {
            public_token: token,
            data: metadata
        };
        this.openPayment(true, postData);
    };
    MyPropertiesComponent.prototype.buyParts = function (item) {
        var _this = this;
        var isAccreditedInvestor = this._currentUser.getUserInfo().isAccreditedInvestor;
        if (!isAccreditedInvestor) {
            this._validationShared.openWarningForNonAccredited();
            return;
        }
        this._proertyService.getPropertyDetails(item.propertyID).subscribe(function (res) {
            var details = __assign({}, res.data);
            _this._modalService.modalInstance(_shared_components_modals_order_property_modal_order_property_modal_component__WEBPACK_IMPORTED_MODULE_12__["OrderPropertyModalComponent"], {
                initialState: { details: details },
                animated: false,
                class: 'centered-modal'
            });
        });
    };
    MyPropertiesComponent.prototype.openPayment = function (isReady, plaidData) {
        var _this = this;
        if (isReady === void 0) { isReady = false; }
        if (plaidData === void 0) { plaidData = null; }
        if (this.openingPlaid) {
            return;
        }
        this.openingPlaid = true;
        var initialState = {
            isReady: isReady,
            plaidData: plaidData,
            username: this.username,
            property: this.selectedProperty
        };
        var modalRef = this._modalService.modalInstance(_shared_components_plaid__WEBPACK_IMPORTED_MODULE_7__["PaymentMethodComponent"], {
            initialState: initialState,
            animated: false,
            keyboard: false,
            ignoreBackdropClick: true,
            class: 'plaid-modal'
        });
        modalRef.onClose.subscribe(function (result) {
            if (result === 'add') {
                _this.plaidOpen();
            }
            else if (result === 'done') {
                _this.getProperties();
                _this.openingPlaid = false;
            }
            else {
                _this.openingPlaid = false;
            }
        });
    };
    MyPropertiesComponent.prototype.makePayment = function (property, pending) {
        var _this = this;
        if (pending === void 0) { pending = false; }
        if (pending) {
            return;
        }
        var info = this._currentUser.getUserInfo();
        if (!info.isAccreditedInvestor) {
            this._validationShared.openWarningForNonAccredited();
            return;
        }
        this.selectedProperty = property;
        if (info && info.verificationStatus === _shared_constants_verification_status__WEBPACK_IMPORTED_MODULE_8__["VERIFICATION_STATUS"].APPROVED) {
            this.openPayment();
        }
        else {
            var props = {
                status: 'warning',
                title: 'You need to be verified as an Accredited Investor',
                desc: "We need to verify your status as an Accredited Investor before you can proceed.",
                isButtonDisabled: info.verificationStatus === _shared_constants_verification_status__WEBPACK_IMPORTED_MODULE_8__["VERIFICATION_STATUS"].PENDING || false,
                buttonLabel: info.verificationStatus === _shared_constants_verification_status__WEBPACK_IMPORTED_MODULE_8__["VERIFICATION_STATUS"].PENDING
                    ? 'Verification Pending'
                    : 'Start Verification'
            };
            var modalRef = this._modalService.modalInstance(_shared_components_modals_confirmation__WEBPACK_IMPORTED_MODULE_4__["ConfirmationComponent"], {
                initialState: { props: props },
                animated: false,
                class: 'confirmation'
            });
            modalRef.onClose.subscribe(function (result) {
                if (result) {
                    // this.router.navigate(['/dashboard']);
                    _this.openInvestorVerify();
                }
            });
        }
    };
    MyPropertiesComponent.prototype.openInvestorVerify = function () {
        this._modalService.modalInstance(_shared_components_modals_investor_verification_investor_verification_component__WEBPACK_IMPORTED_MODULE_11__["InvestorVerificationComponent"], {
            ignoreBackdropClick: true,
            class: 'modal-lg'
        });
    };
    MyPropertiesComponent.prototype.toggleProperty = function (property) {
        this.myProperties.map(function (obj) {
            if (obj.propertyID !== property.propertyID) {
                obj.toggle = false;
            }
            return obj;
        });
        setTimeout(function () {
            property.toggle = !property.toggle;
        }, 500);
    };
    MyPropertiesComponent.prototype.bookNow = function (url) {
        if (!!url) {
            window.open(url, '_blank');
        }
    };
    MyPropertiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-properties',
            template: __webpack_require__(/*! ./my-properties.component.html */ "./src/app/modules/dashboard/pages/my-properties/my-properties.component.html"),
            styles: [__webpack_require__(/*! ./my-properties.component.scss */ "./src/app/modules/dashboard/pages/my-properties/my-properties.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            ngx_plaid_link__WEBPACK_IMPORTED_MODULE_6__["NgxPlaidLinkService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_9__["CurrentUserService"],
            _modules_dashboard_api__WEBPACK_IMPORTED_MODULE_1__["DashboardPropertiesService"],
            _shared_api__WEBPACK_IMPORTED_MODULE_13__["PropertyService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_9__["WalletSharedService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_9__["GeneralService"],
            _shared_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_14__["ModalService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_9__["ValidationSharedService"]])
    ], MyPropertiesComponent);
    return MyPropertiesComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/pages/portfolio/portfolio.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/portfolio/portfolio.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"container\">\r\n    <!-- <investor-verification-banner></investor-verification-banner> -->\r\n    <add-funds-banner></add-funds-banner>\r\n    <div class=\"dashboard-head\">\r\n      <div class=\"dashboard-head-left\" [ngStyle]=\"{ paddingTop: !haveGraphValues ? '20px' : 'unset' }\">\r\n        <h3>My Porfolio</h3>\r\n        <div *ngIf=\"haveParts && !isMobile && currentValue\">\r\n          <custom-select [SelectOptions]=\"graphFilters\" [DefaultOption]=\"selectedGraphFilter.name\"\r\n            (selectChanged)=\"setSelectedGraphFilter($event)\"></custom-select>\r\n          <div class=\"note-select\">\r\n            <div><i class=\"fa fa-info\"></i></div>\r\n            Never affects total return\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"dashboard-head-right\">\r\n        <div class=\"dashboard-head-right-container\">\r\n          <div id=\"icon-income-blue\">\r\n            <icon-income></icon-income>\r\n          </div>\r\n          <div class=\"dashboard-head-wrapper\">\r\n            <div class=\"middle-text\">\r\n              ${{ !!currentValue ? currentValue.toLocaleString() : '0.00' }}\r\n            </div>\r\n            <div class=\"top-text\">Current Value</div>\r\n            <div class=\"bottom-text\">(Includes Wallet Funds)</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"dashboard-head-right-container\">\r\n          <div id=\"icon-capital-blue\">\r\n            <icon-capital></icon-capital>\r\n          </div>\r\n          <div class=\"dashboard-head-wrapper\">\r\n            <div class=\"middle-text\">\r\n              ${{ totalReturn.netIncome || '0.00' }}\r\n            </div>\r\n            <div class=\"top-text\">Total Return</div>\r\n            <div class=\"bottom-text\">\r\n              ({{ totalReturn.percentage || '0.00' }}%)\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div style=\"margin-bottom: 10px;\" *ngIf=\"haveParts && isMobile && currentValue\">\r\n      <div>\r\n        <custom-select [SelectOptions]=\"graphFilters\" [DefaultOption]=\"selectedGraphFilter.name\"\r\n          (selectChanged)=\"setSelectedGraphFilter($event)\"></custom-select>\r\n      </div>\r\n    </div>\r\n    <div class=\"portfolio-values-container\" *ngIf=\"haveParts && currentValue\">\r\n      <h3>Portfolio Value ({{ selectedGraphFilter.name }})</h3>\r\n      <p>View the performance of your portfolio over time</p>\r\n      <custom-chart [ChartData]=\"graphValues\" [ChartTypeId]=\"2\" [ChartLegend]=\"false\" *ngIf=\"!isMobile && graphValues\">\r\n      </custom-chart>\r\n\r\n      <div class=\"mobile-chart-container\" *ngIf=\"isMobile && graphValues\">\r\n        <custom-chart [ChartData]=\"graphValues\" [ChartTypeId]=\"3\" [ChartLegend]=\"false\"></custom-chart>\r\n      </div>\r\n    </div>\r\n    <div class=\"portfolio-graph-no-values\" *ngIf=\"!haveParts || !currentValue\"\r\n      [ngStyle]=\"{ height: porfolioGraphHeight }\">\r\n      <h3>Portfolio Value ({{ selectedGraphFilter.name }})</h3>\r\n      <p>View the performance of your portfolio over time</p>\r\n      <img *ngIf=\"!isMobile\" src=\"assets/dashboard/porfolio/graph_no_data.png\" />\r\n      <img *ngIf=\"isMobile\" src=\"assets/dashboard/porfolio/graph_no_data_mobile.png\" />\r\n      <div>\r\n        <div>\r\n          <button class=\"add-properties-btn\" routerLink=\"/properties\">\r\n            <i class=\"fa fa-plus\"></i> Add Your First Property\r\n          </button>\r\n          <p>You haven't purchased any Parts</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"asset-performance-container\">\r\n      <div class=\"asset-performance-header\">\r\n        <div class=\"left\">\r\n          <h3>Asset Performance</h3>\r\n          <p>View the performance of your properties</p>\r\n        </div>\r\n        <div class=\"right\">\r\n          <ul class=\"select-btn\">\r\n            <li>\r\n              <div (click)=\"selectingAssetPerfFilter()\">\r\n                <div id=\"icon-filter\">\r\n                  <icon-filter></icon-filter>\r\n                </div>\r\n                <div class=\"selected-text\">\r\n                  Filters\r\n                </div>\r\n              </div>\r\n              <ul [ngStyle]=\"{\r\n                  height: isFilterAssetPerfOpen\r\n                    ? filterAssetPerfDropHeight\r\n                    : '0px'\r\n                }\">\r\n                <li *ngFor=\"let filterHead of assetPerformanceFilterHeads\">\r\n                  <div class=\"filter-heads\">{{ filterHead }}</div>\r\n                  <ul>\r\n                    <li *ngFor=\"let option of assetPerformanceFilters[filterHead]\"\r\n                      (click)=\"selecteAssetPerfdFilter(option)\">\r\n                      <div class=\"filter-contents\" [ngClass]=\"{ selected: checkOptionSelected(option) }\">\r\n                        {{ getOptionName(option) }}\r\n                        <i class=\"fa fa-check\"></i>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n          <button class=\"add-properties-btn\" [ngClass]=\"{ disabled: !currentValue }\" [disabled]=\"!currentValue\"\r\n            routerLink=\"/properties\">\r\n            <i class=\"fa fa-plus\"></i> Add Properties\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <table class=\"table asset-performance-table\"\r\n        *ngIf=\"assetPerformanceData && assetPerformanceData.assetPerformance\">\r\n        <thead>\r\n          <tr>\r\n            <th>Asset</th>\r\n            <th>Asset Value</th>\r\n            <th>Net Income</th>\r\n            <th>Capital Growth</th>\r\n            <th>Total Return</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"\r\n              let assetPerformance of assetPerformanceData.assetPerformance\r\n            \">\r\n            <td>\r\n              <div class=\"asset-col-container\">\r\n                <div class=\"asset-thumbnail\" setImage=\"{{ assetPerformance.imagePath }}\"></div>\r\n                <div class=\"asset-description-wrapper\">\r\n                  <div class=\"asset-title\">\r\n                    {{ assetPerformance.assetName }}\r\n                  </div>\r\n                  <div class=\"asset-caption\">\r\n                    Most Recent Value -\r\n                    <span>\r\n                      {{\r\n                        assetPerformance.mostRecentValue\r\n                          | currency: 'USD':'symbol':'1.2-2'\r\n                      }}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              {{\r\n                assetPerformance.assetValue | currency: 'USD':'symbol':'1.2-2'\r\n              }}\r\n            </td>\r\n            <td>\r\n              <div>\r\n                {{\r\n                  assetPerformance.netIncome | currency: 'USD':'symbol':'1.2-2'\r\n                }}\r\n                <div class=\"equivalent-percent\">\r\n                  {{ assetPerformance.netIncomePercentage }}%\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                {{\r\n                  assetPerformance.capitalGrowth\r\n                    | currency: 'USD':'symbol':'1.2-2'\r\n                }}\r\n                <div class=\"equivalent-percent\">\r\n                  {{ assetPerformance.capitalGrowthPercentage }}%\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                {{\r\n                  assetPerformance.totalReturn\r\n                    | currency: 'USD':'symbol':'1.2-2'\r\n                }}\r\n                <div class=\"equivalent-percent\">\r\n                  {{ assetPerformance.totalReturnPercentage }}%\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr class=\"table-total\" *ngIf=\"\r\n              assetPerformanceData && assetPerformanceData.totalPerformance\r\n            \">\r\n            <td>\r\n              <div>\r\n                Total\r\n                <span *ngIf=\"!!selectedDatePurchaseFilter\">({{ selectedDatePurchaseFilter }})</span>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                {{\r\n                  assetPerformanceData.totalPerformance.assetValueTotal\r\n                    | currency: 'USD':'symbol':'1.2-2'\r\n                }}\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                {{\r\n                  assetPerformanceData.totalPerformance.netIncomeTotal\r\n                    | currency: 'USD':'symbol':'1.2-2'\r\n                }}\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                {{\r\n                  assetPerformanceData.totalPerformance.capitalGrowthTotal\r\n                    | currency: 'USD':'symbol':'1.2-2'\r\n                }}\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                {{\r\n                  assetPerformanceData.totalPerformance.totalReturn\r\n                    | currency: 'USD':'symbol':'1.2-2'\r\n                }}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <table class=\"table asset-performance-table-no-data\"\r\n        *ngIf=\"!(assetPerformanceData && assetPerformanceData.assetPerformance)\">\r\n        <thead>\r\n          <tr>\r\n            <th>Asset</th>\r\n            <th>Asset Value</th>\r\n            <th>Net Income</th>\r\n            <th>Capital Growth</th>\r\n            <th>Total Return</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>\r\n              <div class=\"asset-col-container\">\r\n                <div class=\"asset-thumbnail\"></div>\r\n                <div class=\"asset-description-wrapper\">\r\n                  <div class=\"asset-title\"></div>\r\n                  <div class=\"asset-caption\"></div>\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div></div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                <div></div>\r\n                <div class=\"equivalent-percent\"></div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                <div></div>\r\n                <div class=\"equivalent-percent\"></div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                <div></div>\r\n                <div class=\"equivalent-percent\"></div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr class=\"table-total\">\r\n            <td>\r\n              <div>\r\n                <div></div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                <div></div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                <div></div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                <div></div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                <div></div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <div class=\"asset-mobile-container\" *ngIf=\"\r\n          assetPerformanceData &&\r\n          assetPerformanceData.totalPerformance &&\r\n          assetPerformanceData.totalPerformance.assetValueTotal\r\n        \">\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-asset\">\r\n                  <icon-asset></icon-asset>\r\n                </div>\r\n                <div class=\"asset-mobile-text\">Total Asset Value</div>\r\n                <div class=\"asset-mobile-value\">\r\n                  {{\r\n                    assetPerformanceData.totalPerformance.assetValueTotal\r\n                      | currency: 'USD':'symbol':'1.2-2'\r\n                  }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-income-v2\">\r\n                  <icon-income-v2></icon-income-v2>\r\n                </div>\r\n                <div class=\"asset-mobile-text\">Total Net Income</div>\r\n                <div class=\"asset-mobile-value\">\r\n                  {{\r\n                    assetPerformanceData.totalPerformance.netIncomeTotal\r\n                      | currency: 'USD':'symbol':'1.2-2'\r\n                  }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-growth-v2\">\r\n                  <icon-growth-v2></icon-growth-v2>\r\n                </div>\r\n                <div class=\"asset-mobile-text\">Total Capital Growth</div>\r\n                <div class=\"asset-mobile-value\">\r\n                  {{\r\n                    assetPerformanceData.totalPerformance.capitalGrowthTotal\r\n                      | currency: 'USD':'symbol':'1.2-2'\r\n                  }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-returns\">\r\n                  <icon-returns></icon-returns>\r\n                </div>\r\n                <div class=\"asset-mobile-text\">Total Returns</div>\r\n                <div class=\"asset-mobile-value\">\r\n                  {{\r\n                    assetPerformanceData.totalPerformance.totalReturn\r\n                      | currency: 'USD':'symbol':'1.2-2'\r\n                  }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"asset-mobile-container-no-data\" *ngIf=\"\r\n          !(\r\n            assetPerformanceData &&\r\n            assetPerformanceData.totalPerformance &&\r\n            assetPerformanceData.totalPerformance.assetValueTotal\r\n          )\r\n        \">\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-asset-gray\">\r\n                  <icon-asset></icon-asset>\r\n                </div>\r\n                <div class=\"asset-mobile-text\">Total Asset Value</div>\r\n                <div class=\"dummy-indicator\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-income-v2-gray\">\r\n                  <icon-income-v2></icon-income-v2>\r\n                </div>\r\n                <div class=\"asset-mobile-text\">Total Net Income</div>\r\n                <div class=\"dummy-indicator\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-growth-v2-gray\">\r\n                  <icon-growth-v2></icon-growth-v2>\r\n                </div>\r\n                <div class=\"asset-mobile-text\">Total Capital Growth</div>\r\n                <div class=\"dummy-indicator\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div class=\"asset-mobile-wrapper\">\r\n              <div class=\"asset-mobile-content\">\r\n                <div id=\"icon-returns-gray\">\r\n                  <icon-returns></icon-returns>\r\n                </div>\r\n                <div class=\"asset-mobile-text\">Total Returns</div>\r\n                <div class=\"dummy-indicator\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"asset-property-container\" *ngFor=\"let assetPerformance of assetPerformanceData.assetPerformance\">\r\n        <div class=\"asset-property-header\">\r\n          <div class=\"asset-property-header-image\" setImage=\"{{ assetPerformance.imagePath }}\"></div>\r\n          <div class=\"asset-property-header-text\">\r\n            <div>{{ assetPerformance.assetName }}</div>\r\n            <div>\r\n              Most Recent Value -<span>\r\n                {{\r\n                  assetPerformance.mostRecentValue\r\n                    | currency: 'USD':'symbol':'1.2-2'\r\n                }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"asset-property-content-wrapper\">\r\n          <div class=\"asset-property-name\">Asset Value</div>\r\n          <div class=\"asset-property-value not-this\">\r\n            {{ assetPerformance.assetValue | currency: 'USD':'symbol':'1.2-2' }}\r\n          </div>\r\n        </div>\r\n        <div class=\"asset-property-content-wrapper\">\r\n          <div class=\"asset-property-name\">Net Income</div>\r\n          <div class=\"asset-property-value\">\r\n            {{ assetPerformance.netIncome | currency: 'USD':'symbol':'1.2-2' }}\r\n            <div class=\"asset-property-value-percent\">\r\n              {{ assetPerformance.netIncomePercentage }}%\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"asset-property-content-wrapper\">\r\n          <div class=\"asset-property-name\">Capital Growth</div>\r\n          <div class=\"asset-property-value\">\r\n            {{\r\n              assetPerformance.capitalGrowth | currency: 'USD':'symbol':'1.2-2'\r\n            }}\r\n            <div class=\"asset-property-value-percent\">\r\n              {{ assetPerformance.capitalGrowthPercentage }}%\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"asset-property-content-wrapper\">\r\n          <div class=\"asset-property-name\">Total Return</div>\r\n          <div class=\"asset-property-value\">\r\n            {{\r\n              assetPerformance.totalReturn | currency: 'USD':'symbol':'1.2-2'\r\n            }}\r\n            <div class=\"asset-property-value-percent\">\r\n              {{ assetPerformance.totalReturnPercentage }}%\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/portfolio/portfolio.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/portfolio/portfolio.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-head {\n  display: inline-block;\n  width: 100%;\n  margin: 0px 0px 10px 0px;\n  padding-top: 20px; }\n  .dashboard-head > .dashboard-head-left {\n    width: 180px;\n    position: relative;\n    float: left; }\n  .dashboard-head > .dashboard-head-left > h3 {\n      font-size: 22px;\n      color: #2c2c2c;\n      font-weight: bold;\n      margin: 0 0 5px 0; }\n  .dashboard-head > .dashboard-head-left > div {\n      display: inline-flex; }\n  .dashboard-head > .dashboard-head-left > div > .note-select {\n        display: inline-flex;\n        font-size: 12px;\n        color: #626262;\n        width: 200px;\n        align-items: center;\n        padding-left: 10px; }\n  .dashboard-head > .dashboard-head-left > div > .note-select > div {\n          height: 15px;\n          width: 15px;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          background: #6580b6;\n          color: white;\n          font-size: 10px;\n          border-radius: 10px;\n          margin-right: 6px; }\n  .dashboard-head > .dashboard-head-right {\n    float: right;\n    display: inline-flex; }\n  .dashboard-head > .dashboard-head-right > .dashboard-head-right-container {\n      border: 1px solid #e6e6e6;\n      border-radius: 3px;\n      padding: 10px;\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n      background-color: white;\n      min-width: 160px; }\n  .dashboard-head > .dashboard-head-right > .dashboard-head-right-container > #icon-income-blue,\n      .dashboard-head > .dashboard-head-right > .dashboard-head-right-container #icon-capital-blue {\n        margin-right: 15px; }\n  .dashboard-head > .dashboard-head-right > .dashboard-head-right-container > .dashboard-head-wrapper > .top-text {\n        font-size: 10px;\n        color: #2c2c2c;\n        font-weight: bold; }\n  .dashboard-head > .dashboard-head-right > .dashboard-head-right-container > .dashboard-head-wrapper .middle-text {\n        font-size: 20px;\n        color: #626262;\n        font-weight: bold; }\n  .dashboard-head > .dashboard-head-right > .dashboard-head-right-container > .dashboard-head-wrapper .bottom-text {\n        font-size: 10px;\n        color: #909090; }\n  .dashboard-head > .dashboard-head-right > .dashboard-head-right-container:first-child {\n      margin: 0 8px 0 0; }\n  .dashboard-head > .dashboard-head-right > .dashboard-head-right-container:last-child {\n      margin: 0 0 0 8px; }\n  .portfolio-values-container {\n  background-color: white;\n  padding: 25px 20px; }\n  .portfolio-values-container > h3 {\n    font-size: 18px;\n    color: #626262;\n    font-family: 'helveticaregular', Arial, 'Lucida Grande', sans-serif;\n    margin: 0;\n    line-height: 22px;\n    font-weight: bold; }\n  .portfolio-values-container > .mobile-chart-container {\n    width: 108%;\n    margin-left: -4%; }\n  .portfolio-graph-no-values {\n  width: 100%;\n  position: relative;\n  background: white;\n  padding: 25px 20px; }\n  .portfolio-graph-no-values > h3 {\n    font-size: 18px;\n    color: #626262;\n    font-family: 'helveticaregular', Arial, 'Lucida Grande', sans-serif;\n    margin: 0;\n    line-height: 22px;\n    font-weight: bold; }\n  .portfolio-graph-no-values > img {\n    width: calc(100% - 40px);\n    z-index: 0;\n    position: absolute; }\n  .portfolio-graph-no-values > div {\n    width: 100%;\n    z-index: 1;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    height: 80%; }\n  .portfolio-graph-no-values > div > div {\n      z-index: 1;\n      display: -ms-grid;\n      display: grid; }\n  .portfolio-graph-no-values > div > div > .add-properties-btn {\n        padding: 5px 15px;\n        background: #10cfbd;\n        border-radius: 2px;\n        color: white;\n        cursor: pointer;\n        font-size: 12px;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        border: none;\n        height: -webkit-fit-content;\n        height: -moz-fit-content;\n        height: fit-content; }\n  .portfolio-graph-no-values > div > div > .add-properties-btn > i {\n          font-size: 16px;\n          padding: 3px 5px 3px 0; }\n  .portfolio-graph-no-values > div > div > p {\n        font-size: 14px;\n        color: #909090;\n        text-align: center;\n        opacity: 0.5;\n        margin: 0;\n        margin-top: 5px; }\n  .asset-performance-container {\n  background-color: white;\n  padding: 25px 20px;\n  margin-top: 15px;\n  margin-bottom: 30px;\n  display: inline-block;\n  width: 100%; }\n  .asset-performance-container > .asset-performance-header {\n    display: inline-block;\n    width: 100%; }\n  .asset-performance-container > .asset-performance-header > .left {\n      float: left; }\n  .asset-performance-container > .asset-performance-header > .left > h3 {\n        font-size: 18px;\n        color: #626262;\n        margin: 0;\n        font-weight: bold;\n        line-height: 22px;\n        font-family: 'helveticaregular', Arial, 'Lucida Grande', sans-serif; }\n  .asset-performance-container > .asset-performance-header > .left > p {\n        margin: 0; }\n  .asset-performance-container > .asset-performance-header > .right {\n      float: right;\n      display: inline-flex;\n      align-items: center; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn {\n        list-style: none;\n        text-decoration: none;\n        padding: 0;\n        height: 32px;\n        margin: 0;\n        background-color: white; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li {\n          padding: 0; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > div {\n            cursor: pointer;\n            border: 1px solid #e6e6e6;\n            height: 32px;\n            width: 100%;\n            margin: 0;\n            border-radius: 2px;\n            display: inline-flex;\n            align-items: center; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > div > .selected-text {\n              text-overflow: ellipsis;\n              overflow: hidden;\n              white-space: nowrap;\n              width: 100%;\n              padding-right: 0px;\n              position: inherit;\n              font-size: 12px;\n              padding-right: 10px; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > div > div:first-child {\n              padding: 8px 10px 0px 10px;\n              right: 0px;\n              position: inherit; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > div div:nth-child(2) {\n              position: inherit;\n              right: 0px; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > ul {\n            list-style: none;\n            text-decoration: none;\n            padding: 0;\n            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n            background-color: white;\n            z-index: 1000;\n            position: absolute;\n            transition-property: all;\n            transition-duration: 0.5s;\n            transition-timing-function: cubic-bezier(0, 0.7, 0.5, 1);\n            overflow: hidden;\n            -webkit-overflow-scrolling: touch;\n            min-width: 200px; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > ul > li {\n              padding: 0 5px; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > ul > li > .filter-heads {\n                padding-left: 10px;\n                text-overflow: ellipsis;\n                overflow: hidden;\n                white-space: nowrap;\n                display: inline-flex;\n                align-items: center;\n                font-size: 12px;\n                width: 100%;\n                text-transform: capitalize;\n                background-color: #10cfbd;\n                border-radius: 2px;\n                color: white;\n                font-weight: bold;\n                margin: 3px 0; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > ul > li > ul {\n                list-style: none;\n                text-decoration: none;\n                padding: 0; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > ul > li > ul > li {\n                  padding: 0;\n                  cursor: pointer; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > ul > li > ul > li > .filter-contents {\n                    color: #626262;\n                    opacity: 0.75;\n                    padding: 5px 5px 5px 15px;\n                    text-overflow: ellipsis;\n                    overflow: hidden;\n                    white-space: nowrap;\n                    display: inline-flex;\n                    align-items: center;\n                    font-size: 12px;\n                    width: 100%;\n                    border-radius: 3px; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > ul > li > ul > li > .filter-contents > i {\n                      display: none; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > ul > li > ul > li > .selected {\n                    background-color: #daeffd; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > ul > li > ul > li > .selected > i {\n                      position: absolute;\n                      right: 15px;\n                      color: #10cfbd;\n                      font-size: 15px;\n                      display: initial; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > ul > li > ul > li > div:hover:not(.selected) {\n                    background-color: #f0f0f0; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > ul > li:first-child {\n              padding: 5px 5px 0px; }\n  .asset-performance-container > .asset-performance-header > .right > .select-btn > li > ul > li:last-child {\n              padding: 0px 5px 5px 5px; }\n  .asset-performance-container > .asset-performance-header > .right > .filter-btn {\n        border: 1px solid #e6e6e6;\n        border-radius: 2px;\n        display: inline-flex;\n        padding: 5px 15px;\n        align-items: center;\n        font-size: 12px;\n        color: #909090;\n        cursor: pointer; }\n  .asset-performance-container > .asset-performance-header > .right > .filter-btn > #icon-filter {\n          display: flex;\n          padding-right: 3px; }\n  .asset-performance-container > .asset-performance-header > .right > .filter-btn > #icon-filter > icon-filter {\n            display: inherit; }\n  .asset-performance-container > .asset-performance-header > .right .add-properties-btn {\n        padding: 5px 15px;\n        background: #10cfbd;\n        border-radius: 2px;\n        color: white;\n        cursor: pointer;\n        font-size: 12px;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        margin-left: 10px;\n        border: none; }\n  .asset-performance-container > .asset-performance-header > .right .add-properties-btn > i {\n          font-size: 16px;\n          padding: 3px 5px 3px 0; }\n  .asset-performance-container > .asset-performance-header > .right > .disabled {\n        color: #626262;\n        background-color: white;\n        opacity: 0.9;\n        border: 1px solid #e6e6e6;\n        cursor: not-allowed; }\n  .asset-performance-container > .asset-performance-table {\n    margin-top: 10px; }\n  .asset-performance-container > .asset-performance-table > thead > tr {\n      background-color: #6580b6; }\n  .asset-performance-container > .asset-performance-table > thead > tr > th {\n        font-size: 14px;\n        color: #ffffff;\n        text-transform: none;\n        font-weight: initial;\n        background: #6580b6;\n        letter-spacing: 0;\n        border-left: 1px solid rgba(230, 230, 230, 0.75);\n        text-align: center; }\n  .asset-performance-container > .asset-performance-table > thead > tr > th:first-child {\n        border-radius: 3px 0 0 3px; }\n  .asset-performance-container > .asset-performance-table > thead > tr > th:last-child {\n        border-radius: 0 3px 3px 0; }\n  .asset-performance-container > .asset-performance-table > tbody > tr > td {\n      padding: 10px 0;\n      vertical-align: middle;\n      border-bottom: 1px solid #e6e6e6; }\n  .asset-performance-container > .asset-performance-table > tbody > tr > td > .asset-col-container {\n        display: inline-flex;\n        align-items: center;\n        vertical-align: middle; }\n  .asset-performance-container > .asset-performance-table > tbody > tr > td > .asset-col-container > .asset-thumbnail {\n          height: 40px;\n          width: 40px;\n          background-color: #ddd;\n          margin: 0 15px 0 25px;\n          background-size: cover !important; }\n  .asset-performance-container > .asset-performance-table > tbody > tr > td > .asset-col-container > .asset-description-wrapper {\n          display: inline-block; }\n  .asset-performance-container > .asset-performance-table > tbody > tr > td > .asset-col-container > .asset-description-wrapper > .asset-title {\n            font-size: 16px;\n            color: #626262;\n            font-weight: bold; }\n  .asset-performance-container > .asset-performance-table > tbody > tr > td > .asset-col-container > .asset-description-wrapper > .asset-caption {\n            font-size: 12px;\n            color: #909090; }\n  .asset-performance-container > .asset-performance-table > tbody > tr > td > .asset-col-container > .asset-description-wrapper > .asset-caption > span {\n              color: #6580b6;\n              font-weight: bold; }\n  .asset-performance-container > .asset-performance-table > tbody > tr:not(.table-total) > td:not(:first-child) {\n      vertical-align: middle;\n      text-align: center;\n      font-size: 16px;\n      color: #626262;\n      font-weight: bold; }\n  .asset-performance-container > .asset-performance-table > tbody > tr:not(.table-total) > td:not(:first-child) > div {\n        display: inline-block;\n        padding-top: 12px; }\n  .asset-performance-container > .asset-performance-table > tbody > tr:not(.table-total) > td:not(:first-child) > div > .equivalent-percent {\n          font-size: 12px;\n          color: #909090;\n          font-weight: normal;\n          text-align: right; }\n  .asset-performance-container > .asset-performance-table > tbody > .table-total > td {\n      border: 0; }\n  .asset-performance-container > .asset-performance-table > tbody > .table-total > td > div {\n        padding: 10px 0;\n        background-color: #f5f8ff;\n        text-align: center;\n        font-size: 16px;\n        color: #2c2c2c;\n        font-weight: bold; }\n  .asset-performance-container > .asset-performance-table-no-data {\n    margin-top: 10px; }\n  .asset-performance-container > .asset-performance-table-no-data > thead > tr {\n      background: #f0f0f0; }\n  .asset-performance-container > .asset-performance-table-no-data > thead > tr > th {\n        font-size: 14px;\n        color: white;\n        text-transform: none;\n        font-weight: initial;\n        background: #6580b6;\n        letter-spacing: 0;\n        border-left: 1px solid rgba(230, 230, 230, 0.75);\n        text-align: center; }\n  .asset-performance-container > .asset-performance-table-no-data > thead > tr > th:first-child {\n        border-radius: 3px 0 0 3px;\n        min-width: 265px; }\n  .asset-performance-container > .asset-performance-table-no-data > thead > tr > th:last-child {\n        border-radius: 0 3px 3px 0; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > tr > td:first-child {\n      text-align: left; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > tr > td {\n      padding: 6px;\n      text-align: center; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > tr > td > .asset-col-container {\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > tr > td > .asset-col-container > .asset-thumbnail {\n          background-color: #f7f7f7;\n          height: 40px;\n          width: 50px;\n          margin-right: 10px;\n          margin-left: 15px; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > tr > td > .asset-col-container > .asset-description-wrapper {\n          width: inherit; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > tr > td > .asset-col-container > .asset-description-wrapper > .asset-title {\n            background: #f7f7f7;\n            border-radius: 5.5px;\n            height: 12px;\n            width: 75%;\n            margin: 10px 0; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > tr > td > .asset-col-container > .asset-description-wrapper > .asset-caption {\n            background: #f7f7f7;\n            border-radius: 5.5px;\n            height: 12px;\n            width: 50%;\n            margin: 10px 0; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > tr:not(.table-total) > td:not(:first-child) > div {\n      display: inline; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > tr:not(.table-total) > td:not(:first-child) > div > div {\n        background: #f7f7f7;\n        border-radius: 5.5px;\n        height: 12px;\n        width: 75%;\n        margin: 10px 0; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > tr:not(.table-total) > td:not(:first-child) > div > .equivalent-percent {\n        background: #f7f7f7;\n        border-radius: 5.5px;\n        height: 12px;\n        width: 45%;\n        margin: 10px 0; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > tr:not(.table-total) > td:nth-child(2) > div:first-child {\n      background: #f7f7f7;\n      border-radius: 5.5px;\n      height: 12px;\n      width: 100px;\n      margin: 10px 0;\n      display: inline-block; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > .table-total > td {\n      padding: 6px 0; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > .table-total > td > div {\n        background: #f7f7f7;\n        text-align: center;\n        height: 46px;\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > .table-total > td > div > div {\n          background: white;\n          border-radius: 5.5px;\n          height: 12px;\n          width: 70%;\n          margin: 10px 0; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > .table-total > td:first-child > div {\n      display: flex;\n      align-items: center;\n      padding: 7.5px 0;\n      height: 46px;\n      justify-content: left; }\n  .asset-performance-container > .asset-performance-table-no-data > tbody > .table-total > td:first-child > div > div {\n        background: white;\n        border-radius: 5.5px;\n        height: 12px;\n        width: 71%;\n        margin-left: 25px;\n        display: inline-block; }\n  .asset-performance-container > .asset-mobile-container {\n    display: none;\n    margin: 10px 0; }\n  .asset-performance-container > .asset-mobile-container > .row {\n      margin: 0; }\n  .asset-performance-container > .asset-mobile-container > .row > div {\n        padding: 5px; }\n  .asset-performance-container > .asset-mobile-container > .row > div > .asset-mobile-wrapper {\n          width: 100%;\n          background: #fafafa;\n          border-radius: 4px;\n          height: 83px;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center; }\n  .asset-performance-container > .asset-mobile-container > .row > div > .asset-mobile-wrapper > .asset-mobile-content {\n            display: block;\n            text-align: center; }\n  .asset-performance-container > .asset-mobile-container > .row > div > .asset-mobile-wrapper > .asset-mobile-content > .asset-mobile-text {\n              color: #626262;\n              font-size: 10px;\n              line-height: 15px; }\n  .asset-performance-container > .asset-mobile-container > .row > div > .asset-mobile-wrapper > .asset-mobile-content > .asset-mobile-value {\n              font-size: 16px;\n              color: #2c2c2c;\n              font-weight: bold; }\n  .asset-performance-container > .asset-mobile-container > .row > .col-6:first-child {\n        padding: 5px 5px 5px 0; }\n  .asset-performance-container > .asset-mobile-container > .row > .col-6:last-child {\n        padding: 5px 0px 5px 5px; }\n  .asset-performance-container > .asset-mobile-container-no-data {\n    display: none;\n    margin: 10px 0; }\n  .asset-performance-container > .asset-mobile-container-no-data > .row {\n      margin: 0;\n      width: 100%; }\n  .asset-performance-container > .asset-mobile-container-no-data > .row > div {\n        padding: 5px; }\n  .asset-performance-container > .asset-mobile-container-no-data > .row > div > .asset-mobile-wrapper {\n          width: 100%;\n          background: #fafafa;\n          border-radius: 4px;\n          height: 83px;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center; }\n  .asset-performance-container > .asset-mobile-container-no-data > .row > div > .asset-mobile-wrapper > .asset-mobile-content {\n            display: block;\n            text-align: center; }\n  .asset-performance-container > .asset-mobile-container-no-data > .row > div > .asset-mobile-wrapper > .asset-mobile-content > .asset-mobile-text {\n              color: #d1d1d1;\n              font-size: 10px;\n              line-height: 15px; }\n  .asset-performance-container > .asset-mobile-container-no-data > .row > div > .asset-mobile-wrapper > .asset-mobile-content > .dummy-indicator {\n              background: #f0f0f0;\n              border-radius: 7px;\n              height: 14px;\n              margin-top: 8px; }\n  .asset-performance-container > .asset-mobile-container-no-data > .row > .col-6:first-child {\n        padding: 5px 5px 5px 0; }\n  .asset-performance-container > .asset-mobile-container-no-data > .row > .col-6:last-child {\n        padding: 5px 0px 5px 5px; }\n  .asset-performance-container > .asset-property-container {\n    display: none;\n    width: 100%;\n    border: 1px solid #e6e6e6;\n    border-radius: 5px;\n    padding: 10px; }\n  .asset-performance-container > .asset-property-container > .asset-property-header {\n      border-bottom: 1px solid #e6e6e6;\n      padding-bottom: 5px; }\n  .asset-performance-container > .asset-property-container > .asset-property-header > .asset-property-header-image {\n        height: 40px;\n        width: 40px;\n        display: inline-block;\n        background-color: #ddd;\n        background-size: cover !important; }\n  .asset-performance-container > .asset-property-container > .asset-property-header > .asset-property-header-text {\n        display: inline-block;\n        vertical-align: top;\n        padding-left: 15px; }\n  .asset-performance-container > .asset-property-container > .asset-property-header > .asset-property-header-text > div:first-child {\n          font-size: 14px;\n          color: #626262;\n          font-weight: bold; }\n  .asset-performance-container > .asset-property-container > .asset-property-header > .asset-property-header-text > div:last-child {\n          font-size: 12px; }\n  .asset-performance-container > .asset-property-container > .asset-property-header > .asset-property-header-text > div:last-child > span {\n            color: #48b0f7;\n            font-weight: bold; }\n  .asset-performance-container > .asset-property-container > .asset-property-content-wrapper {\n      width: 100%;\n      display: inline-block;\n      padding: 12px 0;\n      vertical-align: top; }\n  .asset-performance-container > .asset-property-container > .asset-property-content-wrapper > .asset-property-name {\n        font-size: 12px;\n        color: #2c2c2c;\n        float: left; }\n  .asset-performance-container > .asset-property-container > .asset-property-content-wrapper > .asset-property-value {\n        font-size: 12px;\n        color: #626262;\n        font-weight: bold;\n        float: right; }\n  .asset-performance-container > .asset-property-container > .asset-property-content-wrapper > .asset-property-value > .asset-property-value-percent {\n          font-size: 10px;\n          color: #909090;\n          text-align: right;\n          line-height: 5px; }\n  .asset-performance-container > .asset-property-container > .asset-property-content-wrapper > .asset-property-value:not(.not-this) {\n        margin-top: -5.5px; }\n  .asset-performance-container > .asset-property-container > .asset-property-content-wrapper:not(:last-child) {\n      border-bottom: 1px dashed #e6e6e6; }\n  @media (max-width: 426px) {\n  .dashboard-head {\n    margin-top: 0;\n    padding-top: 0; }\n    .dashboard-head > .dashboard-head-left {\n      padding: 0; }\n      .dashboard-head > .dashboard-head-left > h3 {\n        font-size: 18px;\n        margin: 0 0 10px 0; }\n    .dashboard-head > .dashboard-head-right {\n      width: 100%; }\n      .dashboard-head > .dashboard-head-right > .dashboard-head-right-container {\n        display: block;\n        text-align: center;\n        width: 50%; }\n        .dashboard-head > .dashboard-head-right > .dashboard-head-right-container > .dashboard-head-wrapper > .bottom-text {\n          line-height: 12px; }\n        .dashboard-head > .dashboard-head-right > .dashboard-head-right-container > #icon-income-blue,\n        .dashboard-head > .dashboard-head-right > .dashboard-head-right-container #icon-capital-blue {\n          margin: 0px; }\n  .portfolio-values-container {\n    padding: 10px 15px; }\n    .portfolio-values-container > h3 {\n      font-size: 14px; }\n  .portfolio-graph-no-values {\n    padding: 15px 20px; }\n    .portfolio-graph-no-values > h3 {\n      font-size: 14px; }\n  .asset-performance-container {\n    padding: 15px 20px; }\n    .asset-performance-container > .asset-performance-header > .left > h3 {\n      font-size: 14px; }\n    .asset-performance-container > .asset-performance-header > .left > p {\n      margin-bottom: 10px; }\n    .asset-performance-container > .asset-performance-header > .left > .sub-caption {\n      font-size: 12px;\n      margin-bottom: 10px; }\n    .asset-performance-container > .asset-performance-header > .right {\n      width: 100%; }\n    .asset-performance-container > .asset-performance-table,\n    .asset-performance-container .asset-performance-table-no-data {\n      display: none; }\n    .asset-performance-container > .asset-mobile-container,\n    .asset-performance-container .asset-mobile-container-no-data,\n    .asset-performance-container .asset-property-container {\n      display: block; } }\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/portfolio/portfolio.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/portfolio/portfolio.component.ts ***!
  \**************************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_graph_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/graph-view */ "./src/app/shared/constants/graph-view.ts");
/* harmony import */ var _modules_dashboard_api_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/dashboard/api/portfolio/portfolio.service */ "./src/app/modules/dashboard/api/portfolio/portfolio.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/session-storage/session-storage.service */ "./src/app/shared/services/session-storage/session-storage.service.ts");
/* harmony import */ var _shared_services_custom_chart_custom_chart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/custom-chart/custom-chart.service */ "./src/app/shared/services/custom-chart/custom-chart.service.ts");
/* harmony import */ var _shared_services_viewport_viewport_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/viewport/viewport.service */ "./src/app/shared/services/viewport/viewport.service.ts");
/* harmony import */ var _shared_services_drag_and_drop_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/drag-and-drop/drag-and-drop.service */ "./src/app/shared/services/drag-and-drop/drag-and-drop.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(_portfolioService, title, _sessionStorageService, _customChartService, _viewportService, _dragAndDropService, changeDetectorRef) {
        var _this = this;
        this._portfolioService = _portfolioService;
        this.title = title;
        this._sessionStorageService = _sessionStorageService;
        this._customChartService = _customChartService;
        this._viewportService = _viewportService;
        this._dragAndDropService = _dragAndDropService;
        this.changeDetectorRef = changeDetectorRef;
        this.haveGraphValues = false;
        this.haveAssetPerformanceData = false;
        this.isFilterAssetPerfOpen = false;
        this.firstName = '';
        this.svgIconsDesktop = [
            {
                id: '#icon-filter',
                originals: {
                    fill: '#626262',
                    width: '35px',
                    height: '35px'
                },
                modifiers: {
                    fill: '#626262',
                    width: '22px',
                    height: '22px'
                }
            },
            {
                id: '#icon-income-blue',
                originals: {
                    fill: '#788195',
                    width: '28px',
                    height: '36px'
                },
                modifiers: {
                    fill: '#6580B6',
                    width: '25px',
                    height: '33px'
                }
            },
            {
                id: '#icon-capital-blue',
                originals: {
                    fill: '#788195',
                    width: '32px',
                    height: '32px'
                },
                modifiers: {
                    fill: '#6580B6',
                    width: '28px',
                    height: '28px'
                }
            }
        ];
        this.svgIconsMobile = [
            {
                id: '#icon-asset-gray',
                originals: {
                    fill: '#2C2C2C'
                },
                modifiers: {
                    fill: '#D1D1D1'
                }
            },
            {
                id: '#icon-income-v2-gray',
                originals: {
                    fill: '#2C2C2C'
                },
                modifiers: {
                    fill: '#D1D1D1'
                }
            },
            {
                id: '#icon-growth-v2-gray',
                originals: {
                    fill: '#2C2C2C'
                },
                modifiers: {
                    fill: '#D1D1D1'
                }
            },
            {
                id: '#icon-returns-gray',
                originals: {
                    fill: ['#2C2C2C', '#000000', '#2C2C2C']
                },
                modifiers: {
                    fill: ['#D1D1D1', '#D1D1D1', '#D1D1D1']
                }
            }
        ];
        this.selectedDatePurchaseFilter = '';
        this.modalConfig = {
            ignoreBackdropClick: true,
            class: 'modal-sm'
        };
        this._viewportService.updatingView.subscribe(function () {
            _this.updateIcons(_this.svgIconsDesktop);
            _this.isDesktop = _this._viewportService.isDesktop();
            _this.isTablet = _this._viewportService.isTablet();
            _this.isMobile = _this._viewportService.isMobile();
        });
    }
    PortfolioComponent.prototype.onResize = function () {
        var _this = this;
        setTimeout(function () {
            _this._viewportService.checkViewSizes();
            _this.updatePorfolioValueHeight();
        }, 250);
    };
    PortfolioComponent.prototype.ngOnInit = function () {
        this.title.setTitle("Partbnb - My Portfolio");
        this.graphFilters = _shared_constants_graph_view__WEBPACK_IMPORTED_MODULE_1__["GRAPH_OPTIONS"].map(function (filter) { return filter.name; });
        this.assetPerformanceFilters = [];
        this.selectedGraphFilter = _shared_constants_graph_view__WEBPACK_IMPORTED_MODULE_1__["GRAPH_OPTIONS"][0];
        this.userName = this._sessionStorageService.getSession('username');
        this.selectedAssetPerformanceFilter = {
            countryId: null,
            datePurchased: '',
            pageNumber: 1,
            pageSize: 10
        };
        this.currentValue = 0.0;
        this.totalReturn = {
            netWorth: 0.0,
            percentage: 0.0
        };
        this.haveParts = false;
        this.getAssetPerformance();
    };
    PortfolioComponent.prototype.ngAfterViewInit = function () {
        this._viewportService.checkViewSizes();
        this.updatePorfolioValueHeight();
        this.getGraphValues();
    };
    PortfolioComponent.prototype.setSelectedGraphFilter = function (evt) {
        var selected = _shared_constants_graph_view__WEBPACK_IMPORTED_MODULE_1__["GRAPH_OPTIONS"].filter(function (filter) { return filter.name === evt; });
        this.selectedGraphFilter = selected[0];
        this.getGraphValues();
    };
    PortfolioComponent.prototype.updateIcons = function (svgValues) {
        var _loop_1 = function (svg) {
            var svgRef = document.querySelector(svg.id);
            var svgRefString = svgRef.innerHTML || '';
            var _loop_2 = function (svgStyle) {
                if (typeof svg.originals[svgStyle] === 'object') {
                    svg.originals[svgStyle].map(function (value, index) {
                        svgRefString = svgRefString.replace(svgStyle + "=\"" + value + "\"", svgStyle + "=\"" + svg.modifiers[svgStyle][index] + "\"");
                    });
                }
                else {
                    svgRefString = svgRefString.replace(svgStyle + "=\"" + svg.originals[svgStyle] + "\"", svgStyle + "=\"" + svg.modifiers[svgStyle] + "\"");
                }
            };
            for (var _i = 0, _a = Object.keys(svg.originals); _i < _a.length; _i++) {
                var svgStyle = _a[_i];
                _loop_2(svgStyle);
            }
            svgRef.innerHTML = svgRefString;
        };
        for (var _i = 0, svgValues_1 = svgValues; _i < svgValues_1.length; _i++) {
            var svg = svgValues_1[_i];
            _loop_1(svg);
        }
    };
    PortfolioComponent.prototype.getGraphValues = function () {
        var _this = this;
        this.graphValues = [];
        this._portfolioService
            .getPortfolioValue(this.userName, {
            timeFrame: this.selectedGraphFilter.key
        })
            .subscribe(function (data) {
            _this.graphValues = data.portfolioData;
            _this.currentValue =
                data.currentValue.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) || _this.currentValue;
            _this.totalReturn = {
                netIncome: data.totalReturn.netIncome.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }),
                percentage: data.totalReturn.percentage.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })
            };
            _this.haveParts = data.hasParts;
            _this._dragAndDropService.setAddFundsBannerStatus(!_this.currentValue);
            _this.haveGraphValues =
                (_this.graphValues.length === 0 && !!_this.graphValues[0].valueAdded) ||
                    _this.graphValues.length > 0;
            _this._customChartService.updateChartData(_this.graphValues);
        });
    };
    PortfolioComponent.prototype.getAssetPerformance = function () {
        var _this = this;
        this.assetPerformanceData = [];
        this._portfolioService
            .getAssetPerformance(this.userName, this.selectedAssetPerformanceFilter)
            .subscribe(function (data) {
            _this.assetPerformanceFilters =
                data.hasOwnProperty('options') && data.options;
            _this.haveAssetPerformanceData =
                data.hasOwnProperty('totalPerformance') &&
                    data.hasOwnProperty('assetPerformance');
            _this.assetPerformanceFilterHeads = Object.keys(_this.assetPerformanceFilters);
            var heightCounter = 0;
            _this.assetPerformanceData = data;
            _this.assetPerformanceFilterHeads.map(function (heads) {
                heightCounter += 33;
                heightCounter += _this.assetPerformanceFilters[heads].length * 35;
            });
            _this.filterAssetPerfDropHeight = heightCounter + "px";
            if (_this.isMobile && !_this.haveAssetPerformanceData) {
                _this.updateIcons(_this.svgIconsMobile);
            }
        });
    };
    PortfolioComponent.prototype.selectingAssetPerfFilter = function () {
        this.isFilterAssetPerfOpen = !this.isFilterAssetPerfOpen;
    };
    PortfolioComponent.prototype.selecteAssetPerfdFilter = function (option) {
        if (option.hasOwnProperty('countryId')) {
            if (this.checkOptionSelected(option)) {
                this.selectedAssetPerformanceFilter.countryId = null;
            }
            else {
                this.selectedAssetPerformanceFilter.countryId = option.countryId;
            }
        }
        else if (option.hasOwnProperty('datePurchasedKey')) {
            if (this.checkOptionSelected(option)) {
                this.selectedAssetPerformanceFilter.datePurchased = '';
                this.selectedDatePurchaseFilter = '';
            }
            else {
                this.selectedAssetPerformanceFilter.datePurchased =
                    option.datePurchasedKey;
                this.selectedDatePurchaseFilter = option.datePurchasedName;
            }
        }
        this.getAssetPerformance();
        this.selectingAssetPerfFilter();
    };
    PortfolioComponent.prototype.getOptionName = function (option) {
        if (option.hasOwnProperty('countryName')) {
            return option.countryName;
        }
        else if (option.hasOwnProperty('datePurchasedName')) {
            return option.datePurchasedName;
        }
    };
    PortfolioComponent.prototype.checkOptionSelected = function (option) {
        if (option.hasOwnProperty('countryId')) {
            return option.countryId === this.selectedAssetPerformanceFilter.countryId;
        }
        else if (option.hasOwnProperty('datePurchasedKey')) {
            return (option.datePurchasedKey ===
                this.selectedAssetPerformanceFilter.datePurchased);
        }
        return false;
    };
    PortfolioComponent.prototype.updatePorfolioValueHeight = function () {
        if (!this.haveGraphValues) {
            var imageHeight = document.querySelector('.container');
            var partialCal = (imageHeight.clientWidth * 43) / 100;
            this.porfolioGraphHeight = (this.isMobile ? partialCal + 150 : partialCal) + "px";
            this.changeDetectorRef.detectChanges();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PortfolioComponent.prototype, "onResize", null);
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/modules/dashboard/pages/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/modules/dashboard/pages/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [_modules_dashboard_api_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _shared_services_session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"],
            _shared_services_custom_chart_custom_chart_service__WEBPACK_IMPORTED_MODULE_5__["CustomChartService"],
            _shared_services_viewport_viewport_service__WEBPACK_IMPORTED_MODULE_6__["ViewportService"],
            _shared_services_drag_and_drop_drag_and_drop_service__WEBPACK_IMPORTED_MODULE_7__["DragAndDropService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div *ngIf=\"isNoPreOrderData\" class=\"alert alert-warning\">\r\n    You Have No Pre-Order Yet.\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!isNoPreOrderData\">\r\n    <div class=\"col-lg-6 col-12 pre-order-column\">\r\n      <h5>My Pre-Order</h5>\r\n      <div\r\n        class=\"pre-order-wrapper\"\r\n        id=\"pre-order-wrapper-id\"\r\n        [ngClass]=\"{ 'mobile-pre-order-wrapper-padding': isMobile }\"\r\n      >\r\n        <div\r\n          class=\"property-name\"\r\n          [ngClass]=\"{ 'mobile-property-name': isMobile }\"\r\n          *ngIf=\"preOrderDetails\"\r\n        >\r\n          <div\r\n            class=\"thumbnail-property-photo\"\r\n            setImage=\"{{\r\n              preOrderDetails.propertyPhotos &&\r\n                preOrderDetails.propertyPhotos.length > 0 &&\r\n                preOrderDetails.propertyPhotos[0].filePath\r\n            }}\"\r\n          ></div>\r\n          <div class=\"pre-order-property\">\r\n            {{ preOrderDetails.propertyName }}\r\n          </div>\r\n        </div>\r\n        <div class=\"property-name\">\r\n          <div class=\"pre-order-options\">\r\n            <div class=\"row content-wrapper\">\r\n              <div class=\"col-7\">Number of Parts:</div>\r\n              <div class=\"col-5 content-value\">\r\n                <div class=\"box-value\">{{ preOrderDetails.noOfParts }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row content-wrapper\">\r\n              <div class=\"col-7\">Commitment Amount:</div>\r\n              <div class=\"col-5 content-value\">\r\n                <div class=\"box-value\">\r\n                  {{\r\n                    preOrderDetails.commitmentAmount\r\n                      | currency: 'USD':'symbol':'1.2-2'\r\n                  }}\r\n                </div>\r\n              </div>\r\n              <div\r\n                class=\"alert alert-warning\"\r\n                *ngIf=\"\r\n                  preOrderDetails.commitmentAmount >= 1000 &&\r\n                  preOrderDetails.isEAC\r\n                \"\r\n              >\r\n                <div class=\"info-icon\"><i class=\"fa fa-info\"></i></div>\r\n                <span>\r\n                  As an <b>Early Access Club</b> member you will receive a $100\r\n                  credit and pay no transaction fees on this pre-order\r\n                </span>\r\n              </div>\r\n              <div class=\"alert alert-warning\" *ngIf=\"canAvailPromoDiscount\">\r\n                <div class=\"info-icon\"><i class=\"fa fa-info\"></i></div>\r\n                <span>{{ promoDiscountMessage }}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row content-wrapper\">\r\n              <div class=\"col-7\">Preferred Payment Method:</div>\r\n              <div class=\"col-5 content-value\">\r\n                <div class=\"box-value\">\r\n                  {{ preOrderDetails.preferredPaymentMethodName }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row content-wrapper\">\r\n              <div class=\"col-7\">Funding Commitment Date:</div>\r\n              <div class=\"col-5 content-value\">\r\n                <div class=\"box-value\">\r\n                  {{\r\n                    preOrderDetails.fundingCommitmentDate | date: 'dd MMM yyyy'\r\n                  }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"alert alert-warning\">\r\n              <div class=\"info-icon\"><i class=\"fa fa-info\"></i></div>\r\n              You will be required to make payment in full within 7 days of the\r\n              commitment date or you will lose your pre-order.\r\n            </div>\r\n            <h5>Property Photos</h5>\r\n            <div class=\"carousel-wrapper\" *ngIf=\"preOrderDetails\">\r\n              <photo-carousel\r\n                [PropertyImages]=\"preOrderDetails.propertyPhotos\"\r\n                [SlideHeight]=\"slideHeight\"\r\n                [SlideWidth]=\"slideWidth\"\r\n              ></photo-carousel>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"col-lg-7\">\r\n      <h5>Property Photos</h5>\r\n      <div class=\"carousel-wrapper\" *ngIf=\"preOrderDetails\">\r\n        <photo-carousel\r\n          [PropertyImages]=\"preOrderDetails.propertyPhotos\"\r\n          [SlideHeight]=\"slideHeight\"\r\n          [SlideWidth]=\"slideWidth\"\r\n        ></photo-carousel>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-bottom: 25px; }\n  .container > .alert-warning {\n    font-size: 14px;\n    display: inline-flex;\n    align-items: baseline;\n    padding: 1em;\n    width: 50%;\n    margin: 1em 0 0 0;\n    color: #cfae45;\n    border: 1px solid #ede3c3;\n    font-weight: normal;\n    line-height: 15px; }\n  .container > .alert-warning > .info-icon {\n      padding: 3px 6px;\n      background-color: #cfae45;\n      border-radius: 2px;\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 10px;\n      margin-right: 1em;\n      color: white; }\n  .container > .row > .pre-order-column {\n    padding-top: 25px; }\n  .container > .row > .pre-order-column > h5 {\n      font-family: 'helveticaregular', Arial, 'Lucida Grande', sans-serif;\n      font-size: 18px;\n      font-weight: bold; }\n  .container > .row > .pre-order-column > .pre-order-wrapper {\n      border-radius: 5px;\n      box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 5px rgba(0, 0, 0, 0.08);\n      padding: 1.15em 1.75em;\n      overflow-y: hidden;\n      transition-property: all;\n      transition-duration: 0.5s;\n      transition-timing-function: cubic-bezier(0, 0.7, 0.5, 1); }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name {\n        font-size: 18px;\n        font-weight: bold;\n        min-height: 40px;\n        padding-bottom: 10px;\n        display: inline-flex;\n        align-items: center;\n        width: 100%; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .thumbnail-property-photo {\n          position: relative;\n          width: 35px;\n          height: 35px;\n          background-size: cover !important;\n          transition-property: all;\n          transition-duration: 0.5s;\n          transition-timing-function: cubic-bezier(0, 0.7, 0.5, 1);\n          display: inline-block; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .hide-thumbnail {\n          width: 0px; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-property {\n          line-height: 20px;\n          display: inline-block;\n          width: 100%;\n          padding-left: 10px; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .mobile-pre-order-property-close {\n          width: calc(100% - 55px);\n          padding-right: 5px;\n          padding-left: 10px; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .mobile-pre-order-property-open {\n          width: calc(100% - 19px);\n          padding-right: 5px;\n          padding-left: 0px; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .toggle-btn {\n          width: 19px;\n          height: 19px;\n          background-color: #10cfbd;\n          color: white;\n          border-radius: 10px;\n          font-size: 12px;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          cursor: pointer;\n          float: right; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options {\n          width: inherit; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .content-wrapper {\n            margin: 0;\n            padding: 0.8em 0 0.65em;\n            border-bottom: 1.5px dashed rgba(0, 0, 0, 0.07);\n            font-weight: normal; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .content-wrapper > div {\n              padding: 0;\n              font-size: 14px; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .content-wrapper > div:first-child {\n              display: flex;\n              align-items: center; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .content-wrapper > .content-value {\n              font-weight: bold;\n              display: inline-block; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .content-wrapper > .content-value > .box-value {\n                border: 1px solid rgba(120, 129, 149, 0.5);\n                height: 40px;\n                border-radius: 2px;\n                display: inline-flex;\n                width: 100%;\n                justify-content: flex-end;\n                align-items: center;\n                padding-right: 10px;\n                color: rgba(120, 129, 149, 0.9); }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .content-wrapper > .alert-warning {\n              font-size: 12px;\n              display: inline-flex;\n              align-items: baseline;\n              padding: 1em;\n              width: 100%;\n              margin: 1em 0 0 0;\n              color: #cfae45;\n              border-color: #cfae45;\n              font-weight: normal;\n              line-height: 15px; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .content-wrapper > .alert-warning > .info-icon {\n                padding: 3px 6px;\n                background-color: #cfae45;\n                border-radius: 2px;\n                display: inline-flex;\n                justify-content: center;\n                align-items: center;\n                font-size: 10px;\n                margin-right: 1em;\n                color: white; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .alert-warning {\n            font-size: 12px;\n            display: inline-flex;\n            align-items: baseline;\n            padding: 1em;\n            width: 100%;\n            margin: 1em 0;\n            color: #cfae45;\n            border-color: #cfae45;\n            font-weight: normal;\n            line-height: 15px; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .alert-warning > .info-icon {\n              padding: 3px 6px;\n              background-color: #cfae45;\n              border-radius: 2px;\n              display: inline-flex;\n              justify-content: center;\n              align-items: center;\n              font-size: 10px;\n              margin-right: 1em;\n              color: white; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > h5 {\n            font-family: 'helveticaregular', Arial, 'Lucida Grande',\r sans-serif;\n            font-size: 16px;\n            font-weight: bold;\n            color: #626262; }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .property-name > .pre-order-options > .carousel-wrapper {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: calc(100% - 46px); }\n  .container > .row > .pre-order-column > .pre-order-wrapper > .mobile-property-name {\n        font-size: 16px;\n        min-height: unset;\n        padding: 10px 0; }\n  .container > .row > .pre-order-column .mobile-pre-order-wrapper-padding {\n      padding: 0 1em; }\n  .container > .row > .pre-order-column .checkbox-input + label {\n      font-size: 12px;\n      margin: 0.5em 0; }\n  .container > .row > .pre-order-column .checkbox-input + label > .line-height {\n        line-height: 15px;\n        color: #788195; }\n  .mobile-pre-order-wrapper-padding {\n  padding: 0 1em; }\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PreorderDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreorderDashboardComponent", function() { return PreorderDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_dashboard_api_preorder_dashboard_preorder_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/dashboard/api/preorder-dashboard/preorder-dashboard.service */ "./src/app/modules/dashboard/api/preorder-dashboard/preorder-dashboard.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_viewport_viewport_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/viewport/viewport.service */ "./src/app/shared/services/viewport/viewport.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreorderDashboardComponent = /** @class */ (function () {
    function PreorderDashboardComponent(changeDetectorRef, _preorderDashboardService, title, _viewportService) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this._preorderDashboardService = _preorderDashboardService;
        this.title = title;
        this._viewportService = _viewportService;
        this.isNoPreOrderData = false;
        this.preOrderDetails = {
            status: 'Not available',
            propertyId: 0,
            propertyName: 'Property Name',
            noOfParts: 0,
            commitmentAmount: 0,
            isEAC: false,
            preferredPaymentMethodId: 1,
            preferredPaymentMethodName: 'ACH Transfer',
            fundingCommitmentDate: '2019-02-15T00:00:00+00:00',
            propertyPhotos: [
                {
                    filePath: '/Docs/PropertyAsset/Properties/1/PropertyPhotos/Projected3.jpg'
                }
            ]
        };
        this.slideHeight = "280px";
        this.slideWidth = "490px";
        this.canAvailPromoDiscount = false;
        this.promoDiscountMessage = '';
        this._viewportService.updatingView.subscribe(function () {
            _this.updateCarouselSize();
            _this.isDesktop = _this._viewportService.isDesktop();
            _this.isTablet = _this._viewportService.isTablet();
            _this.isMobile = _this._viewportService.isMobile();
        });
    }
    PreorderDashboardComponent.prototype.onResize = function () {
        var _this = this;
        setTimeout(function () {
            _this._viewportService.checkViewSizes();
        }, 250);
    };
    PreorderDashboardComponent.prototype.ngOnInit = function () {
        this.title.setTitle("Partbnb - My Dashboard");
        this.getPreOrderDetails();
    };
    PreorderDashboardComponent.prototype.ngAfterViewInit = function () {
        this._viewportService.checkViewSizes();
    };
    PreorderDashboardComponent.prototype.updateCarouselSize = function () {
        if (this.preOrderDetails) {
            if (this.isDesktop) {
                this.slideHeight = "280px";
                this.slideWidth = "490px";
            }
            else if (this.isTablet || this.isMobile) {
                var leftWidth = document.querySelector('#pre-order-wrapper-id')
                    .clientWidth;
                this.slideHeight = leftWidth - 150 + "px";
                this.slideWidth = leftWidth + "px";
            }
            this.changeDetectorRef.detectChanges();
        }
    };
    PreorderDashboardComponent.prototype.getPreOrderDetails = function () {
        var _this = this;
        var userName = JSON.parse(localStorage.getItem('currentUser')).username;
        this._preorderDashboardService
            .getPreOrderDetails(userName)
            .subscribe(function (data) {
            _this.preOrderDetails = data;
            _this.canAvailPromoDiscount = data.canAvail || false;
            _this.promoDiscountMessage = data.promoMessage || '';
            if (_this.preOrderDetails &&
                _this.preOrderDetails.hasOwnProperty('status') &&
                _this.preOrderDetails.status === 'Not available') {
                _this.isNoPreOrderData = true;
            }
            else {
                _this.isNoPreOrderData = false;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreorderDashboardComponent.prototype, "onResize", null);
    PreorderDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'preorder-dashboard',
            template: __webpack_require__(/*! ./preorder-dashboard.component.html */ "./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./preorder-dashboard.component.scss */ "./src/app/modules/dashboard/pages/preorder-dashboard/preorder-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _modules_dashboard_api_preorder_dashboard_preorder_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["PreorderDashboardService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _shared_services_viewport_viewport_service__WEBPACK_IMPORTED_MODULE_3__["ViewportService"]])
    ], PreorderDashboardComponent);
    return PreorderDashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/pages/wallet/wallet.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/wallet/wallet.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wallet\">\r\n  <div class=\"container\">\r\n    <div class=\"wallet-header\">\r\n      <h3>My Wallet</h3>\r\n      <div class=\"wallet-header-info\">\r\n        <div class=\"wallet-balance\">\r\n          <icon-income-gray class=\"wallet-icon\"></icon-income-gray>\r\n          <div>\r\n            <p>Current Balance</p>\r\n            <span>\r\n              {{ walletBalance | currency: 'USD':'symbol':'1.2-2' }}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"buttons\">\r\n          <button\r\n            class=\"btn btn-success btn-cons withdraw\"\r\n            (click)=\"withdrawFund()\"\r\n            [disabled]=\"!walletBalance\"\r\n            [ngClass]=\"{ disabled: !walletBalance }\"\r\n          >\r\n            Withdraw Funds\r\n          </button>\r\n          <button\r\n            class=\"btn btn-success btn-cons d-none d-lg-block\"\r\n            (click)=\"addFund()\"\r\n          >\r\n            <icon-plus-white class=\"icon-md mr-1\"></icon-plus-white> Add Funds\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wallet-table-wrapper\" *ngIf=\"!isPendingTransactionEmpty\">\r\n      <div class=\"table-header\">\r\n        <p class=\"title\">\r\n          <!-- <icon-time class=\"icon-md-3 mr-1 mobile-icon-time\"></icon-time> -->\r\n          <icon-pending class=\"icon-md-3 mr-1 mobile-icon-time\"></icon-pending>\r\n          Pending Transactions\r\n        </p>\r\n        <div class=\"info\">\r\n          <span class=\"deposits\">Deposits</span>\r\n          <span class=\"outgoing\">Outgoing</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-content\">\r\n        <table>\r\n          <thead>\r\n            <tr>\r\n              <th>Description</th>\r\n              <th>Transaction Date</th>\r\n              <!-- <th class=\"status\">Status</th> -->\r\n              <th>Amount</th>\r\n              <th>Balance</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr\r\n              *ngFor=\"let item of pendingTransactions\"\r\n              [ngClass]=\"\r\n                item.transferType === 'Deposits' ? 'deposits' : 'outgoing'\r\n              \"\r\n            >\r\n              <td>\r\n                <div class=\"desc\" [title]=\"item.transactionTypeName\">\r\n                  <p>{{ item.transactionTypeName }}</p>\r\n                  <!-- <p class=\"mobile\">{{ item.transactionTypeName }}</p> -->\r\n                  <!-- <span>Bahamas, 341 Beach Rd</span> -->\r\n                </div>\r\n              </td>\r\n              <td class=\"hide-mobile\">\r\n                <span class=\"value\">\r\n                  {{ item.transactionDate | date: 'd MMM yyyy' }}\r\n                </span>\r\n              </td>\r\n              <!-- <td class=\"hide-mobile\">\r\n                <span class=\"status\">\r\n                  {{ item.transactionStatusName }}\r\n                </span>\r\n              </td> -->\r\n              <td>\r\n                <span class=\"value\">\r\n                  {{ item.transferType === 'Deposits' ? '+' : '-'\r\n                  }}{{\r\n                    item.transactionPrice | currency: 'USD':'symbol':'1.2-2'\r\n                  }}\r\n                </span>\r\n                <div class=\"mobile-value\">\r\n                  <p>\r\n                    {{ item.transferType === 'Deposits' ? '+' : '-'\r\n                    }}{{\r\n                      item.transactionPrice | currency: 'USD':'symbol':'1.2-2'\r\n                    }}\r\n                  </p>\r\n                  <span>\r\n                    {{ item.transactionDate | date: 'd MMM. yyyy' }}\r\n                  </span>\r\n                </div>\r\n              </td>\r\n              <td class=\"hide-mobile\">\r\n                <span class=\"value\">\r\n                  -\r\n                  <!-- {{ item.walletBalance | currency: 'USD':'symbol':'1.2-2' }} -->\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <app-pagination\r\n        [TotalPages]=\"pendingTotalPages\"\r\n        (PageIndexChange)=\"changePendingPage($event)\"\r\n      ></app-pagination>\r\n    </div>\r\n\r\n    <div class=\"wallet-table-wrapper\">\r\n      <div class=\"table-header\">\r\n        <p class=\"title\">\r\n          <icon-time class=\"icon-md-3 mr-1 mobile-icon-time\"></icon-time> Recent\r\n          Transactions\r\n        </p>\r\n        <div class=\"info\">\r\n          <span class=\"deposits\">Deposits</span>\r\n          <span class=\"outgoing\">Outgoing</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-content\">\r\n        <table>\r\n          <thead>\r\n            <tr>\r\n              <th>Description</th>\r\n              <th>Transaction Date</th>\r\n              <!-- <th class=\"status\">Status</th> -->\r\n              <th>Amount</th>\r\n              <th>Balance</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr\r\n              *ngFor=\"let item of recentTransactions\"\r\n              [ngClass]=\"\r\n                item.transferType === 'Deposits' ? 'deposits' : 'outgoing'\r\n              \"\r\n            >\r\n              <td>\r\n                <div class=\"desc\" [title]=\"item.transactionTypeName\">\r\n                  <p>{{ item.transactionTypeName }}</p>\r\n                  <!-- <p class=\"mobile\">{{ item.transactionTypeName }}</p> -->\r\n                  <span *ngIf=\"item?.propertyName\">\r\n                    {{ item?.propertyName }}\r\n                  </span>\r\n                </div>\r\n              </td>\r\n              <td class=\"hide-mobile\">\r\n                <span class=\"value\">\r\n                  {{ item.transactionDate | date: 'd MMM yyyy' }}\r\n                </span>\r\n              </td>\r\n              <!-- <td class=\"hide-mobile\">\r\n                <span class=\"status\">\r\n                  {{ item.transactionStatusName }}\r\n                </span>\r\n              </td> -->\r\n              <td>\r\n                <span class=\"value\">\r\n                  {{ item.transferType === 'Deposits' ? '+' : '-'\r\n                  }}{{\r\n                    item.transactionPrice | currency: 'USD':'symbol':'1.2-2'\r\n                  }}\r\n                </span>\r\n                <div class=\"mobile-value\">\r\n                  <p>\r\n                    {{ item.transferType === 'Deposits' ? '+' : '-'\r\n                    }}{{\r\n                      item.transactionPrice | currency: 'USD':'symbol':'1.2-2'\r\n                    }}\r\n                  </p>\r\n                  <span>\r\n                    {{ item.transactionDate | date: 'd MMM. yyyy' }}\r\n                  </span>\r\n                </div>\r\n              </td>\r\n              <td class=\"hide-mobile\">\r\n                <span class=\"value\">\r\n                  {{ item.walletBalance | currency: 'USD':'symbol':'1.2-2' }}\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <app-pagination\r\n          [TotalPages]=\"recentTotalPages\"\r\n          (PageIndexChange)=\"changeRecentPage($event)\"\r\n        ></app-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/wallet/wallet.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/wallet/wallet.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@zIndex-horizontal-menu-mobile : @zIndex-10;\n@font-face {\n  font-family: 'helveticaregular';\n  font-display: 'swap';\n  src: url(\"/assets/fonts/helvetica/helvetica-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helvetica';\n  font-display: 'swap';\n  src: url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: 'helveticalight';\n  font-display: 'swap';\n  src: url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff2\") format(\"woff2\"), url(\"/assets/fonts/helvetica/helvetica-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"/assets/fonts/roboto/roboto-v20-latin-regular.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(\"/assets/fonts/roboto/roboto-v20-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/roboto/roboto-v20-latin-regular.woff\") format(\"woff\"), url(\"/assets/fonts/roboto/roboto-v20-latin-regular.ttf\") format(\"truetype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-regular.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n/* roboto-italic - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: url(\"/assets/fonts/roboto/roboto-v20-latin-italic.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Italic\"), local(\"Roboto-Italic\"), url(\"/assets/fonts/roboto/roboto-v20-latin-italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-italic.woff2\") format(\"woff2\"), url(\"/assets/fonts/roboto/roboto-v20-latin-italic.woff\") format(\"woff\"), url(\"/assets/fonts/roboto/roboto-v20-latin-italic.ttf\") format(\"truetype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-italic.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n/* roboto-500 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"/assets/fonts/roboto/roboto-v20-latin-500.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"/assets/fonts/roboto/roboto-v20-latin-500.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-500.woff2\") format(\"woff2\"), url(\"/assets/fonts/roboto/roboto-v20-latin-500.woff\") format(\"woff\"), url(\"/assets/fonts/roboto/roboto-v20-latin-500.ttf\") format(\"truetype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-500.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n/* roboto-700 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"/assets/fonts/roboto/roboto-v20-latin-700.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700.woff2\") format(\"woff2\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700.woff\") format(\"woff\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700.ttf\") format(\"truetype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n/* roboto-700italic - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold Italic\"), local(\"Roboto-BoldItalic\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.woff2\") format(\"woff2\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.woff\") format(\"woff\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.ttf\") format(\"truetype\"), url(\"/assets/fonts/roboto/roboto-v20-latin-700italic.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n/* bradhitc */\n@font-face {\n  font-family: 'bradhitc';\n  font-style: normal;\n  src: url(\"/assets/fonts/bradhitc/bradhitc.ttf\") format(\"truetype\"); }\n/* anton */\n@font-face {\n  font-family: 'anton';\n  font-style: normal;\n  src: url(\"/assets/fonts/anton/Anton-Regular.ttf\") format(\"truetype\"); }\n/* anton */\n@font-face {\n  font-family: 'mansalva';\n  font-style: normal;\n  src: url(\"/assets/fonts/mansalva/Mansalva-Regular.ttf\") format(\"truetype\"); }\n/* raleway */\n@font-face {\n  font-family: 'raleway';\n  font-style: normal;\n  src: url(\"/assets/fonts/raleway/Raleway-Regular.ttf\") format(\"truetype\"); }\n.wallet {\n  padding-top: 10px; }\n.wallet-header {\n    display: flex;\n    align-items: center;\n    height: 80px;\n    margin-bottom: 10px; }\n.wallet-header h3 {\n      flex-grow: 1;\n      display: inline-block;\n      font-weight: bold;\n      font-size: 22px;\n      margin: 0; }\n.wallet-header-info {\n      float: right;\n      display: flex; }\n.wallet-header-info > .buttons {\n        height: 45px;\n        display: flex;\n        border-left: 1px solid #d9d9d9;\n        padding-left: 20px; }\n.wallet-header-info > .buttons .btn {\n          font-weight: bold;\n          border-radius: 2px;\n          padding-right: 20px;\n          padding-left: 20px;\n          margin-right: 0; }\n.wallet-header-info > .buttons .btn.withdraw {\n            font-weight: 500;\n            margin-right: 10px;\n            color: #10cfbd;\n            background: #fff;\n            border: 1px solid #10cfbd; }\n.wallet-header-info > .buttons .btn.withdraw:hover {\n              background-color: #40d9ca;\n              border-color: #40d9ca;\n              color: #fff; }\n.wallet-header-info > .buttons .btn.disabled {\n            cursor: unset;\n            background: #828282;\n            color: #fff;\n            border: 0; }\n.wallet-header-info > .buttons .btn.disabled:hover {\n              background: #828282;\n              color: #fff;\n              border: 0; }\n.wallet-balance {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 192.8px;\n    height: 45px;\n    background: #fff;\n    border: 1px solid #e6e6e6;\n    border-radius: 2px;\n    margin-right: 20px; }\n.wallet-balance .wallet-icon {\n      margin-right: 15px; }\n.wallet-balance p {\n      font-size: 10px;\n      color: #909090;\n      margin-bottom: 0;\n      line-height: 10px; }\n.wallet-balance span {\n      font-weight: bold;\n      font-size: 18px;\n      color: #788195;\n      line-height: 20px; }\n.wallet-table-wrapper {\n    background: #fff;\n    border-radius: 2px;\n    min-height: 20px;\n    padding: 30px 20px;\n    padding-bottom: 20px;\n    margin-bottom: 30px; }\n.wallet-table-wrapper .table-header {\n      display: flex;\n      margin-bottom: 15px; }\n.wallet-table-wrapper .table-header p.title {\n        flex-grow: 1;\n        font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n        font-size: 18px;\n        color: #2c2c2c; }\n.wallet-table-wrapper .table-header .info .deposits {\n        font-size: 14px;\n        margin-left: 10px;\n        margin-right: 20px; }\n.wallet-table-wrapper .table-header .info .deposits:before {\n          content: '';\n          position: relative;\n          right: 10px;\n          display: inline-block;\n          width: 10px;\n          height: 10px;\n          border-radius: 7.5px;\n          background: #3c93ce; }\n.wallet-table-wrapper .table-header .info .outgoing {\n        font-size: 14px;\n        margin-left: 15px; }\n.wallet-table-wrapper .table-header .info .outgoing:before {\n          content: '';\n          position: relative;\n          right: 10px;\n          display: inline-block;\n          width: 10px;\n          height: 10px;\n          border-radius: 7.5px;\n          background: #f8d053; }\n.wallet-table-wrapper .table-content {\n      border: 1px solid #e6e6e6;\n      border-radius: 2px; }\n.wallet-table-wrapper .table-content table {\n        width: 100%;\n        color: #626262; }\n.wallet-table-wrapper .table-content table thead tr {\n          height: 45px;\n          border-bottom: 1px solid #e6e6e6;\n          border-left: 2px solid #6580b6; }\n.wallet-table-wrapper .table-content table thead tr th {\n            font-family: \"helvetica\", Arial, \"Lucida Grande\", sans-serif;\n            font-size: 14px;\n            color: #fff;\n            text-align: center;\n            min-width: 185px;\n            border-left: 1px solid;\n            border-color: rgba(230, 230, 230, 0.3);\n            background: #6580b6; }\n.wallet-table-wrapper .table-content table thead tr th:first-child {\n              width: 100%;\n              border-left: 0; }\n.wallet-table-wrapper .table-content table thead tr th.status {\n              min-width: 200px; }\n.wallet-table-wrapper .table-content table tbody tr {\n          border-bottom: 1px solid #e6e6e6;\n          height: 51.5px; }\n.wallet-table-wrapper .table-content table tbody tr:last-child {\n            border-bottom: 0; }\n.wallet-table-wrapper .table-content table tbody tr.outgoing {\n            border-left: 2px solid #f8d053; }\n.wallet-table-wrapper .table-content table tbody tr.deposits {\n            border-left: 2px solid #3c93ce; }\n.wallet-table-wrapper .table-content table tbody tr td {\n            text-align: center;\n            border-left: 1px solid #e6e6e6; }\n.wallet-table-wrapper .table-content table tbody tr td:first-child {\n              text-align: left;\n              padding-left: 20px;\n              border-left: 0; }\n.wallet-table-wrapper .table-content table tbody tr td .desc {\n              display: flex;\n              flex-direction: column;\n              justify-content: center; }\n.wallet-table-wrapper .table-content table tbody tr td .desc p {\n                font-size: 16px;\n                color: #2c2c2c;\n                margin: 0;\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis; }\n.wallet-table-wrapper .table-content table tbody tr td .desc p.mobile {\n                  display: none; }\n@media (max-width: 1199px) {\n                  .wallet-table-wrapper .table-content table tbody tr td .desc p {\n                    width: 280px; } }\n@media (max-width: 500px) {\n                  .wallet-table-wrapper .table-content table tbody tr td .desc p {\n                    width: 200px; } }\n@media (max-width: 400px) {\n                  .wallet-table-wrapper .table-content table tbody tr td .desc p {\n                    width: 150px; } }\n.wallet-table-wrapper .table-content table tbody tr td .desc span {\n                font-size: 14px;\n                color: #909090;\n                line-height: 15px; }\n.wallet-table-wrapper .table-content table tbody tr td .value {\n              font-size: 16px; }\n.wallet-table-wrapper .table-content table tbody tr td .status {\n              color: #6d5cae;\n              font-size: 12px; }\n.wallet-table-wrapper .table-content table tbody tr td .status.complete {\n                color: #10cfbd; }\n.wallet-table-wrapper .table-content table tbody tr td .mobile-value {\n              display: none; }\n@media (max-width: 767px) {\n    .wallet .wallet-header {\n      display: block;\n      height: 155px; }\n      .wallet .wallet-header h3 {\n        display: block;\n        font-size: 18px; }\n      .wallet .wallet-header-info {\n        width: 100%;\n        padding-top: 10px;\n        flex-direction: column; }\n        .wallet .wallet-header-info > .buttons {\n          border: 0;\n          padding: 0;\n          margin-top: 10px; }\n          .wallet .wallet-header-info > .buttons .withdraw {\n            height: 35px;\n            font-size: 12px;\n            width: 100%;\n            margin: 0; }\n        .wallet .wallet-header-info .wallet-balance {\n          width: 100%;\n          height: 58px;\n          margin-right: 0; }\n          .wallet .wallet-header-info .wallet-balance p {\n            line-height: 10px; }\n          .wallet .wallet-header-info .wallet-balance span {\n            font-size: 16px;\n            line-height: 22px; }\n    .wallet .wallet-table-wrapper {\n      margin-bottom: 20px;\n      padding: 20px; }\n      .wallet .wallet-table-wrapper .table-header {\n        display: block;\n        margin-bottom: 5px; }\n        .wallet .wallet-table-wrapper .table-header .title {\n          font-size: 14px;\n          padding-bottom: 10px;\n          border-bottom: 1px solid #e6e6e6; }\n        .wallet .wallet-table-wrapper .table-header .info .outgoing,\n        .wallet .wallet-table-wrapper .table-header .info .deposits {\n          font-size: 12px; } }\n@media (max-width: 991px) {\n    .wallet .wallet-table-wrapper .table-content {\n      border: 0; }\n      .wallet .wallet-table-wrapper .table-content table {\n        border-collapse: separate;\n        border-spacing: 0px 10px; }\n        .wallet .wallet-table-wrapper .table-content table thead {\n          display: none; }\n        .wallet .wallet-table-wrapper .table-content table tbody tr {\n          border-bottom: 0;\n          height: 53px; }\n          .wallet .wallet-table-wrapper .table-content table tbody tr.outgoing {\n            background: rgba(248, 208, 83, 0.1); }\n            .wallet .wallet-table-wrapper .table-content table tbody tr.outgoing td:first-child {\n              border-left: 1px solid #f8d053; }\n          .wallet .wallet-table-wrapper .table-content table tbody tr.deposits {\n            background: #f7f7f7; }\n            .wallet .wallet-table-wrapper .table-content table tbody tr.deposits td:first-child {\n              border-left: 1px solid #3c93ce; }\n          .wallet .wallet-table-wrapper .table-content table tbody tr td {\n            border-left: 0; }\n            .wallet .wallet-table-wrapper .table-content table tbody tr td:first-child {\n              padding-left: 10px; }\n            .wallet .wallet-table-wrapper .table-content table tbody tr td.hide-mobile {\n              display: none; }\n            .wallet .wallet-table-wrapper .table-content table tbody tr td .desc p {\n              font-size: 12px;\n              line-height: 14px; }\n              .wallet .wallet-table-wrapper .table-content table tbody tr td .desc p.mobile {\n                display: block; }\n            .wallet .wallet-table-wrapper .table-content table tbody tr td .desc span {\n              font-size: 10px; }\n            .wallet .wallet-table-wrapper .table-content table tbody tr td .value,\n            .wallet .wallet-table-wrapper .table-content table tbody tr td .status {\n              display: none; }\n            .wallet .wallet-table-wrapper .table-content table tbody tr td .mobile-value {\n              display: flex;\n              flex-direction: column;\n              align-items: baseline; }\n              .wallet .wallet-table-wrapper .table-content table tbody tr td .mobile-value p {\n                font-size: 12px;\n                margin-bottom: 0; }\n              .wallet .wallet-table-wrapper .table-content table tbody tr td .mobile-value span {\n                font-size: 10px;\n                color: #909090;\n                line-height: 12px; } }\n"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/wallet/wallet.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/wallet/wallet.component.ts ***!
  \********************************************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/api */ "./src/app/shared/api/index.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _shared_components_modals_add_funds_add_funds_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/modals/add-funds/add-funds.component */ "./src/app/shared/components/modals/add-funds/add-funds.component.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/modal/modal.service */ "./src/app/shared/services/modal/modal.service.ts");
/* harmony import */ var _shared_components_modals_withdraw_funds_withdraw_funds_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/modals/withdraw-funds/withdraw-funds.component */ "./src/app/shared/components/modals/withdraw-funds/withdraw-funds.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WalletComponent = /** @class */ (function () {
    function WalletComponent(title, bsModalService, _wallet, _walletShared, _currentUser, _modalService, _validation) {
        this.title = title;
        this.bsModalService = bsModalService;
        this._wallet = _wallet;
        this._walletShared = _walletShared;
        this._currentUser = _currentUser;
        this._modalService = _modalService;
        this._validation = _validation;
        this.walletBalance = 0;
        this.recentTransactions = [];
        this.recentTotalPages = 0;
        this.pendingTransactions = [];
        this.isPendingTransactionEmpty = false;
        this.pendingTotalPages = 0;
    }
    WalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle("Partbnb - My Wallet");
        var username = JSON.parse(localStorage.getItem('currentUser')).username;
        this.username = username;
        this.getInfo();
        this._walletShared.update.subscribe(function (addFund) {
            if (!addFund) {
                _this.getInfo();
            }
        });
    };
    WalletComponent.prototype.getWalletBalance = function () {
        var _this = this;
        if (this.username) {
            this._wallet.getUserWalletBalance(this.username).subscribe(function (res) {
                _this.walletBalance = res.balance;
            });
        }
    };
    WalletComponent.prototype.getTransactions = function () {
        var _this = this;
        this._wallet.getTransactions(this.username, 2).subscribe(function (res) {
            if (res && res.data) {
                _this.recentTransactions = res.data;
                _this.recentTotalPages = (res.meta && res.meta.total_pages) || 0;
            }
        });
    };
    WalletComponent.prototype.getPendingTransactions = function () {
        var _this = this;
        this._wallet.getTransactions(this.username, 1).subscribe(function (res) {
            if (res && res.data) {
                _this.pendingTransactions = res.data;
                _this.isPendingTransactionEmpty =
                    _this.pendingTransactions && !_this.pendingTransactions.length;
                _this.pendingTotalPages = (res.meta && res.meta.total_pages) || 0;
            }
            else {
                _this.isPendingTransactionEmpty = true;
            }
        }, function () {
            _this.isPendingTransactionEmpty = true;
        });
    };
    WalletComponent.prototype.getInfo = function () {
        this.getWalletBalance();
        this.getTransactions();
        this.getPendingTransactions();
    };
    WalletComponent.prototype.changeRecentPage = function (value) {
        var _this = this;
        this._wallet.getTransactions(this.username, 2, 8, value).subscribe(function (res) {
            if (res && res.data) {
                _this.recentTransactions = res.data;
            }
        });
    };
    WalletComponent.prototype.changePendingPage = function (value) {
        var _this = this;
        this._wallet.getTransactions(this.username, 1, 8, value).subscribe(function (res) {
            if (res && res.data) {
                _this.pendingTransactions = res.data;
            }
        });
    };
    WalletComponent.prototype.addFund = function () {
        var _this = this;
        var status = this._validation.addFundChecker();
        if (status) {
            var modalRef = this._modalService.modalInstance(_shared_components_modals_add_funds_add_funds_component__WEBPACK_IMPORTED_MODULE_4__["AddFundsComponent"], {
                initialState: {},
                animated: false,
                class: 'plaid-modal'
            });
            modalRef.onClose.subscribe(function (result) {
                if (result === 'done') {
                    _this.getInfo();
                }
            });
        }
    };
    // WIthdraw
    WalletComponent.prototype.withdrawFund = function () {
        var _this = this;
        var modalRef = this.bsModalService.show(_shared_components_modals_withdraw_funds_withdraw_funds_component__WEBPACK_IMPORTED_MODULE_7__["WithdrawFundsComponent"], {
            initialState: {
                currentBalance: this.walletBalance
            },
            animated: false,
            class: 'plaid-modal'
        });
        modalRef.content.onClose.subscribe(function (result) {
            if (result === 'done') {
                _this.getWalletBalance();
                _this.getTransactions();
                _this.getPendingTransactions();
            }
        });
    };
    WalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.component.html */ "./src/app/modules/dashboard/pages/wallet/wallet.component.html"),
            styles: [__webpack_require__(/*! ./wallet.component.scss */ "./src/app/modules/dashboard/pages/wallet/wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _shared_api__WEBPACK_IMPORTED_MODULE_2__["WalletService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_5__["WalletSharedService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"],
            _shared_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_5__["ValidationSharedService"]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ }),

/***/ "./src/app/shared/constants/graph-view.ts":
/*!************************************************!*\
  !*** ./src/app/shared/constants/graph-view.ts ***!
  \************************************************/
/*! exports provided: GRAPH_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAPH_OPTIONS", function() { return GRAPH_OPTIONS; });
var GRAPH_OPTIONS = [
    { name: 'Since First Purchase', key: 'SinceFirstPurchase' },
    { name: 'In This Financial Year', key: 'InThisFinancialYear' },
    { name: 'In This Calendar Year', key: 'InThisCalendarYear' },
    { name: 'In The Last 3 Months', key: 'InTheLast3Months' },
    { name: 'In The Last 6 Months', key: 'InTheLast6Months' },
    { name: 'In The Last 12 Months', key: 'InTheLast12Months' }
];


/***/ })

}]);
//# sourceMappingURL=modules-dashboard-dashboard-module.js.map