webpackJsonp([0],{

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_timeline_timeline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_paradidaticos_paradidaticos__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_projetos_projetos__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_atividades_atividades__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mapa_mapa__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_fale_fale__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_timeline_timeline__ = __webpack_require__(276);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_timeline_timeline__["a" /* Timeline */],
                __WEBPACK_IMPORTED_MODULE_9__pages_paradidaticos_paradidaticos__["a" /* Paradidaticos */],
                __WEBPACK_IMPORTED_MODULE_10__pages_projetos_projetos__["a" /* Projetos */],
                __WEBPACK_IMPORTED_MODULE_11__pages_atividades_atividades__["a" /* Atividades */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mapa_mapa__["a" /* Mapa */],
                __WEBPACK_IMPORTED_MODULE_13__pages_fale_fale__["a" /* Fale */],
                __WEBPACK_IMPORTED_MODULE_14__components_timeline_timeline__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_timeline_timeline__["b" /* TimelineItemComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_timeline_timeline__["c" /* TimelineTimeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_timeline_timeline__["a" /* Timeline */],
                __WEBPACK_IMPORTED_MODULE_9__pages_paradidaticos_paradidaticos__["a" /* Paradidaticos */],
                __WEBPACK_IMPORTED_MODULE_10__pages_projetos_projetos__["a" /* Projetos */],
                __WEBPACK_IMPORTED_MODULE_11__pages_atividades_atividades__["a" /* Atividades */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mapa_mapa__["a" /* Mapa */],
                __WEBPACK_IMPORTED_MODULE_13__pages_fale_fale__["a" /* Fale */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paradidaticos_paradidaticos__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timeline_timeline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projetos_projetos__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__atividades_atividades__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mapa_mapa__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fale_fale__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.TimelineButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__timeline_timeline__["a" /* Timeline */]);
    };
    HomePage.prototype.HomeButton = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.ParadidaticosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__paradidaticos_paradidaticos__["a" /* Paradidaticos */]);
    };
    HomePage.prototype.ProjetosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__projetos_projetos__["a" /* Projetos */]);
    };
    HomePage.prototype.AtividadesButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__atividades_atividades__["a" /* Atividades */]);
    };
    HomePage.prototype.MapaButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__mapa_mapa__["a" /* Mapa */]);
    };
    HomePage.prototype.FaleButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__fale_fale__["a" /* Fale */]);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <button ion-button menuToggle="left" left>Toggle Left Menu</button>\n\n    <ion-title middle>Circuito Literário em Rede</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n\n\n        <ion-card>\n\n          \n\n          <ion-card-header>\n\n            PROJETO FEIRA LITERÁRIA -“ LER PARA PENSAR E CONSTRUIR ...”\n\n          </ion-card-header>\n\n          \n\n          <ion-card-content class="main-text">\n\n              \n\n            <br>\n\n            <p>A Feira Literária “Ler para pensar e construir...” visa estimular a leitura e produção literária e artística\n\n              como um todo dos alunos, contribuindo para a formação de cidadãos e leitores conscientes de sua origem e do\n\n              patrimônio cultural brasileiro herdado. Por meio de eventos diferenciados e integrados que enfatizam a criatividade,\n\n              os sonhos e a fantasia, a feira oferece oportunidades para o desenvolvimento das competências de leitura e\n\n              escrita.\n\n            </p>\n\n            <br>\n\n            <p>Neste ano de 2018, a Feira Literária homenageou a escritora Ruth Rocha, que, em 2017, completava 50 anos de carreira.\n\n              A justa homenagem se apoia na capacidade da autora introduzir para crianças com sutileza e humor problemas\n\n              de cunho social e políticos, tais como a injustiça estrutural, frequentemente inspirada no estilo de Monteiro\n\n              Lobato.\n\n            </p>\n\n            <br>\n\n            <p>Diversas vivências pedagógicas fornecidas em momentos e ambientes distintos tem por objetivo criar um pequeno\n\n              complexo cultural, onde cada leitor de mundo possa se familiarizar com a literatura infanto-juvenil e nela\n\n              se sentir reconhecido. Ao contemplar neste formato os diferentes gêneros textuais, como narrativas, poemas,\n\n              convites, teatro, biografia, memórias e fábulas, facilita-se a orientação para o prazer da leitura, para a\n\n              percepção de quem descobre ali outros lugares, outros tempos, outros jeitos de agir e de ser, outra ótica.</p>\n\n            <br>\n\n            <p>O Projeto Feira Literária é desenvolvido por todos os alunos do 2º ano EF à 3º série do Ensino Médio, durante\n\n              o mês de março e abril com culminância prevista para os dias 26, 27 e 28 de abril de 2018. Para tanto, serão\n\n              envolvidos todos os professores, coordenadores pedagógicos, auxiliares de coordenação, bibliotecários e auxiliares\n\n              de turma. As atividades propiciadas são: </p>\n\n            <br>\n\n            <p>Bate-papo com autores, contação de histórias, oficinas, exposição dialogada, exposição de HQ, leitura, interpretação\n\n              e análise de textos previamente escolhidos, projeção de imagens dos personagens, músicas, cordéis, produções\n\n              coletivas e individuais de desenhos, exposição de trabalho em mural, tematização de vídeos, produção de varais\n\n              literários, troca-troca de livros, dramatização, origami, dobraduras, apresentações musicais com ênfase literária,\n\n              visita à biblioteca, café literário, clube literário, preparação para a vida universitária e outras atividades.</p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paradidaticos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timeline_timeline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projetos_projetos__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__atividades_atividades__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mapa_mapa__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fale_fale__ = __webpack_require__(31);
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
        this.http = http;
        var localData = http.get('assets/paradidaticos.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    Paradidaticos_1 = Paradidaticos;
    Paradidaticos.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    Paradidaticos.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    Paradidaticos.prototype.TimelineButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__timeline_timeline__["a" /* Timeline */]);
    };
    Paradidaticos.prototype.HomeButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    Paradidaticos.prototype.ParadidaticosButton = function () {
        this.navCtrl.setRoot(Paradidaticos_1);
    };
    Paradidaticos.prototype.ProjetosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__projetos_projetos__["a" /* Projetos */]);
    };
    Paradidaticos.prototype.AtividadesButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__atividades_atividades__["a" /* Atividades */]);
    };
    Paradidaticos.prototype.MapaButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__mapa_mapa__["a" /* Mapa */]);
    };
    Paradidaticos.prototype.FaleButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__fale_fale__["a" /* Fale */]);
    };
    Paradidaticos = Paradidaticos_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paradidaticos',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\paradidaticos\paradidaticos.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle="left" left>Toggle Left Menu</button>\n\n    <ion-title middle>Circuito Literário em Rede</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n\n\n        <ion-card>\n\n          <ion-list class="accordion-list">\n\n            <!-- First Level -->\n\n            <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n\n              <!-- Toggle Button -->\n\n              <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n                <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n\n                <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n\n                {{ item.name }}\n\n              </button>\n\n\n\n              <ion-list *ngIf="item.children && item.open" no-lines>\n\n                <!-- Second Level -->\n\n                <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n\n                  <!-- Toggle Button -->\n\n                  <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n\n                    <ion-icon item-left name="arrow-forward" *ngIf="!child.open"></ion-icon>\n\n                    <ion-icon item-left name="arrow-down" *ngIf="child.open"></ion-icon>\n\n                    {{ child.name }}\n\n                  </button>\n\n\n\n                  <!-- Direct Add Button as Fallback -->\n\n                  <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n\n                    <h2>{{ child.name }}</h2>\n\n                    <p text-lowercase>{{ child.information }}</p>\n\n\n\n                  </ion-item>\n\n\n\n                  <ion-list *ngIf="child.children && child.open">\n\n                    <!-- Third Level -->\n\n                    <ion-item *ngFor="let item of child.children; let k = index" detail-none class="child-item" text-wrap>\n\n                      <h2>{{ item.name }}</h2>\n\n                      <p text-lowercase>{{ item.information }}</p>\n\n                      <!-- Direct Add Button -->\n\n\n\n                    </ion-item>\n\n                  </ion-list>\n\n\n\n                </ion-list-header>\n\n              </ion-list>\n\n\n\n            </ion-list-header>\n\n          </ion-list>\n\n        </ion-card>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\paradidaticos\paradidaticos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], Paradidaticos);
    return Paradidaticos;
    var Paradidaticos_1;
}());

