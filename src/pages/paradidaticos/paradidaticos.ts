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
        let BliUrl = "http://portal.ani.org.br/Corpore.Net/Main.aspx?ActionID=BibConsultaInternaActionWeb&SelectedMenuIDKey=ItemPesquisarReservar"
        swal({
            title: Title,
            html: Summary + " <br>" + "<button ion-button>Acesse aqui a Bliblioteca</button>",
            imageUrl: SRC,
            showCloseButton: true,
            showCancelButton: true,

            focusConfirm: false,
            confirmButtonText: 'Acesso à Bliblioteca',
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