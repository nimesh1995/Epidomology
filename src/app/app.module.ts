import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { epidomologyPage } from '../pages/epidomology/epidomology';
import {PaddPage} from '../pages/Padd/Padd';
import {UpdatePage} from '../pages/update/update';
import {MapPage} from '../pages/map/map';
import {ChartPage} from '../pages/chart/chart';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database'; 
import {GoogleMapComponent} from '../components/google-map/google-map';
import {PeditPage} from '../pages/pedit/pedit';
import {chart} from 'chart.js';

var config = {
  apiKey: "AIzaSyAHu3WMY7vZH8mtga6HDtgySd3Mn4xvttA",
  authDomain: "public-health-ca-1523043290934.firebaseapp.com",
  databaseURL: "https://public-health-ca-1523043290934.firebaseio.com",
  projectId: "public-health-ca-1523043290934",
  storageBucket: "",
  messagingSenderId: "606628244094"
};


@NgModule({
  declarations: [
    MyApp,
    epidomologyPage,
    PaddPage,
    UpdatePage,
    MapPage,
    ChartPage,
    GoogleMapComponent,
    PeditPage
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    epidomologyPage,
    PaddPage,
    UpdatePage,
    MapPage,
    ChartPage,
    PeditPage,
    GoogleMapComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
