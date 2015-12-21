import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroListComponent} from './hero-list.component';


@Component({
  selector: 'my-app',
  templateUrl: '../templates/app.component.html',
  directives: [HeroDetailComponent, HeroListComponent],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  public title :string = 'Tour of Heroes';
  public subtitle :string = 'The best Heroes in your city!';
  public heroes :Hero[];
  public selectedHero :Hero;
  private _heroService :HeroService;

  constructor (service :HeroService) {
    this._heroService = service;
  }

  ngOnInit () {
    this.getHeroes();
  }

  onSelected (hero) {
    this.selectedHero = hero;
  }

  onUnselected () {
    this.selectedHero = null;
  }

  getHeroes () {
    this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
}
