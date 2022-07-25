import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.page.html',
  styleUrls: ['./workshop.page.scss'],
})
export class WorkshopPage implements OnInit {
  posts: any;
  constructor(
    private postService: PostService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.getPost();
  }
  async getPost() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner: 'lines-sharp'
    });
    await loading.present();
    this.postService.getPostDataPage(61, 1).subscribe(async item => {
      this.posts = item;
      console.log(item);
      await loading.dismiss();
    }, async error => {
      console.log(error);
      await loading.dismiss();
    })
  }

  loadData(event: any) {
    const page = (Math.ceil(this.posts.length / 10)) + 1;
    this.postService.getPostDataPage(61, page).subscribe(
      async (newPagePosts) => {
        this.posts.push(...newPagePosts);
        event.target.complete();
      },
      async (err) => {
        event.target.disabled = true;
        console.log(err);
      });

  }
}
