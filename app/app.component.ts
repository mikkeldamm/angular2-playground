import {Component} from '@angular/core';

import {StickDirective} from './stick.directive';

@Component({
  selector: 'my-app',
  template: `<h1 stick [stickMin]="200" [stickClass]="'damm'">My First Angular 2 App</h1><div class="what">Some text</div>`,
  directives: [StickDirective]
})
export class AppComponent { }