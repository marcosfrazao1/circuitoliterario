import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-fale',
    templateUrl: 'fale.html'
})
export class Fale {
    information: any[];

    constructor(public navCtrl: NavController) {
    }

    toggleSection(i) {
        this.information[i].open = !this.information[i].open;
    }

    toggleItem(i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    }




}