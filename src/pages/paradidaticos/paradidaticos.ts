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

    openModal(name, author, html, imgsrc) {
        let Title = name
        let Author = author
        let Summary = html
        let SRC = imgsrc
        let BliUrl = "http://portal.ani.org.br/Corpore.Net/Main.aspx?ActionID=BibConsultaInternaActionWeb&SelectedMenuIDKey=ItemPesquisarReservar"
        swal({
            title: Title,
            html: Author + "<br>" + "<br>" + Summary + "<br>" ,
            imageUrl: SRC,
            showCancelButton: true,
            showCloseButton: true,   
                  
            confirmButtonText: "<p>Biblioteca</p>",
            confirmButtonColor: '#3085d6',
            
            cancelButtonText:"<p>Ok</p>",
            cancelButtonColor:'#3085d6',

            focusConfirm: false,
            backdrop: true,
            grow: false,
            heightAuto: true,
            imageWidth: 400,
            width: 600,
            

        }).then((result) => {
            if (result.value) {
                window.open(BliUrl, '_blank');
            }
        })
    }

    toggleSection(i) {
        this.information[i].open = !this.information[i].open;
    }

    toggleItem(i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    }




}