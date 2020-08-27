import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {SidebarComponent} from './sidebar.component';
import {RedditService} from "../shared/services/reddit.service";
import {RedditServiceMock} from "../shared/mocks/reddit.service.mock";
import {SharedModule} from "../shared.module";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SidebarItemComponent} from "./sidebar-item/sidebar-item.component";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ],
      declarations: [
        SidebarItemComponent,
        SidebarComponent
      ],
      providers: [
        {provide: RedditService, useClass: RedditServiceMock}
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(SidebarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have 3 posts', () => {
    expect(component.posts.length).toEqual(3);
  });

  it('HTML should be render 3 sidebar-item', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const matNavList = debugElement.query(By.css('.mat-nav-list')).nativeElement;
    expect(matNavList.childElementCount).toEqual(3);
  });

  it('HTML should be render the sidebar title', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const title = debugElement.query(By.css('.sidebar__title h1')).nativeElement;

    expect(title.textContent).toEqual('Reddit Posts');
  });

  it('Should be clickable the dismiss all posts button', fakeAsync(() => {

    spyOn(component, 'dismissAllPosts');

    const debugElement: DebugElement = fixture.debugElement;
    const button = debugElement.query(By.css('.sidebar__footer__button')).nativeElement;
    button.click();

    tick();

    expect(component.dismissAllPosts).toHaveBeenCalled();
  }));
});
