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
      describtion: " Journal apps are best suited for people who want a quick important memories. ",
      color: "#0F1B41",
      type: "journal",
      background: "#fff",
      img: "../../assets/journal.jpg"
    },
    {
      title: "Meditation",
      describtion: "Meditation is the practice of intentionally spending time with our mind.",
      color: "#0F1B41",
      type: "meditation",
      background: "#fff",
      img: "../../assets/meditation.jpg"
    },
    {
      title: "Ask Me Buddy",
      describtion: "A buddy system is an onboarding and knowledge sharing method used to orient new employees.",
      color: "#0F1B41",
      type: "askmebuddy",
      background: "#fff",
      img: "../../assets/ask-me-buddy.jpg"
    },
    {
      title: "Chat Room",
      describtion: "Chat rooms are areas in which people can gather to engage in real-time conversations.",
      color: "#0F1B41",
      type: "chatroom",
      background: "#fff",
      img: "../../assets/chat-room.jpg"
    },
    {
      title: "Blogs",
      describtion: "Stress can affect sleep quality. Many people lie awake worrying and feeling anxious, which hinders their ability to get to sleep. ",
      color: "#0F1B41",
      type: "blogs",
      background: "#fff",
      img: "../../assets/blogs.jpg"
    },
    {
      title: "Workshop",
      describtion: "Detoximind offers a safe space for tweens, teens and young adults who are grappling with stress, low self-esteem, bullying, anxiety or depression.",
      color: "#0F1B41",
      type: "workshop",
      background: "#fff",
      img: "../../assets/workshop.jpg"
    },
    {
      title: "Helpline Number",
      describtion: "National Suicide Prevention Lifeline: (800) 273-8255 and/or Text HOME to 741741",
      type: "helpline",
      color: "#0F1B41",
      img: "../../assets/helpline-num.jpg"
    },
  ]
  constructor(
    public router: Router,
    private animationCtrl: AnimationController
  ) {

  }
  ngAfterViewInit() {
    const squareC = this.animationCtrl.create()
      .addElement(document.querySelector(".bottom_section_row"))
      .fill('none')
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '0.5' },
        { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '0.5' }
      ]);
    squareC.play();

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
