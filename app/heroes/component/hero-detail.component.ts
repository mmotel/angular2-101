import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero, HEROES_POWERS} from '../model/hero';
import {HeroService} from '../service/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './app/heroes/template/hero-detail.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero;
  public powers :string[] = HEROES_POWERS;

  private _router :Router;
  private _routeParams :RouteParams;
  private _heroService :HeroService;

  constructor (router :Router, routeParams :RouteParams,
    heroService :HeroService) {
    this._router = router;
    this._routeParams = routeParams;
    this._heroService = heroService;
  }

  ngOnInit () {
    let id = parseInt( this._routeParams.get('id') );
    this._heroService.getHero(id).then(hero => this.hero = hero);
  }
}
