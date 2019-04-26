webpackJsonp([1],{

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var HomePage = /** @class */ (function () {
    function HomePage(facebook) {
        this.facebook = facebook;
    }
    HomePage.prototype.var = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loginResponse, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.facebook.login(['public_profile'])];
                    case 1:
                        loginResponse = _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.facebook.api(loginResponse.authResponse.userID + "/?fields=id,name,picture", ['public_profile'])];
                    case 2:
                        _a.user = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="light">\n\n    <button ion-button menuToggle="left" left>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n\n    <button ion-button menuToggle="right" right>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n  <ion-card>\n\n\n\n      <ion-slides loop="true" effect="cube">\n\n      \n\n        <ion-slide>\n\n      <img src="assets/imgs/bib1.png">\n\n      </ion-slide>\n\n\n\n      <ion-slide>\n\n        <img src="assets/imgs/Biblioteca.jpg">\n\n        </ion-slide>\n\n\n\n        <ion-slide>\n\n          <img src="assets/imgs/bib2.jpg">\n\n          </ion-slide>\n\n\n\n          <ion-slide>\n\n            <img src="assets/imgs/bib3.jpg">\n\n            </ion-slide>\n\n\n\n            <ion-slide>\n\n              <img src="assets/imgs/bib4.jpg">\n\n              </ion-slide>\n\n     </ion-slides>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Missão\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      A Biblioteca do Colégio Diocesano tem por missão ser um espaço de estudo e construção do conhecimento,\n\n      a fim de\n\n      cooperar com a dinâmica da escola, despertar o interesse intelectual, favorecer o enriquecimento cultural e\n\n      incentivar\n\n      o hábito da leitura.\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Localização\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Localização: Rua 13 de Maio, 2° piso<br> Ramal 442<br> Horário de funcionamento: de 8h às 18h, de segunda à sexta\n\n      e\n\n      aos sábados, das 8h às 12h<br> Bibliotecária Bruna Dayane <br> E-mail bibliotecaria@diocesano.g12.br<br>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Serviços\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Acervo; Espaço de estudo em grupo e cabines individuais; Projetos literários; Acesso à Internet; Serviço de\n\n      empréstimo e\n\n      devolução de exemplares. Cadastro: pai ou responsável deverá comparecer à biblioteca para realizar o cadastro do\n\n      aluno,\n\n      portando o documento de identificação. Empréstimo é efetuado por todos os funcionários da Biblioteca através do\n\n      sistema.\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Serviço de empréstimo\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      O aluno poderá solicitar o empréstimo de até dois exemplares conforme o prazo de devolução para cada tipo de\n\n      acervo:<br> Revista\n\n      - 2 dias;<br> Acervo Geral - 5 dias;<br> Acervo Geral(Piauí)- 10 dias;<br> Literatura - 10 dias; Literatura\n\n      Piauiense-10\n\n      dias;\n\n      <br> Braile - 10 dias;<br> Caso a devolução não seja realizada na data prevista, será gerada uma multa para cada\n\n      exemplar\n\n      no valor de R$3,00 por dia.<br>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Sala de estudo em grupo\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Para o uso da sala de estudo em grupo, o agendamento deverá ser realizado com 24 horas de antecedência, por grupo\n\n      de no mínimo\n\n      3 alunos e no máximo 8 alunos, na sala da Coordenação, nos horários de 8h10 às 10h10 e de 10h20 às 12h20 para o\n\n      turno\n\n      da manhã, e das 14h às 15h50 e das 16h às 17h50 pela tarde, de segunda a sexta.<br> O aluno deverá estar vestindo\n\n      o fardamento completo e cumprir o mesmo regulamento do manual do aluno. </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-header>\n\n    <ion-navbar>\n\n      <ion-title>Home</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n    \n\n  <div id="fb-root"></div>\n\n  <script>\n\n    window.fbAsyncInit = function() {\n\n      FB.init({\n\n        appId      : \'{your-app-id}\',\n\n        cookie     : true,\n\n        xfbml      : true,\n\n        version    : \'{api-version}\'\n\n      });\n\n        \n\n      FB.AppEvents.logPageView();   \n\n        \n\n    };\n\n  \n\n    (function(d, s, id){\n\n       var js, fjs = d.getElementsByTagName(s)[0];\n\n       if (d.getElementById(id)) {return;}\n\n       js = d.createElement(s); js.id = id;\n\n       js.src = "https://connect.facebook.net/en_US/sdk.js";\n\n       fjs.parentNode.insertBefore(js, fjs);\n\n     }(document, \'script\', \'facebook-jssdk\'));\n\n  </script>\n\n  \n\n\n\n  \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tutorial; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pdfjs_dist_webpack_js__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pdfjs_dist_webpack_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pdfjs_dist_webpack_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var tutorial = /** @class */ (function () {
    function tutorial(navCtrl) {
        this.navCtrl = navCtrl;
        this.PDFJSViewer = __WEBPACK_IMPORTED_MODULE_2_pdfjs_dist_webpack_js__;
        this.pageContainerUnique = {
            width: 0,
            height: 0,
            element: null,
            canvas: null,
            textContainer: null,
            canvasWrapper: null
        };
        console.log(this.PDFJSViewer);
    }
    tutorial.prototype.ionViewDidLoad = function () {
        this.pageContainerUnique.element = this.pageContainerRef.nativeElement;
        this.pageContainerUnique.canvasWrapper = this.canvasWrapperRef.nativeElement;
        this.pageContainerUnique.canvas = this.canvasRef.nativeElement;
        this.pageContainerUnique.textContainer = this.textContainerRef.nativeElement;
        this.loadPdf('assets/tutorial.pdf');
    };
    tutorial.prototype.loadPdf = function (pdfPath) {
        var _this = this;
        return this.PDFJSViewer.getDocument(pdfPath)
            .then(function (pdf) {
            _this.pdfDocument = pdf;
            console.log("pdf loaded:");
            console.dir(_this.pdfDocument);
            return _this.loadPage();
        }).then(function (pdfPage) {
            console.dir(pdfPage);
        }).catch(function (e) {
            console.error(e);
            return false;
        });
    };
    tutorial.prototype.loadPage = function (pageNum) {
        var _this = this;
        if (pageNum === void 0) { pageNum = 7; }
        var pdfPage;
        return this.pdfDocument.getPage(pageNum).then(function (thisPage) {
            pdfPage = thisPage;
            return _this.renderOnePage(pdfPage);
        }).then(function () {
            return pdfPage;
        });
    }; // loadpage()
    tutorial.prototype.renderOnePage = function (pdfPage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var textContainer, canvas, wrapper, canvasContext, page, viewport, canvasWidth, canvasHeight, renderTask, container;
            return __generator(this, function (_a) {
                page = this.pageContainerUnique.element;
                textContainer = this.pageContainerUnique.textContainer;
                canvas = this.pageContainerUnique.canvas;
                wrapper = this.pageContainerUnique.canvasWrapper;
                canvasContext = canvas.getContext('2d');
                canvasContext.imageSmoothingEnabled = false;
                canvasContext.webkitImageSmoothingEnabled = false;
                canvasContext.mozImageSmoothingEnabled = false;
                canvasContext.oImageSmoothingEnabled = false;
                viewport = pdfPage.getViewport(1);
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                page.style.width = viewport.width + "px";
                page.style.height = viewport.height + "px";
                wrapper.style.width = viewport.width + "px";
                wrapper.style.height = viewport.height + "px";
                textContainer.style.width = viewport.width + "px";
                textContainer.style.height = viewport.height + "px";
                //fix for 4K
                if (window.devicePixelRatio > 1) {
                    canvasWidth = canvas.width;
                    canvasHeight = canvas.height;
                    canvas.width = canvasWidth * window.devicePixelRatio;
                    canvas.height = canvasHeight * window.devicePixelRatio;
                    canvas.style.width = canvasWidth + "px";
                    canvas.style.height = canvasHeight + "px";
                    canvasContext.scale(window.devicePixelRatio, window.devicePixelRatio);
                }
                renderTask = pdfPage.render({
                    canvasContext: canvasContext,
                    viewport: viewport
                });
                container = textContainer;
                return [2 /*return*/, renderTask.then(function () {
                        //console.error("I WORK JUST UNTIL HERE");
                        return pdfPage.getTextContent();
                    }).then(function (textContent) {
                        var textLayer;
                        textLayer = _this.pageContainerUnique.textContainer;
                        while (textLayer.lastChild) {
                            textLayer.removeChild(textLayer.lastChild);
                        }
                        _this.PDFJSViewer.renderTextLayer({
                            textContent: textContent,
                            container: container,
                            viewport: viewport,
                            textDivs: []
                        });
                        return true;
                    })];
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pageContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], tutorial.prototype, "pageContainerRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('viewer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], tutorial.prototype, "viewerRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('canvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], tutorial.prototype, "canvasRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('canvasWrapper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], tutorial.prototype, "canvasWrapperRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('textContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], tutorial.prototype, "textContainerRef", void 0);
    tutorial = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\tutorial\tutorial.html"*/'<ion-header>\n  <ion-navbar color="light">\n    <button ion-button menuToggle="left" left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n    <button ion-button menuToggle="right" right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-content">\n  <ion-content padding>\n    <div #viewerContainer\n         class="viewer-container">\n        <div #viewer\n             class="viewer">\n            <ng-container #pagesContainer>\n                <div #pageContainer\n                     class="page"\n                     [style.width.px]="pageContainerUnique.width"\n                     [style.height.px]="pageContainerUnique.height">\n\n                    <div class="canvas-wrapper"\n                         #canvasWrapper>\n                        <canvas class="page-canvas"\n                                #canvas></canvas>\n\n                    </div>\n                    <div #textContainer\n                         class="text-layer selectable">\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\tutorial\tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], tutorial);
    return tutorial;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Timeline = /** @class */ (function () {
    function Timeline(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            {
                title: 'Homero',
                content: "assets/timelineimgs/homero.jpg",
                text: "Poeta grego e \u201Cpai espiritual\u201D da Gr\u00E9cia antiga, que por meio de seus \u00E9picos \u201CIl\u00EDada\u201D e \u201COdisseia\u201D lan\u00E7ou as bases da cultura Grega.",
                icon: 'calendar',
                time: { title: 'VIII aC' }
            },
            {
                title: 'Hesíodo',
                text: "Poeta grego de \u201CTeogonia\u201D e \u201CO trabalho e os dias\u201D, obras fundamentais para a consolida\u00E7\u00E3o da religi\u00E3o mitol\u00F3gica grega.",
                content: "assets/timelineimgs/hesiodo.png",
                icon: 'calendar',
                time: { title: 'VIII aC' }
            },
            {
                title: 'Esopo',
                content: "assets/timelineimgs/esopo.jpg",
                text: 'Grego criador do gênero das fábulas, como “A formiga e a cigarra”, “A raposa e as uvas”, “A lebre e a tartaruga”, entre outras.',
                icon: 'calendar',
                time: { title: 'VII aC' }
            },
            {
                title: 'Bíblia',
                content: "assets/timelineimgs/testamento.jpg",
                text: 'Obra que é uma compilação de 46 livros considerados divinos para o Judaísmo e o Cristianismo. Trata-se das leis de Deus, de história (tendo como mote o povo hebreu), sabedoria e profecias. A Igreja Católica utiliza a versão “Septuaginta”.',
                icon: 'calendar',
                time: { title: 'VI aC' }
            },
            {
                title: 'Píndaro',
                content: "assets/timelineimgs/pindaro.jpg",
                text: 'Poeta grego que alcançou grande fama escrevendo poemas líricos em todas as suas formas.',
                icon: 'calendar',
                time: { title: 'VI aC' }
            },
            {
                title: 'Ésquilo',
                content: "assets/timelineimgs/esquilo.jpg",
                text: 'Dramaturgo grego, pai da “tragédia”. Escreveu “Prometeu acorrentado”, “as suplicantes”, “Sete contra Tebas”, “Oresteia” entre outras.',
                icon: 'calendar',
                time: { title: '472 aC' }
            },
            {
                title: 'Sófocles',
                content: "assets/timelineimgs/sofocles.jpg",
                text: 'Dramaturgo grego, grande escritor de tragédias como “Antígona”, “Édipo Rei” e “Filoctetes”.',
                icon: 'calendar',
                time: { title: '446 aC' }
            },
            {
                title: 'Eurípedes',
                content: "assets/timelineimgs/euripedes.jpg",
                text: 'Poeta trágico grego, completa a tríade com Ésquilo e Sófocles, sendo o mais jovem dos três grandes expoentes da tragédia grega clássica. Autor, dentre outras, de “Medeia”, “Electra” e “As troianas”.',
                icon: 'calendar',
                time: { title: '438 aC' }
            },
            {
                title: 'Aristófanes',
                content: "assets/timelineimgs/aristofanes.jpg",
                text: 'Dramaturgo grego e maior representante da comédia antiga. Escreveu “As vespas”, “Lisístrata” e “As nuvens”, e nesta última, apesar de ótima comédia, critica injustamente Sócrates, seu contemporâneo.',
                icon: 'calendar',
                time: { title: '425 aC' }
            },
            {
                title: 'Calímaco',
                content: "assets/timelineimgs/calimaco.jpg",
                text: 'Poeta, bibliotecário, gramático e mitógrafo grego. Notório por ter incrivelmente escrito mais de 800 obras, das quais apenas uma mínima parte chegou a nós, e por ter sido o segundo diretor da Biblioteca de Alexandria, depois de Zenódoto de Éfeso. Seus poemas influenciaram Ovídio.',
                icon: 'calendar',
                time: { title: 'III aC' }
            },
            {
                title: 'Teócrito',
                content: "assets/timelineimgs/teocrito.jpg",
                text: 'Poeta grego de maior destaque no período helenístico. Fundador da poesia bucólica e teve grande influência sobre Virgílio.',
                icon: 'calendar',
                time: { title: 'III aC' }
            },
            {
                title: 'Plauto',
                content: "assets/timelineimgs/plauto.jpg",
                text: 'Maior dramaturgo romano. Adaptou o estilo das peças gregas para o latim. Grande influência de Shakespeare, e seus personagens exercem influência até hoje.',
                icon: 'calendar',
                time: { title: '205 aC' }
            },
            {
                title: 'Terêncio',
                content: "assets/timelineimgs/terencio.jpg",
                text: 'Comediógrafo romano, suas peças foram muito apreciadas tardiamente, na Idade Média e na Renascença. Seu adágio “sou um homem: nada do que é humano me é estranho” tornou-se justamente célebre.',
                icon: 'calendar',
                time: { title: 'II aC' }
            },
            {
                title: 'Catulo',
                content: "assets/timelineimgs/catulo.jpg",
                text: 'Poeta romano que utilizou linguagem coloquial e temas considerados “menores”. É membro do círculo dos “poetas novos” que abandonaram o estilo épico.',
                icon: 'calendar',
                time: { title: 'I aC' }
            },
            {
                title: 'Varrão',
                content: "assets/timelineimgs/varrao.jpg",
                text: 'Maior erudito romano. Escreveu mais de 500 obras filosóficas, teológicas e científicas, das quais quase nada chegou a nós. Apesar de não ser um literato, escreveu também sobre a língua latina e sua importância cultural justifica a menção.',
                icon: 'calendar',
                time: { title: 'I aC' }
            },
            {
                title: 'Cícero',
                content: "assets/timelineimgs/cicero.jpg",
                text: 'Orador, escritor, filósofo, político e advogado. Talvez o maior nome da cultura romana. Seus discursos, cartas e panegíricos se tornaram célebres, e foi o grande disseminador da filosofia grega entre os romanos. Segundo Michael Grant, "a influência de Cícero sobre a história da literatura e das ideias europeias em muito excede a de qualquer outro escritor em prosa de qualquer língua".',
                icon: 'calendar',
                time: { title: '81 aC' }
            },
            {
                title: 'Virgílio',
                content: "assets/timelineimgs/virgilio.jpg",
                text: 'Maior poeta romano. Autor do clássico “Eneida”, o épico nacional de Roma por excelência. Base fundamental para “Os Lusíadas”, de Camões.',
                icon: 'calendar',
                time: { title: '42 aC' }
            },
            {
                title: 'Horácio',
                content: "assets/timelineimgs/horacio.jpg",
                text: 'Poeta lírico e satírico romano, além de filósofo epicurista. É conhecido por ser um dos maiores poetas da Roma Antiga. Escreveu sátiras, odes, epístolas e iambis.',
                icon: 'calendar',
                time: { title: '35 aC' }
            },
            {
                title: 'Ovídio',
                content: "assets/timelineimgs/ovidio.jpg",
                text: 'Poeta romano mais conhecido como o autor de “Heróides”, “Amores” e “Ars amatoira ”, três grandes coleções de poesia erótica, e “Metamorfose”, um poema mitológico. É tradicionalmente colocado junto a Virgílio e Horácio como o triunvirato canônico da poesia latina. Será curiosamente o autor latino mais lido no século XII.',
                icon: 'calendar',
                time: { title: '19 aC' }
            },
            {
                title: 'Sêneca',
                content: "assets/timelineimgs/seneca.jpg",
                text: 'Filósofo estoico, dramaturgo de sucesso, estadista famoso e exemplo moral. Dante coloca-o entre os sumos escritores e heróis antigos. Sua obra mais importante é “Epístolas morais”, o qual sugere uma fraternidade universal que se aproxima de ideais cristãos.',
                icon: 'calendar',
                time: { title: 'sec I' }
            },
            {
                title: 'Estácio',
                content: "assets/timelineimgs/estacio.jpg",
                text: 'Conhecido principalmente por seu poema épico, “Tebaida”, que narra o conflito entre os filhos de Édipo pelo trono de Tebas. Estácio foi um aristocrata amante das letras e da filosofia. Ousado, foi o primeiro poeta romano que descreveu longamente em seus poemas outras obras de arte e arquitetura, tendo, portanto, grande valor para a reconstrução histórica.',
                icon: 'calendar',
                time: { title: 'sec I' }
            },
            {
                title: 'Luciano de Samostata',
                content: "assets/timelineimgs/luciano.jpg",
                text: 'Grande escritor romano, de origem semita, famoso por seus diálogos satíricos. Satirizou e criticou acidamente os costumes e a sociedade da época e exerceu, a partir da Renascença, significativa influência em escritores ocidentais do porte de Erasmo, Rabelais, Quevedo, Swift, Voltaire e Machado de Assis. Sua obra “Uma história verdadeira” é precursora da ficção científica.',
                icon: 'calendar',
                time: { title: 'sec II' }
            },
            {
                title: 'Tertuliano',
                content: "assets/timelineimgs/tertuliano.jpg",
                text: 'Um dos principais membros da patrística latina. Escritor de fôlego e um dos pais e ápices do gênero apologético. Escreveu também muitas obras no estilo de “embates” teológicos e polêmicas.',
                icon: 'calendar',
                time: { title: 'sec II' }
            },
            {
                title: 'São Jerônimo',
                content: "assets/timelineimgs/jeronimo.jpg",
                text: 'Santo erudito, notório por sua tradução da Bíblia para o latim – a “Vulgata”. Possui uma imensa obra histórica, biográfica e epistolar.',
                icon: 'calendar',
                time: { title: 'sec IV' }
            },
            {
                title: 'Santo Ambrósio',
                content: "assets/timelineimgs/ambrosio.jpg",
                text: 'Santo que batizou Santo Agostinho. Um dos quatro doutores originais da Igreja, que se notabiliza na história da literatura por seus hinos e, sobretudo, pela invenção da rima.',
                icon: 'calendar',
                time: { title: 'sec IV' }
            },
            {
                title: 'Santo Agostinho',
                content: "assets/timelineimgs/agostinho.jpg",
                text: 'Maior gênio filosófico da Igreja. Sua obra “Confissões” foi modelo para muitas abordagens posteriores do gênero autobiográfico e para o aprofundamento psicológico de personagens.',
                icon: 'calendar',
                time: { title: 'sec IV' }
            },
            {
                title: 'Claudiano',
                content: "assets/timelineimgs/claudiano.jpg",
                text: 'Poeta romano da corte. Destacou-se por seus versos históricos e políticos, bem como por seus panegíricos.',
                icon: 'calendar',
                time: { title: 'sec IV' }
            },
            {
                title: 'Prudêncio',
                content: "assets/timelineimgs/prudencio.jpg",
                text: 'É considerado o maior poeta romano cristão da Antiguidade tardia. A poesia de Prudêncio está influenciada por autores antigos cristãos, como Tertuliano e Santo Ambrósio, assim como pela Bíblia e as “Atas dos mártires”. Também tomou por modelo literário poetas pagãos, como Virgílio. Sua obra “Psychomachia” foi importante fonte de inspiração para a literatura alegórica da Idade Média e até para modernos escritores como Jonathan Swift.',
                icon: 'calendar',
                time: { title: 'séc. IV' }
            },
            {
                title: 'Efrém da Síria',
                content: "assets/timelineimgs/efrem.jpg",
                text: 'Doutor da Igreja, prolífico autor de mais de 3 milhões de versos. Imensa variedade de poemas, sermões e, sobretudo, hinos. Esses hinos estão cheios de um imaginário rico e poético baseados em fontes bíblicas, nas tradições populares, em outras religiões e na filosofia.',
                icon: 'calendar',
                time: { title: 'séc IV' }
            },
            {
                title: 'Agathias',
                content: "assets/timelineimgs/agathias.jpg",
                text: 'Poeta e historiador grego. Escreveu “Daphniaca”, uma coleção de poemas curtos em hexâmetros sobre amor e romance em nove livros. Também escreveu mais de cem epigramas. Suas obras certamente fazem parte da antologia bizantina.',
                icon: 'calendar',
                time: { title: 'séc. VI' }
            },
            {
                title: 'João Malala',
                content: "assets/timelineimgs/malalas.jpg",
                text: 'Um dos primeiros cronistas da história, João Malalas foi artífice bizantino da linguagem coloquial e escrevia suas observações históricas e de viagens numa maneira informal, visando ao leitor comum. Por isso, atingiu grande popularidade.',
                icon: 'calendar',
                time: { title: '560' }
            },
            {
                title: 'André de Creta',
                content: "assets/timelineimgs/andre.jpg",
                text: 'Grande autor de hinos e criador de uma nova forma de poesia eclesiástica: “O grande Canon”.',
                icon: 'calendar',
                time: { title: 'sec VII' }
            },
            {
                title: 'João Damasceno',
                content: "assets/timelineimgs/damasceno.jpg",
                text: 'Monge ortodoxo, apologeta e também um dos criadores da poesia “Canon”.',
                icon: 'calendar',
                time: { title: 'sec VII' }
            },
            {
                title: 'Alcuíno de York',
                content: "assets/timelineimgs/alcuino.jpg",
                text: 'Maior erudito do Renascimento Carolíngio, lecionou por 15 anos na Catedral de York, onde criou uma das melhores bibliotecas da Europa e um dos maiores centros de saber. Conselheiro de Carlos Magno, dominou todas as 7 artes liberais e idealizou as primeiras escolas públicas.',
                icon: 'calendar',
                time: { title: 'sec VIII' }
            },
            {
                title: 'Beda',
                content: "assets/timelineimgs/beda.jpg",
                text: 'Historiador, linguista, tradutor e teólogo, o Venerável Beda deu aula de poesia e gramática, destacando-se nessa área pela obra “Da arte métrica”, baseada nas contribuições de Élio Donato e Sérvio. Esse livro se tornou o texto padrão para o ensino do verso latino por muitos séculos. Beda também escreveu sobre retórica bíblica.',
                icon: 'calendar',
                time: { title: 'sec VIII' }
            },
            {
                title: 'Cynewulf',
                content: "assets/timelineimgs/cynewulf.jpg",
                text: 'É considerado uma das figuras proeminentes da poesia cristã anglo-saxônica. Alguns de seus famosos textos são “O livro de Exeter” e “O livro Vercelli”. Tolkien escreveu sobre ele: "Havia algo muito remoto, estranho e belo por trás dessas palavras, se eu pudesse compreendê-lo”.',
                icon: 'calendar',
                time: { title: 'sec IX' }
            },
            {
                title: 'Fócio (“Myrobiblion”)',
                content: "assets/timelineimgs/photios.jpg",
                text: 'Patriarca de Constantinopla, Fócio foi um dos mais cultos homens de sua época e mereceu a sua fama por causa de seus conflitos eclesiásticos, seu intelecto e e suas obras literárias. Provavelmente, o maior acadêmico de seu tempo, Fócio é um dos responsáveis pela incorporação do Humanismo na ortodoxia bizantina como um elemento básico da consciência nacional. Sua obra mais conhecida é “Myriobiblion”, uma coleção de excertos e resumos de 280 volumes de autores clássicos.',
                icon: 'calendar',
                time: { title: 'séc. IX' }
            },
            {
                title: 'Beowulf (anônimo)',
                content: "assets/timelineimgs/beowolf.jpg",
                text: 'Poema épico, marco da literatura medieval, escrito em 3.182 linhas e o mais longo do pequeno conjunto da literatura anglo-saxã. Aborda eventuais acontecimentos e personagens escandinavos do século VI, tendo como figura central o lendário “Beowulf”. Acredita-se que o poema original possa ter sido escrito antes do século XI. O texto é um registro importante dos valores germânicos pagãos.',
                icon: 'calendar',
                time: { title: '1000' }
            },
            {
                title: 'Godofredo de Monmouth',
                content: "assets/timelineimgs/godofredo.jpg",
                text: 'Famoso por ter escrito “Historia regum Britanniae”, a mais antiga referência à lenda do rei Arthur e do rei Lear, sucesso à época.',
                icon: 'calendar',
                time: { title: '1130' }
            },
            {
                title: 'Prodromos',
                content: "assets/timelineimgs/teodoro.jpg",
                text: 'Foi um escritor bizantino, conhecido por sua obra em prosa e poesia, que escreveu poemas ocasionais, peças literárias,  “Etiópica de Heliodoro de Emesa” e uma novela em verso chamada “Rodante e Dosicles”.',
                icon: 'calendar',
                time: { title: 'sec XII' }
            },
            {
                title: 'Michel Psellos',
                content: "assets/timelineimgs/michel.jpg",
                text: 'Monge bizantino, brilhante erudito, historiador, filósofo e político. Escreveu crônicas, poemas didáticos sobre gramática e retórica, além de tratados historiográficos e científicos em áreas como astronomia, medicina, música, jurisprudência, física e laografia.',
                icon: 'calendar',
                time: { title: 'sec XII' }
            },
            {
                title: 'Allain de Lille',
                content: "assets/timelineimgs/allain.jpg",
                text: 'Teólogo, poeta genial e eruditíssimo. Dois poemas já lhe conferem o direito a um lugar de destaque na literatura latina da Idade Média; um deles, o “De planctu naturae”, é uma sátira genial sobre os vícios da humanidade. Também criou a alegoria da conjugação gramatical, inspirando Jean de Meung, que escreveu “Romance da Rosa”.',
                icon: 'calendar',
                time: { title: 'sec XII' }
            },
            {
                title: 'Poema del Cid (anônimo)',
                content: "assets/timelineimgs/cid.jpg",
                text: 'Peça culminante da literatura medieval épica castelhana e o mais antigo poema épico espanhol completo existente. O poema narra a história do nobre castelhano Rodrigo Diaz de Vivar, herói da reconquista da Espanha contra os mouros. Esses poemas eram cantados em público por menestréis.',
                icon: 'calendar',
                time: { title: '1140' }
            },
            {
                title: 'Canção dos Nibelungos (anônimo)',
                content: "assets/timelineimgs/nibelungos.jpg",
                text: 'Poema épico escrito na Idade Média chamado de Saga dos Nibelungos.',
                icon: 'calendar',
                time: { title: '1180' }
            },
            {
                title: 'Snorri Sturluson)',
                content: "assets/timelineimgs/snorri.jpg",
                text: 'Autor da chamada “Edda em prosa”, manual de poesia escáldica e uma compilação de lendas, que é a principal fonte literária de mitologia nórdica, e ainda da “Heimskringla”, uma crônica dos reis noruegueses.',
                icon: 'calendar',
                time: { title: 'sec XIII' }
            },
            {
                title: 'Saxão, o Gramatico',
                content: "assets/timelineimgs/saxao.jpg",
                text: 'Livro escrito em meados dos séculos XII e XIII pelo escritor e historiador dinamarquês medieval Saxo Grammaticus sobre a história da Dinamarca.',
                icon: 'calendar',
                time: { title: 'sec XIII' }
            },
            {
                title: 'Paio Soares de Taveirós',
                content: "assets/timelineimgs/paio.jpg",
                text: 'Escreveu o texto “Canção da Ribeirinha”, uma cantiga de amor e considerado o mais antigo texto escrito em galego-português. É o marco inicial do Trovadorismo.',
                icon: 'calendar',
                time: { title: '1198' }
            },
            {
                title: 'Dom Dinis',
                content: "assets/timelineimgs/domdinis.jpg",
                text: 'Foi um excelente poeta, e sua reprodução registra 138 cantigas no período do Trovadorismo.',
                icon: 'calendar',
                time: { title: 'sec XIII' }
            },
            {
                title: 'Fernão Lopes',
                content: "assets/timelineimgs/fernao.jpg",
                text: 'Cronista considerado iniciador da historiografia portuguesa no período do Humanismo.',
                icon: 'calendar',
                time: { title: 'sec XV' }
            },
            {
                title: 'Garcia de Resende',
                content: "assets/timelineimgs/garcia.jpg",
                text: 'Responsável por organizar a poesia palaciana, com toda a produção poética ligada ao “Cancioneiro Geral”.',
                icon: 'calendar',
                time: { title: 'sec XV' }
            },
            {
                title: 'Gil Vicente',
                content: "assets/timelineimgs/gilvicente.jpg",
                text: 'Teatrólogo que desenvolveu o teatro popular no período do Humanismo.',
                icon: 'calendar',
                time: { title: 'sec XVI' }
            },
            {
                title: 'Luís Vaz de Camões ',
                content: "assets/timelineimgs/luizcamoes.jpg",
                text: 'Grande poeta lírico português do Classicismo, que escreveu o maior poema épico chamado “Os Lusíadas”.',
                icon: 'calendar',
                time: { title: 'sec XVII' }
            },
            {
                title: 'Pero Vaz de Caminha',
                content: "assets/timelineimgs/perovaz.jpg",
                text: 'Escrivão da armada de Cabral, escreveu a “Carta de Pero Vaz de Caminha”, documento de valor histórico e de literatura informativa no período das Grandes Navegações.',
                icon: 'calendar',
                time: { title: 'sec XVII' }
            },
            {
                title: 'José de Anchieta ',
                content: "assets/timelineimgs/joseachieta.jpg",
                text: 'Escreveu a primeira gramática tupi-guarani, poesias como “Poema à virgem”, autos como “O Bem e o Mal, o Anjo e o Diabo”, no período barroco.',
                icon: 'calendar',
                time: { title: 'sec XVII' }
            },
            {
                title: 'Bento Teixeira',
                content: "assets/timelineimgs/bentoteixeira.jpg",
                text: 'Escreveu um poema épico chamado “Prosopopeia”, que introduziu o modelo da poesia camoniana na poesia no período barroco.',
                icon: 'calendar',
                time: { title: 'sec XVII' }
            },
            {
                title: 'Padre Antônio VIeira',
                content: "assets/timelineimgs/padreantoniovieira.jpg",
                text: 'Escreveu poesias, cartas e sermões, como “Sermões da sexagésima”, no período barroco.',
                icon: 'calendar',
                time: { title: 'sec XVII' }
            },
            {
                title: 'Gregório de Matos',
                content: "assets/timelineimgs/gregoriomatos.jpg",
                text: 'Conhecido como Boca do inferno, é considerado o primeiro poeta brasileiro. Escreveu poesias satíricas, religiosas e líricas, como “Décimas”, no período barroco.',
                icon: 'calendar',
                time: { title: 'sec XVII' }
            },
            {
                title: 'Goethe',
                content: "assets/timelineimgs/goethe.jpg",
                text: 'Um dos mais importantes autores do Romantismo alemão, com o romance “Os sofrimentos do jovem Werther”.',
                icon: 'calendar',
                time: { title: 'sec XVII' }
            },
            {
                title: 'Lord Byron',
                content: "assets/timelineimgs/LordByron.jpg",
                text: 'Poeta britânico importante no Romantismo e escreveu o livro de poesias “Horas de ócio” e o canto “Peregrinação de Childe Harold”.',
                icon: 'calendar',
                time: { title: 'sec XVII' }
            },
            {
                title: 'Alfred Louis Charles de Musset',
                content: "assets/timelineimgs/alfred.jpg",
                text: 'Alfred Louis Charles de Musset foi um poeta, novelista e dramaturgo francês do século XIX, um dos expoentes mais conhecidos do período literário conhecido por  Romantismo.',
                icon: 'calendar',
                time: { title: '1810' }
            },
            {
                title: 'Claudio Manuel da Costa',
                content: "assets/timelineimgs/claudiomanuel.png",
                text: 'Escreveu seu livro de poesias “Obras”, um dos marcos históricos que deu início ao Arcadismo no Brasil.',
                icon: 'calendar',
                time: { title: 'sec XVIII' }
            },
            {
                title: 'Tomás Antônio Gonzaga',
                content: "assets/timelineimgs/tomasantonio.jpg",
                text: 'Escreveu a obra “Marília de Dirceu” e “Cartas Chilenas”, sendo um dos maiores poetas do Arcadismo.”, sendo um dos maiores poetas do Arcadismo.',
                icon: 'calendar',
                time: { title: 'sec XVIII' }
            },
            {
                title: 'José de Santa Rita Durão ',
                content: "assets/timelineimgs/josedesantarita.jpg",
                text: 'Escreveu seu poema épico do descobrimento do Brasil chamado “Caramuru”.',
                icon: 'calendar',
                time: { title: 'sec XVIII' }
            },
            {
                title: 'Basílio da Gama',
                content: "assets/timelineimgs/basiliodagama.jpg",
                text: 'Patrono da cadeira n°4 da Academia Brasileira de Letras e escreveu o poema épico “Uraguai”.',
                icon: 'calendar',
                time: { title: 'sec XVIII' }
            },
            {
                title: 'Walter Scott',
                content: "assets/timelineimgs/WalterScott.jpg",
                text: 'Escritor escocês de romances e poesias, tornando-se um destaque na literatura no romance histórico. Sua obra mais conhecida é “Ivanhoé”.',
                icon: 'calendar',
                time: { title: 'sec XIX' }
            },
            {
                title: 'Gonçalves de Magalhães',
                content: "assets/timelineimgs/Goncalves.jpg",
                text: 'Publicou na França, a revista brasileira Niterói, lançou o livro de poesias religiosas intitulado “Suspiros poéticos e saudades” e escreveu também poesia indianista, como o poema épico “A Confederação dos Tamoios”, considerado como obra introdutória ao Romantismo no Brasil.',
                icon: 'calendar',
                time: { title: 'sec XIX' }
            },
        ];
    }
    Timeline.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimelinePage');
    };
    Timeline = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timeline',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\timeline\timeline.html"*/'<ion-header>\n  <ion-navbar color="light">\n    <button ion-button menuToggle="left" left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n    <button ion-button menuToggle="right" right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-content">\n  <ion-card>\n    <timeline endIcon="call">\n      <timeline-item *ngFor="let item of items">\n        <timeline-time [time]="item.time"></timeline-time>\n        <ion-icon [name]="item.icon"></ion-icon>\n        <ion-card width="400">\n          <ion-card-header align="center">\n           {{item.title}}\n          </ion-card-header>\n\n          <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <img width="100%" height="100%" src="{{item.content}}">\n                </ion-col>\n\n                <ion-col align="justify">\n                    {{item.text}}\n                   \n                                      \n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n\n        </ion-card>\n      </timeline-item>\n    </timeline>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\timeline\timeline.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Timeline);
    return Timeline;
}());

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paradidaticos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Paradidaticos = /** @class */ (function () {
    function Paradidaticos(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        var localData = http.get('assets/paradidaticos.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    Paradidaticos.prototype.openModal = function (name, author, html, imgsrc) {
        var Title = name;
        var Author = author;
        var Summary = html;
        var SRC = imgsrc;
        var BliUrl = "https://portal.asav.org.br/Corpore.Net/Main.aspx?ActionID=BibConsultaInternaActionWeb&SelectedMenuIDKey=ItemPesquisarReservar";
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: Title,
            html: Author + "<br>" + "<br>" + Summary + "<br>",
            imageUrl: SRC,
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: "<p>Biblioteca</p>",
            confirmButtonColor: '#3085d6',
            cancelButtonText: "<p>Ok</p>",
            cancelButtonColor: '#3085d6',
            focusConfirm: false,
            backdrop: true,
            grow: false,
            heightAuto: true,
            imageWidth: 400,
            width: 600,
        }).then(function (result) {
            if (result.value) {
                window.open(BliUrl, '_blank');
            }
        });
    };
    Paradidaticos.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    Paradidaticos.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    Paradidaticos = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paradidaticos',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\paradidaticos\paradidaticos.html"*/'<ion-header>\n  <ion-navbar color="light">\n    <button ion-button menuToggle="left" left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n    <button ion-button menuToggle="right" right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-content">\n  <ion-card>\n    <ion-list class="accordion-list">\n      <!-- First Level -->\n      <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n        <!-- Toggle Button -->\n        <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n          <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n          <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n          {{ item.name }}\n        </button>\n\n        <ion-card *ngIf="item.children && item.open" no-lines>\n          <!-- Second Level -->\n          <!-- Toggle Button -->\n          <!-- Direct Add Button as Fallback -->\n            <ion-grid>\n              <ion-row>\n                <ion-col col-6 col-md-4 col-xl-3  *ngFor="let child of item.children; let j = index" no-lines no-padding class="child-item">\n                  <ion-card *ngIf="!child.children">\n                    <img (click)="openModal(child.name,  child.author,child.information, child.src)" src=\'{{child.src}}\'>\n                  </ion-card>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n        \n\n        </ion-card>\n      </ion-list-header>\n    </ion-list>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\paradidaticos\paradidaticos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], Paradidaticos);
    return Paradidaticos;
}());

//# sourceMappingURL=paradidaticos.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Projetos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Projetos = /** @class */ (function () {
    function Projetos(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        var localData = http.get('assets/projetos.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    Projetos.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    Projetos.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    Projetos.prototype.ngAfterViewInit = function () {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/all.js";
            if (d.getElementById(id)) {
                //if <script id="facebook-jssdk"> exists
                delete window.FB;
                fjs.parentNode.replaceChild(js, fjs);
            }
            else {
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, 'script', 'facebook-jssdk'));
    };
    Projetos = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-projetos',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\projetos\projetos.html"*/'<ion-header>\n\n    \n\n  <ion-navbar color="light">\n    <button ion-button menuToggle="left" left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n    <button ion-button menuToggle="right" right>\n      <ion-icon name="menu"></ion-icon>\n    </button> \n  </ion-navbar>\n</ion-header>\n\n<script>\n  window.fbAsyncInit = function() {\n    FB.init({\n      appId      : \'{your-app-id}\',\n      cookie     : true,\n      xfbml      : true,\n      version    : \'{api-version}\'\n    });\n      \n    FB.AppEvents.logPageView();   \n      \n  };\n\n  (function(d, s, id){\n     var js, fjs = d.getElementsByTagName(s)[0];\n     if (d.getElementById(id)) {return;}\n     js = d.createElement(s); js.id = id;\n     js.src = "https://connect.facebook.net/en_US/sdk.js";\n     fjs.parentNode.insertBefore(js, fjs);\n   }(document, \'script\', \'facebook-jssdk\'));\n</script>\n\n\n\n<ion-content class="main-content">\n  \n  <ion-card>\n    <ion-list class="accordion-list">\n      <!-- First Level -->\n      <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n        <!-- Toggle Button -->\n        <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n            \n          <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n          <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n          {{ item.name }}\n        </button>\n\n        <ion-list *ngIf="item.children && item.open" no-lines>\n          <!-- Second Level -->\n          <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n            <!-- Toggle Button -->\n            <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n              <ion-icon item-left name="arrow-forward" *ngIf="!child.open"></ion-icon>\n              <ion-icon item-left name="arrow-down" *ngIf="child.open"></ion-icon>\n              {{ child.name }}\n            </button>\n\n            <!-- Direct Add Button as Fallback -->\n            <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n              <h2>{{ child.name }}</h2>\n              <p>{{ child.information }}</p>\n              <ion-slides loop="true" slidesPerView="2">\n                <ion-slide *ngFor="let child of child.imgsrc; let k = index">\n                  <img src="{{ child.src }}"> \n                </ion-slide>\n                </ion-slides>\n            </ion-item>\n\n        \n\n          </ion-list-header>\n          \n      \n\n        </ion-list>\n      </ion-list-header>\n    </ion-list>\n  </ion-card>\n   \n \n\n \n    \n\n  \n  \n  \n  \n  \n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\projetos\projetos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], Projetos);
    return Projetos;
}());

//# sourceMappingURL=projetos.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feira; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Feira = /** @class */ (function () {
    function Feira(navCtrl) {
        this.navCtrl = navCtrl;
        this.feiras = "2019";
    }
    Feira = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feira',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\feira\feira.html"*/'<ion-header>\n  <ion-navbar color="light">\n    <button ion-button menuToggle="left" left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n    <button ion-button menuToggle="right" right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="main-content">\n\n  <ion-segment [(ngModel)]="feiras">\n    <ion-segment-button value="2018">\n      2018\n    </ion-segment-button>\n    <ion-segment-button value="2019">\n      2019\n    </ion-segment-button>\n    <!--<ion-segment-button value="2020">\n      2020\n    </ion-segment-button>-->\n  </ion-segment>\n\n\n  <div [ngSwitch]="feiras">\n\n    <div *ngSwitchCase="2018">\n      <ion-card>\n\n        <img class="banner" src="assets/imgs/banner-feira.jpg">\n\n      </ion-card>\n      <ion-card class="card-feira">\n        <ion-card-header class="main-text">\n          <h1> FEIRA LITERÁRIA 2018</h1>\n        </ion-card-header>\n\n        <ion-card-content class="main-text">\n          <br>\n          <p>A Feira Literária “Ler para pensar e construir...” visa estimular a leitura e produção literária e\n            artística\n            como\n            um todo dos alunos, contribuindo para a formação de cidadãos e leitores conscientes de sua origem e do\n            patrimônio\n            cultural brasileiro herdado. Por meio de eventos diferenciados e integrados que enfatizam a criatividade,\n            os\n            sonhos\n            e a fantasia, a feira oferece oportunidades para o desenvolvimento das competências de leitura e escrita.\n          </p>\n          <br>\n          <p>Neste ano de 2018, a Feira Literária homenageou a escritora Ruth Rocha, que, em 2017, completava 50 anos\n            de\n            carreira.\n            A justa homenagem se apoia na capacidade da autora introduzir para crianças com sutileza e humor problemas\n            de\n            cunho\n            social e políticos, tais como a injustiça estrutural, frequentemente inspirada no estilo de Monteiro\n            Lobato.\n          </p>\n          <br>\n          <p>Diversas vivências pedagógicas fornecidas em momentos e ambientes distintos tem por objetivo criar um\n            pequeno\n            complexo\n            cultural, onde cada leitor de mundo possa se familiarizar com a literatura infanto-juvenil e nela se sentir\n            reconhecido.\n            Ao contemplar neste formato os diferentes gêneros textuais, como narrativas, poemas, convites, teatro,\n            biografia,\n            memórias e fábulas, facilita-se a orientação para o prazer da leitura, para a percepção de quem descobre\n            ali\n            outros\n            lugares, outros tempos, outros jeitos de agir e de ser, outra ótica.</p>\n          <br>\n          <p>O Projeto Feira Literária é desenvolvido por todos os alunos do 2º ano EF à 3º série do Ensino Médio,\n            durante\n            o\n            mês de março e abril com culminância prevista para os dias 26, 27 e 28 de abril de 2018. Para tanto, serão\n            envolvidos\n            todos os professores, coordenadores pedagógicos, auxiliares de coordenação, bibliotecários e auxiliares de\n            turma.\n            As atividades propiciadas são: </p>\n          <br>\n          <p>Bate-papo com autores, contação de histórias, oficinas, exposição dialogada, exposição de HQ, leitura,\n            interpretação\n            e análise de textos previamente escolhidos, projeção de imagens dos personagens, músicas, cordéis,\n            produções\n            coletivas\n            e individuais de desenhos, exposição de trabalho em mural, tematização de vídeos, produção de varais\n            literários,\n            troca-troca de livros, dramatização, origami, dobraduras, apresentações musicais com ênfase literária,\n            visita à\n            biblioteca,\n            café literário, clube literário, preparação para a vida universitária e outras atividades.</p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-slides loop="true" slidesPerView="2">\n          <ion-slide>\n            <img class="banner" src="/assets/feiras/2018/ABERTURA DA FEIRA LITERÁRIA.jpg">\n          </ion-slide>\n          <ion-slide>\n            <img class="banner" src="/assets/feiras/2018/1.jpg">\n          </ion-slide>\n          <ion-slide>\n            <img class="banner" src="/assets/feiras/2018/2.jpg">\n          </ion-slide>\n          <ion-slide>\n            <img class="banner" src="/assets/feiras/2018/3.jpg">\n          </ion-slide>\n          <ion-slide>\n            <img class="banner" src="/assets/feiras/2018/4.jpg">\n          </ion-slide>\n          <ion-slide>\n            <img class="banner" src="/assets/feiras/2018/5.jpg">\n          </ion-slide>\n          <ion-slide>\n            <img class="banner" src="/assets/feiras/2018/6.jpg">\n          </ion-slide>\n        </ion-slides>\n      </ion-card>\n    </div>\n\n    <div *ngSwitchCase="2019">\n        <ion-card>\n\n          <img class="feira" src="assets/imgs/feira2019.jpg">\n    \n        </ion-card>\n\n         <ion-card class="card-feira">\n             <ion-card-header class="main-text">\n               <h1> FEIRA LITERÁRIA 2019</h1>\n            </ion-card-header>\n            <ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic 3 - Media Streaming\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n  <button (click)="startVideo()" ion-button icon-end>\n   Start Video\n  <ion-icon name="play"></ion-icon>\n</button>\n  <button (click)="startAudio()" ion-button color="secondary" icon-end>\n   Start Audio\n  <ion-icon name="musical-notes"></ion-icon>\n</button>\n \n</ion-content>\n            <ion-card-content class="main-text">\n                           \n              \n                <button (click)="startVideo()" ion-button icon-end>\n                 Start Video\n                <ion-icon name="play"></ion-icon>\n              </button>\n                \n               \n              \n            </ion-card-content>\n        \n          </ion-card>\n\n          \n    </div>\n\n  <!--  <div *ngSwitchCase="2020">\n        <ion-card>\n\n            <img class="banner" src="assets/imgs/banner-feira.jpg">\n    \n          </ion-card>\n          <ion-card class="card-feira">\n            <ion-card-header class="main-text">\n              <h1> FEIRA LITERÁRIA 2020</h1>\n            </ion-card-header>\n    \n            <ion-card-content class="main-text">\n              <br>\n              <p>A Feira Literária “Ler para pensar e construir...” visa estimular a leitura e produção literária e\n                artística\n                como\n                um todo dos alunos, contribuindo para a formação de cidadãos e leitores conscientes de sua origem e do\n                patrimônio\n                cultural brasileiro herdado. Por meio de eventos diferenciados e integrados que enfatizam a criatividade,\n                os\n                sonhos\n                e a fantasia, a feira oferece oportunidades para o desenvolvimento das competências de leitura e escrita.\n              </p>\n              <br>\n              <p>Neste ano de 2018, a Feira Literária homenageou a escritora Ruth Rocha, que, em 2017, completava 50 anos\n                de\n                carreira.\n                A justa homenagem se apoia na capacidade da autora introduzir para crianças com sutileza e humor problemas\n                de\n                cunho\n                social e políticos, tais como a injustiça estrutural, frequentemente inspirada no estilo de Monteiro\n                Lobato.\n              </p>\n              <br>\n              <p>Diversas vivências pedagógicas fornecidas em momentos e ambientes distintos tem por objetivo criar um\n                pequeno\n                complexo\n                cultural, onde cada leitor de mundo possa se familiarizar com a literatura infanto-juvenil e nela se sentir\n                reconhecido.\n                Ao contemplar neste formato os diferentes gêneros textuais, como narrativas, poemas, convites, teatro,\n                biografia,\n                memórias e fábulas, facilita-se a orientação para o prazer da leitura, para a percepção de quem descobre\n                ali\n                outros\n                lugares, outros tempos, outros jeitos de agir e de ser, outra ótica.</p>\n              <br>\n              <p>O Projeto Feira Literária é desenvolvido por todos os alunos do 2º ano EF à 3º série do Ensino Médio,\n                durante\n                o\n                mês de março e abril com culminância prevista para os dias 26, 27 e 28 de abril de 2018. Para tanto, serão\n                envolvidos\n                todos os professores, coordenadores pedagógicos, auxiliares de coordenação, bibliotecários e auxiliares de\n                turma.\n                As atividades propiciadas são: </p>\n              <br>\n              <p>Bate-papo com autores, contação de histórias, oficinas, exposição dialogada, exposição de HQ, leitura,\n                interpretação\n                e análise de textos previamente escolhidos, projeção de imagens dos personagens, músicas, cordéis,\n                produções\n                coletivas\n                e individuais de desenhos, exposição de trabalho em mural, tematização de vídeos, produção de varais\n                literários,\n                troca-troca de livros, dramatização, origami, dobraduras, apresentações musicais com ênfase literária,\n                visita à\n                biblioteca,\n                café literário, clube literário, preparação para a vida universitária e outras atividades.</p>\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n            <ion-slides loop="true" slidesPerView="2">\n              <ion-slide>\n                <img class="banner" src="/assets/feiras/2018/ABERTURA DA FEIRA LITERÁRIA.jpg">\n              </ion-slide>\n              <ion-slide>\n                <img class="banner" src="/assets/feiras/2018/BATE PAPO ATUALIDADES.jpg">\n              </ion-slide>\n              <ion-slide>\n                <img class="banner" src="/assets/feiras/2018/BATE PAPO LITERÁRIO 1.jpg">\n              </ion-slide>\n              <ion-slide>\n                <img class="banner" src="/assets/feiras/2018/BATE PAPO LITERÁRIO.jpg">\n              </ion-slide>\n              <ion-slide>\n                <img class="banner" src="/assets/feiras/2018/CAFÉ FILOSÓFICO.jpg">\n              </ion-slide>\n              <ion-slide>\n                <img class="banner" src="/assets/feiras/2018/ENTREI NA UNIVERSIDADE, E AGORA!.jpg">\n              </ion-slide>\n              <ion-slide>\n                <img class="banner" src="/assets/feiras/2018/OFICINA DE ESCRITA CRÔNICA.jpg">\n              </ion-slide>\n              <ion-slide>\n                <img class="banner" src="/assets/feiras/2018/Oficina de Fanzine.jpg">\n              </ion-slide>\n              <ion-slide>\n                <img class="banner" src="/assets/feiras/2018/QUIOSQUE LITERÁRIO -  POESIAS E ZINES.jpg">\n              </ion-slide>\n            </ion-slides>\n          </ion-card>\n    </div> -->\n\n  </div>\n  \n \n\n</ion-content>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\feira\feira.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Feira);
    return Feira;
}());

//# sourceMappingURL=feira.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bbonline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var bbonline = /** @class */ (function () {
    function bbonline(navCtrl) {
        this.navCtrl = navCtrl;
    }
    bbonline = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bbonline',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\bbonline\bbonline.html"*/'<ion-header>\n  <ion-navbar color="light">\n    <button ion-button menuToggle="left" left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n    <button ion-button menuToggle="right" right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-content">\n  <ion-card>\n\n\n      <ion-card>\n          <ion-card-header>\n              Bibliotecas online:\n            \n          </ion-card-header>\n\n          <ion-card-content>\n            Virtuais ou digitais que podem ser utilizadas como fonte de pesquisa para alunos da educação básica.\n            \n          </ion-card-content>\n        </ion-card>\n\n         \n      \n        <ion-card>\n          <ion-card-header>\n            \n          </ion-card-header>\n          <ion-card-content>\n              <a  href="#" onclick="window.open(\'http://www.kiddle.co/\', \'_system\', \'location=yes\'); return false;"> Kiddle:</a>\n              uma versão de seu famoso buscador (google) adaptada para crianças que promete protegê-las de conteúdo inadequado.\n          </ion-card-content>\n        </ion-card>\n      \n        <ion-card>\n            <ion-card-header>\n              \n            </ion-card-header>\n            <ion-card-content>\n                <a  href="#" onclick="window.open(\'https://escolakids.uol.com.br/\', \'_system\', \'location=yes\'); return false;"> Escola Kids:</a>\n                portal da UOL voltado ao ensino de diversas disciplinas com foco no ensino básico.\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card>\n              <ion-card-header>\n                \n              </ion-card-header>\n              <ion-card-content>\n                  <a  href="#" onclick="window.open(\'http://biblioteca.uepb.edu.br/\', \'_system\', \'location=yes\'); return false;">  Acervo Digital de Cordeis da Biblioteca de Obras Raras de Átila de Almeida – UEPB:</a>\n                  Confira mais de 8 mil obras e cordéis.\n              </ion-card-content>\n            </ion-card>\n\n            <ion-card>\n                <ion-card-header>\n                  \n                </ion-card-header>\n                <ion-card-content>\n                    <a  href="#" onclick="window.open(\'http://www2.fe.usp.br/estrutura/livres/index.htm\', \'_system\', \'location=yes\'); return false;"> Banco de Dados de Livros Escolares Brasileiros (1810 a 2005) – FEUSP:</a>\n                    Confira diversos materiais e conteúdos didáticos da educação brasileira.\n                </ion-card-content>\n              </ion-card>\n\n              <ion-card>\n                  <ion-card-header>\n                    \n                  </ion-card-header>\n                  <ion-card-content>\n                      <a  href="#" onclick="window.open(\'http://www.bibliomania.com/\', \'_system\', \'location=yes\'); return false;">  Bibliomania: </a>\n                      Encontre livros e estudos grátis.\n                  </ion-card-content>\n                </ion-card>\n\n                 <ion-card>\n                      <ion-card-header>\n                        \n                      </ion-card-header>\n                      <ion-card-content>\n                          <a  href="#" onclick="window.open(\'http://www.bbm.usp.br/\', \'_system\', \'location=yes\'); return false;"> Biblioteca Brasiliana Guita e José Mindlin:</a>\n                          O site da biblioteca da Universidade de São Paulo (USP) contêm livros, revistas, documentos, e outros tipos de arquivos livres para o download gratuito.\n                      </ion-card-content>\n                    </ion-card>\n\n                    <ion-card>\n                        <ion-card-header>\n                          \n                        </ion-card-header>\n                        <ion-card-content>\n                            <a  href="#" onclick="window.open(\'http://rdu.unc.edu.ar/\', \'_system\', \'location=yes\'); return false;">Biblioteca da Universidade Nacional de Córdoba:</a>\n                            A biblioteca oferece grande diversidade de disciplinas, entre elas, uma cátedra interdisciplinar voltada ao estudo da obra do escritor José Saramago.\n                        </ion-card-content>\n                      </ion-card>\n\n                      <ion-card>\n                          <ion-card-header>\n                            \n                          </ion-card-header>\n                          <ion-card-content>\n                              <a  href="#" onclick="window.open(\'http://www.memoria.fahce.unlp.edu.ar/\', \'_system\', \'location=yes\'); return false;">Biblioteca da Universidade Nacional de La Plata:</a>\n                              Oferece documentos gerados por alunos e professores, como teses e dissertações, seminários, apresentações e congressos.\n                          </ion-card-content>\n                        </ion-card>\n\n                        <ion-card>\n                            <ion-card-header>\n                              \n                            </ion-card-header>\n                            <ion-card-content>\n                                <a  href="#" onclick="window.open(\'http://bdtd.ibict.br/\', \'_system\', \'location=yes\'); return false;">Biblioteca Digital Brasileira de Teses e Dissertações (BDTD):</a>\n                                Reúne centenas de teses e dissertações de universidades de todo o país. É uma ferramenta útil para quem está fazendo a sua monografia e precisa de fontes acadêmicas.\n                            </ion-card-content>\n                          </ion-card>\n\n                          <ion-card>\n                              <ion-card-header>\n                                \n                              </ion-card-header>\n                              <ion-card-content>\n                                  <a  href="#" onclick="window.open(\'http://www.docpro.com.br/escolademusica/bibliotecadigital.html\', \'_system\', \'location=yes\'); return false;">Biblioteca Digital da Escola de Música da UFRJ:</a>\n                                  O acervo conta com obras raras dos séculos XVI a XVIII, além de partituras, manuscritos e periódicos para download gratuito.\n                              </ion-card-content>\n                            </ion-card>\n\n                            <ion-card>\n                                <ion-card-header>\n                                  \n                                </ion-card-header>\n                                <ion-card-content>\n                                    <a  href="#" onclick="window.open(\'http://bibdig.biblioteca.unesp.br/\', \'_system\', \'location=yes\'); return false;">Biblioteca Digital da UNESP:</a>\n                                    Grande acervo de obras de artes, gravuras e desenhos, além de trabalhos acadêmicos.\n                                </ion-card-content>\n                              </ion-card>\n\n                              <ion-card>\n                                  <ion-card-header>\n                                    \n                                  </ion-card-header>\n                                  <ion-card-content>\n                                      <a  href="#" onclick="window.open(\'http://www.bibliotecadigital.unicamp.br/\', \'_system\', \'location=yes\'); return false;">Biblioteca Digital da Unicamp:</a>\n                                      Conta com dissertações, teses, pesquisas em andamento, revistas eletrônicas, etc., todos feitos pelos professores, pesquisadores e alunos da instituição.\n                                  </ion-card-content>\n                                </ion-card>\n\n                                <ion-card>\n                                    <ion-card-header>\n                                      \n                                    </ion-card-header>\n                                    <ion-card-content>\n                                        <a  href="#" onclick="window.open(\'http://www.iberoamericadigital.net/gdl/\', \'_system\', \'location=yes\'); return false;"> Biblioteca Digital del Patrimonio Iberoamericano:</a>\n                                        Conta com conteúdos das bibliotecas nacionais do Brasil, Chile, Portugal e outros países iberoamericanos.\n                                    </ion-card-content>\n                                  </ion-card>\n\n                                  <ion-card>\n                                      <ion-card-header>\n                                        \n                                      </ion-card-header>\n                                      <ion-card-content>\n                                          <a  href="#" onclick="window.open(\'http://www.obrasraras.museunacional.ufrj.br/\', \'_system\', \'location=yes\'); return false;">Biblioteca Digital do Museu Nacional:</a>\n                                          Disponibiliza o acervo de obras raras nas áreas de ciências naturais e antropologia.\n                                      </ion-card-content>\n                                    </ion-card>\n                                    <ion-card>\n                                        <ion-card-header>\n                                          \n                                        </ion-card-header>\n                                        <ion-card-content>\n                                            <a  href="#" onclick="window.open(\'http://www.stf.jus.br/portal/biblioteca/pesquisarBibliotecaDigital.asp\', \'_system\', \'location=yes\'); return false;">Biblioteca Digital do Supremo Tribunal Federal:</a>\n                                            Para os estudantes e profissionais da área de Direito, esta é uma ótima fonte de pesquisa para documentos, livros, artigos e outros arquivos de interesse para a área.\n                                        </ion-card-content>\n                                      </ion-card>\n                                      <ion-card>\n                                          <ion-card-header>\n                                            \n                                          </ion-card-header>\n                                          <ion-card-content>\n                                              <a  href="#" onclick="window.open(\'http://www-01.ibm.com/software/data/cm/cmgr/\', \'_system\', \'location=yes\'); return false;">Biblioteca Digital IBM:</a>\n                                              Encontre diversos conteúdos digitalizados.\n                                          </ion-card-content>\n                                        </ion-card>\n                                        <ion-card>\n                                            <ion-card-header>\n                                              \n                                            </ion-card-header>\n                                            <ion-card-content>\n                                                <a  href="#" onclick="window.open(\'http://bds.bce.unb.br/\', \'_system\', \'location=yes\'); return false;">Biblioteca Digital e Sonora:</a>\n                                                Com acesso gratuito, mas exclusivo para pessoas com deficiência visual, reúne diversos materiais no formato digital para facilitar o acesso dessas pessoas aos conteúdos.\n                                            </ion-card-content>\n                                          </ion-card>\n                                          <ion-card>\n                                              <ion-card-header>\n                                                \n                                              </ion-card-header>\n                                              <ion-card-content>\n                                                  <a  href="#" onclick="window.open(\'http://www.paulofreire.ufpb.br/paulofreire/principal.jsp\', \'_system\', \'location=yes\'); return false;">Biblioteca Digital Paulo Freire:</a>\n                                                  Disponibiliza para download gratuito das obras do pedagogo e filósofo Paulo Freire.\n                                              </ion-card-content>\n                                            </ion-card>\n                                            <ion-card>\n                                                <ion-card-header>\n                                                  \n                                                </ion-card-header>\n                                                <ion-card-content>\n                                                    <a  href="#" onclick="window.open(\'http://www.wdl.org/pt/\', \'_system\', \'location=yes\'); return false;">Biblioteca Mundial Digital:</a>\n                                                    Reúne documentos oficiais sobre a cultura de diversos países do mundo.\n                                                </ion-card-content>\n                                              </ion-card>\n                                              <ion-card>\n                                                  <ion-card-header>\n                                                    \n                                                  </ion-card-header>\n                                                  <ion-card-content>\n                                                      <a  href="#" onclick="window.open(\'http://www.bibliotecanacional.gov.co/\', \'_system\', \'location=yes\'); return false;">Biblioteca Nacional da Colômbia:</a>\n                                                      Encontre obras para ler online e em versões para celulares e tablets.\n                                                  </ion-card-content>\n                                                </ion-card>\n                                                <ion-card>\n                                                    <ion-card-header>\n                                                      \n                                                    </ion-card-header>\n                                                    <ion-card-content>\n                                                        <a  href="#" onclick="window.open(\'http://bds.unb.br/\', \'_system\', \'location=yes\'); return false;"> Biblioteca Nacional Digital Brasil:</a>\n                                                        Com mais de 700 mil arquivos, conta com artigos, trabalhos acadêmicos, livros, obras de arte, gravuras, fotografias e outros documentos para download grátis.\n                                                    </ion-card-content>\n                                                  </ion-card>\n                                                  <ion-card>\n                                                      <ion-card-header>\n                                                        \n                                                      </ion-card-header>\n                                                      <ion-card-content>\n                                                          <a  href="#" onclick="window.open(\'http://collegeopentextbooks.org/\', \'_system\', \'location=yes\'); return false;">College Open Textbooks:</a>\n                                                          Pesquisas e trabalhos universitários disponíveis para download gratuito na língua inglesa.\n                                                      </ion-card-content>\n                                                    </ion-card>\n                                                    <ion-card>\n                                                        <ion-card-header>\n                                                          \n                                                        </ion-card-header>\n                                                        <ion-card-content>\n                                                            <a  href="#" onclick="window.open(\'http://pt.wikibooks.org/wiki/Wikilivros:P%C3%A1gina_principal\', \'_system\', \'location=yes\'); return false;">Wikilivros:</a>\n                                                            Livros disponibilizados pela comunidade de colaboração mútua da Wikipedia. A biblioteca disponibiliza diversas apostilas, manuais e conteúdos livres.\n                                                        </ion-card-content>\n                                                      </ion-card>\n                                                      <ion-card>\n                                                          <ion-card-header>\n                                                            \n                                                          </ion-card-header>\n                                                          <ion-card-content>\n                                                              <a  href="#" onclick="window.open(\'http://noticias.universia.com.br/destaque/noticia/2013/09/26/1052350/biblioteca-audio-youtube-disponibiliza-nova-pagina-download-gratuito-musica.html\', \'_system\', \'location=yes\'); return false;">Universia Brasil:</a>\n                                                              Pode não ter uma área de livros propriamente dita, mas ele conta com uma rica biblioteca de áudios.\n                                                          </ion-card-content>\n                                                        </ion-card>\n      \n\n   \n  \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\bbonline\bbonline.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], bbonline);
    return bbonline;
}());

