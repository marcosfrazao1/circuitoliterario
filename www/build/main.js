webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="light">\n\n    <button ion-button menuToggle="left" left>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n\n    <button ion-button menuToggle="right" right>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n  <ion-card>\n\n\n\n\n\n    <img src="assets/imgs/turma.jpg">\n\n\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Missão\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      A Biblioteca Professora Teresa Filpi Sampaio tem por missão ser um espaço de estudo e construção do conhecimento,\n\n      a fim de\n\n      cooperar com a dinâmica da escola, despertar o interesse intelectual, favorecer o enriquecimento cultural e\n\n      incentivar\n\n      o hábito da leitura.\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Localização\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Localização: Rua 13 de Maio, 2° piso<br> Ramal 442<br> Horário de funcionamento: de 8h às 18h, de segunda à sexta\n\n      e\n\n      aos sábados, das 8h às 12h<br> Bibliotecária Bruna Dayane <br> E-mail bibliotecaria@diocesano.g12.br<br>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Serviços\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Acervo; Espaço de estudo em grupo e cabines individuais; Projetos literários; Acesso à Internet; Serviço de\n\n      empréstimo e\n\n      devolução de exemplares. Cadastro: pai ou responsável deverá comparecer à biblioteca para realizar o cadastro do\n\n      aluno,\n\n      portando o documento de identificação. Empréstimo é efetuado por todos os funcionários da Biblioteca através do\n\n      sistema.\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Serviço de empréstimo\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      O aluno poderá solicitar o empréstimo de até dois exemplares conforme o prazo de devolução para cada tipo de\n\n      acervo:<br> Revista\n\n      - 2 dias;<br> Acervo Geral - 5 dias;<br> Acervo Geral(Piauí)- 10 dias;<br> Literatura - 10 dias; Literatura\n\n      Piauiense-10\n\n      dias;\n\n      <br> Braile - 10 dias;<br> Caso a devolução não seja realizada na data prevista, será gerada uma multa para cada\n\n      exemplar\n\n      no valor de R$3,00 por dia.<br>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Sala de estudo em grupo\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Para o uso da sala de estudo em grupo, o agendamento deverá ser realizado com 24 horas de antecedência, por grupo\n\n      de no mínimo\n\n      3 alunos e no máximo 8 alunos, na sala da Coordenação, nos horários de 8h10 às 10h10 e de 10h20 às 12h20 para o\n\n      turno\n\n      da manhã, e das 14h às 15h50 e das 16h às 17h50 pela tarde, de segunda a sexta.<br> O aluno deverá estar vestindo\n\n      o fardamento completo e cumprir o mesmo regulamento do manual do aluno. </ion-card-content>\n\n  </ion-card>\n\n\n\n  \n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
                icon: 'calendar',
                time: { title: 'VIII aC' }
            },
            {
                title: 'Hesíodo',
                content: "assets/timelineimgs/hesiodo.jpg",
                icon: 'calendar',
                time: { title: 'VIII aC' }
            },
            {
                title: 'Esopo',
                content: "assets/timelineimgs/esopo.jpg",
                icon: 'calendar',
                time: { title: 'VII aC' }
            },
            {
                title: 'Bíblia',
                content: "assets/timelineimgs/testamento.jpg",
                icon: 'calendar',
                time: { title: 'VI aC' }
            },
            {
                title: 'Píndaro',
                content: "assets/timelineimgs/pindaro.jpg",
                icon: 'calendar',
                time: { title: 'VI aC' }
            },
            {
                title: 'Ésquilo',
                content: "assets/timelineimgs/esquilo.jpg",
                icon: 'calendar',
                time: { title: '472 aC' }
            },
            {
                title: 'Sófocles',
                content: "assets/timelineimgs/sofocles.jpg",
                icon: 'calendar',
                time: { title: '446 aC' }
            },
            {
                title: 'Eurípedes',
                content: "assets/timelineimgs/euripedes.jpg",
                icon: 'calendar',
                time: { title: '438 aC' }
            },
            {
                title: 'Aristófanes',
                content: "assets/timelineimgs/aristofanes.jpg",
                icon: 'calendar',
                time: { title: '425 aC' }
            },
            {
                title: 'Calímaco',
                content: "assets/timelineimgs/calimaco.jpg",
                icon: 'calendar',
                time: { title: 'III aC' }
            },
            {
                title: 'Teócrito',
                content: "assets/timelineimgs/teocrito.jpg",
                icon: 'calendar',
                time: { title: 'III aC' }
            },
            {
                title: 'Plauto',
                content: "assets/timelineimgs/plauto.jpg",
                icon: 'calendar',
                time: { title: '205 aC' }
            },
            {
                title: 'Terêncio',
                content: "assets/timelineimgs/terencio.jpg",
                icon: 'calendar',
                time: { title: 'II aC' }
            },
            {
                title: 'Catulo',
                content: "assets/timelineimgs/catulo.jpg",
                icon: 'calendar',
                time: { title: 'I aC' }
            },
            {
                title: 'Varrão',
                content: "assets/timelineimgs/varrao.jpg",
                icon: 'calendar',
                time: { title: 'I aC' }
            },
            {
                title: 'Cícero',
                content: "assets/timelineimgs/cicero.jpg",
                icon: 'calendar',
                time: { title: '81 aC' }
            },
            {
                title: 'Virgílio',
                content: "assets/timelineimgs/virgilio.jpg",
                icon: 'calendar',
                time: { title: '42 aC' }
            },
            {
                title: 'Horácio',
                content: "assets/timelineimgs/horacio.jpg",
                icon: 'calendar',
                time: { title: '35 aC' }
            },
            {
                title: 'Ovídio',
                content: "assets/timelineimgs/ovidio.jpg",
                icon: 'calendar',
                time: { title: '19 aC' }
            },
            {
                title: 'Sêneca',
                content: "assets/timelineimgs/seneca.jpg",
                icon: 'calendar',
                time: { title: 'sec I' }
            },
            {
                title: 'Estácio',
                content: "assets/timelineimgs/estacio.jpg",
                icon: 'calendar',
                time: { title: 'sec I' }
            },
            {
                title: 'Luciano de Samostata',
                content: "assets/timelineimgs/luciano.jpg",
                icon: 'calendar',
                time: { title: 'sec II' }
            },
            {
                title: 'Tertuliano',
                content: "assets/timelineimgs/tertuliano.jpg",
                icon: 'calendar',
                time: { title: 'sec II' }
            },
            {
                title: 'São Jerônimo',
                content: "assets/timelineimgs/jeronimo.jpg",
                icon: 'calendar',
                time: { title: 'sec IV' }
            },
            {
                title: 'Santo Ambrósio',
                content: "assets/timelineimgs/ambrosio.jpg",
                icon: 'calendar',
                time: { title: 'sec IV' }
            },
            {
                title: 'Santo Agostinho',
                content: "assets/timelineimgs/agostinho.jpg",
                icon: 'calendar',
                time: { title: 'sec IV' }
            },
            {
                title: 'Claudiano',
                content: "assets/timelineimgs/claudiano.jpg",
                icon: 'calendar',
                time: { title: 'sec IV' }
            },
            {
                title: 'Prudêncio',
                content: "assets/timelineimgs/prudencio.jpg",
                icon: 'calendar',
                time: { title: 'séc. IV' }
            },
            {
                title: 'Efrém da Síria',
                content: "assets/timelineimgs/efrem.jpg",
                icon: 'calendar',
                time: { title: 'séc IV' }
            },
            {
                title: 'Agathias',
                content: "assets/timelineimgs/agathias.jpg",
                icon: 'calendar',
                time: { title: 'séc. VI' }
            },
            {
                title: 'João Malala',
                content: "assets/timelineimgs/malalas.jpg",
                icon: 'calendar',
                time: { title: '560' }
            },
            {
                title: 'André de Creta',
                content: "assets/timelineimgs/andre.jpg",
                icon: 'calendar',
                time: { title: 'sec VII' }
            },
            {
                title: 'João Damasceno',
                content: "assets/timelineimgs/damasceno.jpg",
                icon: 'calendar',
                time: { title: 'sec VII' }
            },
            {
                title: 'Alcuíno de York',
                content: "assets/timelineimgs/alcuino.jpg",
                icon: 'calendar',
                time: { title: 'sec VIII' }
            },
            {
                title: 'Beda',
                content: "assets/timelineimgs/beda.jpg",
                icon: 'calendar',
                time: { title: 'sec VIII' }
            },
            {
                title: 'Cynewulf',
                content: "assets/timelineimgs/cynewulf.jpg",
                icon: 'calendar',
                time: { title: 'sec IX' }
            },
            {
                title: 'Photios (“Myrobiblion”)',
                content: "assets/timelineimgs/photios.jpg",
                icon: 'calendar',
                time: { title: 'séc. IX' }
            },
            {
                title: 'Beowolf (anônimo)',
                content: "assets/timelineimgs/beowolf.jpg",
                icon: 'calendar',
                time: { title: '1000' }
            },
            {
                title: 'Godofredo de Monmouth',
                content: "assets/timelineimgs/godofredo.jpg",
                icon: 'calendar',
                time: { title: '1130' }
            },
            {
                title: 'Prodromos',
                content: "assets/timelineimgs/teodoro.jpg",
                icon: 'calendar',
                time: { title: 'sec XII' }
            },
            {
                title: 'Michel Psellos',
                content: "assets/timelineimgs/michel.jpg",
                icon: 'calendar',
                time: { title: 'sec XII' }
            },
            {
                title: 'Allain de Lille',
                content: "assets/timelineimgs/allain.jpg",
                icon: 'calendar',
                time: { title: 'sec XII' }
            },
            {
                title: 'Poema del Cid (anônimo)',
                content: "assets/timelineimgs/cid.jpg",
                icon: 'calendar',
                time: { title: '1140' }
            },
            {
                title: 'Canção dos Nibelungos (anônimo)',
                content: "assets/timelineimgs/nibelungos.jpg",
                icon: 'calendar',
                time: { title: '1180' }
            },
            {
                title: 'Snorri Sturluson)',
                content: "assets/timelineimgs/snorri.jpg",
                icon: 'calendar',
                time: { title: 'sec XIII' }
            },
            {
                title: 'Saxão, o Gramatico',
                content: "assets/timelineimgs/saxao.jpg",
                icon: 'calendar',
                time: { title: 'sec XIII' }
            },
        ];
    }
    Timeline.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimelinePage');
    };
    Timeline = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timeline',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\timeline\timeline.html"*/'<ion-header>\n\n  <ion-navbar color="light">\n\n    <button ion-button menuToggle="left" left>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n\n    <button ion-button menuToggle="right" right>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n  <ion-card>\n\n    <timeline endIcon="call">\n\n      <timeline-item *ngFor="let item of items">\n\n        <timeline-time [time]="item.time"></timeline-time>\n\n        <ion-icon [name]="item.icon"></ion-icon>\n\n        <ion-card width="400">\n\n          <ion-card-header align="center">\n\n            {{item.title}}\n\n          </ion-card-header>\n\n\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                <img width="100%" height="100%" src="{{item.content}}">\n\n              </ion-col>\n\n              <ion-col>\n\n                teste\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n\n\n        </ion-card>\n\n      </timeline-item>\n\n    </timeline>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\timeline\timeline.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Timeline);
    return Timeline;
}());

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paradidaticos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__(199);
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
        var BliUrl = "http://portal.ani.org.br/Corpore.Net/Main.aspx?ActionID=BibConsultaInternaActionWeb&SelectedMenuIDKey=ItemPesquisarReservar";
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
            selector: 'page-paradidaticos',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\paradidaticos\paradidaticos.html"*/'<ion-header>\n\n  <ion-navbar color="light">\n\n    <button ion-button menuToggle="left" left>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n\n    <button ion-button menuToggle="right" right>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n  <ion-card>\n\n    <ion-list class="accordion-list">\n\n      <!-- First Level -->\n\n      <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n\n        <!-- Toggle Button -->\n\n        <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n          <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n\n          <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n\n          {{ item.name }}\n\n        </button>\n\n\n\n        <ion-card *ngIf="item.children && item.open" no-lines>\n\n          <!-- Second Level -->\n\n          <!-- Toggle Button -->\n\n          <!-- Direct Add Button as Fallback -->\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-6 col-md-4 col-xl-3  *ngFor="let child of item.children; let j = index" no-lines no-padding class="child-item">\n\n                  <ion-card *ngIf="!child.children">\n\n                    <img (click)="openModal(child.name,  child.author,child.information, child.src)" src=\'{{child.src}}\'>\n\n                  </ion-card>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n\n\n        \n\n\n\n        </ion-card>\n\n      </ion-list-header>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\paradidaticos\paradidaticos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], Paradidaticos);
    return Paradidaticos;
}());

