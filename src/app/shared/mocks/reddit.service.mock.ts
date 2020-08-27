import {Injectable} from '@angular/core';
import {Post} from "../models/post";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RedditServiceMock {
  constructor() {
  }

  getTopPosts(): Observable<Post[]> {
    return of([
      {
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
      },
      {
        author: "skumar92",
        clicked: false,
        date: 1598494442,
        hidden: false,
        id: "ih43y6",
        num_comments: 485,
        score: 82471,
        subreddit: "aww",
        thumbnail: "https://b.thumbs.redditmedia.com/-b7gkWI8EbGVoIxAXoQ-SYO9YF6dSSa1aLqOLyEMjyI.jpg",
        title: "Here’s my dog trying to get my sisters attention",
      },
      {
        author: "SNIHON",
        clicked: false,
        date: 1598508612,
        hidden: false,
        id: "ih8nxg",
        num_comments: 318,
        score: 76233,
        subreddit: "wholesomememes",
        thumbnail: "default",
        title: "Kids are so cute..sometimes"
      }
    ]);
  }
}
