import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-timeline',
    templateUrl: 'timeline.html'
})
export class Timeline {

    items = [
        {
            title: 'Homero',
            content: `../assets/timelineimgs/homero.jpg`,
            icon: 'calendar',
            time: { title: 'VIII aC' }
        },
        {
            title: 'Hesíodo',
            content: `../assets/timelineimgs/hesiodo.jpg`,
            icon: 'calendar',
            time: { title: 'VIII aC' }
        },
        {
            title: 'Esopo',
            content: `../assets/timelineimgs/esopo.jpg`,
            icon: 'calendar',
            time: { title: 'VII aC' }
        },
        {
            title: 'Bíblia',
            content: `../assets/timelineimgs/testamento.jpg`,
            icon: 'calendar',
            time: { title: 'VI aC' }
        },
        {
            title: 'Píndaro',
            content: `../assets/timelineimgs/pindaro.jpg`,
            icon: 'calendar',
            time: { title: 'VI aC' }
        },
        {
            title: 'Ésquilo',
            content: `../assets/timelineimgs/esquilo.jpg`,
            icon: 'calendar',
            time: { title: '472 aC' }
        },
        {
            title: 'Sófocles',
            content: `../assets/timelineimgs/sofocles.jpg`,
            icon: 'calendar',
            time: { title: '446 aC' }
        },
        {
            title: 'Eurípedes',
            content: `../assets/timelineimgs/euripedes.jpg`,
            icon: 'calendar',
            time: { title: '438 aC' }
        },
        {
            title: 'Aristófanes',
            content: `../assets/timelineimgs/aristofanes.jpg`,
            icon: 'calendar',
            time: { title: '425 aC' }
        },
        {
            title: 'Calímaco',
            content: `../assets/timelineimgs/calimaco.jpg`,
            icon: 'calendar',
            time: { title: 'III aC' }
        },
        {
            title: 'Teócrito',
            content: `../assets/timelineimgs/teocrito.jpg`,
            icon: 'calendar',
            time: { title: 'III aC' }
        },
        {
            title: 'Plauto',
            content: `../assets/timelineimgs/plauto.jpg`,
            icon: 'calendar',
            time: { title: '205 aC' }
        },
        {
            title: 'Terêncio',
            content: `../assets/timelineimgs/terencio.jpg`,
            icon: 'calendar',
            time: { title: 'II aC' }
        },
        {
            title: 'Catulo',
            content: `../assets/timelineimgs/catulo.jpg`,
            icon: 'calendar',
            time: { title: 'I aC' }
        },
        {
            title: 'Varrão',
            content: `../assets/timelineimgs/varrao.jpg`,
            icon: 'calendar',
            time: { title: 'I aC' }
        },
        {
            title: 'Cícero',
            content: `../assets/timelineimgs/cicero.jpg`,
            icon: 'calendar',
            time: { title: '81 aC' }
        },
        {
            title: 'Virgílio',
            content: `../assets/timelineimgs/virgilio.jpg`,
            icon: 'calendar',
            time: { title: '42 aC' }
        },
        {
            title: 'Horácio',
            content: `../assets/timelineimgs/horacio.jpg`,
            icon: 'calendar',
            time: { title: '35 aC' }
        },
        {
            title: 'Ovídio',
            content: `../assets/timelineimgs/ovidio.jpg`,
            icon: 'calendar',
            time: { title: '19 aC' }
        },
        {
            title: 'Sêneca',
            content: `../assets/timelineimgs/seneca.jpg`,
            icon: 'calendar',
            time: { title: 'sec I' }
        },
        {
            title: 'Estácio',
            content: `../assets/timelineimgs/estacio.jpg`,
            icon: 'calendar',
            time: { title: 'sec I' }
        },
        {
            title: 'Luciano de Samostata',
            content: `../assets/timelineimgs/luciano.jpg`,
            icon: 'calendar',
            time: { title: 'sec II' }
        },
        {
            title: 'Tertuliano',
            content: `../assets/timelineimgs/tertuliano.jpg`,
            icon: 'calendar',
            time: { title: 'sec II' }
        },
        {
            title: 'São Jerônimo',
            content: `../assets/timelineimgs/jeronimo.jpg`,
            icon: 'calendar',
            time: { title: 'sec IV' }
        },
        {
            title: 'Santo Ambrósio',
            content: `../assets/timelineimgs/ambrosio.jpg`,
            icon: 'calendar',
            time: { title: 'sec IV' }
        },
        {
            title: 'Santo Agostinho',
            content: `../assets/timelineimgs/agostinho.jpg`,
            icon: 'calendar',
            time: { title: 'sec IV' }
        },
        {
            title: 'Claudiano',
            content: `../assets/timelineimgs/claudiano.jpg`,
            icon: 'calendar',
            time: { title: 'sec IV' }
        },
        {
            title: 'Prudêncio',
            content: `../assets/timelineimgs/prudencio.jpg`,
            icon: 'calendar',
            time: { title: 'séc. IV' }
        },
        {
            title: 'Efrém da Síria',
            content: `../assets/timelineimgs/efrem.jpg`,
            icon: 'calendar',
            time: { title: 'séc IV' }
        },
        {
            title: 'Agathias',
            content: `../assets/timelineimgs/agathias.jpg`,
            icon: 'calendar',
            time: { title: 'séc. VI' }
        },
        {
            title: 'João Malala',
            content: `../assets/timelineimgs/malalas.jpg`,
            icon: 'calendar',
            time: { title: '560' }
        },
        {
            title: 'André de Creta',
            content: `../assets/timelineimgs/andre.jpg`,
            icon: 'calendar',
            time: { title: 'sec VII' }
        },
        {
            title: 'João Damasceno',
            content: `../assets/timelineimgs/damasceno.jpg`,
            icon: 'calendar',
            time: { title: 'sec VII' }
        },
        {
            title: 'Alcuíno de York',
            content: `../assets/timelineimgs/alcuino.jpg`,
            icon: 'calendar',
            time: { title: 'sec VIII' }
        },
        {
            title: 'Beda',
            content: `../assets/timelineimgs/beda.jpg`,
            icon: 'calendar',
            time: { title: 'sec VIII' }
        },
        {
            title: 'Cynewulf',
            content: `../assets/timelineimgs/cynewulf.jpg`,
            icon: 'calendar',
            time: { title: 'sec IX' }
        },
        {
            title: 'Photios (“Myrobiblion”)',
            content: `../assets/timelineimgs/photios.jpg`,
            icon: 'calendar',
            time: { title: 'séc. IX' }
        },
        {
            title: 'Beowolf (anônimo)',
            content: `../assets/timelineimgs/beowolf.jpg`,
            icon: 'calendar',
            time: { title: '1000' }
        },
        {
            title: 'Godofredo de Monmouth',
            content: `../assets/timelineimgs/godofredo.jpg`,
            icon: 'calendar',
            time: { title: '1130' }
        },
        {
            title: 'Prodromos',
            content: `../assets/timelineimgs/teodoro.jpg`,
            icon: 'calendar',
            time: { title: 'sec XII' }
        },
        {
            title: 'Michel Psellos',
            content: `../assets/timelineimgs/michel.jpg`,
            icon: 'calendar',
            time: { title: 'sec XII' }
        },
        {
            title: 'Allain de Lille',
            content: `../assets/timelineimgs/allain.jpg`,
            icon: 'calendar',
            time: { title: 'sec XII' }
        },
        {
            title: 'Poema del Cid (anônimo)',
            content: `../assets/timelineimgs/cid.jpg`,
            icon: 'calendar',
            time: { title: '1140' }
        },
        {
            title: 'Canção dos Nibelungos (anônimo)',
            content: `../assets/timelineimgs/nibelungos.jpg`,
            icon: 'calendar',
            time: { title: '1180' }
        },
        {
            title: 'Snorri Sturluson)',
            content: `../assets/timelineimgs/snorri.jpg`,
            icon: 'calendar',
            time: { title: 'sec XIII' }
        },
        {
            title: 'Saxão, o Gramatico',
            content: `../assets/timelineimgs/saxao.jpg`,
            icon: 'calendar',
            time: { title: 'sec XIII' }
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