//# sourceMappingURL=paradidaticos.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Projetos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(198);
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
            selector: 'page-projetos',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\projetos\projetos.html"*/'<ion-header>\n\n\n\n    \n\n\n\n  <ion-navbar color="light">\n\n    <button ion-button menuToggle="left" left>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n\n    <button ion-button menuToggle="right" right>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button> \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="main-content">\n\n  \n\n  <ion-card>\n\n    <ion-list class="accordion-list">\n\n      <!-- First Level -->\n\n      <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n\n        <!-- Toggle Button -->\n\n        <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n            \n\n          <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n\n          <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n\n          {{ item.name }}\n\n        </button>\n\n\n\n        <ion-list *ngIf="item.children && item.open" no-lines>\n\n          <!-- Second Level -->\n\n          <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n\n            <!-- Toggle Button -->\n\n            <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n\n              <ion-icon item-left name="arrow-forward" *ngIf="!child.open"></ion-icon>\n\n              <ion-icon item-left name="arrow-down" *ngIf="child.open"></ion-icon>\n\n              {{ child.name }}\n\n            </button>\n\n\n\n            <!-- Direct Add Button as Fallback -->\n\n            <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n\n              <h2>{{ child.name }}</h2>\n\n              <p>{{ child.information }}</p>\n\n              <ion-slides loop="true" slidesPerView="2">\n\n                <ion-slide *ngFor="let child of child.imgsrc; let k = index">\n\n                  <img src="{{ child.src }}"> \n\n                </ion-slide>\n\n                \n\n                \n\n                </ion-slides>\n\n                \n\n            </ion-item>\n\n            <div id="fb-root"></div>\n\n            <script>(function(d, s, id) {\n\n              var js, fjs = d.getElementsByTagName(s)[0];\n\n              if (d.getElementById(id)) return;\n\n              js = d.createElement(s); js.id = id;\n\n              js.src = \'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.1&appId=699718867062777&autoLogAppEvents=1\';\n\n              fjs.parentNode.insertBefore(js, fjs);\n\n            }(document, \'script\', \'facebook-jssdk\'));</script>\n\n        \n\n        <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5"></div>\n\n          </ion-list-header>\n\n         \n\n      \n\n      \n\n\n\n        </ion-list>\n\n      </ion-list-header>\n\n    </ion-list>\n\n  </ion-card>\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\projetos\projetos.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object])
    ], Projetos);
    return Projetos;
    var _a, _b;
}());

