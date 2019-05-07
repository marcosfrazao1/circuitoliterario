import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
    selector: 'page-feira',
    templateUrl: 'feira.html'
    
})

export class Feira {

    feiras: string = "2019"
    constructor(public navCtrl: NavController,private videoPlayer : VideoPlayer) {


    }




  }

  