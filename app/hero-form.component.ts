import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero, HEROES_POWERS} from './hero';

@Component({
  'selector': 'hero-form',
  'templateUrl': '../templates/hero-form.component.html'
})
export class HeroFormComponent {
  public powers :string[] = HEROES_POWERS;
  public model :Hero =
    new Hero(null, 'John Doe', this.powers[0], 'Chuck Norris');

  onSubmit () {}
}
