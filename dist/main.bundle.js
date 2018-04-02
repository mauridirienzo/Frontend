webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_tabs_tab1_tab1_component__ = __webpack_require__("./src/app/home/tabs/tab1/tab1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_tabs_tab2_tab2_component__ = __webpack_require__("./src/app/home/tabs/tab2/tab2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_tabs_tab3_tab3_component__ = __webpack_require__("./src/app/home/tabs/tab3/tab3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_tabs_tab4_tab4_component__ = __webpack_require__("./src/app/home/tabs/tab4/tab4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_tabs_tab5_tab5_component__ = __webpack_require__("./src/app/home/tabs/tab5/tab5.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
        children: [
            { path: 'tab1', component: __WEBPACK_IMPORTED_MODULE_4__home_tabs_tab1_tab1_component__["a" /* Tab1Component */], outlet: "apptab1" },
            { path: 'tab2', component: __WEBPACK_IMPORTED_MODULE_5__home_tabs_tab2_tab2_component__["a" /* Tab2Component */], outlet: "apptab1" },
            { path: 'tab3', component: __WEBPACK_IMPORTED_MODULE_6__home_tabs_tab3_tab3_component__["a" /* Tab3Component */], outlet: "apptab1" },
            { path: 'tab4', component: __WEBPACK_IMPORTED_MODULE_7__home_tabs_tab4_tab4_component__["a" /* Tab4Component */], outlet: "apptab1" },
            { path: 'tab5', component: __WEBPACK_IMPORTED_MODULE_8__home_tabs_tab5_tab5_component__["a" /* Tab5Component */], outlet: "apptab1" }
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service_service__ = __webpack_require__("./src/app/services/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_global_data_service__ = __webpack_require__("./src/app/services/global-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_AddHttpHeaderInterceptor__ = __webpack_require__("./src/app/services/AddHttpHeaderInterceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_tabs_tab1_tab1_component__ = __webpack_require__("./src/app/home/tabs/tab1/tab1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_tabs_tab2_tab2_component__ = __webpack_require__("./src/app/home/tabs/tab2/tab2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_tabs_tab3_tab3_component__ = __webpack_require__("./src/app/home/tabs/tab3/tab3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_tabs_tab4_tab4_component__ = __webpack_require__("./src/app/home/tabs/tab4/tab4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_tabs_tab5_tab5_component__ = __webpack_require__("./src/app/home/tabs/tab5/tab5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_pagination__ = __webpack_require__("./node_modules/ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_pagination__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















 //importing ng2-pagination
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_tabs_tab1_tab1_component__["a" /* Tab1Component */],
                __WEBPACK_IMPORTED_MODULE_13__home_tabs_tab2_tab2_component__["a" /* Tab2Component */],
                __WEBPACK_IMPORTED_MODULE_14__home_tabs_tab3_tab3_component__["a" /* Tab3Component */],
                __WEBPACK_IMPORTED_MODULE_15__home_tabs_tab4_tab4_component__["a" /* Tab4Component */],
                __WEBPACK_IMPORTED_MODULE_16__home_tabs_tab5_tab5_component__["a" /* Tab5Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_21_ng2_pagination__["Ng2PaginationModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_authentication_service_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_9__services_global_data_service__["a" /* DataService */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_10__services_AddHttpHeaderInterceptor__["a" /* AddHttpHeaderInterceptor */], multi: true }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <mat-toolbar-row>\r\n    <span>Welcome {{user}}</span>\r\n\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n    <button style=\"margin:5px\" type=\"button\" (click)=\"click()\" class=\"btn btn-primary\">Log Out</button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<div style=\"padding: 5px;\">\r\n  <nav mat-tab-nav-bar>\r\n    <a mat-tab-link\r\n       [routerLink]=\"['/home',{outlets: {'apptab1':['tab1']}}]\" skipLocationChange\r\n       routerLinkActive\r\n       #rla=\"routerLinkActive\">\r\n      Get all clients\r\n    </a>\r\n\r\n    <a mat-tab-link\r\n       [routerLink]=\"['/home',{outlets: {'apptab1':['tab2']}}]\" skipLocationChange\r\n       routerLinkActive\r\n       #rla=\"routerLinkActive\">\r\n      Get client by id\r\n    </a>\r\n\r\n    <a mat-tab-link\r\n       [routerLink]=\"['/home',{outlets: {'apptab1':['tab3']}}]\" skipLocationChange\r\n       routerLinkActive\r\n       #rla=\"routerLinkActive\">\r\n      Client by name\r\n    </a>\r\n\r\n    <a mat-tab-link\r\n       [routerLink]=\"['/home',{outlets: {'apptab1':['tab4']}}]\" skipLocationChange\r\n       routerLinkActive\r\n       #rla=\"routerLinkActive\">\r\n      Policy by client name\r\n    </a>\r\n\r\n    <a mat-tab-link\r\n       [routerLink]=\"['/home',{outlets: {'apptab1':['tab5']}}]\" skipLocationChange\r\n       routerLinkActive\r\n       #rla=\"routerLinkActive\">\r\n      Client by policy id\r\n    </a>\r\n  </nav>\r\n  <router-outlet name=\"apptab1\"></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_data_service__ = __webpack_require__("./src/app/services/global-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service_service__ = __webpack_require__("./src/app/services/authentication-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, globalData, authService) {
        this.router = router;
        this.globalData = globalData;
        this.authService = authService;
        this.activeLinkIndex = -1;
        this.user = this.globalData.user;
    }
    HomeComponent.prototype.click = function () {
        this.authService.clearCredentials();
        this.router.navigate(['/']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_global_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__services_authentication_service_service__["a" /* AuthenticationService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/tabs/tab1/tab1.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:20px\" class=\"tabContentContainer\">\r\n  <button (click)=\"click()\" type=\"submit\" class=\"btn btn-danger\">Get Clients</button>\r\n  <br />\r\n  <div *ngIf=\"clients.length > 0\">\r\n    <table class=\"table table-striped table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Name</th>\r\n          <th>Email</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let client of clients | paginate: {itemsPerPage: 15, currentPage:page, id: '1'};\">\r\n          <td>{{client.id}}</td>\r\n          <td>{{client.name}}</td>\r\n          <td>{{client.email}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <pagination-controls (pageChange)=\"page = $event\" id=\"1\"\r\n                         maxSize=\"15\"\r\n                         directionLinks=\"true\"\r\n                         autoHide=\"true\">\r\n    </pagination-controls>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/tabs/tab1/tab1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tab1Component = /** @class */ (function () {
    function Tab1Component(http) {
        this.http = http;
        this.clients = [];
    }
    Tab1Component.prototype.click = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].port + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].subdomain + 'clients').toPromise()
            .then(function (res) {
            _this.clients = res;
        });
    };
    Tab1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app-tab1',
            template: __webpack_require__("./src/app/home/tabs/tab1/tab1.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], Tab1Component);
    return Tab1Component;
}());



/***/ }),

/***/ "./src/app/home/tabs/tab2/tab2.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:20px\">\r\n  <form name=\"form\"  role=\"form\">\r\n    <div class=\"form-group\">\r\n      Client ID:\r\n      <br>\r\n      <input type=\"text\" name=\"client_id\" class=\"form-control\" [(ngModel)]=\"client_id\" required />\r\n      <span *ngIf=\"!client_id\" class=\"help-block\">Client id is required</span>\r\n    </div>\r\n    <button type=\"submit\" (click)=\"click()\"  [disabled]=\"!client_id\"class=\"btn btn-danger\">Find client</button>\r\n  </form>\r\n  <br />\r\n  <table  *ngIf=\"client\" class=\"table table-striped table-hover\"  border=\"1\">\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Name</th>\r\n        <th>Email</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{client.id}}</td>\r\n        <td>{{client.name}}</td>\r\n        <td>{{client.email}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/tabs/tab2/tab2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Tab2Component = /** @class */ (function () {
    function Tab2Component(http) {
        this.http = http;
    }
    Tab2Component.prototype.click = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].port + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].subdomain + 'clientByid/' + this.client_id).toPromise()
            .then(function (res) {
            _this.client = null;
            if (res == null) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()("Client not found", "Client with id " + _this.client_id + " not found. Try with a new id", "info");
            }
            else {
                _this.client = res;
            }
        });
    };
    Tab2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app-tab2',
            template: __webpack_require__("./src/app/home/tabs/tab2/tab2.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], Tab2Component);
    return Tab2Component;
}());



/***/ }),

