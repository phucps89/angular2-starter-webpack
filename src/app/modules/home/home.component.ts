import {Component, ViewEncapsulation} from '@angular/core';

import {AppState} from '../../app.service';
import {Title} from './title/title.service';
import {XLarge} from './x-large/x-large.directive';
import {HelperService} from "../../services/helper/helper.service";

declare var $: any;

@Component({
  selector: 'home',  // <home></home>
  encapsulation: ViewEncapsulation.None,
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  // Set our default values
  localState = {value: ''};
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title, private _helper: HelperService) {
  }

  ngOnInit() {
    console.log('hello `Home` component');
  }
}