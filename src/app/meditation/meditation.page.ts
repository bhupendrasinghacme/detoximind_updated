import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.page.html',
  styleUrls: ['./meditation.page.scss'],
})
export class MeditationPage implements OnInit {
  posts: any;
  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getPostDataPage(41, 1).subscribe(item => {
      this.posts = item;
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
