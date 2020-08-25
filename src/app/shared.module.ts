import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {EntryDatePipe} from "./shared/pipes/entry-date.pipe";
import {RedditService} from "./shared/services/reddit.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    EntryDatePipe
  ],
  providers: [
    RedditService
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    EntryDatePipe
  ],
})
export class SharedModule {
}
