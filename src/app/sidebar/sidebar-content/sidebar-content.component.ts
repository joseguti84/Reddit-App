import {Component, OnInit} from '@angular/core';
import {Post} from "../../shared/models/post";
import {RedditService} from "../../shared/services/reddit.service";

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {

  selectedPost: Post;

  constructor(private redditService: RedditService) {
    this.redditService.getSelectedPost().subscribe(post => this.selectedPost = post);
  }

  ngOnInit(): void {
  }

}
