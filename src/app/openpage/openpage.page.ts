import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PagesService } from '../services/page.service';

@Component({
  selector: 'app-openpage',
  templateUrl: './openpage.page.html',
  styleUrls: ['./openpage.page.scss'],
})
export class OpenpagePage implements OnInit {
  id: any;
  All_data: any;
  constructor(
    private route: ActivatedRoute,
    public loadingController: LoadingController,
    private pages_service: PagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadingData()
  }


  async loadingData() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner: 'lines-sharp'
    });
    await loading.present();
    this.pages_service.getPagesData(this.id).subscribe(async item => {
      this.All_data = item;
      console.log(this.All_data);
      await loading.dismiss();
    }, async err => {
      console.log(err);
      await loading.dismiss();
    })
  }

}
