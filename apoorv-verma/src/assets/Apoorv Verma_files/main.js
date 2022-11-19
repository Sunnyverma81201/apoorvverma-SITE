"use strict";
(self["webpackChunkapoorv_verma"] = self["webpackChunkapoorv_verma"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation/navigation.component */ 3719);
/* harmony import */ var _sections_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/home/home.component */ 2113);
/* harmony import */ var _sections_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/about/about.component */ 9710);




class AppComponent {
    constructor() {
        this.title = 'apoorv-verma';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "main")(2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } }, dependencies: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent, _sections_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _sections_about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: 110px auto;\n  align-items: stretch;\n}\n\nmain[_ngcontent-%COMP%] {\n  overflow: scroll;\n  scroll-behavior: smooth;\n}\n\napp-navigation[_ngcontent-%COMP%] {\n  top: 0;\n  position: sticky;\n}\n\nsection[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxNQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTEwcHggYXV0bztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbm1haW57XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5cbmFwcC1uYXZpZ2F0aW9ue1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG59XG5cbnNlY3Rpb257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navigation.component */ 3719);
/* harmony import */ var _sections_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/home/home.component */ 2113);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _sections_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/about/about.component */ 9710);
/* harmony import */ var _business_card_business_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./business-card/business-card.component */ 1568);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mdb-angular-ui-kit/modal */ 7812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_9__.MdbModalModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__.NavigationComponent,
        _sections_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _sections_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent,
        _business_card_business_card_component__WEBPACK_IMPORTED_MODULE_4__.BusinessCardComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_9__.MdbModalModule] }); })();


/***/ }),

/***/ 1568:
/*!**********************************************************!*\
  !*** ./src/app/business-card/business-card.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessCardComponent": () => (/* binding */ BusinessCardComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);



