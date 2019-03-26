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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(195);
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
    HomePage.prototype.login = function () {
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="light">\n\n    <button ion-button menuToggle="left" left>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n\n    <button ion-button menuToggle="right" right>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n  <ion-card>\n\n\n\n\n\n    <img src="assets/imgs/Biblioteca.jpg">\n\n\n\n    \n\n\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Missão\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      A Biblioteca Professora Teresa Filpi Sampaio tem por missão ser um espaço de estudo e construção do conhecimento,\n\n      a fim de\n\n      cooperar com a dinâmica da escola, despertar o interesse intelectual, favorecer o enriquecimento cultural e\n\n      incentivar\n\n      o hábito da leitura.\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Localização\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Localização: Rua 13 de Maio, 2° piso<br> Ramal 442<br> Horário de funcionamento: de 8h às 18h, de segunda à sexta\n\n      e\n\n      aos sábados, das 8h às 12h<br> Bibliotecária Bruna Dayane <br> E-mail bibliotecaria@diocesano.g12.br<br>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Serviços\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Acervo; Espaço de estudo em grupo e cabines individuais; Projetos literários; Acesso à Internet; Serviço de\n\n      empréstimo e\n\n      devolução de exemplares. Cadastro: pai ou responsável deverá comparecer à biblioteca para realizar o cadastro do\n\n      aluno,\n\n      portando o documento de identificação. Empréstimo é efetuado por todos os funcionários da Biblioteca através do\n\n      sistema.\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Serviço de empréstimo\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      O aluno poderá solicitar o empréstimo de até dois exemplares conforme o prazo de devolução para cada tipo de\n\n      acervo:<br> Revista\n\n      - 2 dias;<br> Acervo Geral - 5 dias;<br> Acervo Geral(Piauí)- 10 dias;<br> Literatura - 10 dias; Literatura\n\n      Piauiense-10\n\n      dias;\n\n      <br> Braile - 10 dias;<br> Caso a devolução não seja realizada na data prevista, será gerada uma multa para cada\n\n      exemplar\n\n      no valor de R$3,00 por dia.<br>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Sala de estudo em grupo\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Para o uso da sala de estudo em grupo, o agendamento deverá ser realizado com 24 horas de antecedência, por grupo\n\n      de no mínimo\n\n      3 alunos e no máximo 8 alunos, na sala da Coordenação, nos horários de 8h10 às 10h10 e de 10h20 às 12h20 para o\n\n      turno\n\n      da manhã, e das 14h às 15h50 e das 16h às 17h50 pela tarde, de segunda a sexta.<br> O aluno deverá estar vestindo\n\n      o fardamento completo e cumprir o mesmo regulamento do manual do aluno. </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-header>\n\n    <ion-navbar>\n\n      <ion-title>Home</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n    \n\n  <div id="fb-root"></div>\n\n  <script>\n\n    window.fbAsyncInit = function() {\n\n      FB.init({\n\n        appId      : \'{your-app-id}\',\n\n        cookie     : true,\n\n        xfbml      : true,\n\n        version    : \'{api-version}\'\n\n      });\n\n        \n\n      FB.AppEvents.logPageView();   \n\n        \n\n    };\n\n  \n\n    (function(d, s, id){\n\n       var js, fjs = d.getElementsByTagName(s)[0];\n\n       if (d.getElementById(id)) {return;}\n\n       js = d.createElement(s); js.id = id;\n\n       js.src = "https://connect.facebook.net/en_US/sdk.js";\n\n       fjs.parentNode.insertBefore(js, fjs);\n\n     }(document, \'script\', \'facebook-jssdk\'));\n\n  </script>\n\n  \n\n\n\n  \n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
                text: "Poeta grego de \u201CTeogonia\u201D e \u201CO Trabalho e os Dias\u201D, obras fundamentais para a consolida\u00E7\u00E3o da religi\u00E3o mitol\u00F3gica grega.",
                content: "assets/timelineimgs/Hesiodo.png",
                icon: 'calendar',
                time: { title: 'VIII aC' }
            },
            {
                title: 'Esopo',
                content: "assets/timelineimgs/esopo.jpg",
                text: 'Grego criador do gênero das Fábulas, dentre as quais “A formiga e a cigarra”, “A raposa e as uvas”, “A lebre e a tartaruga” e outras.',
                icon: 'calendar',
                time: { title: 'VII aC' }
            },
            {
                title: 'Bíblia',
                content: "assets/timelineimgs/testamento.jpg",
                text: 'Obra que é uma compilação de 46 livros considerados divinos para o judaísmo e o cristianismo. Trata das leis de Deus, de história (tendo como mote o povo hebreu), sabedoria e profecias. A Igreja Católica utiliza a versão “Septuaginta”. ',
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
                text: 'Dramaturgo grego, pai da “tragédia”. Escreveu “Prometeu acorrentado”, “as suplicantes”, “Sete contra Tebas”, “Oresteia” e outras.',
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
                text: 'Poeta trágico grego, completa tríade com Ésquilo e Sófocles, sendo o mais jovem dos três grandes expoentes da tragédia grega clássica. Autor, dentre outras, de “Medeia”, “Electra” e “As Troianas”.',
                icon: 'calendar',
                time: { title: '438 aC' }
            },
            {
                title: 'Aristófanes',
                content: "assets/timelineimgs/aristofanes.jpg",
                text: 'Dramaturgo grego e maior representante da comédia antiga. Escreveu “As Vespas”, “Lisístratas” e “As nuvens”, e nesta última, apesar de ótima comédia, critica injustamente Sócrates, seu contemporâneo.',
                icon: 'calendar',
                time: { title: '425 aC' }
            },
            {
                title: 'Calímaco',
                content: "assets/timelineimgs/calimaco.jpg",
                text: 'Poeta, bibliotecário, gramático e mitógrafo grego. Notório por ter incrivelmente escrito mais de 800 obras, das quais apenas uma mínima parte nos chegou, e por ter sido o segundo diretor da Biblioteca de Alexandria, depois de Zenódoto de Éfeso. Seus poemas influenciaram Ovídio.',
                icon: 'calendar',
                time: { title: 'III aC' }
            },
            {
                title: 'Teócrito',
                content: "assets/timelineimgs/teocrito.jpg",
                text: 'Poeta grego de maior destaque no período helenístico. Fundador da poesia bucólica, e teve grande influência sobre Virgílio.',
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
                text: 'Maior erudito romano. Escreveu mais de 500 obras filosóficas, teológicas e científicas, das quais quase nada nos chegou. Apesar de não ser um literato, escreveu também sobre a língua latina, e sua importância cultural justifica a menção.',
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
                text: 'Maior poeta romano. Autor do clássico “Eneida”, o épico nacional de Roma por excelência. Base fundamental para “Os Lusíadas” de Camões.',
                icon: 'calendar',
                time: { title: '42 aC' }
            },
            {
                title: 'Horácio',
                content: "assets/timelineimgs/horacio.jpg",
                text: 'Poeta lírico e satírico romano, além de filósofo epicurista. É conhecido por ser um dos maiores poetas da Roma Antiga. Escreveu sátiras, odes, epístolas e iambus.',
                icon: 'calendar',
                time: { title: '35 aC' }
            },
            {
                title: 'Ovídio',
                content: "assets/timelineimgs/ovidio.jpg",
                text: 'Poeta romano mais conhecido como o autor de Heroides, Amores, e Ars Amatoria, três grandes coleções de poesia erótica, e Metamorfoses, um poema mitológico. É tradicionalmente colocado junto a Virgílio e Horário como o triunvirato canônico da poesia latina. Será curiosamente o autor latino mais lido no século XII.',
                icon: 'calendar',
                time: { title: '19 aC' }
            },
            {
                title: 'Sêneca',
                content: "assets/timelineimgs/seneca.jpg",
                text: 'Filósofo estoico, dramaturgo de sucesso, estadista famoso e exemplo moral. Dante o coloca entre os sumos escritores e heróis antigos. Sua obra mais importante são as “Epístolas Morais”, onde sugere uma fraternidade universal que se aproxima de ideais cristãos.',
                icon: 'calendar',
                time: { title: 'sec I' }
            },
            {
                title: 'Estácio',
                content: "assets/timelineimgs/estacio.jpg",
                text: 'Conhecido principalmente por seu poema épico, Tebaida, que narra o conflito entre os filhos de Édipo pelo trono de Tebas, Estácio foi um aristocrata amante das letras e da filosofia. Ousado, foi o primeiro poeta romano que descreveu longamente em seus poemas outras obras de arte e arquitetura, tendo portanto grande valor para reconstrução histórico',
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
                text: 'Um dos principais membros da patrística latina. Escritor de fôlego, é um dos pais e ápices do gênero apologético. Escreveu também muitas obras no estilo de “embates” teológicos e polêmicas.',
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
                text: 'Santo que batizou Santo Agostinho. Um dos quatro doutores originais da Igreja, que se notabiliza na história da literatura por seus hinos e sobretudo pela invenção da rima.',
                icon: 'calendar',
                time: { title: 'sec IV' }
            },
            {
                title: 'Santo Agostinho',
                content: "assets/timelineimgs/agostinho.jpg",
                text: 'Maior gênio filosófico da Igreja. Sua obra “Confissões” foi modelo para muitas abordagens posteriores do gênero auto-biográfico e para o aprofundamento psicológico de personagens.',
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
                text: 'Considerado o maior poeta romano cristão da Antiguidade Tardia. A poesia de Prudêncio está influenciada por autores antigos cristãos como Tertuliano e Santo Ambrósio, assim como pela Bíblia e as atas dos mártires. Também tomou por modelo literário poetas pagãos como Virgílio. Sua obra Psychomachia foi importante fonte de inspiração para a literatura alegórica da Idade Média, e até para modernos escritores como Johnatan Swift.',
                icon: 'calendar',
                time: { title: 'séc. IV' }
            },
            {
                title: 'Efrém da Síria',
                content: "assets/timelineimgs/efrem.jpg",
                text: 'Doutor da Igreja, prolífico autor de mais de 3 milhões de versos. Imensa variedade de poemas, sermões, e sobretudo hinos. Estes hinos estão cheios de um imaginário rico e poético baseado em fontes bíblicas, nas tradições populares, em outras religiões e na filosofia.',
                icon: 'calendar',
                time: { title: 'séc IV' }
            },
            {
                title: 'Agathias',
                content: "assets/timelineimgs/agathias.jpg",
                text: 'Poeta e historiador grego. Escreveu Daphniaca, uma coleção de poemas curtos em hexâmetros sobre "amor e romance" em nove livros. Também escreveu mais de cem epigramas. Suas obras certamente fazem parte da antologia bizantina.',
                icon: 'calendar',
                time: { title: 'séc. VI' }
            },
            {
                title: 'João Malala',
                content: "assets/timelineimgs/malalas.jpg",
                text: 'Um dos primeiros cronistas da história, João Malalas foi artífice bizantino da linguagem coloquial, e escrevia suas observações históricas e de viagens numa maneira informal, visando ao leitor comum. Por isso, atingiu grande popularidade.',
                icon: 'calendar',
                time: { title: '560' }
            },
            {
                title: 'André de Creta',
                content: "assets/timelineimgs/andre.jpg",
                text: 'Grande autor de hinos e criador de uma nova forma de poesia eclesiástica: o Canon.',
                icon: 'calendar',
                time: { title: 'sec VII' }
            },
            {
                title: 'João Damasceno',
                content: "assets/timelineimgs/damasceno.jpg",
                text: 'Monge ortodoxo, apologeta, foi também um dos criadores da poesia “Canon”.',
                icon: 'calendar',
                time: { title: 'sec VII' }
            },
            {
                title: 'Alcuíno de York',
                content: "assets/timelineimgs/alcuino.jpg",
                text: 'Maior erudito do Renascimento Carolíngio, lecionou por 15 anos na Catedral de York, onde criou uma das melhores bibliotecas da Europa e um dos maiores centros de saber. Conselheiro de Carlos Magno, dominou todas as 7 artes liberais, e idealizou as primeiras escolas públicas.',
                icon: 'calendar',
                time: { title: 'sec VIII' }
            },
            {
                title: 'Beda',
                content: "assets/timelineimgs/beda.jpg",
                text: 'Historiador, linguista, tradutor e teólogo, o “Venerável Beda” deu aula de poesia e gramática, destacando-se nesta área pela obra “Da arte métrica”, baseada nas contribuições de Élio Donato e Sérvio. Este livro se tornou o texto padrão para o ensino do verso latino por muitos séculos. Beda também escreveu sobre retórica bíblica.',
                icon: 'calendar',
                time: { title: 'sec VIII' }
            },
            {
                title: 'Cynewulf',
                content: "assets/timelineimgs/cynewulf.jpg",
                text: 'É considerado como uma das figuras preeminentes da poesia cristã anglo-saxônica. Alguns de seus famosos textos são o livro de Exeter e o Livro Vercelli. Tolkien escreveu sobre ele: "Havia algo muito remoto, estranho e belo por trás dessas palavras, se eu pudesse compreendê-lo”.',
                icon: 'calendar',
                time: { title: 'sec IX' }
            },
            {
                title: 'Fócio (“Myrobiblion”)',
                content: "assets/timelineimgs/photios.jpg",
                text: 'Patriarca de Constantinopla,  Fócio foi um dos mais cultos homens de sua época, e mereceu a sua fama parte por conta de seus conflitos eclesiásticos, mas também por seu intelecto e obras literárias. Talvez o maior acadêmico de seu tempo, Fócio é um dos responsáveis pela incorporação do humanismo na ortodoxia bizantina como um elemento básico da consciência nacional. Sua obra mais conhecida é “Myriobiblon”, uma coleção de excertos e resumos de 280 volumes de autores clássicos.',
                icon: 'calendar',
                time: { title: 'séc. IX' }
            },
            {
                title: 'Beowolf (anônimo)',
                content: "assets/timelineimgs/beowolf.jpg",
                text: 'Poema épico, marco da literatura medieval, escrito em 3 182 linhas, é o poema mais longo do pequeno conjunto da literatura anglo-saxã. Aborda eventuais acontecimentos e personagens escandinavos do século VI, tendo como figura central o lendário Beowulf. Acredita-se que o poema original possa ter sido escrito antes do século XI. O texto é um registro importante dos valores germânicos pagãos.',
                icon: 'calendar',
                time: { title: '1000' }
            },
            {
                title: 'Godofredo de Monmouth',
                content: "assets/timelineimgs/godofredo.jpg",
                text: 'Famoso por ter escrito “Historia regum Britanniae”, a mais antiga referencia à lenda do Rei Arthur e do rei Lear, sucesso à época.',
                icon: 'calendar',
                time: { title: '1130' }
            },
            {
                title: 'Prodromos',
                content: "assets/timelineimgs/teodoro.jpg",
                text: 'Foi um escritor bizantino, conhecido por sua obra em prosa e poesia, escreveu poemas ocasionais,  peças literárias,  Etiópica de Heliodoro de Emesa, ele escreveu uma novela em verso chamada Rodante e Dosicles.',
                icon: 'calendar',
                time: { title: 'sec XII' }
            },
            {
                title: 'Michel Psellos',
                content: "assets/timelineimgs/michel.jpg",
                text: 'Monge bizantino, brilhante erudito, historiador, filósofo e político. Escreveu crônicas, poemas didáticos sobre gramática e retórica, além tratados historiográficos e científicos em áreas como astronomia, medicina, música, jurisprudência, física e laografia.',
                icon: 'calendar',
                time: { title: 'sec XII' }
            },
            {
                title: 'Allain de Lille',
                content: "assets/timelineimgs/allain.jpg",
                text: 'Teólogo, poeta genial e eruditíssimo. Dois poemas já lhe conferem o direito a um lugar de destaque na literatura latina da Idade Média; um deles, o De planctu naturae, é uma sátira genial sobre os vícios da humanidade. Criou a alegoria da conjugação gramatical, inspiração para Jean de Meung que escreveu “Romance da Rosa”.',
                icon: 'calendar',
                time: { title: 'sec XII' }
            },
            {
                title: 'Poema del Cid (anônimo)',
                content: "assets/timelineimgs/cid.jpg",
                text: 'Peça culminante da literatura medieval épica castelhana e o mais antigo poema épico espanhol completo existente. O poema narra a história do nobre castelhano Rodrigo Diaz de Vivar, herói da reconquista da Espanha contra os mouros. Estes poemas eram cantados em público por menestréis.',
                icon: 'calendar',
                time: { title: '1140' }
            },
            {
                title: 'Canção dos Nibelungos (anônimo)',
                content: "assets/timelineimgs/nibelungos.jpg",
                text: 'É um poema épico escrito na Idade Média chamando  Saga dos Nibelungos.',
                icon: 'calendar',
                time: { title: '1180' }
            },
            {
                title: 'Snorri Sturluson)',
                content: "assets/timelineimgs/snorri.jpg",
                text: 'A autoria da chamada Edda em prosa, um manual de poesia escáldica e uma compilação de lendas, que é a principal fonte literária de mitologia nórdica, e ainda da Heimskringla, uma crónica dos reis noruegueses.',
                icon: 'calendar',
                time: { title: 'sec XIII' }
            },
            {
                title: 'Saxão, o Gramatico',
                content: "assets/timelineimgs/saxao.jpg",
                text: 'É um livro escrito por volta do século XII-XIII pelo escritor e historiador dinamarquês medieval Saxo Grammaticus sobre a História da Dinamarca.',
                icon: 'calendar',
                time: { title: 'sec XIII' }
            },
            {
                title: 'Paio Soares de Taveirós',
                content: "assets/timelineimgs/paio.jpg",
                text: 'Escreveu o texto Canção da Ribeirinha, uma cantiga de amor, considerado o mais antigo texto escrito em galego – português, considerado como marco inicial do Trovadorismo.',
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
                text: 'Foi um cronista considerado iniciador da historiografia portuguesa no período do Humanismo.',
                icon: 'calendar',
                time: { title: 'sec XV' }
            },
            {
                title: 'Garcia de Resende',
                content: "assets/timelineimgs/garcia.jpg",
                text: 'Responsável por organizar a poesia palaciana, estando toda a produção poética ligada ao Cancioneiro geral.',
                icon: 'calendar',
                time: { title: 'sec XV' }
            },
            {
                title: 'Gil Vicente',
                content: "assets/timelineimgs/gilvicente.jpg",
                text: 'Foi um teatrólogo que desenvolveu o teatro popular, no período do Humanismo.',
                icon: 'calendar',
                time: { title: 'sec XVI' }
            },
            {
                title: 'Luís Vaz de Camões ',
                content: "assets/timelineimgs/luizcamoes.jpg",
                text: 'Um grande poeta lírico português do Classicismo, que escreveu o maior poema épico chamado Os Lusíadas.',
                icon: 'calendar',
                time: { title: 'sec XVII' }
            },
            {
                title: 'Pero Vaz de Caminha',
                content: "assets/timelineimgs/perovaz.jpg",
                text: 'Escrivão da armada de Cabral, escreveu a Carta de Pero Vaz de Caminha, documento de valor histórico e de literatura informativa no período das Grandes Navegações.',
                icon: 'calendar',
                time: { title: 'sec XVII' }
            },
            {
                title: 'José de Anchieta ',
                content: "assets/timelineimgs/joseachieta.jpg",
                text: 'Escreveu a primeira gramática Tupi – guarani, poesias como “Poema à Virgem”	, autos como “ o Bem e o  Mal, o Anjo e o Diabo”, no período Barroco.',
                icon: 'calendar',
                time: { title: 'sec XVII' }
            },
            {
                title: 'Bento Teixeira',
                content: "assets/timelineimgs/bentoteixeira.jpg",
                text: 'Escreveu um poema épico chamado Prosopopéia que introduziu o modelo da poesia camoniana na poesia, no período Barroco.',
                icon: 'calendar',
                time: { title: 'sec XVII' }
            },
            {
                title: 'Gregório de Matos',
                content: "assets/timelineimgs/gregoriomatos.jpg",
                text: 'Conhecido com Boca do inferno, é considerado o primeiro poeta brasileiro, escreveu poesias satíricas, religiosas e líricas como “Décimas”, no período Barroco.',
                icon: 'calendar',
                time: { title: 'sec XVII' }
            },
            {
                title: 'Claudio Manuel da Costa',
                content: "assets/timelineimgs/claudiomanuel.png",
                text: 'Escreveu seu livro de poesias “Obras”, um dos marcos históricos que deu início do Arcadismo no Brasil.',
                icon: 'calendar',
                time: { title: 'sec XVIII' }
            },
            {
                title: 'Tomás Antônio Gonzaga',
                content: "assets/timelineimgs/tomasantonio.jpg",
                text: 'Escreveu a obra “ Marília de Dirceu” e “ Cartas Chilenas”, sendo um dos maiores poetas do Arcadismo.',
                icon: 'calendar',
                time: { title: 'sec XVIII' }
            },
            {
                title: 'José de Santa Rita Durão ',
                content: "assets/timelineimgs/josedesantarita.jpg",
                text: 'Escreveu seu poema épico do descobrimento do Brasil chamado “ Caramuru”.',
                icon: 'calendar',
                time: { title: 'sec XVIII' }
            },
        ];
    }
    Timeline.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimelinePage');
    };
    Timeline = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timeline',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\timeline\timeline.html"*/'<ion-header>\n\n  <ion-navbar color="light">\n\n    <button ion-button menuToggle="left" left>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n\n    <button ion-button menuToggle="right" right>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n  <ion-card>\n\n    <timeline endIcon="call">\n\n      <timeline-item *ngFor="let item of items">\n\n        <timeline-time [time]="item.time"></timeline-time>\n\n        <ion-icon [name]="item.icon"></ion-icon>\n\n        <ion-card width="400">\n\n          <ion-card-header align="center">\n\n           {{item.title}}\n\n          </ion-card-header>\n\n\n\n          <ion-grid>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <img width="100%" height="100%" src="{{item.content}}">\n\n                </ion-col>\n\n\n\n                <ion-col align="justify">\n\n                    {{item.text}}\n\n                   \n\n                                      \n\n                </ion-col>\n\n\n\n              </ion-row>\n\n            </ion-grid>\n\n\n\n        </ion-card>\n\n      </timeline-item>\n\n    </timeline>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\timeline\timeline.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Timeline);
    return Timeline;
}());

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paradidaticos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__(200);
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
            selector: 'page-paradidaticos',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\paradidaticos\paradidaticos.html"*/'<ion-header>\n\n  <ion-navbar color="light">\n\n    <button ion-button menuToggle="left" left>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n\n    <button ion-button menuToggle="right" right>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n  <ion-card>\n\n    <ion-list class="accordion-list">\n\n      <!-- First Level -->\n\n      <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n\n        <!-- Toggle Button -->\n\n        <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n          <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n\n          <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n\n          {{ item.name }}\n\n        </button>\n\n\n\n        <ion-card *ngIf="item.children && item.open" no-lines>\n\n          <!-- Second Level -->\n\n          <!-- Toggle Button -->\n\n          <!-- Direct Add Button as Fallback -->\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-6 col-md-4 col-xl-3  *ngFor="let child of item.children; let j = index" no-lines no-padding class="child-item">\n\n                  <ion-card *ngIf="!child.children">\n\n                    <img (click)="openModal(child.name,  child.author,child.information, child.src)" src=\'{{child.src}}\'>\n\n                  </ion-card>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n\n\n        \n\n\n\n        </ion-card>\n\n      </ion-list-header>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\paradidaticos\paradidaticos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], Paradidaticos);
    return Paradidaticos;
}());

