import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  All_items: any = [
    {
      title: "Helpline Number",
      type: "helpline",
      color: "#0F1B41",
      background: "#fff"
    },
    {
      title: "Chat Room",
      color: "#0F1B41",
      type: "chatroom",
      background: "#fff"
    },
    {
      title: "Journal",
      color: "#0F1B41",
      type: "journal",
      background: "#fff"
    },
    {
      title: "Ask Me Buddy",
      color: "#0F1B41",
      type: "askmebuddy",
      background: "#fff"
    },
    {
      title: "Meditation",
      color: "#0F1B41",
      type: "meditation",
      background: "#fff"
    },
    {
      title: "Blogs",
      color: "#0F1B41",
      type: "blogs",
      background: "#fff"
    },
    {
      title: "Work Shop",
      color: "#0F1B41",
      type: "workshop",
      background: "#fff"
    },
    {
      title: "Profile",
      color: "#0F1B41",
      type: "profile",
      background: "#fff"
    }
  ]
  constructor(
    public router: Router

  ) { }

  openScreens(nav) {
    console.log(nav);
    this.router.navigate(['/', nav]);

  }

}
