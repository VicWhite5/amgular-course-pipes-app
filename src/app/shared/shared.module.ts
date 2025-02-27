import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';



@NgModule({
  declarations: [
    MenuComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MenuComponent,
    MenuBarComponent
  ]
})
export class SharedModule { }
