import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'


@Component({
    selector: 'page-projetos',
    templateUrl: 'projetos.html'
})
export class Projetos {
    
    information: any[];

    constructor(public navCtrl: NavController, http: Http) {
        let localData = http.get('assets/projetos.json').map(res => res.json().items);
        localData.subscribe(data => {
            this.information = data;
        })
    }

    toggleSection(i) {
        this.information[i].open = !this.information[i].open;
    }

    toggleItem(i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    }  

    ngAfterViewInit(){  
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/all.js";
      
        
          if (d.getElementById(id)){
            //if <script id="facebook-jssdk"> exists
            delete (<any>window).FB;
            fjs.parentNode.replaceChild(js, fjs);
          } else {
            fjs.parentNode.insertBefore(js, fjs);
          }
        }(document, 'script', 'facebook-jssdk'));
      }

      
}
