import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n SelectPipe
  public name: string = 'Víctor';
  public gender: 'male' | 'female' | 'otro' = 'male';

  public invitarionMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
    'otro': 'invitarle'
  }

  changeClient(): void {
    this.name = "María";
    this.gender = "female";
  }

  // i18n PluralPipe
  public clients: string[] = ['Víctor', 'María', 'Pedro', 'Ana', 'Luis', 'Carla', 'Juan', 'Sofía', 'Jorge', 'Laura'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  deleteLastClient(): void {
    this.clients.pop();
  }

  // i18n KeyValuePipe y json
  public person = {
    name: 'Víctor',
    age: '22',
    address: 'Calle xxx, Ciudad xxx, Venezuela'
  }

  // i18n AsyncPipe
  public myObservableTimer: Observable<number> = interval(2000);

  public promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promesa resuelta');
    }, 3000);
  });

}
