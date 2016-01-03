import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero, HEROES_POWERS} from '../model/hero';

@Component({
  selector: 'hero-form',
  templateUrl: './app/templates/hero-form.component.html'
})
export class HeroFormComponent {
  private powers :string[] = HEROES_POWERS;
  private model :Hero =
    new Hero(null, 'John Doe', this.powers[0], 'Chuck Norris');

  onSubmit () {}
}
