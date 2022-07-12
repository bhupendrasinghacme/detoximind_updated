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
      background: "#fff",
      icon: "call"
    },
    {
      title: "Chat Room",
      color: "#0F1B41",
      type: "chatroom",
      background: "#fff",
      icon: "browsers"
    },
    {
      title: "Journal",
      color: "#0F1B41",
      type: "journal",
      background: "#fff",
      icon: "journal"
    },
    {
      title: "Ask Me Buddy",
      color: "#0F1B41",
      type: "askmebuddy",
      background: "#fff",
      icon: "chatbubbles"
    },
    {
      title: "Meditation",
      color: "#0F1B41",
      type: "meditation",
      background: "#fff",
      icon: "snow"
    },
    {
      title: "Blogs",
      color: "#0F1B41",
      type: "blogs",
      background: "#fff",
      icon: "logo-twitch"
    },
    {
      title: "Work Shop",
      color: "#0F1B41",
      type: "workshop",
      background: "#fff",
      icon: "card"
    },
  
  ]
  constructor(
    public router: Router

  ) { }

  openScreens(nav) {
    if (nav == "helpline") {
      this.router.navigate([`/openpage`, '14158']);
    } else if (nav == "workshop") {
      this.router.navigate([`/openpage`, '13']);
    } else {
      this.router.navigate([`/${nav}`]);
    }


  }

}
