import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu-bar',
  templateUrl: './menu-bar.component.html',
  styles: ``,
})
export class MenuBarComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        // routerLink: 'ordenar'
        items: [
          {
            label: 'Ordenar',
            icon: 'pi pi-sort-alpha-down',
            // routerLink: 'ordenar'
          },
        ],
      },
    ];
  }
}
