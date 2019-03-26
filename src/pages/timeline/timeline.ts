import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Title } from '@angular/platform-browser';
import { splitNamespace } from '@angular/core/src/view/util';

@Component({
    selector: 'page-timeline',
    templateUrl: 'timeline.html'
})
export class Timeline {

    items = [
        {
            title: 'Homero',
            content:`assets/timelineimgs/homero.jpg`,
            text: `Poeta grego e “pai espiritual” da Grécia antiga, que por meio de seus épicos “Ilíada” e “Odisseia” lançou as bases da cultura Grega.`,
            icon: 'calendar',
            time: { title: 'VIII aC' }
            
                      
        },
        {
            title: 'Hesíodo',
            text:  `Poeta grego de “Teogonia” e “O Trabalho e os Dias”, obras fundamentais para a consolidação da religião mitológica grega.`,
            content:`assets/timelineimgs/Hesiodo.png`,
            icon: 'calendar',
            time: { title: 'VIII aC' }
        },
        {
            title: 'Esopo',
            content: `assets/timelineimgs/esopo.jpg` ,
            text: 'Grego criador do gênero das Fábulas, dentre as quais “A formiga e a cigarra”, “A raposa e as uvas”, “A lebre e a tartaruga” e outras.',
            icon: 'calendar',
            time: { title: 'VII aC' }
        },
        {
            title: 'Bíblia',
            content: `assets/timelineimgs/testamento.jpg`,
            text: 'Obra que é uma compilação de 46 livros considerados divinos para o judaísmo e o cristianismo. Trata das leis de Deus, de história (tendo como mote o povo hebreu), sabedoria e profecias. A Igreja Católica utiliza a versão “Septuaginta”. ',
            icon: 'calendar',
            time: { title: 'VI aC' }
        },
        {
            title: 'Píndaro',
            content: `assets/timelineimgs/pindaro.jpg`,
            text: 'Poeta grego que alcançou grande fama escrevendo poemas líricos em todas as suas formas.',
            icon: 'calendar',
            time: { title: 'VI aC' }
        },
        {
            title: 'Ésquilo',
            content: `assets/timelineimgs/esquilo.jpg`,
            text: 'Dramaturgo grego, pai da “tragédia”. Escreveu “Prometeu acorrentado”, “as suplicantes”, “Sete contra Tebas”, “Oresteia” e outras.',
            icon: 'calendar',
            time: { title: '472 aC' }
        },
        {
            title: 'Sófocles',
            content: `assets/timelineimgs/sofocles.jpg`,
            text: 'Dramaturgo grego, grande escritor de tragédias como “Antígona”, “Édipo Rei” e “Filoctetes”.',
            icon: 'calendar',
            time: { title: '446 aC' }
        },
        {
            title: 'Eurípedes',
            content: `assets/timelineimgs/euripedes.jpg`,
            text: 'Poeta trágico grego, completa tríade com Ésquilo e Sófocles, sendo o mais jovem dos três grandes expoentes da tragédia grega clássica. Autor, dentre outras, de “Medeia”, “Electra” e “As Troianas”.',
            icon: 'calendar',
            time: { title: '438 aC' }
        },
        {
            title: 'Aristófanes',
            content: `assets/timelineimgs/aristofanes.jpg`,
            text: 'Dramaturgo grego e maior representante da comédia antiga. Escreveu “As Vespas”, “Lisístratas” e “As nuvens”, e nesta última, apesar de ótima comédia, critica injustamente Sócrates, seu contemporâneo.',
            icon: 'calendar',
            time: { title: '425 aC' }
        },
        {
            title: 'Calímaco',
            content: `assets/timelineimgs/calimaco.jpg`,
            text: 'Poeta, bibliotecário, gramático e mitógrafo grego. Notório por ter incrivelmente escrito mais de 800 obras, das quais apenas uma mínima parte nos chegou, e por ter sido o segundo diretor da Biblioteca de Alexandria, depois de Zenódoto de Éfeso. Seus poemas influenciaram Ovídio.',
            icon: 'calendar',
            time: { title: 'III aC' }
        },
        {
            title: 'Teócrito',
            content: `assets/timelineimgs/teocrito.jpg`,
            text: 'Poeta grego de maior destaque no período helenístico. Fundador da poesia bucólica, e teve grande influência sobre Virgílio.',
            icon: 'calendar',
            time: { title: 'III aC' }
        },
        {
            title: 'Plauto',
            content: `assets/timelineimgs/plauto.jpg`,
            text: 'Maior dramaturgo romano. Adaptou o estilo das peças gregas para o latim. Grande influência de Shakespeare, e seus personagens exercem influência até hoje.',
            icon: 'calendar',
            time: { title: '205 aC' }
        },
        {
            title: 'Terêncio',
            content: `assets/timelineimgs/terencio.jpg`,
            text: 'Comediógrafo romano, suas peças foram muito apreciadas tardiamente, na Idade Média e na Renascença. Seu adágio “sou um homem: nada do que é humano me é estranho” tornou-se justamente célebre.',
            icon: 'calendar',
            time: { title: 'II aC' }
        },
        {
            title: 'Catulo',
            content: `assets/timelineimgs/catulo.jpg`,
            text: 'Poeta romano que utilizou linguagem coloquial e temas considerados “menores”. É membro do círculo dos “poetas novos” que abandonaram o estilo épico.',
            icon: 'calendar',
            time: { title: 'I aC' }
        },
        {
            title: 'Varrão',
            content: `assets/timelineimgs/varrao.jpg`,
            text: 'Maior erudito romano. Escreveu mais de 500 obras filosóficas, teológicas e científicas, das quais quase nada nos chegou. Apesar de não ser um literato, escreveu também sobre a língua latina, e sua importância cultural justifica a menção.',
            icon: 'calendar',
            time: { title: 'I aC' }
        },
        {
            title: 'Cícero',
            content: `assets/timelineimgs/cicero.jpg`,
            text: 'Orador, escritor, filósofo, político e advogado. Talvez o maior nome da cultura romana. Seus discursos, cartas e panegíricos se tornaram célebres, e foi o grande disseminador da filosofia grega entre os romanos. Segundo Michael Grant, "a influência de Cícero sobre a história da literatura e das ideias europeias em muito excede a de qualquer outro escritor em prosa de qualquer língua".',
            icon: 'calendar',
            time: { title: '81 aC' }
        },
        {
            title: 'Virgílio',
            content: `assets/timelineimgs/virgilio.jpg`,
            text:'Maior poeta romano. Autor do clássico “Eneida”, o épico nacional de Roma por excelência. Base fundamental para “Os Lusíadas” de Camões.',
            icon: 'calendar',
            time: { title: '42 aC' }
        },
        {
            title: 'Horácio',
            content: `assets/timelineimgs/horacio.jpg`,
            text:'Poeta lírico e satírico romano, além de filósofo epicurista. É conhecido por ser um dos maiores poetas da Roma Antiga. Escreveu sátiras, odes, epístolas e iambus.',
            icon: 'calendar',
            time: { title: '35 aC' }
        },
        {
            title: 'Ovídio',
            content: `assets/timelineimgs/ovidio.jpg`,
            text: 'Poeta romano mais conhecido como o autor de Heroides, Amores, e Ars Amatoria, três grandes coleções de poesia erótica, e Metamorfoses, um poema mitológico. É tradicionalmente colocado junto a Virgílio e Horário como o triunvirato canônico da poesia latina. Será curiosamente o autor latino mais lido no século XII.',
            icon: 'calendar',
            time: { title: '19 aC' }
        },
        {
            title: 'Sêneca',
            content: `assets/timelineimgs/seneca.jpg`,
            text:'Filósofo estoico, dramaturgo de sucesso, estadista famoso e exemplo moral. Dante o coloca entre os sumos escritores e heróis antigos. Sua obra mais importante são as “Epístolas Morais”, onde sugere uma fraternidade universal que se aproxima de ideais cristãos.',
            icon: 'calendar',
            time: { title: 'sec I' }
        },
        {
            title: 'Estácio',
            content: `assets/timelineimgs/estacio.jpg`,
            text: 'Conhecido principalmente por seu poema épico, Tebaida, que narra o conflito entre os filhos de Édipo pelo trono de Tebas, Estácio foi um aristocrata amante das letras e da filosofia. Ousado, foi o primeiro poeta romano que descreveu longamente em seus poemas outras obras de arte e arquitetura, tendo portanto grande valor para reconstrução histórico',
            icon: 'calendar',
            time: { title: 'sec I' }
        },
        {
            title: 'Luciano de Samostata',
            content: `assets/timelineimgs/luciano.jpg`,
            tex:'Grande escritor romano, de origem semita, famoso por seus diálogos satíricos. Satirizou e criticou acidamente os costumes e a sociedade da época e exerceu, a partir da Renascença, significativa influência em escritores ocidentais do porte de Erasmo, Rabelais, Quevedo, Swift, Voltaire e Machado de Assis. Sua obra “Uma história verdadeira” é precursora da ficção científica.',
            icon: 'calendar',
            time: { title: 'sec II' }
        },
        {
            title: 'Tertuliano',
            content: `assets/timelineimgs/tertuliano.jpg`,
            text:'Um dos principais membros da patrística latina. Escritor de fôlego, é um dos pais e ápices do gênero apologético. Escreveu também muitas obras no estilo de “embates” teológicos e polêmicas.',
            icon: 'calendar',
            time: { title: 'sec II' }
        },
        {
            title: 'São Jerônimo',
            content: `assets/timelineimgs/jeronimo.jpg`,
            text:'Santo erudito, notório por sua tradução da Bíblia para o latim – a “Vulgata”. Possui uma imensa obra histórica, biográfica e epistolar.',
            icon: 'calendar',
            time: { title: 'sec IV' }
        },
        {
            title: 'Santo Ambrósio',
            content: `assets/timelineimgs/ambrosio.jpg`,
            text:'Santo que batizou Santo Agostinho. Um dos quatro doutores originais da Igreja, que se notabiliza na história da literatura por seus hinos e sobretudo pela invenção da rima.',
            icon: 'calendar',
            time: { title: 'sec IV' }
        },
        {
            title: 'Santo Agostinho',
            content: `assets/timelineimgs/agostinho.jpg`,
            text:'Maior gênio filosófico da Igreja. Sua obra “Confissões” foi modelo para muitas abordagens posteriores do gênero auto-biográfico e para o aprofundamento psicológico de personagens.',
            icon: 'calendar',
            time: { title: 'sec IV' }
        },
        {
            title: 'Claudiano',
            content: `assets/timelineimgs/claudiano.jpg`,
            text:'Poeta romano da corte. Destacou-se por seus versos históricos e políticos, bem como por seus panegíricos.',
            icon: 'calendar',
            time: { title: 'sec IV' }
        },
        {
            title: 'Prudêncio',
            content: `assets/timelineimgs/prudencio.jpg`,
            text:'Considerado o maior poeta romano cristão da Antiguidade Tardia. A poesia de Prudêncio está influenciada por autores antigos cristãos como Tertuliano e Santo Ambrósio, assim como pela Bíblia e as atas dos mártires. Também tomou por modelo literário poetas pagãos como Virgílio. Sua obra Psychomachia foi importante fonte de inspiração para a literatura alegórica da Idade Média, e até para modernos escritores como Johnatan Swift.',
            icon: 'calendar',
            time: { title: 'séc. IV' }
        },
        {
            title: 'Efrém da Síria',
            content: `assets/timelineimgs/efrem.jpg`,
            text:'Doutor da Igreja, prolífico autor de mais de 3 milhões de versos. Imensa variedade de poemas, sermões, e sobretudo hinos. Estes hinos estão cheios de um imaginário rico e poético baseado em fontes bíblicas, nas tradições populares, em outras religiões e na filosofia.',
            icon: 'calendar',
            time: { title: 'séc IV' }
        },
        {
            title: 'Agathias',
            content: `assets/timelineimgs/agathias.jpg`,
            text: 'Poeta e historiador grego. Escreveu Daphniaca, uma coleção de poemas curtos em hexâmetros sobre "amor e romance" em nove livros. Também escreveu mais de cem epigramas. Suas obras certamente fazem parte da antologia bizantina.',
            icon: 'calendar',
            time: { title: 'séc. VI' }
        },
        {
            title: 'João Malala',
            content: `assets/timelineimgs/malalas.jpg`,
            text: 'Um dos primeiros cronistas da história, João Malalas foi artífice bizantino da linguagem coloquial, e escrevia suas observações históricas e de viagens numa maneira informal, visando ao leitor comum. Por isso, atingiu grande popularidade.',
            icon: 'calendar',
            time: { title: '560' }
        },
        {
            title: 'André de Creta',
            content: `assets/timelineimgs/andre.jpg`,
            text:'Grande autor de hinos e criador de uma nova forma de poesia eclesiástica: o Canon.',
            icon: 'calendar',
            time: { title: 'sec VII' }
        },
        {
            title: 'João Damasceno',
            content: `assets/timelineimgs/damasceno.jpg`,
            text:'Monge ortodoxo, apologeta, foi também um dos criadores da poesia “Canon”.',
            icon: 'calendar',
            time: { title: 'sec VII' }
        },
        {
            title: 'Alcuíno de York',
            content: `assets/timelineimgs/alcuino.jpg`,
            text:'Maior erudito do Renascimento Carolíngio, lecionou por 15 anos na Catedral de York, onde criou uma das melhores bibliotecas da Europa e um dos maiores centros de saber. Conselheiro de Carlos Magno, dominou todas as 7 artes liberais, e idealizou as primeiras escolas públicas.',
            icon: 'calendar',
            time: { title: 'sec VIII' }
        },
        {
            title: 'Beda',
            content: `assets/timelineimgs/beda.jpg`,
            text:'Historiador, linguista, tradutor e teólogo, o “Venerável Beda” deu aula de poesia e gramática, destacando-se nesta área pela obra “Da arte métrica”, baseada nas contribuições de Élio Donato e Sérvio. Este livro se tornou o texto padrão para o ensino do verso latino por muitos séculos. Beda também escreveu sobre retórica bíblica.',
            icon: 'calendar',
            time: { title: 'sec VIII' }
        },
        {
            title: 'Cynewulf',
            content: `assets/timelineimgs/cynewulf.jpg`,
            text:'É considerado como uma das figuras preeminentes da poesia cristã anglo-saxônica. Alguns de seus famosos textos são o livro de Exeter e o Livro Vercelli. Tolkien escreveu sobre ele: "Havia algo muito remoto, estranho e belo por trás dessas palavras, se eu pudesse compreendê-lo”.',
            icon: 'calendar',
            time: { title: 'sec IX' }
        },
        {
            title: 'Fócio (“Myrobiblion”)',
            content: `assets/timelineimgs/photios.jpg`,
            text: 'Patriarca de Constantinopla,  Fócio foi um dos mais cultos homens de sua época, e mereceu a sua fama parte por conta de seus conflitos eclesiásticos, mas também por seu intelecto e obras literárias. Talvez o maior acadêmico de seu tempo, Fócio é um dos responsáveis pela incorporação do humanismo na ortodoxia bizantina como um elemento básico da consciência nacional. Sua obra mais conhecida é “Myriobiblon”, uma coleção de excertos e resumos de 280 volumes de autores clássicos.',
            icon: 'calendar',
            time: { title: 'séc. IX' }
        },
        {
            title: 'Beowolf (anônimo)',
            content: `assets/timelineimgs/beowolf.jpg`,
            text:'Poema épico, marco da literatura medieval, escrito em 3 182 linhas, é o poema mais longo do pequeno conjunto da literatura anglo-saxã. Aborda eventuais acontecimentos e personagens escandinavos do século VI, tendo como figura central o lendário Beowulf. Acredita-se que o poema original possa ter sido escrito antes do século XI. O texto é um registro importante dos valores germânicos pagãos.',
            icon: 'calendar',
            time: { title: '1000' }
        },
        {
            title: 'Godofredo de Monmouth',
            content: `assets/timelineimgs/godofredo.jpg`,
            text:'Famoso por ter escrito “Historia regum Britanniae”, a mais antiga referencia à lenda do Rei Arthur e do rei Lear, sucesso à época.',
            icon: 'calendar',
            time: { title: '1130' }
        },
        {
            title: 'Prodromos',
            content: `assets/timelineimgs/teodoro.jpg`,
            text:'Foi um escritor bizantino, conhecido por sua obra em prosa e poesia, escreveu poemas ocasionais,  peças literárias,  Etiópica de Heliodoro de Emesa, ele escreveu uma novela em verso chamada Rodante e Dosicles.',
            icon: 'calendar',
            time: { title: 'sec XII' }
        },
        {
            title: 'Michel Psellos',
            content: `assets/timelineimgs/michel.jpg`,
            text:'Monge bizantino, brilhante erudito, historiador, filósofo e político. Escreveu crônicas, poemas didáticos sobre gramática e retórica, além tratados historiográficos e científicos em áreas como astronomia, medicina, música, jurisprudência, física e laografia.',
            icon: 'calendar',
            time: { title: 'sec XII' }
        },
        {
            title: 'Allain de Lille',
            content: `assets/timelineimgs/allain.jpg`,
            text:'Teólogo, poeta genial e eruditíssimo. Dois poemas já lhe conferem o direito a um lugar de destaque na literatura latina da Idade Média; um deles, o De planctu naturae, é uma sátira genial sobre os vícios da humanidade. Criou a alegoria da conjugação gramatical, inspiração para Jean de Meung que escreveu “Romance da Rosa”.',
            icon: 'calendar',
            time: { title: 'sec XII' }
        },
        {
            title: 'Poema del Cid (anônimo)',
            content: `assets/timelineimgs/cid.jpg`,
            text:'Peça culminante da literatura medieval épica castelhana e o mais antigo poema épico espanhol completo existente. O poema narra a história do nobre castelhano Rodrigo Diaz de Vivar, herói da reconquista da Espanha contra os mouros. Estes poemas eram cantados em público por menestréis.',
            icon: 'calendar',
            time: { title: '1140' }
        },
        {
            title: 'Canção dos Nibelungos (anônimo)',
            content: `assets/timelineimgs/nibelungos.jpg`,
            text:'É um poema épico escrito na Idade Média chamando  Saga dos Nibelungos.',
            icon: 'calendar',
            time: { title: '1180' }
        },
        {
            title: 'Snorri Sturluson)',
            content: `assets/timelineimgs/snorri.jpg`,
            text: 'A autoria da chamada Edda em prosa, um manual de poesia escáldica e uma compilação de lendas, que é a principal fonte literária de mitologia nórdica, e ainda da Heimskringla, uma crónica dos reis noruegueses.',
            icon: 'calendar',
            time: { title: 'sec XIII' }
        },
        {
            title: 'Saxão, o Gramatico',
            content: `assets/timelineimgs/saxao.jpg`,
            text:'É um livro escrito por volta do século XII-XIII pelo escritor e historiador dinamarquês medieval Saxo Grammaticus sobre a História da Dinamarca.',
            icon: 'calendar',
            time: { title: 'sec XIII' }
        },
        {
            title: 'Paio Soares de Taveirós',
            content: `assets/timelineimgs/paio.jpg`,
            text: 'Escreveu o texto Canção da Ribeirinha, uma cantiga de amor, considerado o mais antigo texto escrito em galego – português, considerado como marco inicial do Trovadorismo.',
            icon: 'calendar',
            time: { title: '1198' }
        },
        {
            title: 'Dom Dinis',
            content: `assets/timelineimgs/domdinis.jpg`,
            text: 'Foi um excelente poeta, e sua reprodução registra 138 cantigas no período do Trovadorismo.',
            icon: 'calendar',
            time: { title: 'sec XIII' }
        },
        {
            title: 'Fernão Lopes',
            content: `assets/timelineimgs/fernao.jpg`,
            text: 'Foi um cronista considerado iniciador da historiografia portuguesa no período do Humanismo.',
            icon: 'calendar',
            time: { title: 'sec XV' }
        },
        {
            title: 'Garcia de Resende',
            content: `assets/timelineimgs/garcia.jpg`,
            text:'Responsável por organizar a poesia palaciana, estando toda a produção poética ligada ao Cancioneiro geral.',
            icon: 'calendar',
            time: { title: 'sec XV' }
        },
        {
            title: 'Gil Vicente',
            content: `assets/timelineimgs/gilvicente.jpg`,
            text:'Foi um teatrólogo que desenvolveu o teatro popular, no período do Humanismo.',
            icon: 'calendar',
            time: { title: 'sec XVI' }
        },
        
        {
            title: 'Luís Vaz de Camões ',
            content: `assets/timelineimgs/luizcamoes.jpg`,
            text: 'Um grande poeta lírico português do Classicismo, que escreveu o maior poema épico chamado Os Lusíadas.',
            icon: 'calendar',
            time: { title: 'sec XVII' }
        },
        {
            title: 'Pero Vaz de Caminha',
            content: `assets/timelineimgs/perovaz.jpg`,
            text: 'Escrivão da armada de Cabral, escreveu a Carta de Pero Vaz de Caminha, documento de valor histórico e de literatura informativa no período das Grandes Navegações.',
            icon: 'calendar',
            time: { title: 'sec XVII' }
        },
        {
            title: 'José de Anchieta ',
            content: `assets/timelineimgs/joseachieta.jpg`,
            text:'Escreveu a primeira gramática Tupi – guarani, poesias como “Poema à Virgem”	, autos como “ o Bem e o  Mal, o Anjo e o Diabo”, no período Barroco.',
            icon: 'calendar',
            time: { title: 'sec XVII' }
        },
        {
            title: 'Bento Teixeira',
            content: `assets/timelineimgs/bentoteixeira.jpg`,
            text:'Escreveu um poema épico chamado Prosopopéia que introduziu o modelo da poesia camoniana na poesia, no período Barroco.',
            icon: 'calendar',
            time: { title: 'sec XVII' }
        },
        {
            title: 'Gregório de Matos',
            content: `assets/timelineimgs/gregoriomatos.jpg`,
            text:'Conhecido com Boca do inferno, é considerado o primeiro poeta brasileiro, escreveu poesias satíricas, religiosas e líricas como “Décimas”, no período Barroco.',
            icon: 'calendar',
            time: { title: 'sec XVII' }
        },
        {
            title: 'Claudio Manuel da Costa',
            content: `assets/timelineimgs/claudiomanuel.png`,
            text:'Escreveu seu livro de poesias “Obras”, um dos marcos históricos que deu início do Arcadismo no Brasil.',
            icon: 'calendar',
            time: { title: 'sec XVIII' }
        },
        {
            title: 'Tomás Antônio Gonzaga',
            content: `assets/timelineimgs/tomasantonio.jpg`,
            text:'Escreveu a obra “ Marília de Dirceu” e “ Cartas Chilenas”, sendo um dos maiores poetas do Arcadismo.',
            icon: 'calendar',
            time: { title: 'sec XVIII' }
        },
        {
            title: 'José de Santa Rita Durão ',
            content: `assets/timelineimgs/josedesantarita.jpg`,
            text:'Escreveu seu poema épico do descobrimento do Brasil chamado “ Caramuru”.',
            icon: 'calendar',
            time: { title: 'sec XVIII' }
        },
        
       
       
    ];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) { }

    
  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

}