//# sourceMappingURL=bbonline.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fale; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Fale = /** @class */ (function () {
    function Fale(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Fale = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fale',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\fale\fale.html"*/'<ion-header>\n  <ion-navbar color="light">\n    <button ion-button menuToggle="left" left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n    <button ion-button menuToggle="right" right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-content">\n  <ion-card>\n    <div id="after_submit"></div>\n    <form name="formteste" action="" method="post">\n      \n           \n        \n\n          \n\n          <a href=\'http://www.diocesano.g12.br/fale-conosco\'> <img src=\'assets/imgs/fale.png\' alt="Descrição"/></a>\n          \n            \n              \n        \n      \n      </form>\n      \n      \n\n   \n  \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\fale\fale.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Fale);
    return Fale;
}());

//# sourceMappingURL=fale.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_timeline_timeline__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_paradidaticos_paradidaticos__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_projetos_projetos__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_feira_feira__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_bbonline_bbonline__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_tutorial__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_fale_fale__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_timeline_timeline__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__toverux_ngx_sweetalert2__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_tutorial__["a" /* tutorial */],
                __WEBPACK_IMPORTED_MODULE_9__pages_timeline_timeline__["a" /* Timeline */],
                __WEBPACK_IMPORTED_MODULE_10__pages_paradidaticos_paradidaticos__["a" /* Paradidaticos */],
                __WEBPACK_IMPORTED_MODULE_11__pages_projetos_projetos__["a" /* Projetos */],
                __WEBPACK_IMPORTED_MODULE_12__pages_feira_feira__["a" /* Feira */],
                __WEBPACK_IMPORTED_MODULE_13__pages_bbonline_bbonline__["a" /* bbonline */],
                __WEBPACK_IMPORTED_MODULE_15__pages_fale_fale__["a" /* Fale */],
                __WEBPACK_IMPORTED_MODULE_16__components_timeline_timeline__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_timeline_timeline__["b" /* TimelineItemComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_timeline_timeline__["c" /* TimelineTimeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_17__toverux_ngx_sweetalert2__["a" /* SweetAlert2Module */].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_tutorial__["a" /* tutorial */],
                __WEBPACK_IMPORTED_MODULE_9__pages_timeline_timeline__["a" /* Timeline */],
                __WEBPACK_IMPORTED_MODULE_10__pages_paradidaticos_paradidaticos__["a" /* Paradidaticos */],
                __WEBPACK_IMPORTED_MODULE_11__pages_projetos_projetos__["a" /* Projetos */],
                __WEBPACK_IMPORTED_MODULE_12__pages_feira_feira__["a" /* Feira */],
                __WEBPACK_IMPORTED_MODULE_13__pages_bbonline_bbonline__["a" /* bbonline */],
                __WEBPACK_IMPORTED_MODULE_15__pages_fale_fale__["a" /* Fale */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_timeline_timeline__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_paradidaticos_paradidaticos__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_projetos_projetos__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_feira_feira__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_bbonline_bbonline__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_fale_fale__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.TimelineButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_timeline_timeline__["a" /* Timeline */]);
    };
    MyApp.prototype.HomeButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.ParadidaticosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_paradidaticos_paradidaticos__["a" /* Paradidaticos */]);
    };
    MyApp.prototype.ProjetosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_projetos_projetos__["a" /* Projetos */]);
    };
    MyApp.prototype.FeiraButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_feira_feira__["a" /* Feira */]);
    };
    MyApp.prototype.bbonlineButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_bbonline_bbonline__["a" /* bbonline */]);
    };
    MyApp.prototype.tutorialButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__["a" /* tutorial */]);
    };
    MyApp.prototype.FaleButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_fale_fale__["a" /* Fale */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\app\app.html"*/'<ion-split-pane>\n    <ion-menu swipeEnabled="false" side="left" [content]="mycontent" type="overlay" width="200">\n        <ion-header>\n\n            <ion-toolbar color="light">\n                <img class="footer" src="assets/imgs/brand.jpg" max-width="50%">\n            </ion-toolbar>\n        </ion-header>\n        <ion-content class="menu-left">\n\n\n\n            <ion-list>\n                <button ion-button mode="md" full round color="primary" (click)="HomeButton()"> Home</button>\n                <button ion-button mode="md" full round color="primary" (click)="tutorialButton()"> Tutorial</button>\n                <button ion-button full round color="primary" (click)="TimelineButton()"> Linha do Tempo</button>\n                <button ion-button full round color="primary" (click)="ParadidaticosButton()"> Paradidaticos</button>\n                <button ion-button full round color="primary" (click)="ProjetosButton()"> Projetos</button>\n                <button ion-button full round color="primary" (click)="bbonlineButton()"> Bib-online</button>\n                <button ion-button full round color="primary" (click)="FeiraButton()"> Feira</button>\n\n            </ion-list>\n\n            <img src="assets/imgs/rebeca.jpg">\n\n        </ion-content>\n        <ion-footer>\n            <button ion-button full round color="primary" (click)="FaleButton()"> Fale Conosco</button>\n\n        </ion-footer>\n    </ion-menu>\n\n    <ion-menu swipeEnabled="false" side="right" [content]="mycontent" type="overlay" width="200">\n        <ion-header>\n\n            <ion-toolbar color="light">\n\n            </ion-toolbar>\n        </ion-header>\n        <ion-content class="menu-right">\n\n\n\n            <ion-list>\n                <ion-card>\n                    <ion-card-content>\n                        O programa Circuito Literário em Rede tem como missão promover a formação literária de toda a comunidade escolar do Colégio\n                        Diocesano </ion-card-content>\n                </ion-card>\n                <ion-card>\n                    <ion-card-content>\n                        A Feira Literária “Ler para pensar e construir...” visa estimular a leitura e produção literária e artística como um todo\n                        dos alunos </ion-card-content>\n                </ion-card>\n\n\n                <img src="assets/imgs/dio.jpg">\n\n            </ion-list>\n\n        </ion-content>\n\n    </ion-menu>\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n    <ion-nav [root]="rootPage" #mycontent swipeBackEnabled="false" main></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimelineItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TimelineTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
        this.endIcon = 'ionic';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('endIcon'),
        __metadata("design:type", Object)
    ], TimelineComponent.prototype, "endIcon", void 0);
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'timeline',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\components\timeline\timeline.html"*/'<div class="timeline">\n  <ng-content></ng-content>\n\n  <timeline-item>\n    <ion-icon class="" [name]="endIcon"></ion-icon>\n  </timeline-item>\n\n</div>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\components\timeline\timeline.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());

var TimelineItemComponent = /** @class */ (function () {
    function TimelineItemComponent() {
    }
    TimelineItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'timeline-item',
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [])
    ], TimelineItemComponent);
    return TimelineItemComponent;
}());

var TimelineTimeComponent = /** @class */ (function () {
    function TimelineTimeComponent() {
        this.time = {};
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('time'),
        __metadata("design:type", Object)
    ], TimelineTimeComponent.prototype, "time", void 0);
    TimelineTimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'timeline-time',
            template: '<span>{{time.subtitle}}</span><span>{{time.title}}</span>'
        }),
        __metadata("design:paramtypes", [])
    ], TimelineTimeComponent);
    return TimelineTimeComponent;
}());

//# sourceMappingURL=timeline.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.js.map