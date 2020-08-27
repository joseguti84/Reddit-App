import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post";
import {map} from "rxjs/operators";
import {Reddit} from "../models/reddit";

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) {
  }

  getTopPosts(count = 50, after = ''): Observable<Post[]> {
    return this.http.get(`https://www.reddit.com/r/all/top.json?limit=${count}${after ? '&after=' + after : ''}`).pipe(map((response: Reddit) => {
      if (response.data && response.data.children) {
        return response.data.children.map(children => {
          return Post.fromJson(children.data);
        });
      }
      return [];
    }));
  }
}