/***/ "./src/app/home/tabs/tab3/tab3.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:20px\">\r\n  <form name=\"form\" role=\"form\">\r\n    <div class=\"form-group\">\r\n      Client Name:<br>\r\n      <input type=\"text\" name=\"clientName\" class=\"form-control\" [(ngModel)]=\"clientName\" required />\r\n      <span *ngIf=\"!clientName\" class=\"help-block\">Client name is required</span>\r\n    </div>\r\n    <button type=\"submit\" (click)=\"click()\" [disabled]=\"!clientName\" class=\"btn btn-danger\">Find client</button>\r\n  </form>\r\n  <br />\r\n  <div *ngIf=\"clients.length > 0\">\r\n    <table class=\"table table-striped table-hover\" border=\"1\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Name</th>\r\n          <th>Email</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let client of clients | paginate: {itemsPerPage: 15, currentPage:page, id: '1'}\">\r\n          <td>{{client.id}}</td>\r\n          <td>{{client.name}}</td>\r\n          <td>{{client.email}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <pagination-controls (pageChange)=\"page = $event\" id=\"1\"\r\n                         maxSize=\"15\"\r\n                         directionLinks=\"true\"\r\n                         autoHide=\"true\">\r\n    </pagination-controls>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/tabs/tab3/tab3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Tab3Component = /** @class */ (function () {
    function Tab3Component(http) {
        this.http = http;
        this.clients = [];
    }
    Tab3Component.prototype.click = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].port + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].subdomain + 'clientByname/' + this.clientName).toPromise()
            .then(function (res) {
            _this.clients = [];
            if (res.length == 0) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()("Client not found", "Client with name: " + _this.clientName + " not found. Try with a new name", "info");
            }
            else {
                _this.clients = res;
            }
        });
    };
    Tab3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app-tab3',
            template: __webpack_require__("./src/app/home/tabs/tab3/tab3.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], Tab3Component);
    return Tab3Component;
}());



