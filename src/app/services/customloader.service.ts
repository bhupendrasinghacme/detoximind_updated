import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class CustomloaderService {
  loader: any;
  constructor(
    public loadingController: LoadingController
  ) {
    this.showLoader();
  }

  showHideAutoLoader() {

    this.loadingController.create({
      message: 'This Loader Will Auto Hide in 2 Seconds',
      duration: 2000
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed! after 2 Seconds', dis);
      });
    });

  }

  // Show the loader for infinite time
  async showLoader() {
    this.loader = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner: 'dots'
    });
    await this.loader.present();
  }

  // Hide the loader if already created otherwise return error
  async hideLoader() {
    await this.loader.dismiss();

  }
}
