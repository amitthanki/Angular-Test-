"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
//import { Observable } from 'rxjs/Observable';
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var Observable_1 = require("rxjs/Observable");
var SpinnerServices_1 = require("../Services/SpinnerServices");
var UserService = (function () {
    function UserService(_http, loaderService) {
        this._http = _http;
        this.loaderService = loaderService;
    }
    UserService.prototype.PostData = function (url, model) {
        this.loaderService.display(true);
        var body = JSON.stringify(model);
        var headers = new http_1.Headers({ 'Content-type': 'application/json' });
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(url, body, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.GetData = function (url) {
        //let character = this._http.get('https://swapi.co/api/people/1');
        //let characterHomeworld = this._http.get('http://swapi.co/api/planets/1');
        //debugger;
        //forkJoin([character, characterHomeworld]).subscribe(result => {
        //});
        this.loaderService.display(true);
        return this._http.get(url)
            .map(function (response) { return response.json(); }, this.loaderService.display(false))
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    UserService.prototype.GetDataByID = function (url, id) {
        return this._http.get(url + id).map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    UserService.prototype.restfulPost = function (body, requestUrl, options) {
        alert('call');
        var url = requestUrl;
        var header = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var defaultOptions = options === null ? new http_1.RequestOptions({ headers: header }) : options;
        return this._http.post(url, JSON.parse(JSON.stringify(body)), defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, SpinnerServices_1.LoaderService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map