/***/ }),

/***/ "./src/app/home/tabs/tab4/tab4.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:20px\">\r\n  <form name=\"form\" role=\"form\">\r\n    <div class=\"form-group\">\r\n      Client Name:<br>\r\n      <input type=\"text\" name=\"clientName\" class=\"form-control\" [(ngModel)]=\"clientName\" required />\r\n      <span *ngIf=\"!clientName\" class=\"help-block\">Client name is required</span>\r\n    </div>\r\n    <button type=\"submit\" (click)=\"click()\" [disabled]=\"!clientName\" class=\"btn btn-danger\">Find client</button>\r\n  </form>\r\n  <br />\r\n</div>\r\n\r\n<div *ngIf=\"policies.length > 0\">\r\n  <table class=\"table table-striped table-hover\" border=\"1\">\r\n    <thead>\r\n      <tr>\r\n        <th>Policy Id</th>\r\n        <th>Client Id</th>\r\n        <th>Email</th>\r\n        <th>Inception Date</th>\r\n        <th>Installment Payment</th>\r\n        <th>Amount Insured</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let policy of policies | paginate: {itemsPerPage: 15, currentPage:page, id: '1'}; \">\r\n        <td>{{policy.id}}</td>\r\n        <td>{{policy.clientId}}</td>\r\n        <td>{{policy.email}}</td>\r\n        <td>{{policy.inceptionDate}}</td>\r\n        <td>{{policy.installmentPayment}}</td>\r\n        <td>{{policy.amountInsured}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <pagination-controls (pageChange)=\"page = $event\" id=\"1\"\r\n                       maxSize=\"15\"\r\n                       directionLinks=\"true\"\r\n                       autoHide=\"true\">\r\n  </pagination-controls>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/tabs/tab4/tab4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Tab4Component = /** @class */ (function () {
    function Tab4Component(http) {
        this.http = http;
        this.policies = [];
    }
    Tab4Component.prototype.click = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].port + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].subdomain + 'policies/' + this.clientName).toPromise()
            .then(function (res) {
            if (res.length == 0) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()("Policy not found", "Policies for " + _this.clientName + " not found. Try with a new name", "info");
            }
            else {
                _this.policies = res;
            }
        });
    };
    Tab4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app-tab4',
            template: __webpack_require__("./src/app/home/tabs/tab4/tab4.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], Tab4Component);
    return Tab4Component;
}());



/***/ }),

