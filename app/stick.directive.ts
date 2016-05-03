import {Directive, ElementRef, Input, HostListener} from '@angular/core';
import {WindowRef} from './window';

@Directive({
    selector: '[stick]'
})
export class StickDirective {

    private _minY: number = 100;
    private _className: string = 'stick';

    @Input('stickMin') set stickMin(minY: number) {
        this._minY = minY || this._minY;
    }

    @Input('stickClass') set stickClass(className: string) {
        this._className = className || this._className;
    }

    constructor(private _element: ElementRef, private _window: WindowRef) {

    }

    @HostListener('window:scroll', ['$event'])
    handleScrollEvent(e) {

        if (this._window.nativeWindow.pageYOffset > this._minY) {

            this._element.nativeElement.classList.add(this._className);

        } else {

            this._element.nativeElement.classList.remove(this._className);
        }
    }
}