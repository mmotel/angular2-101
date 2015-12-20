import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroListComponent} from './hero-list.component';

@Component({
  selector: 'my-app',
  templateUrl: '../templates/app.component.html',
  directives: [HeroDetailComponent, HeroListComponent]
})
export class AppComponent {
  public title :string = 'Tour of Heroes';
  public subtitle :string = 'The best Heroes in your city!';
  public heroes :Hero[] = HEROES;
  public selectedHero :Hero;

  onSelected (hero) {
    this.selectedHero = hero;
  }

  onUnselected () {
    this.selectedHero = null;
  }
}


var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
]