//# sourceMappingURL=paradidaticos.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Projetos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(199);
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
            selector: 'page-projetos',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\projetos\projetos.html"*/'<ion-header>\n\n\n\n    \n\n\n\n  <ion-navbar color="light">\n\n    <button ion-button menuToggle="left" left>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n\n    <button ion-button menuToggle="right" right>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button> \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<script>\n\n  window.fbAsyncInit = function() {\n\n    FB.init({\n\n      appId      : \'{your-app-id}\',\n\n      cookie     : true,\n\n      xfbml      : true,\n\n      version    : \'{api-version}\'\n\n    });\n\n      \n\n    FB.AppEvents.logPageView();   \n\n      \n\n  };\n\n\n\n  (function(d, s, id){\n\n     var js, fjs = d.getElementsByTagName(s)[0];\n\n     if (d.getElementById(id)) {return;}\n\n     js = d.createElement(s); js.id = id;\n\n     js.src = "https://connect.facebook.net/en_US/sdk.js";\n\n     fjs.parentNode.insertBefore(js, fjs);\n\n   }(document, \'script\', \'facebook-jssdk\'));\n\n</script>\n\n\n\n\n\n\n\n<ion-content class="main-content">\n\n  \n\n  <ion-card>\n\n    <ion-list class="accordion-list">\n\n      <!-- First Level -->\n\n      <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n\n        <!-- Toggle Button -->\n\n        <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n            \n\n          <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n\n          <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n\n          {{ item.name }}\n\n        </button>\n\n\n\n        <ion-list *ngIf="item.children && item.open" no-lines>\n\n          <!-- Second Level -->\n\n          <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n\n            <!-- Toggle Button -->\n\n            <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n\n              <ion-icon item-left name="arrow-forward" *ngIf="!child.open"></ion-icon>\n\n              <ion-icon item-left name="arrow-down" *ngIf="child.open"></ion-icon>\n\n              {{ child.name }}\n\n            </button>\n\n\n\n            <!-- Direct Add Button as Fallback -->\n\n            <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n\n              <h2>{{ child.name }}</h2>\n\n              <p>{{ child.information }}</p>\n\n              <ion-slides loop="true" slidesPerView="2">\n\n                <ion-slide *ngFor="let child of child.imgsrc; let k = index">\n\n                  <img src="{{ child.src }}"> \n\n                </ion-slide>\n\n                </ion-slides>\n\n            </ion-item>\n\n\n\n        \n\n\n\n          </ion-list-header>\n\n          \n\n      \n\n\n\n        </ion-list>\n\n      </ion-list-header>\n\n    </ion-list>\n\n  </ion-card>\n\n   \n\n \n\n\n\n \n\n    \n\n\n\n  \n\n  \n\n  \n\n  \n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\projetos\projetos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], Projetos);
    return Projetos;
}());