class BusinessCardComponent {
    constructor() {
        this.instagramIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faInstagram;
        this.githubIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faGithub;
        this.linkedInIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faLinkedin;
        this.twitterIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faTwitter;
        this.discordIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faDiscord;
    }
    ngOnInit() {
    }
}
BusinessCardComponent.ɵfac = function BusinessCardComponent_Factory(t) { return new (t || BusinessCardComponent)(); };
BusinessCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BusinessCardComponent, selectors: [["app-business-card"]], decls: 16, vars: 5, consts: [["id", "profile-picture"], ["src", "../../../assets/profile_image.png", "id", "my-image"], [1, "info"], ["id", "name"], [1, "social-links"], ["href", "https://www.instagram.com/apoorvverma_"], [3, "icon"], ["href", "https://github.com/Sunnyverma81201"], ["href", "https://www.linkedin.com/in/apoorv-verma-397782195"], ["href", "https://www.twitter.com/ApoorvV72752070"], ["href", "https://"]], template: function BusinessCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "APOORV VERMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.instagramIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.githubIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.linkedInIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.twitterIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.discordIcon);
    } }, dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent], styles: ["[_nghost-%COMP%] {\n  border: 4px solid #ff1151;\n  border-radius: 8px;\n  padding: 10px;\n  background-color: #353353;\n  color: #fff;\n  height: 250px;\n  display: flex;\n}\n\n#name[_ngcontent-%COMP%] {\n  font-size: 32pt;\n  font-weight: bold;\n}\n\n#my-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 100px;\n  width: 100px;\n  margin: 20px;\n}\n\nfont[_ngcontent-%COMP%] {\n  color: #ff6611;\n  margin-inline: 3px;\n}\n\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  font-size: 18pt;\n  margin: 5px;\n}\n\n.social-links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-family: monospace;\n  font-size: 18px;\n}\n\n.wrap[_ngcontent-%COMP%]:before {\n  content: \"<\";\n}\n\n.wrap[_ngcontent-%COMP%]:after {\n  content: \">\";\n}\n\n.wrap[_ngcontent-%COMP%]:before, .wrap[_ngcontent-%COMP%]:after {\n  color: #ffd15c;\n  font-weight: bold;\n  font-size: 24px;\n  animation: flicker 4s infinite;\n}\n\nspan[_ngcontent-%COMP%] {\n  display: block;\n}\n\np[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 20px;\n  overflow: hidden;\n  margin: 25px;\n  font-size: 18px;\n  position: relative;\n}\n\n.flip[_ngcontent-%COMP%] {\n  margin-left: 0;\n  text-align: center;\n}\n\n.flip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  animation: flip 8s infinite;\n  transition: 0.75s;\n}\n\n@keyframes flip {\n  0% {\n    transform: translateY(0);\n  }\n  25% {\n    transform: translateY(-100%);\n  }\n  50% {\n    transform: translateY(-200%);\n  }\n  75% {\n    transform: translateY(-300%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@keyframes flicker {\n  0%, 100% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c2luZXNzLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUdFO0VBQ0UsWUFBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtBQUZKOztBQUtFO0VBRUUsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBSko7O0FBUUE7RUFDRSxjQUFBO0FBTEY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVFBO0VBQ0U7SUFDRSx3QkFBQTtFQUxGO0VBUUE7SUFDRSw0QkFBQTtFQU5GO0VBU0E7SUFDRSw0QkFBQTtFQVBGO0VBVUE7SUFDRSw0QkFBQTtFQVJGO0VBV0E7SUFDRSx3QkFBQTtFQVRGO0FBQ0Y7O0FBWUE7RUFFRTtJQUVFLFVBQUE7RUFaRjtFQWVBO0lBQ0UsVUFBQTtFQWJGO0FBQ0YiLCJmaWxlIjoiYnVzaW5lc3MtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmYxMTUxO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTMzNTM7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5cbiNuYW1lIHtcbiAgZm9udC1zaXplOiAzMnB0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI215LWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuZm9udHtcbiAgY29sb3I6ICNmZjY2MTE7XG4gIG1hcmdpbi1pbmxpbmU6IDNweDtcbn1cbi5zb2NpYWwtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xuICBmb250LXNpemU6IDE4cHQ7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uc29jaWFsLWxpbmtzPmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5cblxuLndyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMThweDtcblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCI8XCI7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIj5cIjtcbiAgfVxuXG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb2xvcjogI2ZmZDE1YztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYW5pbWF0aW9uOiBmbGlja2VyIDRzIGluZmluaXRlO1xuICB9XG59XG5cbnNwYW4ge1xuICBkaXNwbGF5OiBibG9ja1xufVxuXG5wIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMjVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mbGlwIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZsaXAgc3BhbiB7XG4gIGFuaW1hdGlvbjogZmxpcCA4cyBpbmZpbml0ZTtcbiAgdHJhbnNpdGlvbjogLjc1cztcbn1cblxuQGtleWZyYW1lcyBmbGlwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxuICB9XG5cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpXG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSlcbiAgfVxuXG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMDAlKVxuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXG4gIH1cbn1cblxuQGtleWZyYW1lcyBmbGlja2VyIHtcblxuICAwJSxcbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMFxuICB9XG5cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3719:
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);



