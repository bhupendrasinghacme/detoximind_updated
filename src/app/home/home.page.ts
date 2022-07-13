import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { createAnimation, Animation } from '@ionic/core';

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
      icon: "../../assets/helpline-num.jpg"
    },
    {
      title: "Chat Room",
      color: "#0F1B41",
      type: "chatroom",
      background: "#fff",
      icon: "../../assets/chat-room.jpg"
    },
    {
      title: "Journal",
      color: "#0F1B41",
      type: "journal",
      background: "#fff",
      icon: "../../assets/journal.jpg"
    },
    {
      title: "Ask Me Buddy",
      color: "#0F1B41",
      type: "askmebuddy",
      background: "#fff",
      icon: "../../assets/ask-me-buddy.jpg"
    },
    {
      title: "Meditation",
      color: "#0F1B41",
      type: "meditation",
      background: "#fff",
      icon: "../../assets/meditation.jpg"
    },
    {
      title: "Blogs",
      color: "#0F1B41",
      type: "blogs",
      background: "#fff",
      icon: "../../assets/blogs.jpg"
    },
    {
      title: "Workshop",
      color: "#0F1B41",
      type: "workshop",
      background: "#fff",
      icon: "../../assets/workshop.jpg"
    },

  ]
  constructor(
    public router: Router
  ) {
    setTimeout(() => {
      const squareA = createAnimation()
        .addElement(document.querySelectorAll('.image_icon'))
        .keyframes([
          { offset: 0, transform: 'scale(1) rotate(0)' },
          { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
          { offset: 1, transform: 'scale(1) rotate(45deg)' }
        ]);

      const squareC = createAnimation()
        .addElement(document.querySelectorAll('.image_icon'))
        .duration(2000)
        .keyframes([
          { offset: 0, transform: 'scale(1))', color: 'green' },
          { offset: 0.5, transform: 'scale(0.8)', color: 'blue' },
          { offset: 1, transform: 'scale(1)', color: 'red' }
        ]);

      const parent = createAnimation()
        .duration(2000)
        .iterations(Infinity)
        .addAnimation([squareA, squareC]);
      // parent.play();
    }, 1000)



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
