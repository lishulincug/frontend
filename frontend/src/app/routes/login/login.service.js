"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_cookies_1 = require("ng2-cookies");
var base_service_1 = require("../../core/base.service");
var user_service_1 = require("./user.service");
var LoginService = (function (_super) {
    __extends(LoginService, _super);
    function LoginService(router, http, userService) {
        var _this = _super.call(this, http, userService) || this;
        _this.router = router;
        return _this;
    }
    LoginService.prototype.canActivate = function (route, state) {
        return this.checkLogin();
    };
    LoginService.prototype.Login = function (data) {
        delete data.remember;
        return this.post('user/login', data);
    };
    LoginService.prototype.checkLogin = function () {
        if (ng2_cookies_1.Cookie.check(user_service_1.UserService.loginCookieUser)) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    LoginService.prototype.userDetected = function (user) {
        // Cookie.set(UserService.globalCookieUser, JSON.stringify(user));
    };
    LoginService.prototype.roleDetected = function (value) {
        ng2_cookies_1.Cookie.set(user_service_1.UserService.globalCookieRoleArr, JSON.stringify(value));
    };
    LoginService.prototype.logout = function () {
        ng2_cookies_1.Cookie.delete(user_service_1.UserService.loginCookieUser);
        // Cookie.delete(UserService.globalCookieRoleArr);
        this.router.navigate(['/login']);
    };
    LoginService = __decorate([
        core_1.Injectable()
    ], LoginService);
    return LoginService;
}(base_service_1.BaseService));
exports.LoginService = LoginService;
