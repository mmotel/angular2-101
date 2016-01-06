import {Component, EventEmitter, Input, Output} from 'angular2/core';
import {Hero, HEROES_POWERS} from '../model/hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './app/heroes/template/hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input() hero: Hero;
  @Output() heroChange :EventEmitter<Hero> = new EventEmitter();
  private powers :string[] = HEROES_POWERS;

  close () {
    this.heroChange.emit(null);
  }
}
