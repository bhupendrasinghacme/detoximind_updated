import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { createAnimation, Animation } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  All_items: any = [
    {
      title: "Journal",
      color: "#0F1B41",
      type: "journal",
      background: "#fff",
      img: "../../assets/journal.jpg"
    },
    {
      title: "Meditation",
      color: "#0F1B41",
      type: "meditation",
      background: "#fff",
      img: "../../assets/meditation.jpg"
    },
    {
      title: "Ask Me Buddy",
      color: "#0F1B41",
      type: "askmebuddy",
      background: "#fff",
      img: "../../assets/ask-me-buddy.jpg"
    },
    {
      title: "Chat Room",
      color: "#0F1B41",
      type: "chatpage",
      background: "#fff",
      img: "../../assets/chat-room.jpg"
    },
    {
      title: "Blogs",
      color: "#0F1B41",
      type: "blogs",
      background: "#fff",
      img: "../../assets/blogs.jpg"
    },
    {
      title: "Workshop",
      color: "#0F1B41",
      type: "workshop",
      background: "#fff",
      img: "../../assets/workshop.jpg"
    },
    {
      title: "Helpline Number",
      type: "helpline",
      color: "#0F1B41",
      img: "../../assets/helpline-num.jpg"
    },
    {
      title: "Websites",
      type: "link",
      color: "#0F1B41",
      img: "../../assets/Logo.jpg"
    }
  ]
  constructor(
    public router: Router,
    private animationCtrl: AnimationController
  ) {

  }
  ngAfterViewInit() {
    document.querySelectorAll(".bottom_section_row").forEach((item, index) => {
      this.animationCtrl.create()
        .addElement(item)
        .duration(1000)
        .delay(index * (1000 / 3))
        .easing('cubic-bezier(0.4,0.0,0.2,0.1)')
        .fromTo('transform', 'scale(0)', 'scale(1)')
        .fromTo('opacity', '0.2', '2')
        .play();

    })
  }

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