//# sourceMappingURL=paradidaticos.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paradidaticos_paradidaticos__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projetos_projetos__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__atividades_atividades__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mapa_mapa__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fale_fale__ = __webpack_require__(31);
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
                content: "../assets/timelineimgs/homero.jpg",
                icon: 'calendar',
                time: { title: 'VIII aC' }
            },
            {
                title: 'Hesíodo',
                content: "../assets/timelineimgs/hesiodo.jpg",
                icon: 'calendar',
                time: { title: 'VIII aC' }
            },
            {
                title: 'Esopo',
                content: "../assets/timelineimgs/esopo.jpg",
                icon: 'calendar',
                time: { title: 'VII aC' }
            },
            {
                title: 'Bíblia',
                content: "../assets/timelineimgs/testamento.jpg",
                icon: 'calendar',
                time: { title: 'VI aC' }
            },
            {
                title: 'Píndaro',
                content: "../assets/timelineimgs/pindaro.jpg",
                icon: 'calendar',
                time: { title: 'VI aC' }
            },
            {
                title: 'Ésquilo',
                content: "../assets/timelineimgs/esquilo.jpg",
                icon: 'calendar',
                time: { title: '472 aC' }
            },
            {
                title: 'Sófocles',
                content: "../assets/timelineimgs/sofocles.jpg",
                icon: 'calendar',
                time: { title: '446 aC' }
            },
            {
                title: 'Eurípedes',
                content: "../assets/timelineimgs/euripedes.jpg",
                icon: 'calendar',
                time: { title: '438 aC' }
            },
            {
                title: 'Aristófanes',
                content: "../assets/timelineimgs/aristofanes.jpg",
                icon: 'calendar',
                time: { title: '425 aC' }
            },
            {
                title: 'Calímaco',
                content: "../assets/timelineimgs/calimaco.jpg",
                icon: 'calendar',
                time: { title: 'III aC' }
            },
            {
                title: 'Teócrito',
                content: "../assets/timelineimgs/teocrito.jpg",
                icon: 'calendar',
                time: { title: 'III aC' }
            },
            {
                title: 'Plauto',
                content: "../assets/timelineimgs/plauto.jpg",
                icon: 'calendar',
                time: { title: '205 aC' }
            },
            {
                title: 'Terêncio',
                content: "../assets/timelineimgs/terencio.jpg",
                icon: 'calendar',
                time: { title: 'II aC' }
            },
            {
                title: 'Catulo',
                content: "../assets/timelineimgs/catulo.jpg",
                icon: 'calendar',
                time: { title: 'I aC' }
            },
            {
                title: 'Varrão',
                content: "../assets/timelineimgs/varrao.jpg",
                icon: 'calendar',
                time: { title: 'I aC' }
            },
            {
                title: 'Cícero',
                content: "../assets/timelineimgs/cicero.jpg",
                icon: 'calendar',
                time: { title: '81 aC' }
            },
            {
                title: 'Virgílio',
                content: "../assets/timelineimgs/virgilio.jpg",
                icon: 'calendar',
                time: { title: '42 aC' }
            },
            {
                title: 'Horácio',
                content: "../assets/timelineimgs/horacio.jpg",
                icon: 'calendar',
                time: { title: '35 aC' }
            },
            {
                title: 'Ovídio',
                content: "../assets/timelineimgs/ovidio.jpg",
                icon: 'calendar',
                time: { title: '19 aC' }
            },
            {
                title: 'Sêneca',
                content: "../assets/timelineimgs/seneca.jpg",
                icon: 'calendar',
                time: { title: 'sec I' }
            },
            {
                title: 'Estácio',
                content: "../assets/timelineimgs/estacio.jpg",
                icon: 'calendar',
                time: { title: 'sec I' }
            },
            {
                title: 'Luciano de Samostata',
                content: "../assets/timelineimgs/luciano.jpg",
                icon: 'calendar',
                time: { title: 'sec II' }
            },
            {
                title: 'Tertuliano',
                content: "../assets/timelineimgs/tertuliano.jpg",
                icon: 'calendar',
                time: { title: 'sec II' }
            },
            {
                title: 'São Jerônimo',
                content: "../assets/timelineimgs/jeronimo.jpg",
                icon: 'calendar',
                time: { title: 'sec IV' }
            },
            {
                title: 'Santo Ambrósio',
                content: "../assets/timelineimgs/ambrosio.jpg",
                icon: 'calendar',
                time: { title: 'sec IV' }
            },
            {
                title: 'Santo Agostinho',
                content: "../assets/timelineimgs/agostinho.jpg",
                icon: 'calendar',
                time: { title: 'sec IV' }
            },
            {
                title: 'Claudiano',
                content: "../assets/timelineimgs/claudiano.jpg",
                icon: 'calendar',
                time: { title: 'sec IV' }
            },
            {
                title: 'Prudêncio',
                content: "../assets/timelineimgs/prudencio.jpg",
                icon: 'calendar',
                time: { title: 'séc. IV' }
            },
            {
                title: 'Efrém da Síria',
                content: "../assets/timelineimgs/efrem.jpg",
                icon: 'calendar',
                time: { title: 'séc IV' }
            },
            {
                title: 'Agathias',
                content: "../assets/timelineimgs/agathias.jpg",
                icon: 'calendar',
                time: { title: 'séc. VI' }
            },
            {
                title: 'João Malala',
                content: "../assets/timelineimgs/malalas.jpg",
                icon: 'calendar',
                time: { title: '560' }
            },
            {
                title: 'André de Creta',
                content: "../assets/timelineimgs/andre.jpg",
                icon: 'calendar',
                time: { title: 'sec VII' }
            },
            {
                title: 'João Damasceno',
                content: "../assets/timelineimgs/damasceno.jpg",
                icon: 'calendar',
                time: { title: 'sec VII' }
            },
            {
                title: 'Alcuíno de York',
                content: "../assets/timelineimgs/alcuino.jpg",
                icon: 'calendar',
                time: { title: 'sec VIII' }
            },
            {
                title: 'Beda',
                content: "../assets/timelineimgs/beda.jpg",
                icon: 'calendar',
                time: { title: 'sec VIII' }
            },
            {
                title: 'Cynewulf',
                content: "../assets/timelineimgs/cynewulf.jpg",
                icon: 'calendar',
                time: { title: 'sec IX' }
            },
            {
                title: 'Photios (“Myrobiblion”)',
                content: "../assets/timelineimgs/photios.jpg",
                icon: 'calendar',
                time: { title: 'séc. IX' }
            },
            {
                title: 'Beowolf (anônimo)',
                content: "../assets/timelineimgs/beowolf.jpg",
                icon: 'calendar',
                time: { title: '1000' }
            },
            {
                title: 'Godofredo de Monmouth',
                content: "../assets/timelineimgs/godofredo.jpg",
                icon: 'calendar',
                time: { title: '1130' }
            },
            {
                title: 'Prodromos',
                content: "../assets/timelineimgs/teodoro.jpg",
                icon: 'calendar',
                time: { title: 'sec XII' }
            },
            {
                title: 'Michel Psellos',
                content: "../assets/timelineimgs/michel.jpg",
                icon: 'calendar',
                time: { title: 'sec XII' }
            },
            {
                title: 'Allain de Lille',
                content: "../assets/timelineimgs/allain.jpg",
                icon: 'calendar',
                time: { title: 'sec XII' }
            },
            {
                title: 'Poema del Cid (anônimo)',
                content: "../assets/timelineimgs/cid.jpg",
                icon: 'calendar',
                time: { title: '1140' }
            },
            {
                title: 'Canção dos Nibelungos (anônimo)',
                content: "../assets/timelineimgs/nibelungos.jpg",
                icon: 'calendar',
                time: { title: '1180' }
            },
            {
                title: 'Snorri Sturluson)',
                content: "../assets/timelineimgs/snorri.jpg",
                icon: 'calendar',
                time: { title: 'sec XIII' }
            },
            {
                title: 'Saxão, o Gramatico',
                content: "../assets/timelineimgs/saxao.jpg",
                icon: 'calendar',
                time: { title: 'sec XIII' }
            },
        ];
    }
    Timeline_1 = Timeline;
    Timeline.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimelinePage');
    };
    Timeline.prototype.TimelineButton = function () {
        this.navCtrl.setRoot(Timeline_1);
    };
    Timeline.prototype.HomeButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Timeline.prototype.ParadidaticosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__paradidaticos_paradidaticos__["a" /* Paradidaticos */]);
    };
    Timeline.prototype.ProjetosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__projetos_projetos__["a" /* Projetos */]);
    };
    Timeline.prototype.AtividadesButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__atividades_atividades__["a" /* Atividades */]);
    };
    Timeline.prototype.MapaButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__mapa_mapa__["a" /* Mapa */]);
    };
    Timeline.prototype.FaleButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__fale_fale__["a" /* Fale */]);
    };
    Timeline = Timeline_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timeline',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\timeline\timeline.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle="left" left>Toggle Left Menu</button>\n\n    <ion-title middle>Circuito Literário em Rede</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="main-content">\n\n\n\n\n\n        <timeline endIcon="call">\n\n          <timeline-item *ngFor="let item of items">\n\n            <timeline-time [time]="item.time"></timeline-time>\n\n            <ion-icon [name]="item.icon"></ion-icon>\n\n            <ion-card width="400">\n\n              <ion-card-header>\n\n                {{item.title}}\n\n              </ion-card-header>\n\n\n\n              <img width="200" height="180" src="{{item.content}}">\n\n\n\n            </ion-card>\n\n          </timeline-item>\n\n\n\n        </timeline>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n<ion-footer position="" bottom>here</ion-footer>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\timeline\timeline.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Timeline);
    return Timeline;
    var Timeline_1;
}());

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_timeline_timeline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_paradidaticos_paradidaticos__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_projetos_projetos__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_atividades_atividades__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mapa_mapa__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_fale_fale__ = __webpack_require__(31);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_timeline_timeline__["a" /* Timeline */]);
    };
    MyApp.prototype.HomeButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.ParadidaticosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_paradidaticos_paradidaticos__["a" /* Paradidaticos */]);
    };
    MyApp.prototype.ProjetosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_projetos_projetos__["a" /* Projetos */]);
    };
    MyApp.prototype.AtividadesButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_atividades_atividades__["a" /* Atividades */]);
    };
    MyApp.prototype.MapaButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_mapa_mapa__["a" /* Mapa */]);
    };
    MyApp.prototype.FaleButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_fale_fale__["a" /* Fale */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\app\app.html"*/'<ion-split-pane>\n\n    <ion-menu swipeEnabled="false" side="left" [content]="mycontent" type="overlay" width="200">\n\n        <ion-header>\n\n\n\n            <ion-toolbar color="primary">\n\n                <ion-title align="center">Menu</ion-title>\n\n            </ion-toolbar>\n\n        </ion-header>\n\n        <ion-content class="menu-left">\n\n\n\n\n\n\n\n            <ion-list>\n\n                <button ion-button full square color="primary" (click)="HomeButton()"> Home</button>\n\n                <button ion-button full square color="primary" (click)="TimelineButton()"> Linha do Tempo</button>\n\n                <button ion-button full square color="primary" (click)="ParadidaticosButton()"> Paradidaticos</button>\n\n                <button ion-button full square color="primary" (click)="ProjetosButton()"> Projetos</button>\n\n                <button ion-button full square color="primary" (click)="FeiraButton()"> Feira</button>\n\n                <button ion-button full square color="primary" (click)="AtividadesButton()"> Atividades de Cultura e Escrita</button>\n\n                <button ion-button full square color="primary" (click)="MapaButton()"> Mapa da Leitura?</button>\n\n                <button ion-button full square color="primary" (click)="FaleButton()"> Fale Conosco</button>\n\n\n\n            </ion-list>\n\n\n\n        </ion-content>\n\n\n\n    </ion-menu>\n\n\n\n    <ion-menu swipeEnabled="false" side="right" [content]="mycontent" type="overlay" width="200">\n\n        <ion-header>\n\n\n\n            <ion-toolbar color="primary">\n\n                <ion-title align="center">Menu</ion-title>\n\n            </ion-toolbar>\n\n        </ion-header>\n\n        <ion-content class="menu-right">\n\n\n\n\n\n\n\n            <ion-list>\n\n                <ion-card>\n\n                    <ion-card-content>\n\n                        The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n\n                    </ion-card-content>\n\n                </ion-card>\n\n                <ion-card>\n\n                    <ion-card-content>\n\n                        The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n\n                    </ion-card-content>\n\n                </ion-card>\n\n\n\n            </ion-list>\n\n\n\n        </ion-content>\n\n\n\n    </ion-menu>\n\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n    <ion-nav [root]="rootPage" #mycontent swipeBackEnabled="false" main></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
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
            selector: 'timeline',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\components\timeline\timeline.html"*/'<div class="timeline">\n\n  <ng-content></ng-content>\n\n\n\n  <timeline-item>\n\n    <ion-icon class="" [name]="endIcon"></ion-icon>\n\n  </timeline-item>\n\n\n\n</div>\n\n'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\components\timeline\timeline.html"*/
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
            template: '<span>{{time.subtitle}}</span> <span>{{time.title}}</span>'
        }),
        __metadata("design:paramtypes", [])
    ], TimelineTimeComponent);
    return TimelineTimeComponent;
}());

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Projetos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timeline_timeline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__paradidaticos_paradidaticos__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__atividades_atividades__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mapa_mapa__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fale_fale__ = __webpack_require__(31);
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
        this.http = http;
        var localData = http.get('assets/information.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    Projetos_1 = Projetos;
    Projetos.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    Projetos.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    Projetos.prototype.TimelineButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__timeline_timeline__["a" /* Timeline */]);
    };
    Projetos.prototype.HomeButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    Projetos.prototype.ParadidaticosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__paradidaticos_paradidaticos__["a" /* Paradidaticos */]);
    };
    Projetos.prototype.ProjetosButton = function () {
        this.navCtrl.setRoot(Projetos_1);
    };
    Projetos.prototype.AtividadesButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__atividades_atividades__["a" /* Atividades */]);
    };
    Projetos.prototype.MapaButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__mapa_mapa__["a" /* Mapa */]);
    };
    Projetos.prototype.FaleButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__fale_fale__["a" /* Fale */]);
    };
    Projetos = Projetos_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-projetos',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\projetos\projetos.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle="left" left>Toggle Left Menu</button>\n\n    <ion-title middle>Circuito Literário em Rede</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n\n\n        <ion-card>\n\n          <ion-list class="accordion-list">\n\n            <!-- First Level -->\n\n            <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n\n              <!-- Toggle Button -->\n\n              <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n                <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n\n                <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n\n                {{ item.name }}\n\n              </button>\n\n\n\n              <ion-list *ngIf="item.children && item.open" no-lines>\n\n                <!-- Second Level -->\n\n                <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n\n                  <!-- Toggle Button -->\n\n                  <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n\n                    <ion-icon item-left name="arrow-forward" *ngIf="!child.open"></ion-icon>\n\n                    <ion-icon item-left name="arrow-down" *ngIf="child.open"></ion-icon>\n\n                    {{ child.name }}\n\n                  </button>\n\n\n\n                  <!-- Direct Add Button as Fallback -->\n\n                  <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n\n                    <h2>{{ child.name }}</h2>\n\n                    <p text-lowercase>{{ child.information }}</p>\n\n\n\n                  </ion-item>\n\n\n\n                  <ion-list *ngIf="child.children && child.open">\n\n                    <!-- Third Level -->\n\n                    <ion-item *ngFor="let item of child.children; let k = index" detail-none class="child-item" text-wrap>\n\n                      <h2>{{ item.name }}</h2>\n\n                      <p text-lowercase>{{ item.information }}</p>\n\n                      <!-- Direct Add Button -->\n\n\n\n                    </ion-item>\n\n                  </ion-list>\n\n\n\n                </ion-list-header>\n\n              </ion-list>\n\n\n\n            </ion-list-header>\n\n          </ion-list>\n\n        </ion-card>\n\n\n\n\n\n</ion-content>\n\n<ion-split-pane>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\projetos\projetos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], Projetos);
    return Projetos;
    var Projetos_1;
}());

