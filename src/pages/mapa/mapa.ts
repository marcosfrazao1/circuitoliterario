import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Timeline } from '../timeline/timeline'
import { Paradidaticos } from '../paradidaticos/paradidaticos';
import { Projetos } from '../projetos/projetos';
import { Atividades } from '../atividades/atividades';
import { Fale } from '../fale/fale';

@Component({
    selector: 'page-mapa',
    templateUrl: 'mapa.html'
})
export class Mapa {


    constructor(public navCtrl: NavController) {


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
    ProjetosButton(){
        this.navCtrl.setRoot(Projetos)
    }
    AtividadesButton(){
        this.navCtrl.setRoot(Atividades)
    }
    MapaButton(){
        this.navCtrl.setRoot(Mapa)
    }
    FaleButton(){
        this.navCtrl.setRoot(Fale)
    }
  
  }