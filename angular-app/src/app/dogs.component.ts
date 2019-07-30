import { Component } from '@angular/core';

@Component({
  selector: 'dogs',
  templateUrl: './dogs.component.html'
})
export class DogsComponent {
  url = 'https://loremflickr.com/320/240/dog';

  getUrl() {
    return this.url + '?lock=' + (Math.random() * 10);
  }
}
