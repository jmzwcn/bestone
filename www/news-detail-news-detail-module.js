(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-detail-news-detail-module"],{

/***/ "./src/app/news-detail/news-detail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/news-detail/news-detail.module.ts ***!
  \***************************************************/
/*! exports provided: NewsDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailPageModule", function() { return NewsDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _news_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-detail.page */ "./src/app/news-detail/news-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _news_detail_page__WEBPACK_IMPORTED_MODULE_5__["NewsDetailPage"]
    }
];
var NewsDetailPageModule = /** @class */ (function () {
    function NewsDetailPageModule() {
    }
    NewsDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_news_detail_page__WEBPACK_IMPORTED_MODULE_5__["NewsDetailPage"]]
        })
    ], NewsDetailPageModule);
    return NewsDetailPageModule;
}());



/***/ }),

/***/ "./src/app/news-detail/news-detail.page.html":
/*!***************************************************!*\
  !*** ./src/app/news-detail/news-detail.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>News detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card (click)=\"onBack()\">\n    <ion-card-header>\n      <ion-card-subtitle>Source: {{article?.source.name}}\n        <br/>Time: {{article?.publishedAt}}</ion-card-subtitle>\n      <ion-card-title>{{article?.title}}</ion-card-title>\n    </ion-card-header>\n    <ion-item>\n      <ion-img [src]=\"article?.urlToImage\"></ion-img>\n    </ion-item>\n    <ion-card-content>\n      {{article?.content}}\n    </ion-card-content>\n    <br/>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/news-detail/news-detail.page.scss":
/*!***************************************************!*\
  !*** ./src/app/news-detail/news-detail.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/news-detail/news-detail.page.ts":
/*!*************************************************!*\
  !*** ./src/app/news-detail/news-detail.page.ts ***!
  \*************************************************/
/*! exports provided: NewsDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailPage", function() { return NewsDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsDetailPage = /** @class */ (function () {
    function NewsDetailPage(newsService, router) {
        this.newsService = newsService;
        this.router = router;
    }
    NewsDetailPage.prototype.ngOnInit = function () {
        this.article = this.newsService.currentArticle;
    };
    NewsDetailPage.prototype.onBack = function () {
        this.router.navigate(['/']);
        this.article = null;
    };
    NewsDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-detail',
            template: __webpack_require__(/*! ./news-detail.page.html */ "./src/app/news-detail/news-detail.page.html"),
            styles: [__webpack_require__(/*! ./news-detail.page.scss */ "./src/app/news-detail/news-detail.page.scss")],
        }),
        __metadata("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewsDetailPage);
    return NewsDetailPage;
}());



/***/ }),

/***/ "./src/app/news.service.ts":
/*!*********************************!*\
  !*** ./src/app/news.service.ts ***!
  \*********************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
var API_KEY = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiKey;
var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
        this.category = 'general';
    }
    NewsService.prototype.getData = function (url) {
        return this.http.get(API_URL + "/" + url + "&apiKey=" + API_KEY);
    };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsService);
    return NewsService;
}());



/***/ })

}]);
//# sourceMappingURL=news-detail-news-detail-module.js.map