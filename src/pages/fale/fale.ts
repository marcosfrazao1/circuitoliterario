import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Timeline } from '../timeline/timeline'
import { Paradidaticos } from '../paradidaticos/paradidaticos';
import { Projetos } from '../projetos/projetos';
import { Atividades } from '../atividades/atividades';
import { Mapa } from '../mapa/mapa';

@Component({
    selector: 'page-fale',
    templateUrl: 'fale.html'
})
export class Fale {


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