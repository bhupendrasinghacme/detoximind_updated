import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { JournalService } from 'src/app/services/journal.service';

@Component({
  selector: 'app-imageviewer',
  templateUrl: './imageviewer.component.html',
  styleUrls: ['./imageviewer.component.scss'],
})
export class ImageviewerComponent implements OnInit {
  @Input() item = '';
  @Output() changeCompoents: EventEmitter<any> = new EventEmitter();
  constructor(
    public loadingCtrl: LoadingController,
    private journal: JournalService,
    public toastController: ToastController
  ) { }

  ngOnInit() {

    console.log(this.item['email'])
  }
  closeModel() {
    this.changeCompoents.emit({ type: 'image-viewer' });
  }

  async deleteNotes(data_id) {
    let data = {
      id: data_id,
      email: this.item['email'],
    }
    const loading = await this.loadingCtrl.create({
      message: 'please wait...',
      spinner: 'lines-sharp'
    });
    loading.present();
    this.journal.deleteNotes(data).subscribe(async item => {
      console.log(item);
      this.presentToast(item);
      this.closeModel();
      await loading.dismiss();
    }, async error => {
      console.log(error);
      await loading.dismiss();
    })
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