/***/ "./src/app/home/tabs/tab5/tab5.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:20px\">\r\n  <form name=\"form\" role=\"form\">\r\n    <div class=\"form-group\">\r\n      Policy ID:<br>\r\n      <input type=\"text\" name=\"policy\" class=\"form-control\" [(ngModel)]=\"policy\" required />\r\n      <span *ngIf=\"!policy\"  class=\"help-block\">Client id is required</span>\r\n    </div>\r\n    <button type=\"submit\" (click)=\"click()\"  [disabled]=\"!policy\" class=\"btn btn-danger\">Find client</button>\r\n  </form>\r\n  <br />\r\n  <table *ngIf=\"client\" class=\"table table-striped table-hover\"  border=\"1\">\r\n    <thead>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Email</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{client.name}}</td>\r\n        <td>{{client.email}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/tabs/tab5/tab5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Tab5Component = /** @class */ (function () {
    function Tab5Component(http) {
        this.http = http;
    }
    Tab5Component.prototype.click = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].host + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].port + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].subdomain + 'clientPolicy/' + this.policy).toPromise()
            .then(function (res) {
            if (res == null) {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()("Client not found", "Client with policy " + _this.policy + " not found. Try with a new one", "info");
            }
            else {
                _this.client = res;
            }
        });
    };
    Tab5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app-tab5',
            template: __webpack_require__("./src/app/home/tabs/tab5/tab5.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], Tab5Component);
    return Tab5Component;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<form name=\"form\" (submit)=\"login()\">\r\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <i class=\"fa fa-key\"></i>\r\n    <input type=\"text\" name=username [ngModel]=\"username\" id=\"username\" class=\"form-control\" [(ngModel)]=\"username\" required />\r\n    <span *ngIf=\"!username\" class=\"help-block\">Username is required</span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <i class=\"fa fa-lock\"></i>\r\n    <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" [(ngModel)]=\"password\" required />\r\n    <span *ngIf=\"!password\" class=\"help-block\">Password is required</span>\r\n  </div>\r\n  <div>\r\n    <button type=\"submit\" ng-disabled=\"form.$invalid || dataLoading\" class=\"btn btn-danger\">Login</button>\r\n    <img *ngIf=\"dataLoading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n  </div>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_data_service__ = __webpack_require__("./src/app/services/global-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service_service__ = __webpack_require__("./src/app/services/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http, globalData, authService) {
        this.router = router;
        this.http = http;
        this.globalData = globalData;
        this.authService = authService;
        this.username = "";
        this.password = "";
        this.error = "";
    }
    ;
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.dataLoading = true;
        this.authService.clearCredentials();
        this.authService.getToken(this.username, this.password, function (res) {
            _this.dataLoading = false;
            _this.authService.setCredentials(_this.username, res.access_token);
            _this.router.navigate(['/home']);
        }, function (err) {
            _this.dataLoading = false;
            _this.error = err.error_description;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__services_global_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__services_authentication_service_service__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/AddHttpHeaderInterceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddHttpHeaderInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_data_service__ = __webpack_require__("./src/app/services/global-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddHttpHeaderInterceptor = /** @class */ (function () {
    function AddHttpHeaderInterceptor(router, globalData) {
        this.router = router;
        this.globalData = globalData;
    }
    AddHttpHeaderInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var authHeader = this.globalData.authdata;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpHeaders */]({
            'Authorization': 'Bearer ' + authHeader,
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        var clonedReq = request.clone({ headers: headers });
        return next
            .handle(clonedReq)
            .do(function (ev) {
        })
            .catch(function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpErrorResponse */]) {
                switch (error.status) {
                    case 112:
                        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()("Connection Refused", "The server refuse the connection", "error");
                        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.error);
                    case 400:
                        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.error);
                    case 401:
                        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()("Access denied", "You don't have the right permission to use this API", "error");
                        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
                    case 403:
                        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()("Access denied", "You don't have the right permission to use this API", "error");
                        _this.router.navigate(['/']);
                        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
                    case 500:
                        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()("Internal error", "please try in a few minutes", "error");
                        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
                    case 404:
                        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()("Error 404", "Service not found", "error");
                        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
                }
                console.log('Processing http error', error);
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
        });
    };
    AddHttpHeaderInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_5__global_data_service__["a" /* DataService */]])
    ], AddHttpHeaderInterceptor);
    return AddHttpHeaderInterceptor;
}());



/***/ }),

/***/ "./src/app/services/authentication-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_data_service__ = __webpack_require__("./src/app/services/global-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, globalData) {
        this.http = http;
        this.globalData = globalData;
        this.host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].host;
        this.port = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].port;
        this.subdomain = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].subdomain;
        this.setCredentials = function (user, token) {
            this.globalData.authdata = token;
            this.globalData.user = user;
        };
        this.clearCredentials = function () {
            this.globalData.authdata = "";
            this.globalData.user = "";
        };
    }
    AuthenticationService.prototype.getToken = function (username, password, callback, errorCallback) {
        var body = "username=" + username + "&password=" + password + "&grant_type=password";
        this.http.post(this.host + this.port + 'token', body).toPromise()
            .then(function (res) {
            callback(res);
        })
            .catch(function (err) {
            errorCallback(err);
        });
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__global_data_service__["a" /* DataService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/global-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    host: "http://localhost",
    port: ":39628/",
    subdomain: "api/"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map