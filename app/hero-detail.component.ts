import {Component, EventEmitter} from 'angular2/core';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-detail',
  inputs: ['hero'],
  outputs: ['closed'],
  templateUrl: '../templates/hero-detail.component.html'
})
export class HeroDetailComponent {
  public hero: Hero;
  public closed :EventEmitter<any> = new EventEmitter();

  close () {
    this.closed.emit(null);
  }
}
