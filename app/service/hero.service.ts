import {Injectable} from 'angular2/core';
import {Hero} from '../model/hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes () :Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly () :Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(HEROES);
      }, 500);
    });
  }
}