//# sourceMappingURL=projetos.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feira; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
        this.feiras = "2018";
    }
    Feira = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feira',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\feira\feira.html"*/'<ion-header>\n\n  <ion-navbar color="light">\n\n    <button ion-button menuToggle="left" left>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n\n    <button ion-button menuToggle="right" right>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n\n\n  <ion-segment [(ngModel)]="feiras">\n\n    <ion-segment-button value="2018">\n\n      2018\n\n    </ion-segment-button>\n\n    <ion-segment-button value="2019">\n\n      2019\n\n    </ion-segment-button>\n\n    <ion-segment-button value="2020">\n\n      2020\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n\n\n  <div [ngSwitch]="feiras">\n\n\n\n    <div *ngSwitchCase="2018">\n\n      <ion-card>\n\n\n\n        <img class="banner" src="assets/imgs/banner-feira.jpg">\n\n\n\n      </ion-card>\n\n      <ion-card class="card-feira">\n\n        <ion-card-header class="main-text">\n\n          <h1> FEIRA LITERÁRIA 2018</h1>\n\n        </ion-card-header>\n\n\n\n        <ion-card-content class="main-text">\n\n          <br>\n\n          <p>A Feira Literária “Ler para pensar e construir...” visa estimular a leitura e produção literária e\n\n            artística\n\n            como\n\n            um todo dos alunos, contribuindo para a formação de cidadãos e leitores conscientes de sua origem e do\n\n            patrimônio\n\n            cultural brasileiro herdado. Por meio de eventos diferenciados e integrados que enfatizam a criatividade,\n\n            os\n\n            sonhos\n\n            e a fantasia, a feira oferece oportunidades para o desenvolvimento das competências de leitura e escrita.\n\n          </p>\n\n          <br>\n\n          <p>Neste ano de 2018, a Feira Literária homenageou a escritora Ruth Rocha, que, em 2017, completava 50 anos\n\n            de\n\n            carreira.\n\n            A justa homenagem se apoia na capacidade da autora introduzir para crianças com sutileza e humor problemas\n\n            de\n\n            cunho\n\n            social e políticos, tais como a injustiça estrutural, frequentemente inspirada no estilo de Monteiro\n\n            Lobato.\n\n          </p>\n\n          <br>\n\n          <p>Diversas vivências pedagógicas fornecidas em momentos e ambientes distintos tem por objetivo criar um\n\n            pequeno\n\n            complexo\n\n            cultural, onde cada leitor de mundo possa se familiarizar com a literatura infanto-juvenil e nela se sentir\n\n            reconhecido.\n\n            Ao contemplar neste formato os diferentes gêneros textuais, como narrativas, poemas, convites, teatro,\n\n            biografia,\n\n            memórias e fábulas, facilita-se a orientação para o prazer da leitura, para a percepção de quem descobre\n\n            ali\n\n            outros\n\n            lugares, outros tempos, outros jeitos de agir e de ser, outra ótica.</p>\n\n          <br>\n\n          <p>O Projeto Feira Literária é desenvolvido por todos os alunos do 2º ano EF à 3º série do Ensino Médio,\n\n            durante\n\n            o\n\n            mês de março e abril com culminância prevista para os dias 26, 27 e 28 de abril de 2018. Para tanto, serão\n\n            envolvidos\n\n            todos os professores, coordenadores pedagógicos, auxiliares de coordenação, bibliotecários e auxiliares de\n\n            turma.\n\n            As atividades propiciadas são: </p>\n\n          <br>\n\n          <p>Bate-papo com autores, contação de histórias, oficinas, exposição dialogada, exposição de HQ, leitura,\n\n            interpretação\n\n            e análise de textos previamente escolhidos, projeção de imagens dos personagens, músicas, cordéis,\n\n            produções\n\n            coletivas\n\n            e individuais de desenhos, exposição de trabalho em mural, tematização de vídeos, produção de varais\n\n            literários,\n\n            troca-troca de livros, dramatização, origami, dobraduras, apresentações musicais com ênfase literária,\n\n            visita à\n\n            biblioteca,\n\n            café literário, clube literário, preparação para a vida universitária e outras atividades.</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <ion-slides loop="true" slidesPerView="1">\n\n          <ion-slide>\n\n            <img class="banner" src="/assets/feiras/2018/ABERTURA DA FEIRA LITERÁRIA.jpg">\n\n          </ion-slide>\n\n          \n\n        </ion-slides>\n\n      </ion-card>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="2019">\n\n        <ion-card>\n\n\n\n            <img class="banner" src="assets/imgs/banner-feira.jpg">\n\n    \n\n          </ion-card>\n\n          <ion-card class="card-feira">\n\n            <ion-card-header class="main-text">\n\n              <h1> FEIRA LITERÁRIA 2019</h1>\n\n            </ion-card-header>\n\n    \n\n            <ion-card-content class="main-text">\n\n              <br>\n\n              <p>A Feira Literária “Ler para pensar e construir...” visa estimular a leitura e produção literária e\n\n                artística\n\n                como\n\n                um todo dos alunos, contribuindo para a formação de cidadãos e leitores conscientes de sua origem e do\n\n                patrimônio\n\n                cultural brasileiro herdado. Por meio de eventos diferenciados e integrados que enfatizam a criatividade,\n\n                os\n\n                sonhos\n\n                e a fantasia, a feira oferece oportunidades para o desenvolvimento das competências de leitura e escrita.\n\n              </p>\n\n              <br>\n\n              <p>Neste ano de 2018, a Feira Literária homenageou a escritora Ruth Rocha, que, em 2017, completava 50 anos\n\n                de\n\n                carreira.\n\n                A justa homenagem se apoia na capacidade da autora introduzir para crianças com sutileza e humor problemas\n\n                de\n\n                cunho\n\n                social e políticos, tais como a injustiça estrutural, frequentemente inspirada no estilo de Monteiro\n\n                Lobato.\n\n              </p>\n\n              <br>\n\n              <p>Diversas vivências pedagógicas fornecidas em momentos e ambientes distintos tem por objetivo criar um\n\n                pequeno\n\n                complexo\n\n                cultural, onde cada leitor de mundo possa se familiarizar com a literatura infanto-juvenil e nela se sentir\n\n                reconhecido.\n\n                Ao contemplar neste formato os diferentes gêneros textuais, como narrativas, poemas, convites, teatro,\n\n                biografia,\n\n                memórias e fábulas, facilita-se a orientação para o prazer da leitura, para a percepção de quem descobre\n\n                ali\n\n                outros\n\n                lugares, outros tempos, outros jeitos de agir e de ser, outra ótica.</p>\n\n              <br>\n\n              <p>O Projeto Feira Literária é desenvolvido por todos os alunos do 2º ano EF à 3º série do Ensino Médio,\n\n                durante\n\n                o\n\n                mês de março e abril com culminância prevista para os dias 26, 27 e 28 de abril de 2018. Para tanto, serão\n\n                envolvidos\n\n                todos os professores, coordenadores pedagógicos, auxiliares de coordenação, bibliotecários e auxiliares de\n\n                turma.\n\n                As atividades propiciadas são: </p>\n\n              <br>\n\n              <p>Bate-papo com autores, contação de histórias, oficinas, exposição dialogada, exposição de HQ, leitura,\n\n                interpretação\n\n                e análise de textos previamente escolhidos, projeção de imagens dos personagens, músicas, cordéis,\n\n                produções\n\n                coletivas\n\n                e individuais de desenhos, exposição de trabalho em mural, tematização de vídeos, produção de varais\n\n                literários,\n\n                troca-troca de livros, dramatização, origami, dobraduras, apresentações musicais com ênfase literária,\n\n                visita à\n\n                biblioteca,\n\n                café literário, clube literário, preparação para a vida universitária e outras atividades.</p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n          <ion-card>\n\n            <ion-slides loop="true" slidesPerView="2">\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/ABERTURA DA FEIRA LITERÁRIA.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/BATE PAPO ATUALIDADES.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/BATE PAPO LITERÁRIO 1.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/BATE PAPO LITERÁRIO.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/CAFÉ FILOSÓFICO.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/ENTREI NA UNIVERSIDADE, E AGORA!.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/OFICINA DE ESCRITA CRÔNICA.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/Oficina de Fanzine.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/QUIOSQUE LITERÁRIO -  POESIAS E ZINES.jpg">\n\n              </ion-slide>\n\n            </ion-slides>\n\n          </ion-card>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="2020">\n\n        <ion-card>\n\n\n\n            <img class="banner" src="assets/imgs/banner-feira.jpg">\n\n    \n\n          </ion-card>\n\n          <ion-card class="card-feira">\n\n            <ion-card-header class="main-text">\n\n              <h1> FEIRA LITERÁRIA 2020</h1>\n\n            </ion-card-header>\n\n    \n\n            <ion-card-content class="main-text">\n\n              <br>\n\n              <p>A Feira Literária “Ler para pensar e construir...” visa estimular a leitura e produção literária e\n\n                artística\n\n                como\n\n                um todo dos alunos, contribuindo para a formação de cidadãos e leitores conscientes de sua origem e do\n\n                patrimônio\n\n                cultural brasileiro herdado. Por meio de eventos diferenciados e integrados que enfatizam a criatividade,\n\n                os\n\n                sonhos\n\n                e a fantasia, a feira oferece oportunidades para o desenvolvimento das competências de leitura e escrita.\n\n              </p>\n\n              <br>\n\n              <p>Neste ano de 2018, a Feira Literária homenageou a escritora Ruth Rocha, que, em 2017, completava 50 anos\n\n                de\n\n                carreira.\n\n                A justa homenagem se apoia na capacidade da autora introduzir para crianças com sutileza e humor problemas\n\n                de\n\n                cunho\n\n                social e políticos, tais como a injustiça estrutural, frequentemente inspirada no estilo de Monteiro\n\n                Lobato.\n\n              </p>\n\n              <br>\n\n              <p>Diversas vivências pedagógicas fornecidas em momentos e ambientes distintos tem por objetivo criar um\n\n                pequeno\n\n                complexo\n\n                cultural, onde cada leitor de mundo possa se familiarizar com a literatura infanto-juvenil e nela se sentir\n\n                reconhecido.\n\n                Ao contemplar neste formato os diferentes gêneros textuais, como narrativas, poemas, convites, teatro,\n\n                biografia,\n\n                memórias e fábulas, facilita-se a orientação para o prazer da leitura, para a percepção de quem descobre\n\n                ali\n\n                outros\n\n                lugares, outros tempos, outros jeitos de agir e de ser, outra ótica.</p>\n\n              <br>\n\n              <p>O Projeto Feira Literária é desenvolvido por todos os alunos do 2º ano EF à 3º série do Ensino Médio,\n\n                durante\n\n                o\n\n                mês de março e abril com culminância prevista para os dias 26, 27 e 28 de abril de 2018. Para tanto, serão\n\n                envolvidos\n\n                todos os professores, coordenadores pedagógicos, auxiliares de coordenação, bibliotecários e auxiliares de\n\n                turma.\n\n                As atividades propiciadas são: </p>\n\n              <br>\n\n              <p>Bate-papo com autores, contação de histórias, oficinas, exposição dialogada, exposição de HQ, leitura,\n\n                interpretação\n\n                e análise de textos previamente escolhidos, projeção de imagens dos personagens, músicas, cordéis,\n\n                produções\n\n                coletivas\n\n                e individuais de desenhos, exposição de trabalho em mural, tematização de vídeos, produção de varais\n\n                literários,\n\n                troca-troca de livros, dramatização, origami, dobraduras, apresentações musicais com ênfase literária,\n\n                visita à\n\n                biblioteca,\n\n                café literário, clube literário, preparação para a vida universitária e outras atividades.</p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n          <ion-card>\n\n            <ion-slides loop="true" slidesPerView="2">\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/ABERTURA DA FEIRA LITERÁRIA.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/BATE PAPO ATUALIDADES.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/BATE PAPO LITERÁRIO 1.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/BATE PAPO LITERÁRIO.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/CAFÉ FILOSÓFICO.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/ENTREI NA UNIVERSIDADE, E AGORA!.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/OFICINA DE ESCRITA CRÔNICA.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/Oficina de Fanzine.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/QUIOSQUE LITERÁRIO -  POESIAS E ZINES.jpg">\n\n              </ion-slide>\n\n            </ion-slides>\n\n          </ion-card>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\feira\feira.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Feira);
    return Feira;
}());

