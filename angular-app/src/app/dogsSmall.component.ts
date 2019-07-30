import { Component } from '@angular/core';

@Component({
  selector: 'dogsSmall',
  templateUrl: './dogsSmall.component.html'
})
export class DogsSmallComponent {
  url = 'https://loremflickr.com/220/140/dog';

  getUrl() {
    return this.url + '?lock=' + (Math.random() * 10);
  }
}
