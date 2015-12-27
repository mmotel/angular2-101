import {Component, EventEmitter} from 'angular2/core';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-list',
  inputs: ['heroes', 'selectedHero'],
  outputs: ['selectedHeroChange'],
  templateUrl: '../templates/hero-list.component.html'
})
export class HeroListComponent {
  public heroes :Hero[];
  public selectedHero :Hero;
  public selectedHeroChange :EventEmitter<Hero> = new EventEmitter();

  onSelect (hero :Hero) {
    if (this.selectedHero === hero) {
      this.selectedHeroChange.emit(null);
    } else {
      this.selectedHero = hero;
      this.selectedHeroChange.emit(this.selectedHero);
    }
  }
}
