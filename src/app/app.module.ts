import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import * as http from '@angular/http'
import { Facebook } from '@ionic-native/facebook';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Timeline } from '../pages/timeline/timeline';
import { Paradidaticos } from '../pages/paradidaticos/paradidaticos';
import { Projetos } from '../pages/projetos/projetos';
import { Feira } from '../pages/feira/feira';
import { bbonline } from '../pages/bbonline/bbonline';
import { tutorial } from '../pages/tutorial/tutorial';
import { Fale } from '../pages/fale/fale';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

import { TimelineComponent, TimelineItemComponent, TimelineTimeComponent } from '../components/timeline/timeline';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    tutorial,
    Timeline,
    Paradidaticos,
    Projetos,
    Feira,
    bbonline,
    Fale,
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent
  ],
  imports: [
    BrowserModule,
    http.HttpModule,
    IonicModule.forRoot(MyApp, {
    }),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    tutorial,
    Timeline,
    Paradidaticos,
    Projetos,
    Feira,
    bbonline,
    Fale
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    VideoPlayer,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
  
})
export class AppModule { }
