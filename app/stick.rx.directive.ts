import {Directive, ElementRef, Input, HostListener} from '@angular/core';
import {Observable} from 'rxjs/rx';

import {WindowRef} from './window';

@Directive({
    selector: '[stick-rx]'
})
export class StickRxDirective {

    constructor(private _element: ElementRef, private _window: WindowRef) {

        this.subscribeForScrollEvent();
    }

    subscribeForScrollEvent() {
        
        var obs = Observable.fromEvent(window, 'scroll');

        obs.subscribe((e) => this.handleScrollEvent(e));
    }
    
    handleScrollEvent(e) {
        
        if (this._window.nativeWindow.pageYOffset > 100) {

            this._element.nativeElement.classList.add('stick');

        } else {

            this._element.nativeElement.classList.remove('stick');
        }
    }
}