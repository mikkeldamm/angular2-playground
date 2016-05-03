import {bootstrap}    from '@angular/platform-browser-dynamic';

import {WINDOW_PROVIDERS} from './window';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [WINDOW_PROVIDERS]);