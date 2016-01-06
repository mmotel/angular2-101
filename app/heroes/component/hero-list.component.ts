import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {Hero} from '../model/hero';
import {HeroService} from '../service/hero.service';

@Component({
  selector: 'my-hero-list',
  templateUrl: './app/heroes/template/hero-list.component.html',
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {
  private heroes :Hero[];
  private selectedHero :Hero;
  private _heroService :HeroService;

  constructor (heroService :HeroService) {
    this._heroService = heroService;
  }

  ngOnInit () {
    this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect (hero :Hero) {
    if (this.selectedHero === hero) {
      this.selectedHero = null;
    } else {
      this.selectedHero = hero;
    }
  }
}
