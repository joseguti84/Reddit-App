import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RedditService} from "../shared/services/reddit.service";
import {Post} from "../shared/models/post";
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";

const listAnimation = trigger('EnterLeave', [
  state('flyIn', style({ transform: 'translateX(0)' })),
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('0.5s 300ms ease-in')
  ]),
  transition(':leave', [
    animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
  ])
]);

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [listAnimation]
})
export class SidebarComponent implements OnInit {

  @Output() selectPost = new EventEmitter<Post>();

  posts: Post[] = [];

  constructor(private redditService: RedditService) {
  }

  ngOnInit(): void {
    this.redditService.getTopPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onDismissPost = (post) => {
    this.posts = this.posts.filter(item => item.id !== post.id);
  };

  onSelectPost = (post) => {
    this.readPost(post);
    this.selectPost.emit(post);
  };

  readPost = (post) => {
    this.posts = this.posts.map(item => {
      if (item.id === post.id){
        item.clicked = true;
      }
      return item;
    });
  };

  dismissAllPosts = () => {
    this.posts = [];
  };
}
