import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar.component';
import {MatListModule} from "@angular/material/list";
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';

@NgModule({
  declarations: [SidebarComponent, SidebarItemComponent],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class SidebarModule {
}
