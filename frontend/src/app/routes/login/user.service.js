"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_domain_1 = require("../../domain/user.domain");
var ng2_cookies_1 = require("ng2-cookies");
var UserService = (function () {
    function UserService() {
        this._user = new user_domain_1.User();
    }
    UserService_1 = UserService;
    Object.defineProperty(UserService.prototype, "user", {
        get: function () {
            if (ng2_cookies_1.Cookie.check(UserService_1.loginCookieUser))
                this._user = JSON.parse(ng2_cookies_1.Cookie.get(UserService_1.loginCookieUser));
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "role", {
        get: function () {
            if (ng2_cookies_1.Cookie.check(UserService_1.globalCookieRoleArr))
                this._role = JSON.parse(ng2_cookies_1.Cookie.get(UserService_1.globalCookieRoleArr));
            return this._role;
        },
        enumerable: true,
        configurable: true
    });
    UserService.globalCookieUser = 'marioUserGlobal';
    UserService.marioCookieremember = 'marioUserGlobal';
    UserService.loginCookieUser = 'marioUser';
    UserService.globalCookieRoleArr = 'mariorole';
    UserService = UserService_1 = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
    var UserService_1;
}());
exports.UserService = UserService;
