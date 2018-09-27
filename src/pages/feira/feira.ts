import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-feira',
    templateUrl: 'feira.html'
})

export class Feira {

    feiras: string = "2017"
    constructor(public navCtrl: NavController) {


    }

  }