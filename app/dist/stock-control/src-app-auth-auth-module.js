(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-auth-auth-module"],{

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");






var routes = [{
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] }
        ]
    }];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <main style=\"min-height: 100%\">\n    <nav class=\"teal lighten-1\" role=\"navigation\">\n      <div class=\"nav-wrapper container\">\n        <a id=\"main-header\" href=\"#\">Carenga</a>\n        <ul class=\"right hide-on-med-and-down\">\n          <li><a routerLink=\"register\">Cadastro</a></li>\n        </ul>\n        <ul class=\"right hide-on-med-and-down\">\n          <li><a routerLink=\"login\">Login</a></li>\n        </ul>\n  \n        <ul id=\"nav-mobile\" class=\"sidenav\">\n          <li class=\"teal lighten-1 white-text\"><a href=\"#\">Menu</a></li>\n          <li><a routerLink=\"login\" (click)=\"toggleMenu()\">Login</a></li>\n          <li><a routerLink=\"register\" (click)=\"toggleMenu()\">Cadastro</a></li>\n        </ul>\n        <a (click)=\"toggleMenu()\" data-target=\"nav-mobile\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n      </div>\n    </nav>\n  \n      <router-outlet></router-outlet>\n      \n  </main>\n  "

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-header {\n  font-size: 28px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9DOlxcVXNlcnNcXExpb25cXERlc2t0b3BcXFByb2plY3RzXFxuMmRvQXJyb21iYWRvXFxhcHAvc3JjXFxhcHBcXGF1dGhcXGF1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_3__);