//# sourceMappingURL=projetos.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Atividades; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timeline_timeline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paradidaticos_paradidaticos__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projetos_projetos__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mapa_mapa__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fale_fale__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Atividades = /** @class */ (function () {
    function Atividades(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Atividades_1 = Atividades;
    Atividades.prototype.TimelineButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__timeline_timeline__["a" /* Timeline */]);
    };
    Atividades.prototype.HomeButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Atividades.prototype.ParadidaticosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__paradidaticos_paradidaticos__["a" /* Paradidaticos */]);
    };
    Atividades.prototype.ProjetosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__projetos_projetos__["a" /* Projetos */]);
    };
    Atividades.prototype.AtividadesButton = function () {
        this.navCtrl.setRoot(Atividades_1);
    };
    Atividades.prototype.MapaButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__mapa_mapa__["a" /* Mapa */]);
    };
    Atividades.prototype.FaleButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__fale_fale__["a" /* Fale */]);
    };
    Atividades = Atividades_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-atividades',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\atividades\atividades.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle="left" left>Toggle Left Menu</button>\n\n    <ion-title middle>Circuito Literário em Rede</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n  \n\n  \n\n        <!-- AQUI VAI FICAR O TEXTO DA PAGINA PRINCIPAL  -->\n\n        <ion-card>\n\n          <ion-card-header>\n\n\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\atividades\atividades.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Atividades);
    return Atividades;
    var Atividades_1;
}());

