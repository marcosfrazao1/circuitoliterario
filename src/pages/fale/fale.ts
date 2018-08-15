import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import swal from 'sweetalert2'


@Component({
    selector: 'page-fale',
    templateUrl: 'fale.html'
})
export class Fale {
    information: any[];

    constructor(public navCtrl: NavController, private http: Http) {
        let localData = http.get('assets/paradidaticos.json').map(res => res.json().items);
        localData.subscribe(data => {
            this.information = data;
        })
    }

    openModal(name, text, imgsrc) {
        let Title = name
        let Summary = text
        let SRC = imgsrc
        swal({
            title: Title,
            text: Summary,
            imageUrl: SRC,
            confirmButtonText: 'Cool',
            backdrop: false,
            grow: "fullscreen",
            heightAuto: false
        })
    }

    toggleSection(i) {
        this.information[i].open = !this.information[i].open;
    }

    toggleItem(i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    }




}