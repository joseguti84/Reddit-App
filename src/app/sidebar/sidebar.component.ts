import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RedditService} from "../shared/services/reddit.service";
import {Post} from "../shared/models/post";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() selectPost = new EventEmitter<Post>();

  posts: Post[] = [];

  constructor(private redditService: RedditService) { }

  ngOnInit(): void {
    this.redditService.getTopPosts().subscribe(posts => {
      this.posts = posts;
    })
  }
}
