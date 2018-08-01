import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Paradidaticos } from '../paradidaticos/paradidaticos';
import { Projetos } from '../projetos/projetos';
import { Atividades } from '../atividades/atividades';
import { Mapa } from '../mapa/mapa';
import { Fale } from '../fale/fale';

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
            time: { subtitle: 'January', title: 'VIII aC' }
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
        
    ];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) { }

    
  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }




    TimelineButton() {
        this.navCtrl.setRoot(Timeline)
    }
    HomeButton() {
        this.navCtrl.setRoot(HomePage)
    }
    ParadidaticosButton() {
        this.navCtrl.setRoot(Paradidaticos)
    }
    ProjetosButton() {
        this.navCtrl.setRoot(Projetos)
    }
    AtividadesButton() {
        this.navCtrl.setRoot(Atividades)
    }
    MapaButton() {
        this.navCtrl.setRoot(Mapa)
    }
    FaleButton() {
        this.navCtrl.setRoot(Fale)
    }

}