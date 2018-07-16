import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Timeline } from '../timeline/timeline'

@Component({
    selector: 'page-paradidaticos',
    templateUrl: 'paradidaticos.html'
})
export class Paradidaticos {


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

}
