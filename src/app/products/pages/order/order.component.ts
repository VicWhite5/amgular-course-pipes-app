import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``,
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  public sortBy: keyof Hero | undefined | '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.Blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.Black,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.Red,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.Red,
    },{
      name: 'Green Lantern',
      canFly: true,
      color: Color.Green,
    }
  ]

  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  toogleSortBy(value: keyof Hero): void {
    this.sortBy = value;
  }
}