//# sourceMappingURL=projetos.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feira; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
            selector: 'page-feira',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\feira\feira.html"*/'<ion-header>\n\n  <ion-navbar color="light">\n\n    <button ion-button menuToggle="left" left>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n\n    <button ion-button menuToggle="right" right>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="main-content">\n\n\n\n  <ion-segment [(ngModel)]="feiras">\n\n    <ion-segment-button value="2018">\n\n      2018\n\n    </ion-segment-button>\n\n    <!--<ion-segment-button value="2018">\n\n      2018\n\n    </ion-segment-button>\n\n    <ion-segment-button value="2019">\n\n      2019\n\n    </ion-segment-button>\n\n    <ion-segment-button value="2020">\n\n      2020\n\n    </ion-segment-button>-->\n\n  </ion-segment>\n\n\n\n\n\n  <div [ngSwitch]="feiras">\n\n\n\n    <div *ngSwitchCase="2018">\n\n      <ion-card>\n\n\n\n        <img class="banner" src="assets/imgs/banner-feira.jpg">\n\n\n\n      </ion-card>\n\n      <ion-card class="card-feira">\n\n        <ion-card-header class="main-text">\n\n          <h1> FEIRA LITERÁRIA 2018</h1>\n\n        </ion-card-header>\n\n\n\n        <ion-card-content class="main-text">\n\n          <br>\n\n          <p>A Feira Literária “Ler para pensar e construir...” visa estimular a leitura e produção literária e\n\n            artística\n\n            como\n\n            um todo dos alunos, contribuindo para a formação de cidadãos e leitores conscientes de sua origem e do\n\n            patrimônio\n\n            cultural brasileiro herdado. Por meio de eventos diferenciados e integrados que enfatizam a criatividade,\n\n            os\n\n            sonhos\n\n            e a fantasia, a feira oferece oportunidades para o desenvolvimento das competências de leitura e escrita.\n\n          </p>\n\n          <br>\n\n          <p>Neste ano de 2018, a Feira Literária homenageou a escritora Ruth Rocha, que, em 2017, completava 50 anos\n\n            de\n\n            carreira.\n\n            A justa homenagem se apoia na capacidade da autora introduzir para crianças com sutileza e humor problemas\n\n            de\n\n            cunho\n\n            social e políticos, tais como a injustiça estrutural, frequentemente inspirada no estilo de Monteiro\n\n            Lobato.\n\n          </p>\n\n          <br>\n\n          <p>Diversas vivências pedagógicas fornecidas em momentos e ambientes distintos tem por objetivo criar um\n\n            pequeno\n\n            complexo\n\n            cultural, onde cada leitor de mundo possa se familiarizar com a literatura infanto-juvenil e nela se sentir\n\n            reconhecido.\n\n            Ao contemplar neste formato os diferentes gêneros textuais, como narrativas, poemas, convites, teatro,\n\n            biografia,\n\n            memórias e fábulas, facilita-se a orientação para o prazer da leitura, para a percepção de quem descobre\n\n            ali\n\n            outros\n\n            lugares, outros tempos, outros jeitos de agir e de ser, outra ótica.</p>\n\n          <br>\n\n          <p>O Projeto Feira Literária é desenvolvido por todos os alunos do 2º ano EF à 3º série do Ensino Médio,\n\n            durante\n\n            o\n\n            mês de março e abril com culminância prevista para os dias 26, 27 e 28 de abril de 2018. Para tanto, serão\n\n            envolvidos\n\n            todos os professores, coordenadores pedagógicos, auxiliares de coordenação, bibliotecários e auxiliares de\n\n            turma.\n\n            As atividades propiciadas são: </p>\n\n          <br>\n\n          <p>Bate-papo com autores, contação de histórias, oficinas, exposição dialogada, exposição de HQ, leitura,\n\n            interpretação\n\n            e análise de textos previamente escolhidos, projeção de imagens dos personagens, músicas, cordéis,\n\n            produções\n\n            coletivas\n\n            e individuais de desenhos, exposição de trabalho em mural, tematização de vídeos, produção de varais\n\n            literários,\n\n            troca-troca de livros, dramatização, origami, dobraduras, apresentações musicais com ênfase literária,\n\n            visita à\n\n            biblioteca,\n\n            café literário, clube literário, preparação para a vida universitária e outras atividades.</p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <ion-slides loop="true" slidesPerView="2">\n\n          <ion-slide>\n\n            <img class="banner" src="/assets/feiras/2018/ABERTURA DA FEIRA LITERÁRIA.jpg">\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <img class="banner" src="/assets/feiras/2018/1.jpg">\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <img class="banner" src="/assets/feiras/2018/2.jpg">\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <img class="banner" src="/assets/feiras/2018/3.jpg">\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <img class="banner" src="/assets/feiras/2018/4.jpg">\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <img class="banner" src="/assets/feiras/2018/5.jpg">\n\n          </ion-slide>\n\n          <ion-slide>\n\n            <img class="banner" src="/assets/feiras/2018/6.jpg">\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </ion-card>\n\n    </div>\n\n\n\n   <!-- <div *ngSwitchCase="2019">\n\n        <ion-card>\n\n\n\n            <img class="banner" src="assets/imgs/banner-feira.jpg">\n\n    \n\n          </ion-card>\n\n          <ion-card class="card-feira">\n\n            <ion-card-header class="main-text">\n\n              <h1> FEIRA LITERÁRIA 2019</h1>\n\n            </ion-card-header>\n\n    \n\n            <ion-card-content class="main-text">\n\n              <br>\n\n              <p>A Feira Literária “Ler para pensar e construir...” visa estimular a leitura e produção literária e\n\n                artística\n\n                como\n\n                um todo dos alunos, contribuindo para a formação de cidadãos e leitores conscientes de sua origem e do\n\n                patrimônio\n\n                cultural brasileiro herdado. Por meio de eventos diferenciados e integrados que enfatizam a criatividade,\n\n                os\n\n                sonhos\n\n                e a fantasia, a feira oferece oportunidades para o desenvolvimento das competências de leitura e escrita.\n\n              </p>\n\n              <br>\n\n              <p>Neste ano de 2018, a Feira Literária homenageou a escritora Ruth Rocha, que, em 2017, completava 50 anos\n\n                de\n\n                carreira.\n\n                A justa homenagem se apoia na capacidade da autora introduzir para crianças com sutileza e humor problemas\n\n                de\n\n                cunho\n\n                social e políticos, tais como a injustiça estrutural, frequentemente inspirada no estilo de Monteiro\n\n                Lobato.\n\n              </p>\n\n              <br>\n\n              <p>Diversas vivências pedagógicas fornecidas em momentos e ambientes distintos tem por objetivo criar um\n\n                pequeno\n\n                complexo\n\n                cultural, onde cada leitor de mundo possa se familiarizar com a literatura infanto-juvenil e nela se sentir\n\n                reconhecido.\n\n                Ao contemplar neste formato os diferentes gêneros textuais, como narrativas, poemas, convites, teatro,\n\n                biografia,\n\n                memórias e fábulas, facilita-se a orientação para o prazer da leitura, para a percepção de quem descobre\n\n                ali\n\n                outros\n\n                lugares, outros tempos, outros jeitos de agir e de ser, outra ótica.</p>\n\n              <br>\n\n              <p>O Projeto Feira Literária é desenvolvido por todos os alunos do 2º ano EF à 3º série do Ensino Médio,\n\n                durante\n\n                o\n\n                mês de março e abril com culminância prevista para os dias 26, 27 e 28 de abril de 2018. Para tanto, serão\n\n                envolvidos\n\n                todos os professores, coordenadores pedagógicos, auxiliares de coordenação, bibliotecários e auxiliares de\n\n                turma.\n\n                As atividades propiciadas são: </p>\n\n              <br>\n\n              <p>Bate-papo com autores, contação de histórias, oficinas, exposição dialogada, exposição de HQ, leitura,\n\n                interpretação\n\n                e análise de textos previamente escolhidos, projeção de imagens dos personagens, músicas, cordéis,\n\n                produções\n\n                coletivas\n\n                e individuais de desenhos, exposição de trabalho em mural, tematização de vídeos, produção de varais\n\n                literários,\n\n                troca-troca de livros, dramatização, origami, dobraduras, apresentações musicais com ênfase literária,\n\n                visita à\n\n                biblioteca,\n\n                café literário, clube literário, preparação para a vida universitária e outras atividades.</p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n          <ion-card>\n\n            <ion-slides loop="true" slidesPerView="2">\n\n\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/1.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/2.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/3.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/4.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/5.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/6.jpg">\n\n              </ion-slide>\n\n            </ion-slides>\n\n          </ion-card>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="2020">\n\n        <ion-card>\n\n\n\n            <img class="banner" src="assets/imgs/banner-feira.jpg">\n\n    \n\n          </ion-card>\n\n          <ion-card class="card-feira">\n\n            <ion-card-header class="main-text">\n\n              <h1> FEIRA LITERÁRIA 2020</h1>\n\n            </ion-card-header>\n\n    \n\n            <ion-card-content class="main-text">\n\n              <br>\n\n              <p>A Feira Literária “Ler para pensar e construir...” visa estimular a leitura e produção literária e\n\n                artística\n\n                como\n\n                um todo dos alunos, contribuindo para a formação de cidadãos e leitores conscientes de sua origem e do\n\n                patrimônio\n\n                cultural brasileiro herdado. Por meio de eventos diferenciados e integrados que enfatizam a criatividade,\n\n                os\n\n                sonhos\n\n                e a fantasia, a feira oferece oportunidades para o desenvolvimento das competências de leitura e escrita.\n\n              </p>\n\n              <br>\n\n              <p>Neste ano de 2018, a Feira Literária homenageou a escritora Ruth Rocha, que, em 2017, completava 50 anos\n\n                de\n\n                carreira.\n\n                A justa homenagem se apoia na capacidade da autora introduzir para crianças com sutileza e humor problemas\n\n                de\n\n                cunho\n\n                social e políticos, tais como a injustiça estrutural, frequentemente inspirada no estilo de Monteiro\n\n                Lobato.\n\n              </p>\n\n              <br>\n\n              <p>Diversas vivências pedagógicas fornecidas em momentos e ambientes distintos tem por objetivo criar um\n\n                pequeno\n\n                complexo\n\n                cultural, onde cada leitor de mundo possa se familiarizar com a literatura infanto-juvenil e nela se sentir\n\n                reconhecido.\n\n                Ao contemplar neste formato os diferentes gêneros textuais, como narrativas, poemas, convites, teatro,\n\n                biografia,\n\n                memórias e fábulas, facilita-se a orientação para o prazer da leitura, para a percepção de quem descobre\n\n                ali\n\n                outros\n\n                lugares, outros tempos, outros jeitos de agir e de ser, outra ótica.</p>\n\n              <br>\n\n              <p>O Projeto Feira Literária é desenvolvido por todos os alunos do 2º ano EF à 3º série do Ensino Médio,\n\n                durante\n\n                o\n\n                mês de março e abril com culminância prevista para os dias 26, 27 e 28 de abril de 2018. Para tanto, serão\n\n                envolvidos\n\n                todos os professores, coordenadores pedagógicos, auxiliares de coordenação, bibliotecários e auxiliares de\n\n                turma.\n\n                As atividades propiciadas são: </p>\n\n              <br>\n\n              <p>Bate-papo com autores, contação de histórias, oficinas, exposição dialogada, exposição de HQ, leitura,\n\n                interpretação\n\n                e análise de textos previamente escolhidos, projeção de imagens dos personagens, músicas, cordéis,\n\n                produções\n\n                coletivas\n\n                e individuais de desenhos, exposição de trabalho em mural, tematização de vídeos, produção de varais\n\n                literários,\n\n                troca-troca de livros, dramatização, origami, dobraduras, apresentações musicais com ênfase literária,\n\n                visita à\n\n                biblioteca,\n\n                café literário, clube literário, preparação para a vida universitária e outras atividades.</p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n          <ion-card>\n\n            <ion-slides loop="true" slidesPerView="2">\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/ABERTURA DA FEIRA LITERÁRIA.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/BATE PAPO ATUALIDADES.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/BATE PAPO LITERÁRIO 1.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/BATE PAPO LITERÁRIO.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/CAFÉ FILOSÓFICO.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/ENTREI NA UNIVERSIDADE, E AGORA!.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/OFICINA DE ESCRITA CRÔNICA.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/Oficina de Fanzine.jpg">\n\n              </ion-slide>\n\n              <ion-slide>\n\n                <img class="banner" src="/assets/feiras/2018/QUIOSQUE LITERÁRIO -  POESIAS E ZINES.jpg">\n\n              </ion-slide>\n\n            </ion-slides>\n\n          </ion-card>\n\n    </div> -->\n\n\n\n  </div>\n\n  \n\n \n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\feira\feira.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Feira);
    return Feira;
}());

