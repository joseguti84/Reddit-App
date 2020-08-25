import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Post} from "../models/post";
import {map} from "rxjs/operators";
import {Reddit} from "../models/reddit";

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  private selectedPost: BehaviorSubject<Post> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  getSelectedPost(): Observable<Post> {
    return this.selectedPost;
  }

  setSelectedPost(post: Post): void {
    this.selectedPost.next(post);
  }

  getTopPosts(count = 50): Observable<any> {
    return this.http.get(`https://www.reddit.com/r/all/top.json?limit=${count}`).pipe(map((response: Reddit) => {
      if (response.data && response.data.children) {
        return response.data.children.map(children => {
          return Post.fromJson(children.data);
        });
      }
      return [];
    }));
  }

  dismissPost(id): Observable<any> {
    return this.http.post(`https://www.reddit.com/api/hide`, {id: id});
  }

  readPost(id): Observable<any> {
    return this.http.post(`https://www.reddit.com/api/read_message`, {id: id});
  }
}
