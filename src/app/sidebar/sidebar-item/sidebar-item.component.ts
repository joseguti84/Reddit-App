import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../shared/models/post";
import {RedditService} from "../../shared/services/reddit.service";
import {getPostImage} from "../../shared/utilities";

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input() post: Post;
  @Output() dismissPost = new EventEmitter<Post>();
  @Output() selectPost = new EventEmitter<Post>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getImage = (post) => {
    return getPostImage(post);
  };

  onSelectPost = (post) => {
    this.selectPost.emit(post);
  };

  onDismissPost = (post) => {
    this.dismissPost.emit(post);
  };
}