//# sourceMappingURL=feira.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fale; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
            selector: 'page-fale',template:/*ion-inline-start:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\fale\fale.html"*/'<ion-header>\n\n  <ion-navbar color="light">\n\n    <button ion-button menuToggle="left" left>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title align="center">Circuito Literário em Rede</ion-title>\n\n    <button ion-button menuToggle="right" right>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-content">\n\n  <ion-card>\n\n    <div id="after_submit"></div>\n\n    <form name="formteste" action="" method="post">\n\n      \n\n      <h1>Contato</h1>\n\n      \n\n      <p class="nome">\n\n       <input type="text" name="nome" placeholder="informe seu nome" required="required">\n\n       </p>\n\n      \n\n      <p class="email">\n\n       <input type="email" name="email" placeholder="informe seu email" required="required">\n\n       </p>\n\n      \n\n      <p class="assunto">\n\n       <input type="text" name="assunto" placeholder="informe o assunto" required="required">\n\n       </p>\n\n      \n\n      <p class="mensagem">\n\n       <textarea name="mensagem" placeholder="deixe sua mensagem"></textarea>\n\n       </p>\n\n      \n\n      <p class="enviar">\n\n       <input type="formteste" name="enviar" value="Enviar">\n\n       </p>\n\n      \n\n      </form>\n\n      \n\n      \n\n\n\n   \n\n  \n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Marcos Frazão\Documents\circuitoionic2\src\pages\fale\fale.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Fale);
    return Fale;
}());

//# sourceMappingURL=fale.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_timeline_timeline__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_paradidaticos_paradidaticos__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_projetos_projetos__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_feira_feira__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_fale_fale__ = __webpack_require__(203);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_timeline_timeline__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_paradidaticos_paradidaticos__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_projetos_projetos__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_feira_feira__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_fale_fale__ = __webpack_require__(203);
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
            template: '<span>{{time.subtitle}}</span><span>{{time.title}}</span>'
        }),
        __metadata("design:paramtypes", [])
    ], TimelineTimeComponent);
    return TimelineTimeComponent;
}());

//# sourceMappingURL=timeline.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map