import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import firebase from 'firebase';
import {Chart} from 'chart.js';
/**
 * Generated class for the ChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {

  @ViewChild('lineCanvas') lineCanvas;
  todoList$: FirebaseListObservable<any[]>;
  private lineChart: any;
  items;
  xArray: any[] = [];
  yArray: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDatabase: AngularFireDatabase) {
    this.items = firebase.database().ref("patient/chart").orderByKey();
    this.items.on('value', (snapshot) => {
      this.xArray.splice(0,this.xArray.length);
      this.yArray.splice(0,this.yArray.length);
      snapshot.forEach((childSnapshot) => {
        this.xArray.push(childSnapshot.key);
        this.yArray.push(childSnapshot.val());
      });
      this.basicChart(this.xArray, this.yArray);

    });
  }

  basicChart(key, value) {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'bar',
      data : {
        labels: key,
        datasets: [{
          label: "Patients chart",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(72,138,255,0.4)",
          borderColor: "rgba(72,138,255,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(72,138,255,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 8,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(72,138,255,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          data: value,
          spanGaps: false,


        }]
      },
      options : {
        scales : {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Ages'
            }
          }],
        }
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');
  }

}
