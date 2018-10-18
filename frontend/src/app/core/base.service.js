"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_link_data_1 = require("../../assets/server/http-link.data");
var http_1 = require("@angular/common/http");
var BaseService = (function () {
    function BaseService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    BaseService.prototype.fixUrl = function (url) {
        return url.replace(/\/&/g, '/').replace(/\?&/g, '?');
    };
    BaseService.prototype.getHeaders = function (needContentType) {
        var headers = {};
        if (this.userService.user)
            headers['Authorization'] = 'Bearer ' + this.userService.user.token;
        if (needContentType)
            headers['Content-Type'] = 'application/json';
        return new http_1.HttpHeaders(headers);
    };
    BaseService.prototype.get = function (url) {
        var u = this.fixUrl(http_link_data_1.WEB_URL_PREFIX + url);
        return this.http.get(u, { headers: this.getHeaders(false) }).toPromise()
            .catch(this.handleError);
    };
    BaseService.prototype.getimg = function (url) {
        var u = this.fixUrl(http_link_data_1.WEB_URL_PREFIX + url);
        return this.http.get(u, { headers: this.getHeaders(false) }).pipe();
    };
    BaseService.prototype.post = function (url, data) {
        var u = this.fixUrl(http_link_data_1.WEB_URL_PREFIX + url);
        return this.http.post(u, data, { headers: this.getHeaders(true), params: data, withCredentials: true }).toPromise()
            .catch(this.handleError);
    };
    BaseService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    BaseService.prototype.delete = function (url) {
        var u = this.fixUrl(http_link_data_1.WEB_URL_PREFIX + url);
        return this.http.delete(u, { headers: this.getHeaders(true) }).toPromise()
            .catch(this.handleError);
    };
    BaseService.prototype.exportFile = function (url, fileName) {
        return this.http.get(this.fixUrl(http_link_data_1.WEB_URL_PREFIX + url), { responseType: 'blob' }).toPromise()
            .catch(this.handleError).then(function (res) {
            //获取文件流转换成请求，并在浏览器中打开，不需要返回
            var blob = new Blob([res], { type: "application/vnd.ms-excel" });
            var objectUrl = window.URL.createObjectURL(blob);
            var anchor = document.createElement("a");
            anchor.download = fileName;
            anchor.href = objectUrl;
            var evt = document.createEvent("MouseEvents");
            evt.initEvent("click", true, true);
            anchor.dispatchEvent(evt);
        });
    };
    BaseService = __decorate([
        core_1.Injectable()
    ], BaseService);
    return BaseService;
}());
exports.BaseService = BaseService;
