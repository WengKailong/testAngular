import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];
  currImg = 0;
  showImg = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currImg ++;
      this.currImg = this.currImg % this.images.length;
      this.showImg = false;
      setTimeout(() => {
        this.showImg = true;
      }, 10);
    }, 8000);
  }
}
