(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-login-module"],{

/***/ "./src/app/modules/login/login-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/login/login-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_partbnb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/partbnb-component */ "./src/app/@pages/partbnb-component/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _pages_partbnb_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        data: { pageTitle: 'Partbnb - Login', pageName: 'Login' }
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/modules/login/login-routing.module.ts");
/* harmony import */ var _shared_shared_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared-app.module */ "./src/app/shared/shared-app.module.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pages/components/shared.module */ "./src/app/@pages/components/shared.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pages/pages.module */ "./src/app/@pages/pages.module.ts");
/* harmony import */ var _pages_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pages/components/progress/progress.module */ "./src/app/@pages/components/progress/progress.module.ts");
/* harmony import */ var _pages_partbnb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pages/partbnb-component */ "./src/app/@pages/partbnb-component/index.ts");
/* harmony import */ var _api_login_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/login/login.service */ "./src/app/modules/login/api/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _shared_shared_app_module__WEBPACK_IMPORTED_MODULE_5__["SharedAppModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
                _pages_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_8__["ProgressModule"]
            ],
            declarations: [_pages_partbnb_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]],
            providers: [_api_login_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-login-login-module.js.map