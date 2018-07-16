import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Paradidaticos } from '../paradidaticos/paradidaticos';
import { Timeline } from '../timeline/timeline'

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
    this.navCtrl.setRoot(HomePage)
  }

}
