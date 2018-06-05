import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {PaddPage} from '../Padd/Padd';
import { ModuleLoader } from 'ionic-angular/util/module-loader';
import {UpdatePage} from '../update/update';
import {MapPage} from '../map/map';
import {ChartPage} from '../chart/chart';
@Component({
  selector: 'page-epidomology',
  templateUrl: 'epidomology.html'
})
export class epidomologyPage {

  constructor(public navCtrl: NavController,public modleCtrl:ModalController) {

  }
  onButtonClicked() {
    this.navCtrl.push(PaddPage);
  }

  onButtonClicked1() {
    this.navCtrl.push(UpdatePage);
  }

  onButtonClicked2() {
    this.navCtrl.push(ChartPage);
  }

  onButtonClicked3() {
    this.navCtrl.push(MapPage);
  }

}
