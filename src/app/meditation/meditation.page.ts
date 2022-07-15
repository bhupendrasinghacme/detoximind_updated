import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.page.html',
  styleUrls: ['./meditation.page.scss'],
})
export class MeditationPage implements OnInit {
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
    this.postService.getPostDataPage(41, 1).subscribe(async item => {
      this.posts = item;
      await loading.dismiss();
    }, async error => {
      console.log(error)
      await loading.dismiss();
    })
  }

  loadData(event: any) {
    const page = (Math.ceil(this.posts.length / 10)) + 1;
    this.postService.getPostDataPage(41, page).subscribe(
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
