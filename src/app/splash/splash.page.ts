import { Component, OnInit, AfterViewInit } from '@angular/core';
import { createAnimation, Animation } from '@ionic/core';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const squareA = createAnimation()
      .addElement(document.querySelectorAll('.img_wrapper'))
      .keyframes([
        { offset: 1, transform: 'scale(1) rotate(360)' },
        // { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
        // { offset: 1, transform: 'scale(1) rotate(45deg)' }
      ]);

    const squareB = createAnimation()
      .addElement(document.querySelectorAll('.img_wrapper'))
      .duration(2000)
      .keyframes([
        { offset: 0, transform: 'scale(1))', background: 'green' },
        { offset: 0.5, transform: 'scale(0.8)', background: '#fff' },
        { offset: 1, transform: 'scale(1)', background: 'red' }
      ]);

    const parent = createAnimation()
      // .duration(2000)
      // .iterations(Infinity)
      .addAnimation([squareA, squareB]);
    parent.play();
  }

}
