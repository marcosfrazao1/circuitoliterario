import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Timeline } from '../timeline/timeline';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  TimelineButton: any;

  constructor(public navCtrl: NavController) {
    this.TimelineButton = Timeline
  }

}
