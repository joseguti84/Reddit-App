import {ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import * as Hammer from 'hammerjs';
import {MatSidenav} from "@angular/material/sidenav";
import {Post} from "./shared/models/post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  post: Post = null;

  @ViewChild(MatSidenav)
  public sidenav: MatSidenav;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              elementRef: ElementRef) {
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    const hammertime = new Hammer(elementRef.nativeElement, {});
    hammertime.on('panright', (ev) => {
      this.sidenav.open();
    });
  }

  onSelectPost = (post) => {
    this.post = post;
    if (this.mobileQuery.matches) {
      this.sidenav.close();
    }
  };

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
