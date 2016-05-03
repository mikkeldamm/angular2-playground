import {Component} from '@angular/core';

import {StickDirective} from './stick.directive';

@Component({
  selector: 'my-app',
  template: `
    <header stick>
        <h3>This header will stick after default 100px on the Y-axis with class 'stick'</h3>
    </header>
    <main>
        <section>
            This will become a very large area :)
        </section>
        <aside stick [stickMin]="200" [stickClass]="'left-stick'">
            This could be a box containing filters, menus, itinerary etc.<br>
            It will get the class 'left-stick' after 200px on the Y-axis
        </aside>
    </main>
    `,
  directives: [StickDirective]
})
export class AppComponent { }