import {Component, EventEmitter} from 'angular2/core';
import {Hero, HEROES_POWERS} from './hero';

@Component({
  selector: 'my-hero-detail',
  inputs: ['hero'],
  outputs: ['heroChange'],
  templateUrl: '../templates/hero-detail.component.html'
})
export class HeroDetailComponent {
  public hero: Hero;
  public heroChange :EventEmitter<Hero> = new EventEmitter();
  public powers :string[] = HEROES_POWERS;

  close () {
    this.heroChange.emit(null);
  }
}
