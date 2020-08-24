import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../shared/models/post";
import * as moment from 'moment';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input() post: Post;
  @Output() selectPost = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }
  getEntryDate = (date) => {
    const now = moment();
    return moment.duration(moment.unix(date).diff(now)).humanize();
  }

  onSelectPost = (post) => {
    // TODO: display the selected post
  }
}