//# sourceMappingURL=atividades.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mapa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timeline_timeline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paradidaticos_paradidaticos__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projetos_projetos__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__atividades_atividades__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fale_fale__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Mapa = /** @class */ (function () {
    function Mapa(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Mapa_1 = Mapa;
    Mapa.prototype.TimelineButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__timeline_timeline__["a" /* Timeline */]);
    };
    Mapa.prototype.HomeButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Mapa.prototype.ParadidaticosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__paradidaticos_paradidaticos__["a" /* Paradidaticos */]);
    };
    Mapa.prototype.ProjetosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__projetos_projetos__["a" /* Projetos */]);
    };
    Mapa.prototype.AtividadesButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__atividades_atividades__["a" /* Atividades */]);
    };
    Mapa.prototype.MapaButton = function () {
        this.navCtrl.setRoot(Mapa_1);
    };
    Mapa.prototype.FaleButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__fale_fale__["a" /* Fale */]);
    };
    Mapa = Mapa_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapa',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\mapa\mapa.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle="left" left>Toggle Left Menu</button>\n\n    <ion-title middle>Circuito Literário em Rede</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n\n\n        <ion-card>\n\n          <ion-card-header>\n\n\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\mapa\mapa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Mapa);
    return Mapa;
    var Mapa_1;
}());

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fale; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timeline_timeline__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paradidaticos_paradidaticos__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projetos_projetos__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__atividades_atividades__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mapa_mapa__ = __webpack_require__(30);
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
    Fale_1 = Fale;
    Fale.prototype.TimelineButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__timeline_timeline__["a" /* Timeline */]);
    };
    Fale.prototype.HomeButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Fale.prototype.ParadidaticosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__paradidaticos_paradidaticos__["a" /* Paradidaticos */]);
    };
    Fale.prototype.ProjetosButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__projetos_projetos__["a" /* Projetos */]);
    };
    Fale.prototype.AtividadesButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__atividades_atividades__["a" /* Atividades */]);
    };
    Fale.prototype.MapaButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__mapa_mapa__["a" /* Mapa */]);
    };
    Fale.prototype.FaleButton = function () {
        this.navCtrl.setRoot(Fale_1);
    };
    Fale = Fale_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fale',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\fale\fale.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle="left" left>Toggle Left Menu</button>\n\n    <ion-title middle>Circuito Literário em Rede</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n\n\n        <ion-card>\n\n          <ion-card-header>\n\n\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\fale\fale.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Fale);
    return Fale;
    var Fale_1;
}());

//# sourceMappingURL=fale.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map