//# sourceMappingURL=feira.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fale; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-fale',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\fale\fale.html"*/'<ion-header>\n\n  <ion-navbar color="light">\n\n    <button ion-button menuToggle="left" left>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n\n    <button ion-button menuToggle="right" right>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n  <ion-card>\n\n    <div id="after_submit"></div>\n\n    <form name="formteste" action="" method="post">\n\n\n\n      <h1>Contato</h1>\n\n      \n\n      <p class="nome">\n\n       <input type="text" name="nome" placeholder="informe seu nome" required="required">\n\n       </p>\n\n      \n\n      <p class="email">\n\n       <input type="email" name="email" placeholder="informe seu email" required="required">\n\n       </p>\n\n      \n\n      <p class="assunto">\n\n       <input type="text" name="assunto" placeholder="informe o assunto" required="required">\n\n       </p>\n\n      \n\n      <p class="mensagem">\n\n       <textarea name="mensagem" placeholder="deixe sua mensagem"></textarea>\n\n       </p>\n\n      \n\n      <p class="enviar">\n\n       <input type="submit" name="enviar" value="Enviar">\n\n       </p>\n\n      \n\n      </form>\n\n      \n\n\n\n   \n\n  \n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\fale\fale.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Fale);
    return Fale;
}());

//# sourceMappingURL=fale.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_timeline_timeline__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_paradidaticos_paradidaticos__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_projetos_projetos__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_feira_feira__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_fale_fale__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_timeline_timeline__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__toverux_ngx_sweetalert2__ = __webpack_require__(278);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_timeline_timeline__["a" /* Timeline */],
                __WEBPACK_IMPORTED_MODULE_10__pages_paradidaticos_paradidaticos__["a" /* Paradidaticos */],
                __WEBPACK_IMPORTED_MODULE_11__pages_projetos_projetos__["a" /* Projetos */],
                __WEBPACK_IMPORTED_MODULE_12__pages_feira_feira__["a" /* Feira */],
                __WEBPACK_IMPORTED_MODULE_13__pages_fale_fale__["a" /* Fale */],
                __WEBPACK_IMPORTED_MODULE_14__components_timeline_timeline__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_timeline_timeline__["b" /* TimelineItemComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_timeline_timeline__["c" /* TimelineTimeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_15__toverux_ngx_sweetalert2__["a" /* SweetAlert2Module */].forRoot({
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
                __WEBPACK_IMPORTED_MODULE_9__pages_timeline_timeline__["a" /* Timeline */],
                __WEBPACK_IMPORTED_MODULE_10__pages_paradidaticos_paradidaticos__["a" /* Paradidaticos */],
                __WEBPACK_IMPORTED_MODULE_11__pages_projetos_projetos__["a" /* Projetos */],
                __WEBPACK_IMPORTED_MODULE_12__pages_feira_feira__["a" /* Feira */],
                __WEBPACK_IMPORTED_MODULE_13__pages_fale_fale__["a" /* Fale */]
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

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_timeline_timeline__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_paradidaticos_paradidaticos__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_projetos_projetos__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_feira_feira__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_fale_fale__ = __webpack_require__(202);
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
    MyApp.prototype.FeiraButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_feira_feira__["a" /* Feira */]);
    };
    MyApp.prototype.FaleButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_fale_fale__["a" /* Fale */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\app\app.html"*/'<ion-split-pane>\n\n    <ion-menu swipeEnabled="false" side="left" [content]="mycontent" type="overlay" width="200">\n\n        <ion-header>\n\n\n\n            <ion-toolbar color="light">\n\n                <img class="footer" src="assets/imgs/brand.jpg" max-width="50%">\n\n            </ion-toolbar>\n\n        </ion-header>\n\n        <ion-content class="menu-left">\n\n\n\n\n\n\n\n            <ion-list>\n\n                <button ion-button mode="md" full round color="primary" (click)="HomeButton()"> Home</button>\n\n                <button ion-button full round color="primary" (click)="TimelineButton()"> Linha do Tempo</button>\n\n                <button ion-button full round color="primary" (click)="ParadidaticosButton()"> Paradidaticos</button>\n\n                <button ion-button full round color="primary" (click)="ProjetosButton()"> Projetos</button>\n\n                <button ion-button full round color="primary" (click)="FeiraButton()"> Feira</button>\n\n\n\n            </ion-list>\n\n\n\n            <img src="assets/imgs/rebeca.jpg">\n\n\n\n        </ion-content>\n\n        <ion-footer>\n\n            <button ion-button full round color="primary" (click)="FaleButton()"> Fale Conosco</button>\n\n\n\n        </ion-footer>\n\n    </ion-menu>\n\n\n\n    <ion-menu swipeEnabled="false" side="right" [content]="mycontent" type="overlay" width="200">\n\n        <ion-header>\n\n\n\n            <ion-toolbar color="light">\n\n\n\n            </ion-toolbar>\n\n        </ion-header>\n\n        <ion-content class="menu-right">\n\n\n\n\n\n\n\n            <ion-list>\n\n                <ion-card>\n\n                    <ion-card-content>\n\n                        O programa Circuito Literário em Rede tem como missão promover a formação literária de toda a comunidade escolar do Colégio\n\n                        Diocesano </ion-card-content>\n\n                </ion-card>\n\n                <ion-card>\n\n                    <ion-card-content>\n\n                        A Feira Literária “Ler para pensar e construir...” visa estimular a leitura e produção literária e artística como um todo\n\n                        dos alunos </ion-card-content>\n\n                </ion-card>\n\n\n\n\n\n                <img src="assets/imgs/dio.jpg">\n\n\n\n            </ion-list>\n\n\n\n        </ion-content>\n\n\n\n    </ion-menu>\n\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n    <ion-nav [root]="rootPage" #mycontent swipeBackEnabled="false" main></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
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
            selector: 'timeline',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\components\timeline\timeline.html"*/'<div class="timeline">\n\n  <ng-content></ng-content>\n\n\n\n  <timeline-item>\n\n    <ion-icon class="" [name]="endIcon"></ion-icon>\n\n  </timeline-item>\n\n\n\n</div>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\components\timeline\timeline.html"*/
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

/***/ })

},[203]);
//# sourceMappingURL=main.js.map