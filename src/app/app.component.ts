import { Component, ViewEncapsulation } from '@angular/core';
import '@dile/dile-menu-hamburger/dile-menu-hamburger.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'webcomponentsTest';

  
}
