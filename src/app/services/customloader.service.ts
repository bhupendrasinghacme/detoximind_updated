import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class CustomloaderService {

  constructor(
    public loadingController: LoadingController
  ) { }

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
    const loader = await this.loadingController.create({
      spinner: 'dots',
      message: `<div>
      <img src="../assets/pic-header.png" />
      </div>`
    })
    await loader.present();


  }

  // Hide the loader if already created otherwise return error
  async hideLoader() {
    await this.loadingController.dismiss();
  }
}
