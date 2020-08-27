import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SidebarContentComponent} from './sidebar-content.component';
import {SidebarItemComponent} from "../sidebar-item/sidebar-item.component";
import {EntryDatePipe} from "../../shared/pipes/entry-date.pipe";
import {Post} from "../../shared/models/post";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('SidebarContentComponent', () => {
  let component: SidebarContentComponent;
  let fixture: ComponentFixture<SidebarContentComponent>;
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
      imports: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarContentComponent);
    component = fixture.componentInstance;
    component.selectedPost = post;
    entryDatePipe = new EntryDatePipe();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('HTML should be render the sidebar content title', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const author = debugElement.query(By.css('.sidebar-content__title__author')).nativeElement;
    const date = debugElement.query(By.css('.sidebar-content__title__date')).nativeElement;
    const dateFormatted = entryDatePipe.transform(post.date);

    expect(author.textContent).toEqual('Tiib27');
    expect(date.textContent).toEqual(dateFormatted);
  });

  it('HTML should be render the sidebar content detail', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const image = debugElement.query(By.css('.sidebar-content__detail__image')).nativeElement;
    const title = debugElement.query(By.css('.sidebar-content__detail__name')).nativeElement;

    expect(image.src).toEqual('https://b.thumbs.redditmedia.com/GXpnWVVT4cAflusus9NMcb6Sf1Rxc-uSHfUs66kR7bI.jpg');
    expect(title.textContent).toEqual('This Luigi\'s mansion Jack O lantern');
  });

  it('HTML should be render the sidebar content footer', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const comments = debugElement.query(By.css('.sidebar-content__footer__comments')).nativeElement;

    expect(comments.textContent).toEqual(post.num_comments + ' comments');
  });
});
