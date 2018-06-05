import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {PeditPage} from '../pedit/pedit';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  items;


  patients:FirebaseListObservable<any>
  list: any = [];

 
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public db:AngularFireDatabase) {
    //this.search();
    
    this.patients= db.list(`/patient`);
    this.patients.subscribe(resp => {
      this.list = resp;
    });

  }

  editp(PName,sex,myDate,Add,location,tp,sick,diDate,ill,blood){
 
    this.navCtrl.push(PeditPage,{
      Patient  : PName,
      Gender : sex,
      Birthday : myDate,
      Address : Add,
      District : location,
      Telephone : tp,
      Disease : sick,
      Disease_date : diDate,
      Level : ill,
      Blood_Group : blood,
 
 
    });
  }

  // search(item: string){
  //   this.items = this.db.list('patient', 
  //  // ref => ref.orderByChild('Patient').equalTo(this.items));
  // }


  deletep(pts){
    this.patients.remove(pts) 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

}
