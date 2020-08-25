import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../shared/models/post";
import {getPostImage} from "../../shared/utilities";

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {

  @Input() selectedPost: Post;

  constructor() {

  }

  getImage = (post) => {
    return getPostImage(post);
  };

  ngOnInit(): void {
  }

}
