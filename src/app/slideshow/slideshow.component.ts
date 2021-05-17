import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];
  headLines = [
    'Put texture in your life',
    'Feel light flying by',
    'Bring focus from peace',
  ];
  currImg = 0;
  showImg = true;
  constructor() {}

  ngOnInit(): void {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currImg++;
      this.currImg = this.currImg % this.images.length;
      this.showImg = false;
      setTimeout(() => {
        this.showImg = true;
      }, 10);
    }, 8000);
  }
}
