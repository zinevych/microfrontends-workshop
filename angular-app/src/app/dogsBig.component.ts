import { Component } from '@angular/core';

@Component({
  selector: 'dogsBig',
  templateUrl: './dogsBig.component.html'
})
export class DogsBigComponent {
  url = 'https://loremflickr.com/720/440/dog';

  getUrl() {
    return this.url + '?lock=' + (Math.random() * 10);
  }
}
