import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-car-modal',
  templateUrl: './car-modal.page.html',
  styleUrls: ['./car-modal.page.scss'],
})
export class CarModalPage implements OnInit {

  @Input() car;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.car);
    
  }

  back() {
    this.modalCtrl.dismiss();
  }

}
