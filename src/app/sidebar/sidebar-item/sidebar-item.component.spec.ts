import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {SidebarItemComponent} from './sidebar-item.component';
import {EntryDatePipe} from "../../shared/pipes/entry-date.pipe";
import {Post} from "../../shared/models/post";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {MatIconModule} from "@angular/material/icon";

describe('SidebarItemComponent', () => {
  let component: SidebarItemComponent;
  let fixture: ComponentFixture<SidebarItemComponent>;
  let entryDatePipe: EntryDatePipe;

  const post: Post = {
    author: "Tiib27",
    clicked: false,
    date: 1598494228,
    hidden: false,
    id: "ih41do",
    num_comments: 337,
    score: 84866,
    subreddit: "nextfuckinglevel",
    thumbnail: "https://b.thumbs.redditmedia.com/GXpnWVVT4cAflusus9NMcb6Sf1Rxc-uSHfUs66kR7bI.jpg",
    title: "This Luigi's mansion Jack O lantern"
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EntryDatePipe,
        SidebarItemComponent
      ],
      imports: [
        MatIconModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarItemComponent);
    component = fixture.componentInstance;
    component.post = post;
    entryDatePipe = new EntryDatePipe();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('HTML should be render the sidebar item title', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const unreadIcon = debugElement.query(By.css('.sidebar-item__title__unread__icon')).nativeElement;
    const author = debugElement.query(By.css('.sidebar-item__title__author')).nativeElement;
    const date = debugElement.query(By.css('.sidebar-item__title__date')).nativeElement;
    const dateFormatted = entryDatePipe.transform(post.date);

    expect(unreadIcon.textContent).toEqual('fiber_manual_record');
    expect(author.textContent).toEqual('Tiib27');
    expect(date.textContent).toEqual(dateFormatted);
  });

  it('HTML should be render the sidebar item content', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const image = debugElement.query(By.css('.sidebar-item__detail__image')).nativeElement;
    const title = debugElement.query(By.css('.sidebar-item__detail__name')).nativeElement;
    const icon = debugElement.query(By.css('.sidebar-item__detail__icon')).nativeElement;

    expect(image.src).toEqual('https://b.thumbs.redditmedia.com/GXpnWVVT4cAflusus9NMcb6Sf1Rxc-uSHfUs66kR7bI.jpg');
    expect(title.textContent).toEqual('This Luigi\'s mansion Jack O lantern');
    expect(icon.textContent).toEqual('keyboard_arrow_right');
  });

  it('HTML should be render the sidebar item footer', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const button = debugElement.query(By.css('.sidebar-item__footer__button')).nativeElement;
    const comments = debugElement.query(By.css('.sidebar-item__footer__comments')).nativeElement;

    expect(button.type).toEqual('submit');
    expect(comments.textContent).toEqual(post.num_comments + ' comments');
  });

  it('Should be clickable the content and select post to display in the right side', fakeAsync(() => {

    spyOn(component, 'onSelectPost');

    const debugElement: DebugElement = fixture.debugElement;
    const item = debugElement.query(By.css('.sidebar-item__detail')).nativeElement;
    item.click();

    tick();

    expect(component.onSelectPost).toHaveBeenCalled();
  }));

  it('Should be clickable the dismiss post button', fakeAsync(() => {

    spyOn(component, 'onDismissPost');

    const debugElement: DebugElement = fixture.debugElement;
    const button = debugElement.query(By.css('.sidebar-item__footer__button')).nativeElement;
    button.click();

    tick();

    expect(component.onDismissPost).toHaveBeenCalled();
  }));
});
