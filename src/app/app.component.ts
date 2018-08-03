import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Timeline } from '../pages/timeline/timeline'
import { Paradidaticos } from '../pages/paradidaticos/paradidaticos';
import { Projetos } from '../pages/projetos/projetos';
import { Feira } from '../pages/feira/feira';
import { Atividades } from '../pages/atividades/atividades';
import { Mapa } from '../pages/mapa/mapa';
import { Fale } from '../pages/fale/fale';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage:any = HomePage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation


  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
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
FeiraButton(){
    this.navCtrl.setRoot(Feira)
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

