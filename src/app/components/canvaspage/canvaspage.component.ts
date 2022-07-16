import { Component, AfterViewInit, ViewChild, Output, EventEmitter, } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-canvaspage',
  templateUrl: './canvaspage.component.html',
  styleUrls: ['./canvaspage.component.scss'],
})
export class CanvaspageComponent implements AfterViewInit {
  @ViewChild('imageCanvas', { static: false }) canvas: any;
  @Output() changeCompoents: EventEmitter<any> = new EventEmitter();
  canvasElement: any;
  saveX: number;
  saveY: number;

  selectedColor = '#9e2956';
  colors = ['#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];
  errager = "#fff";
  drawing: any = false;
  lineWidth = 5;
  constructor(private plt: Platform, private toastCtrl: ToastController) { }

  ngAfterViewInit() {
    // Set the Canvas Element and its size
    this.canvasElement = this.canvas.nativeElement;
    // this.canvasElement.width = this.plt.width() + '';
    // this.canvasElement.height = 200;
    document.querySelectorAll(".color-block")[0].classList.add('active')
  }

  startDrawing(ev) {
    this.drawing = true;
    var canvasPosition = this.canvasElement.getBoundingClientRect();
    this.saveX = ev.pageX - this.canvasElement.getBoundingClientRect().x;
    this.saveY = ev.pageY - this.canvasElement.getBoundingClientRect().y;
  }

  endDrawing() {
    this.drawing = false;
  }

  selectColor(evt, color) {
    document.querySelectorAll(".color-block").forEach(item => {
      item.classList.remove("active");
    })
    if (evt.target.classList.contains('icon')) {
      evt.target.parentNode.classList.add('active');
    } else {
      evt.target.classList.add('active');
    }
    this.selectedColor = color;

  }

  setBackground() {
    var background = new Image();
    background.src = './assets/code.png';
    let ctx = this.canvasElement.getContext('2d');

    background.onload = () => {
      ctx.drawImage(background, 0, 0, this.canvasElement.width, this.canvasElement.height);
    }
  }

  moved(ev) {
    if (this.drawing) {
      var canvasPosition = this.canvasElement.getBoundingClientRect()
      let ctx = this.canvasElement.getContext('2d');
      let currentX = ev.pageX - this.canvasElement.getBoundingClientRect().x;
      let currentY = ev.pageY - this.canvasElement.getBoundingClientRect().y;

      ctx.lineJoin = 'round';
      ctx.strokeStyle = this.selectedColor;
      ctx.lineWidth = this.lineWidth;
      ctx.beginPath();
      ctx.moveTo(this.saveX, this.saveY);
      ctx.lineTo(currentX, currentY);
      ctx.closePath();
      ctx.stroke();
      this.saveX = currentX;
      this.saveY = currentY;
      // console.log(this.canvasElement);
    }
  }

  // https://forum.ionicframework.com/t/save-base64-encoded-image-to-specific-filepath/96180/3
  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
  saveImage() {
    var dataURL = this.canvasElement.toDataURL("image/png");
    console.log(dataURL);

    // var reader = new FileReader();
    // reader.onload = function (event) {
    //   var res = event.target.result;
    //   console.log(res)
    // }
    // var file = dataURL;
    // reader.readAsDataURL(file)
    // console.log(reader)
  }

  closeModel() {
    this.changeCompoents.emit({ type: 'noteDraw' });
  }


}
