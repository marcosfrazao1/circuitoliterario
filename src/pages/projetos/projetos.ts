import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { HomePage } from '../home/home';
import { Timeline } from '../timeline/timeline'
import { Paradidaticos } from '../paradidaticos/paradidaticos';
import { Atividades } from '../atividades/atividades';
import { Mapa } from '../mapa/mapa';
import { Fale } from '../fale/fale';

@Component({
    selector: 'page-projetos',
    templateUrl: 'projetos.html'
})
export class Projetos {
    
    information: any[];

    constructor(public navCtrl: NavController, private http: Http) {
        let localData = http.get('assets/information.json').map(res => res.json().items);
        localData.subscribe(data => {
            this.information = data;
        })
    }

    toggleSection(i) {
        this.information[i].open = !this.information[i].open;
    }

    toggleItem(i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
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