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
      .duration(3000)
      .fromTo('opacity', '0.0', '2');
    squareC.play();
    let squareD = this.animationCtrl.create()
      .addElement(document.querySelector('.p_animation_text'))
      .duration(1500)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '2  ', transform: 'scale(1.5)' },
      ]);


    setTimeout(() => {
      let squareA = this.animationCtrl.create()
        .addElement(document.querySelector('.animate_text'))
        .duration(1500)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '2  ', transform: 'scale(1.5)' },
        ]);
      let squareB = this.animationCtrl.create()
        .addElement(document.querySelector('.animate_text'))
        .duration(1500)
        .keyframes([
          { offset: 0, transform: 'translateY(0px)', opacity: '0.5' },
          { offset: 0.5, transform: 'translateY(40px)', opacity: '1' },
          { offset: 1, transform: 'translateY(20px)', opacity: '2' }
        ]);
      squareA.play();
      setTimeout(() => {
        squareB.play();
      }, 1000)
    }, 1000)
    // setTimeout(() => {
    //   this.router.navigate(['/home']);
    // }, 3000)


  }

}
