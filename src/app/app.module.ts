import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Timeline } from '../pages/timeline/timeline';
import { Paradidaticos } from '../pages/paradidaticos/paradidaticos';
import { Projetos } from '../pages/projetos/projetos';
import { Atividades } from '../pages/atividades/atividades';
import { Mapa } from '../pages/mapa/mapa';
import { Fale } from '../pages/fale/fale';
import { TimelineItemComponent, TimelineTimeComponent, TimelineComponent } from '../components/timeline/timeline';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Timeline,
    Paradidaticos,
    Projetos,
    Atividades,
    Mapa,
    Fale,
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Timeline,
    Paradidaticos,
    Projetos,
    Atividades,
    Mapa,
    Fale
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
