import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tizen';
  angular = 'assets/angular.png';
  tizen = 'assets/tizen.png';
  img = this.angular;

  changeImage() {
    if (this.img === this.angular) {
      this.img = this.tizen;
    } else {
      this.img = this.angular;
    }
  }
}
