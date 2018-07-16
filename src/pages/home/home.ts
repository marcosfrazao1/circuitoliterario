import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Paradidaticos } from '../paradidaticos/paradidaticos';
import { Timeline } from '../timeline/timeline'
import { Projetos } from '../projetos/projetos';
import { Atividades } from '../atividades/atividades';
import { Mapa } from '../mapa/mapa';
import { Fale } from '../fale/fale';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


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
