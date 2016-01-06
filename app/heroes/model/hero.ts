export const HEROES_POWERS = ['Really Smart', 'Super Flexible', 'Super Hot',
          'Weather Changer'];

export class Hero {
  public id :number;
  public name :string;
  public power: string;
  public alterEgo: string;

  constructor (id :number, name :string, power :string, alterEgo? :string) {
    this.id = id;
    this.name = name;
    this.power = power;
    this.alterEgo = alterEgo || '';
  }
}
