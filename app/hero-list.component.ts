import {Component, EventEmitter} from 'angular2/core';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-list',
  inputs: ['heroes', 'selectedHero'],
  outputs: ['selected', 'unselected'],
  templateUrl: '../templates/hero-list.component.html'
})
export class HeroListComponent {
  public heroes :Hero[];
  public selectedHero :Hero;
  public selected :EventEmitter<Hero> = new EventEmitter();
  public unselected :EventEmitter<any> = new EventEmitter();

  onSelect (hero :Hero) :void {
    if (this.selectedHero === hero) {
      this.unselected.emit(null);
    } else {
      this.selectedHero = hero;
      this.selected.emit(this.selectedHero);
    }
  }
}
