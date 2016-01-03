import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Hero} from '../model/hero';

@Component({
  selector: 'my-hero-list',
  templateUrl: './app/templates/hero-list.component.html'
})
export class HeroListComponent {
  @Input() heroes :Hero[];
  @Input() selectedHero :Hero;
  @Output() selectedHeroChange :EventEmitter<Hero> = new EventEmitter();

  onSelect (hero :Hero) {
    if (this.selectedHero === hero) {
      this.selectedHero = null;
    } else {
      this.selectedHero = hero;
    }
    this.selectedHeroChange.emit(this.selectedHero);
  }
}
