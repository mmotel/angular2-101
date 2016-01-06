import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from '../model/hero';
import {HeroService} from '../service/hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroListComponent} from './hero-list.component';
import {HeroFormComponent} from './hero-form.component';
import {CrisisListComponent} from './crisis-list.component';


@Component({
  selector: 'my-app',
  templateUrl: './app/templates/app.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/crisis-center', name: 'CrisisCenter', component: CrisisListComponent},
  {path: '/heroes', name: 'Heroes', component: HeroListComponent},
  {path: '/hero/add', name: 'AddHero', component: HeroFormComponent}
])
export class AppComponent implements OnInit {
  public title :string = 'Tour of Heroes';
  public subtitle :string = 'The best Heroes in your city!';

  constructor () {}

  ngOnInit () {}
}