class NavigationComponent {
    constructor() {
        this.homeIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faHome;
        this.aboutIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faAddressCard;
        this.serviceIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBriefcase;
        this.experienceIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faGraduationCap;
        this.workIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faLayerGroup;
        this.pricingIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCreditCard;
        this.testimonialIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faComments;
        this.photographyIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faImage;
        this.contactIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faContactCard;
    }
    ngOnInit() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 24, vars: 9, consts: [["id", "navigation"], ["id", "logo"], ["src", "../../assets/ApoorvLogo.svg", "height", "40px"], ["href", "#home"], [3, "icon"], ["href", "#about"], ["href", "#service"], ["href", "#experience"], ["href", "#work"], ["href", "#pricing"], ["href", "#testimonial"], ["href", "#photography"], ["href", "#contact"], ["id", "developer_name"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nav")(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "designed by @apoorvverma_");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.homeIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.aboutIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.serviceIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.experienceIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.workIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.pricingIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.testimonialIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.photographyIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.contactIcon);
    } }, dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent], styles: ["[_nghost-%COMP%] {\n  background-color: #353353;\n  color: #ffd15c;\n  padding: 40px;\n  width: 100%;\n}\n\n#navigation[_ngcontent-%COMP%] {\n  background-color: #353353;\n  z-index: 2;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\nnav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  text-align: center;\n  color: #a5a1ce;\n  min-width: 10px;\n  padding: 5px;\n}\n\nnav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #ffd15c;\n  transition: 300ms ease-in-out;\n}\n\n#developer_name[_ngcontent-%COMP%] {\n  writing-mode: vertical-rl;\n  transform: rotate(-180deg);\n  color: #655b73;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTMzNTM7XG4gIGNvbG9yOiAjZmZkMTVjO1xuICBwYWRkaW5nOiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI25hdmlnYXRpb257XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTMzNTM7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5uYXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbn1cblxubmF2ID4gYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYTVhMWNlO1xuICBtaW4td2lkdGg6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxubmF2ID4gYTpob3ZlcntcbiAgY29sb3I6ICNmZmQxNWM7XG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4jZGV2ZWxvcGVyX25hbWV7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICBjb2xvcjogIzY1NWI3Mztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 9710:
/*!***************************************************!*\
  !*** ./src/app/sections/about/about.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 5, vars: 0, consts: [["id", "about"], [1, "section-title"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["#about[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fib3V0e1xuICBwYWRkaW5nOiA0MHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 2113:
/*!*************************************************!*\
  !*** ./src/app/sections/home/home.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2257);
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-js */ 4360);
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_business_card_business_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/business-card/business-card.component */ 1568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mdb-angular-ui-kit/modal */ 7812);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);






class HomeComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.instagramIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faInstagram;
        this.githubIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faGithub;
        this.linkedInIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faLinkedin;
        this.twitterIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faTwitter;
        this.discordIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faDiscord;
        this.modalRef = null;
    }
    ngOnInit() {
        this.homeSectionBackground();
    }
    homeSectionBackground() {
        setTimeout(function () {
            var parallax = parallax_js__WEBPACK_IMPORTED_MODULE_0__;
            var scene = document.getElementById('scene');
            var parallaxInstance1 = new parallax(scene, {
                relativeInput: false
            });
        }, 1000);
    }
    showBusinessCard() {
        this.modalRef = this.modalService.open(src_app_business_card_business_card_component__WEBPACK_IMPORTED_MODULE_1__.BusinessCardComponent, {
            modalClass: 'modal-dialog-centered'
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_4__.MdbModalService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 62, vars: 5, consts: [["id", "home", 1, ".container"], ["id", "profile-picture"], ["src", "../../../assets/profile_image.png", "id", "my-image"], ["id", "name"], [1, "my-description"], [1, "wrap"], [1, "flip"], [1, "social-links"], ["href", "https://www.instagram.com/apoorvverma_"], [3, "icon"], ["href", "https://github.com/Sunnyverma81201"], ["href", "https://www.linkedin.com/in/apoorv-verma-397782195"], ["href", "https://www.twitter.com/ApoorvV72752070"], ["href", "https://"], [1, "btn", "btn-danger", 3, "click"], ["id", "scene", "data-relative-input", "true", 1, "parallax", 2, "transform", "translate3d(0px, 0px, 0px) rotate(0.0001deg)", "transform-style", "preserve-3d", "backface-visibility", "hidden", "pointer-events", "none"], ["width", "27", "height", "29", "data-depth", "0.3", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p1", 2, "transform", "translate3d(-11.7px, 7.1px, 0px)", "transform-style", "preserve-3d", "backface-visibility", "hidden", "position", "relative", "display", "block", "left", "0px", "top", "0px"], ["d", "M21.15625.60099c4.37954 3.67487 6.46544 9.40612 5.47254 15.03526-.9929 5.62915-4.91339 10.30141-10.2846 12.25672-5.37122 1.9553-11.3776.89631-15.75715-2.77856l2.05692-2.45134c3.50315 2.93948 8.3087 3.78663 12.60572 2.22284 4.297-1.5638 7.43381-5.30209 8.22768-9.80537.79387-4.50328-.8749-9.08872-4.37803-12.02821L21.15625.60099z", "fill", "#FFD15C", "fill-rule", "evenodd"], ["width", "26", "height", "26", "data-depth", "0.2", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p2", 2, "transform", "translate3d(-7.8px, 4.8px, 0px)", "transform-style", "preserve-3d", "backface-visibility", "hidden", "position", "absolute", "display", "block", "left", "0px", "top", "0px"], ["d", "M13 3.3541L2.42705 24.5h21.1459L13 3.3541z", "stroke", "#FF4C60", "stroke-width", "3", "fill", "none", "fill-rule", "evenodd"], ["width", "30", "height", "25", "data-depth", "0.3", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p3", 2, "transform", "translate3d(-11.7px, 7.1px, 0px)", "transform-style", "preserve-3d", "backface-visibility", "hidden", "position", "absolute", "display", "block", "left", "0px", "top", "0px"], ["d", "M.1436 8.9282C3.00213 3.97706 8.2841.92763 14.00013.92796c5.71605.00032 10.9981 3.04992 13.85641 8 2.8583 4.95007 2.8584 11.0491-.00014 16.00024l-2.77128-1.6c2.28651-3.96036 2.28631-8.84002.00011-12.8002-2.2862-3.96017-6.5124-6.40017-11.08513-6.4-4.57271.00018-8.79872 2.43984-11.08524 6.4002l-2.77128-1.6z", "fill", "#44D7B6", "fill-rule", "evenodd"], ["width", "15", "height", "23", "data-depth", "0.6", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p4", 2, "transform", "translate3d(-23.3px, 14.3px, 0px)", "transform-style", "preserve-3d", "backface-visibility", "hidden", "position", "absolute", "display", "block", "left", "0px", "top", "0px"], ["transform", "rotate(30 9.86603 10.13397)", "x", "7", "width", "3", "height", "25", "rx", "1.5", "fill", "#FFD15C", "fill-rule", "evenodd"], ["width", "15", "height", "23", "data-depth", "0.2", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p5", 2, "transform", "translate3d(-7.8px, 4.8px, 0px)", "transform-style", "preserve-3d", "backface-visibility", "hidden", "position", "absolute", "display", "block", "left", "0px", "top", "0px"], ["transform", "rotate(30 9.86603 10.13397)", "x", "7", "width", "3", "height", "25", "rx", "1.5", "fill", "#6C6CE5", "fill-rule", "evenodd"], ["width", "49", "height", "17", "data-depth", "0.5", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p6", 2, "transform", "translate3d(-19.5px, 11.9px, 0px)", "transform-style", "preserve-3d", "backface-visibility", "hidden", "position", "absolute", "display", "block", "left", "0px", "top", "0px"], ["fill", "#FF4C60", "fill-rule", "evenodd"], ["d", "M.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C23.1175 5.50106 25.5 10.78292 25.5 16.5H23c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0C4.90625 7.70116 3 11.92697 3 16.5H.5z"], ["d", "M23.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C46.1175 5.50106 48.5 10.78292 48.5 16.5H46c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0-3.09375 2.28651-5 6.51232-5 11.08535h-2.5z"], ["width", "26", "height", "26", "data-depth", "0.4", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p7", 2, "transform", "translate3d(-15.6px, 9.5px, 0px)", "transform-style", "preserve-3d", "backface-visibility", "hidden", "position", "absolute", "display", "block", "left", "0px", "top", "0px"], ["d", "M13 22.6459L2.42705 1.5h21.1459L13 22.6459z", "stroke", "#FFD15C", "stroke-width", "3", "fill", "none", "fill-rule", "evenodd"], ["width", "19", "height", "21", "data-depth", "0.3", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p8", 2, "transform", "translate3d(-11.7px, 7.1px, 0px)", "transform-style", "preserve-3d", "backface-visibility", "hidden", "position", "absolute", "display", "block", "left", "0px", "top", "0px"], ["transform", "rotate(-40 6.25252 10.12626)", "x", "7", "width", "3", "height", "25", "rx", "1.5", "fill", "#6C6CE5", "fill-rule", "evenodd"], ["width", "30", "height", "25", "data-depth", "0.3", "data-depth-y", "-1.30", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p9", 2, "transform", "translate3d(-11.7px, -30.9px, 0px)", "transform-style", "preserve-3d", "backface-visibility", "hidden", "position", "absolute", "display", "block", "left", "0px", "top", "0px"], ["d", "M29.8564 16.0718c-2.85854 4.95114-8.1405 8.00057-13.85654 8.00024-5.71605-.00032-10.9981-3.04992-13.85641-8-2.8583-4.95007-2.8584-11.0491.00014-16.00024l2.77128 1.6c-2.28651 3.96036-2.28631 8.84002-.00011 12.8002 2.2862 3.96017 6.5124 6.40017 11.08513 6.4 4.57271-.00018 8.79872-2.43984 11.08524-6.4002l2.77128 1.6z", "fill", "#6C6CE5", "fill-rule", "evenodd"], ["width", "47", "height", "29", "data-depth", "0.2", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p10", 2, "transform", "translate3d(-7.8px, 4.8px, 0px)", "transform-style", "preserve-3d", "backface-visibility", "hidden", "position", "absolute", "display", "block", "left", "0px", "top", "0px"], ["fill", "#44D7B6", "fill-rule", "evenodd"], ["d", "M46.78878 17.19094c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36265-9.0893-.26708-11.74616-4.27524-2.65686-4.00817-3.08917-9.78636-1.13381-15.15866l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12693 2.12514 3.20674 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40949 8.48988-8.70673l2.34923.85505z"], ["d", "M25.17585 9.32448c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36264-9.0893-.26708-11.74616-4.27525C.16049 11.92447-.27182 6.14628 1.68354.77398l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12692 2.12514 3.20675 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40948 8.48988-8.70672l2.34923.85505z"], ["width", "33", "height", "20", "data-depth", "0.5", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p11", 2, "transform", "translate3d(-19.5px, 11.9px, 0px)", "transform-style", "preserve-3d", "backface-visibility", "hidden", "position", "absolute", "display", "block", "left", "0px", "top", "0px"], ["d", "M32.36774.34317c.99276 5.63023-1.09332 11.3614-5.47227 15.03536-4.37895 3.67396-10.3855 4.73307-15.75693 2.77837C5.76711 16.2022 1.84665 11.53014.8539 5.8999l3.15139-.55567c.7941 4.50356 3.93083 8.24147 8.22772 9.8056 4.29688 1.56413 9.10275.71673 12.60554-2.2227C28.34133 9.98771 30.01045 5.4024 29.21635.89884l3.15139-.55567z", "fill", "#FFD15C", "fill-rule", "evenodd"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "APOORV VERMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "I ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "font");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "am");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 6)(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Developer \uD83E\uDDD1\u200D\uD83D\uDCBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Mobile Photographer \uD83E\uDD33");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Music Lover \uD83C\uDFA7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Learner \uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF93");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 7)(22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div")(33, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_33_listener() { return ctx.showBusinessCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "rect", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "rect", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "svg", 26)(47, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "path", 28)(49, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "svg", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "rect", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "svg", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "svg", 36)(57, "g", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "path", 38)(59, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "svg", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.instagramIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.githubIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.linkedInIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.twitterIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.discordIcon);
    } }, dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent], styles: ["[_nghost-%COMP%] {\n  color: #fff;\n}\n\n#home[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #353353;\n  padding-inline: 10px;\n  height: 100vh;\n  width: 100%;\n}\n\n#name[_ngcontent-%COMP%] {\n  font-size: 32pt;\n  font-weight: bold;\n}\n\n#my-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 160px;\n  width: 160px;\n  margin: 20px;\n}\n\nfont[_ngcontent-%COMP%] {\n  color: #ff6611;\n  margin-inline: 3px;\n}\n\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  font-size: 18pt;\n  margin: 5px;\n}\n\n.social-links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-family: monospace;\n  font-size: 18px;\n}\n\n.wrap[_ngcontent-%COMP%]:before {\n  content: \"<\";\n}\n\n.wrap[_ngcontent-%COMP%]:after {\n  content: \">\";\n}\n\n.wrap[_ngcontent-%COMP%]:before, .wrap[_ngcontent-%COMP%]:after {\n  color: #ffd15c;\n  font-weight: bold;\n  font-size: 24px;\n  animation: flicker 4s infinite;\n}\n\nspan[_ngcontent-%COMP%] {\n  display: block;\n}\n\np[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 20px;\n  overflow: hidden;\n  margin: 25px;\n  font-size: 18px;\n  position: relative;\n}\n\n.flip[_ngcontent-%COMP%] {\n  margin-left: 0;\n  text-align: center;\n}\n\n.flip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  animation: flip 8s infinite;\n  transition: 0.75s;\n}\n\n@keyframes flip {\n  0% {\n    transform: translateY(0);\n  }\n  25% {\n    transform: translateY(-100%);\n  }\n  50% {\n    transform: translateY(-200%);\n  }\n  75% {\n    transform: translateY(-300%);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@keyframes flicker {\n  0%, 100% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n\n\n.parallax[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\n.parallax[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.parallax[_ngcontent-%COMP%]   .p1[_ngcontent-%COMP%] {\n  left: 10% !important;\n  top: 10% !important;\n}\n\n.parallax[_ngcontent-%COMP%]   .p2[_ngcontent-%COMP%] {\n  left: 25% !important;\n  top: 30% !important;\n}\n\n.parallax[_ngcontent-%COMP%]   .p3[_ngcontent-%COMP%] {\n  left: 16% !important;\n  top: 65% !important;\n}\n\n.parallax[_ngcontent-%COMP%]   .p4[_ngcontent-%COMP%] {\n  left: 10% !important;\n  top: 80% !important;\n}\n\n.parallax[_ngcontent-%COMP%]   .p5[_ngcontent-%COMP%] {\n  left: 45% !important;\n  top: 10% !important;\n}\n\n.parallax[_ngcontent-%COMP%]   .p6[_ngcontent-%COMP%] {\n  left: 40% !important;\n  top: 85% !important;\n}\n\n.parallax[_ngcontent-%COMP%]   .p7[_ngcontent-%COMP%] {\n  top: 20% !important;\n  left: 70% !important;\n}\n\n.parallax[_ngcontent-%COMP%]   .p8[_ngcontent-%COMP%] {\n  left: 70% !important;\n  top: 80% !important;\n}\n\n.parallax[_ngcontent-%COMP%]   .p9[_ngcontent-%COMP%] {\n  left: 90% !important;\n  top: 10% !important;\n}\n\n.parallax[_ngcontent-%COMP%]   .p10[_ngcontent-%COMP%] {\n  left: 80% !important;\n  top: 45% !important;\n}\n\n.parallax[_ngcontent-%COMP%]   .p11[_ngcontent-%COMP%] {\n  left: 90% !important;\n  top: 90% !important;\n}\n\n.btn-danger[_ngcontent-%COMP%] {\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUVFO0VBQ0UsWUFBQTtBQUFKOztBQUdFO0VBQ0UsWUFBQTtBQURKOztBQUlFO0VBRUUsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBSEo7O0FBT0E7RUFDRSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9BO0VBQ0U7SUFDRSx3QkFBQTtFQUpGO0VBT0E7SUFDRSw0QkFBQTtFQUxGO0VBUUE7SUFDRSw0QkFBQTtFQU5GO0VBU0E7SUFDRSw0QkFBQTtFQVBGO0VBVUE7SUFDRSx3QkFBQTtFQVJGO0FBQ0Y7O0FBV0E7RUFFRTtJQUVFLFVBQUE7RUFYRjtFQWNBO0lBQ0UsVUFBQTtFQVpGO0FBQ0Y7O0FBZUEsb0JBQUE7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBZEY7O0FBbUJBO0VBQ0Usa0JBQUE7QUFoQkY7O0FBa0JBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBQWZGOztBQWlCQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUFkRjs7QUFnQkE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBYkY7O0FBZUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBWkY7O0FBY0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBWEY7O0FBYUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBVkY7O0FBWUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FBVEY7O0FBV0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBUkY7O0FBVUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBU0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBUUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBU0E7RUFDRSxtQkFBQTtBQU5GIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4jaG9tZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzMzUzO1xuICBwYWRkaW5nLWlubGluZTogMTBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNuYW1lIHtcbiAgZm9udC1zaXplOiAzMnB0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI215LWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuZm9udHtcbiAgY29sb3I6ICNmZjY2MTE7XG4gIG1hcmdpbi1pbmxpbmU6IDNweDtcbn1cbi5zb2NpYWwtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xuICBmb250LXNpemU6IDE4cHQ7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uc29jaWFsLWxpbmtzPmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5cblxuLndyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMThweDtcblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCI8XCI7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIj5cIjtcbiAgfVxuXG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb2xvcjogI2ZmZDE1YztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYW5pbWF0aW9uOiBmbGlja2VyIDRzIGluZmluaXRlO1xuICB9XG59XG5cbnNwYW4ge1xuICBkaXNwbGF5OiBibG9ja1xufVxuXG5wIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMjVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mbGlwIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZsaXAgc3BhbiB7XG4gIGFuaW1hdGlvbjogZmxpcCA4cyBpbmZpbml0ZTtcbiAgdHJhbnNpdGlvbjogLjc1cztcbn1cblxuQGtleWZyYW1lcyBmbGlwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxuICB9XG5cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpXG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSlcbiAgfVxuXG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMDAlKVxuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXG4gIH1cbn1cblxuQGtleWZyYW1lcyBmbGlja2VyIHtcblxuICAwJSxcbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMFxuICB9XG5cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn1cblxuLyogcGFyYWxsYXggZWZmZWN0ICovXG5cbi5wYXJhbGxheCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4vLyB0b3Agc2VjdGlvbiBwYXJhbGxheFxuLnBhcmFsbGF4IC5sYXllciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5wYXJhbGxheCAucDEge1xuICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcbiAgdG9wOiAxMCUgIWltcG9ydGFudDtcbn1cbi5wYXJhbGxheCAucDIge1xuICBsZWZ0OiAyNSUgIWltcG9ydGFudDtcbiAgdG9wOiAzMCUgIWltcG9ydGFudDtcbn1cbi5wYXJhbGxheCAucDMge1xuICBsZWZ0OiAxNiUgIWltcG9ydGFudDtcbiAgdG9wOiA2NSUgIWltcG9ydGFudDtcbn1cbi5wYXJhbGxheCAucDQge1xuICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcbiAgdG9wOiA4MCUgIWltcG9ydGFudDtcbn1cbi5wYXJhbGxheCAucDUge1xuICBsZWZ0OiA0NSUgIWltcG9ydGFudDtcbiAgdG9wOiAxMCUgIWltcG9ydGFudDtcbn1cbi5wYXJhbGxheCAucDYge1xuICBsZWZ0OiA0MCUgIWltcG9ydGFudDtcbiAgdG9wOiA4NSUgIWltcG9ydGFudDtcbn1cbi5wYXJhbGxheCAucDcge1xuICB0b3A6IDIwJSAhaW1wb3J0YW50O1xuICBsZWZ0OiA3MCUgIWltcG9ydGFudDtcbn1cbi5wYXJhbGxheCAucDgge1xuICBsZWZ0OiA3MCUgIWltcG9ydGFudDtcbiAgdG9wOiA4MCUgIWltcG9ydGFudDtcbn1cbi5wYXJhbGxheCAucDkge1xuICBsZWZ0OiA5MCUgIWltcG9ydGFudDtcbiAgdG9wOiAxMCUgIWltcG9ydGFudDtcbn1cbi5wYXJhbGxheCAucDEwIHtcbiAgbGVmdDogODAlICFpbXBvcnRhbnQ7XG4gIHRvcDogNDUlICFpbXBvcnRhbnQ7XG59XG4ucGFyYWxsYXggLnAxMSB7XG4gIGxlZnQ6IDkwJSAhaW1wb3J0YW50O1xuICB0b3A6IDkwJSAhaW1wb3J0YW50O1xufVxuXG5cbi5idG4tZGFuZ2VyIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2340:
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map