import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Facebook } from '@ionic-native/facebook';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;

  constructor(private facebook: Facebook) {}
  
  
  async var() {
    const loginResponse = await this.facebook.login(['public_profile']);

    this.user = await this.facebook.api(
      `${loginResponse.authResponse.userID}/?fields=id,name,picture`,
      ['public_profile']
    );
    
  }
  
  
}