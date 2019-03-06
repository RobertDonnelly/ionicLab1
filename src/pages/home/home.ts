import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConnaughtPage } from '../connaught/connaught';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openConnaughtPage(){
    this.navCtrl.push('ConnaughtPage');
  }
  openMunsterPage(){
    this.navCtrl.push('MunsterPage');

  }
  openUlsterPage(){
    this.navCtrl.push('UlsterPage');

  }
  openLeinsterPage(){
    this.navCtrl.push('LeinsterPage');

  }

}

