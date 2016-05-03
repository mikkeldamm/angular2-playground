import {unimplemented} from '@angular/core/src/facade/exceptions';
import {OpaqueToken, Provider} from '@angular/core/index';

function _window(): any {
    return window;
}

export const WINDOW: OpaqueToken = new OpaqueToken('WindowToken');

export abstract class WindowRef {
    get nativeWindow(): any {
        return unimplemented();
    }
}

export class BrowserWindowRef extends WindowRef {
    constructor() {
        super();
    }
    get nativeWindow(): any {
        return _window();
    }
}


export const WINDOW_PROVIDERS = [
    new Provider(WindowRef, { useClass: BrowserWindowRef }),
    new Provider(WINDOW, { useFactory: _window, deps: [] }),
];