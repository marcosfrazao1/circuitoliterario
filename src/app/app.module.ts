import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http'


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Timeline } from '../pages/timeline/timeline';
import { Paradidaticos } from '../pages/paradidaticos/paradidaticos';
import { Projetos } from '../pages/projetos/projetos';
import { Feira } from '../pages/feira/feira';
import { Atividades } from '../pages/atividades/atividades';
import { Mapa } from '../pages/mapa/mapa';
import { Fale } from '../pages/fale/fale';
import { TimelineComponent, TimelineItemComponent, TimelineTimeComponent } from '../components/timeline/timeline';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Timeline,
    Paradidaticos,
    Projetos,
    Feira,
    Atividades,
    Mapa,
    Fale,
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
<<<<<<< HEAD
    IonicModule.forRoot(MyApp),
    SweetAlert2Module.forRoot()

=======
    IonicModule.forRoot(MyApp)
   
>>>>>>> 8d3b7a0e1ce6ce6d40cfb5448c8465277e5ae6e0
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Timeline,
    Paradidaticos,
    Projetos,
    Feira,
    Atividades,
    Mapa,
    Fale
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
