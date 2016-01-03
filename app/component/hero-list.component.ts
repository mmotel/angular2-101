import {Component, EventEmitter} from 'angular2/core';
import {Hero} from '../model/hero';

@Component({
  selector: 'my-hero-list',
  inputs: ['heroes', 'selectedHero'],
  outputs: ['selectedHeroChange'],
  templateUrl: './app/templates/hero-list.component.html'
})
export class HeroListComponent {
  public heroes :Hero[];
  public selectedHero :Hero;
  public selectedHeroChange :EventEmitter<Hero> = new EventEmitter();

  onSelect (hero :Hero) {
    if (this.selectedHero === hero) {
      this.selectedHero = null;
    } else {
      this.selectedHero = hero;
    }
    this.selectedHeroChange.emit(this.selectedHero);
  }
}
