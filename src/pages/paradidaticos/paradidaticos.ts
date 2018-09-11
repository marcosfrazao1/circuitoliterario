import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import swal from 'sweetalert2'



@Component({
    selector: 'page-paradidaticos',
    templateUrl: 'paradidaticos.html'
})
export class Paradidaticos {
    
    information: any[];

    constructor(public navCtrl: NavController, http: Http) {
        let localData = http.get('assets/paradidaticos.json').map(res => res.json().items);
        localData.subscribe(data => {
            this.information = data;
        })
    }

    openModal(name, html, imgsrc) {
        let Title = name
        let Summary = html
        let SRC = imgsrc
        
        swal({
            title: Title,
            html: Summary,
            imageUrl: SRC,
            confirmButtonText: 'Fechar',
            backdrop: true,
            grow: false,
            heightAuto: true,
            imageWidth: 400,
            width: 600,          

        })
    }

    toggleSection(i) {
        this.information[i].open = !this.information[i].open;
    }

    toggleItem(i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    }




}