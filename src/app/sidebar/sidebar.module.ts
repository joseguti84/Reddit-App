import {NgModule} from '@angular/core';
import {SidebarComponent} from './sidebar.component';
import {MatListModule} from "@angular/material/list";
import {SidebarItemComponent} from './sidebar-item/sidebar-item.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {SidebarContentComponent} from './sidebar-content/sidebar-content.component';
import {SharedModule} from "../shared.module";

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarItemComponent,
    SidebarContentComponent
  ],
  exports: [
    SidebarComponent,
    SidebarContentComponent
  ],
  imports: [
    SharedModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: []
})
export class SidebarModule {
}
