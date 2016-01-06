import {Injectable} from 'angular2/core';
import {Hero} from '../model/hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  private Heroes = HEROES;

  getHeroes () :Promise<Hero[]> {
    return Promise.resolve(this.Heroes);
  }

  getHeroesSlowly () :Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.Heroes);
      }, 500);
    });
  }

  getHero (id :number) :Promise<Hero> {
    return new Promise(resolve => {
      let hero = this.Heroes.filter(hero => hero.id === id);

      resolve(hero[0] || null);
    });
  }
}
