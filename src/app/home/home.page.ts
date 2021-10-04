import { Component, OnInit } from '@angular/core';
import { FipeService } from '../services/fipe.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { CarModalPage } from '../car-modal/car-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  list;
  stage = 1;
  brand;
  model;

  modal;

  constructor(
    private fipeService: FipeService,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.getBrands();
  }

  choose(codigo) {
    if(this.stage == 1) {
      this.selectBrand(codigo);
    } else if(this.stage == 2) {
      this.selectYear(codigo);
    } else if(this.stage == 3) {
      this.getPrice(codigo)
    }
  }

  back() {
    if(this.stage == 2) {
      this.getBrands();
    } else if(this.stage == 3) {
      this.selectBrand(this.brand)
    }
  }

  getBrands() {
    this.presentLoading();
    this.fipeService.getBrands().subscribe((res) => {
      console.log(res);
      this.list = res.body;
      this.stage = 1;
      this.loadingCtrl.dismiss();
    }, (err) => {
      console.log(err);
      this.loadingCtrl.dismiss();
    })
  }

  selectBrand(codigo) {
    this.presentLoading();
    this.fipeService.getCarModels(codigo).subscribe((res: any) => {
      console.log(res);
      this.list = res.body.modelos;
      this.stage = 2;
      this.brand = codigo;
      this.loadingCtrl.dismiss();
    }, (err) => {
      console.log(err);
      this.loadingCtrl.dismiss();
    })
  }

  selectYear(codigo2) {
    this.presentLoading();
    this.fipeService.getCarYears(this.brand, codigo2).subscribe((res) => {
      console.log(res);
      this.list = res.body
      this.stage = 3;
      this.model = codigo2;
      this.loadingCtrl.dismiss();
    }, (err) => {
      console.log(err);
      this.loadingCtrl.dismiss();
    })
  }

  getPrice(codigo3) {
    this.presentLoading();
    this.fipeService.getCarPrice(this.brand, this.model, codigo3).subscribe((res) => {
      console.log(res);
      this.presentModal(res.body)
      this.loadingCtrl.dismiss();
    }, (err) => {
      console.log(err);
      this.loadingCtrl.dismiss();
    })
  }

  async presentModal(car) {
    this.modal = await this.modalCtrl.create({
      component: CarModalPage,
      componentProps: {
        'car': car
      }
    });
    return await this.modal.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({});
    await loading.present();
  }

}