var AuthComponent = /** @class */ (function () {
    function AuthComponent(router) {
        this.router = router;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var sidenavElem = $('.sidenav').sidenav();
        this.sidenavRef = materialize_css__WEBPACK_IMPORTED_MODULE_3__["Sidenav"].getInstance(sidenavElem);
        this.router.navigateByUrl('/auth/login');
    };
    AuthComponent.prototype.toggleMenu = function () {
        this.sidenavRef.isOpen ? this.sidenavRef.close() : this.sidenavRef.open();
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'auth-root',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"]
            ],
            bootstrap: [_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"blue-grey-text text-darken-3\" id=\"welcome-message\">Bem vindo à aplicação de controle de estoque!</h5>\n<br/>\n<div class=\"row\">\n  <div class=\"container\" id=\"login-card\">\n    <div class=\"z-depth-1 grey lighten-4 row\" id=\"login-card-content\">\n\n      <form class=\"col s12\" method=\"post\" (submit)=\"signIn(entity)\">\n        <div class='row'>\n          <div class='col s12'>\n          </div>\n        </div>\n\n        <div class='row'>\n          <div class='input-field col s12'>\n            <input type='email' name='email' id='email' [(ngModel)]=\"entity.email\"/>\n            <label for='email'>Usuário</label>\n          </div>\n        </div>\n\n        <div class='row'>\n          <div class='input-field col s12'>\n            <input type='password' name='password' id='password' [(ngModel)]=\"entity.password\"/>\n            <label for='password'>Senha</label>\n          </div>\n          <label style='float: right;'>\n            <a class='pink-text' href=\"http://abraz.org.br/web/\"><b>Esqueceu sua senha?</b></a>\n          </label>\n        </div>\n\n        <br/>\n        <div>\n          <div class='row'>\n            <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect teal lighten-1'>Login</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#welcome-message {\n  display: block;\n  text-align: center; }\n\n#login-card {\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n#login-card-content {\n  max-width: 25rem;\n  padding: 32px 48px 0px 48px;\n  border: 1px solid #EEE;\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9DOlxcVXNlcnNcXExpb25cXERlc2t0b3BcXFByb2plY3RzXFxuMmRvQXJyb21iYWRvXFxhcHAvc3JjXFxhcHBcXGF1dGhcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2VsY29tZS1tZXNzYWdle1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jbG9naW4tY2FyZHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuI2xvZ2luLWNhcmQtY29udGVudHtcclxuICBtYXgtd2lkdGg6IDI1cmVtO1xyXG4gIHBhZGRpbmc6IDMycHggNDhweCAwcHggNDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRUVFO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(provider, router) {
        this.provider = provider;
        this.router = router;
        this.entity = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signIn = function (entity) {
        var _this = this;
        this.provider.login(entity)
            .then(function () { return _this.router.navigateByUrl('/secure'); })
            .catch(function (e) { return materialize_css__WEBPACK_IMPORTED_MODULE_4__["toast"]({ html: e.error }); });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"blue-grey-text text-darken-3\" id=\"welcome-message\">Preencha o formulário para se registrar!</h5>\n<br/>\n<div class=\"row\">\n  <div class=\"container\" id=\"register-card\">\n    <div class=\"z-depth-1 grey lighten-4 row\" id=\"register-card-content\">\n\n      <form class=\"col s12\" method=\"post\" (submit)=\"signUp(entity)\">\n        <div class='row'>\n          <div class='col s12'>\n          </div>\n        </div>\n\n        <div class='row'>\n          <div class='input-field col s12'>\n            <input type='text' name='firstName' id='firstName' [(ngModel)]=\"entity.firstName\"/>\n            <label for='firstName'>Primeiro Nome</label>\n          </div>\n        </div>\n\n\n        <div class='row'>\n          <div class='input-field col s12'>\n            <input type='text' name='lastName' id='lastName' [(ngModel)]=\"entity.lastName\"/>\n            <label for='lastName'>Sobrenome</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <select name=\"period\" [(ngModel)]=\"entity.period\">\n              <option value=\"manhã\">Manhã</option>\n              <option value=\"noite\" selected>Noite</option>\n            </select>\n            <label class=\"select-label\">Peíodo</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <select name=\"type\" [(ngModel)]=\"entity.type\">\n              <option value=\"carona\" selected>Carona</option>\n              <option value=\"motorista\">Motorista</option>\n            </select>\n            <label class=\"select-label\">Tipo</label>\n          </div>\n        </div>\n\n        <div class='row'>\n          <div class='input-field col s12'>\n            <input type='email' name='email' id='email' [(ngModel)]=\"entity.email\"/>\n            <label for='email'>E-mail</label>\n          </div>\n        </div>\n\n        <div class='row'>\n          <div class='input-field col s12'>\n            <input type='password' name='password' id='password' [(ngModel)]=\"entity._password\"/>\n            <label for='password'>Senha</label>\n          </div>\n        </div>\n\n        <br/>\n        <div>\n          <div class='row'>\n            <button type='submit' name='btn_register' class='col s12 btn btn-large waves-effect teal lighten-1'>Cadastrar</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#welcome-message {\n  display: block;\n  text-align: center; }\n\n#register-card {\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n#register-card-content {\n  max-width: 35rem;\n  padding: 32px 48px 0px 48px;\n  border: 1px solid #EEE;\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9DOlxcVXNlcnNcXExpb25cXERlc2t0b3BcXFByb2plY3RzXFxuMmRvQXJyb21iYWRvXFxhcHAvc3JjXFxhcHBcXGF1dGhcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2VsY29tZS1tZXNzYWdle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI3JlZ2lzdGVyLWNhcmR7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiNyZWdpc3Rlci1jYXJkLWNvbnRlbnR7XHJcbiAgICBtYXgtd2lkdGg6IDM1cmVtO1xyXG4gICAgcGFkZGluZzogMzJweCA0OHB4IDBweCA0OHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0VFRTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_3__);




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(provider) {
        this.provider = provider;
        this.entity = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var selectElem = $('select').formSelect();
        this.selectRef = materialize_css__WEBPACK_IMPORTED_MODULE_3__["FormSelect"].getInstance(selectElem);
    };
    RegisterComponent.prototype.signUp = function (entity) {
        var _this = this;
        this.provider.register(entity)
            .then(function () { return materialize_css__WEBPACK_IMPORTED_MODULE_3__["toast"]({ html: 'Cadastro Realizado com Sucesso!' }); })
            .then(function () { return _this.entity = {}; })
            .catch(function (e) { return materialize_css__WEBPACK_IMPORTED_MODULE_3__["toast"]({ html: e.error }); });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-auth-auth-module.js.map