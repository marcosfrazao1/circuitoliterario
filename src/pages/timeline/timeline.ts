import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Paradidaticos } from '../paradidaticos/paradidaticos';

@Component({
    selector: 'page-timeline',
    templateUrl: 'timeline.html'
})
export class Timeline {


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
