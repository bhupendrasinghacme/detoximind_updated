import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit, AfterViewInit {

  constructor(
    private animationCtrl: AnimationController,
    public router: Router
  ) {
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    let squareC = this.animationCtrl.create()
      .addElement(document.querySelector('.img_wrapper'))
      .duration(1500)
      .fromTo('transform', 'scale(0.0)', 'scale(0.8)')
      .fromTo('opacity', '0.2', '2');
    squareC.play();

    setTimeout(() => {
      let squareA = this.animationCtrl.create()
        .addElement(document.querySelector('.animate_text'))
        .duration(1500)
        .fromTo('transform', 'scale(0.0)', 'scale(1.5)')
        .fromTo('opacity', '0.2', '2');

      squareA.play();
    }, 1000)
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 5000)


  }

}
