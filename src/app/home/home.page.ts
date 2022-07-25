import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, AnimationController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';


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
      title: "Workshops",
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
      img: "../../assets/website-img.avif"
    }
  ];
  user_name: any;
  journal_login: boolean = false;
  constructor(
    public router: Router,
    private animationCtrl: AnimationController,
    private auth: AuthenticationService,
    public alertController: AlertController,
    public act_route: ActivatedRoute
  ) {
    this.act_route.params.subscribe(itm => {
      this.auth.getJournalPassword().then(item => {
        if (item.value != null) {
          this.journal_login = JSON.parse(item.value).journal_token;
          console.log("act_router", this.journal_login);
        }
      })
    });
    this.auth.getJournalPassword().then(item => {
      if (item.value != null) {
        this.journal_login = JSON.parse(item.value).journal_token;
      }
    })


    this.auth.getUserData().then(item => {
      this.user_name = JSON.parse(item.value)['displayName'];
    })

  }
  ngAfterViewInit() {
    document.querySelectorAll(".bottom_section_row").forEach((item, index) => {
      this.animationCtrl.create()
        .addElement(item)
        .duration(1000)
        .delay(index * (1000 / 3))
        .easing('cubic-bezier(0.4,0.0,0.2,0.1)')
        .fromTo('transform', 'scale(0)', 'scale(0.8)')
        .fromTo('opacity', '0.2', '2')
        .play();

    })
  }

  openScreens(nav) {
    if (nav == "helpline") {
      this.router.navigate([`/openpage`, '14158']);
    }
    else if (nav == "journal") {
      this.journal_login ? this.router.navigate([`/journal`]) : this.presentAlert();
    }
    else {
      this.router.navigate([`/${nav}`]);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Journal Login',
      cssClass: 'custom-alert',
      inputs: [
        // {
        //   placeholder: 'UserName',
        //   name: 'username'
        // },
        {
          type: 'password',
          placeholder: 'Password',
          name: 'password'
        }
      ],
      buttons: [
        'cancel',
        {
          text: 'login',
          handler: data => {
            if (this.user_name == '' && data.password == '') {
              this.presentAlertMessage("Please Enter Email and password");
            } else {
              this.auth.jounalLogin({ username: this.user_name, password: data.password }).subscribe(itm => {
                this.router.navigate([`/journal`]);
              }, error => {
                this.presentAlertMessage(error.error.message)
              })
            }

          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertMessage(meg) {
    const alert = await this.alertController.create({
      header: 'Error Message :-',
      message: meg,
      buttons: ['Ok']
    });

    await alert.present();
  }

}
