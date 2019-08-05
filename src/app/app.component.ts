import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <main flex>
          <router-outlet></router-outlet>
      </main>`,
  styles: []
})
export class AppComponent {

  constructor() {
  }
}

