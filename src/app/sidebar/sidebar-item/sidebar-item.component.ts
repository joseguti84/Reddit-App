import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../shared/models/post";
import {RedditService} from "../../shared/services/reddit.service";

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private redditService: RedditService) {
  }

  ngOnInit(): void {
  }

  onSelectPost = (post) => {
    this.redditService.setSelectedPost(post);
    //TODO: review the reddit api
    /*this.redditService.readPost(`t1_${post.id}`).subscribe(response => {
      console.log(response);
    });*/
  };

  dismissPost = (post) => {
    //TODO: review the reddit api
    /*this.redditService.dismissPost(`t1_${post.id}`).subscribe(response => {
      console.log(response);
    });*/
  };
}
