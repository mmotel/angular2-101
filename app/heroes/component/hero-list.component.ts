import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from '../model/hero';
import {HeroService} from '../service/hero.service';

@Component({
  selector: 'my-hero-list',
  templateUrl: './app/heroes/template/hero-list.component.html'
})
export class HeroListComponent implements OnInit {
  public heroes :Hero[];

  private _router :Router;
  private _heroService :HeroService;

  constructor (router :Router, heroService :HeroService) {
    this._router = router;
    this._heroService = heroService;
  }

  ngOnInit () {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect (hero :Hero) {
    this._router.navigate( ['HeroDetail', {id: hero.id}]);
  }
}
