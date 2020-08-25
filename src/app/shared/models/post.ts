export class Post {
/*- Title (at its full length, so take this into account when sizing your cells)
- Author
- entry date, following a format like “x hours ago”
- A thumbnail for those who have a picture.
- Number of comments
- Unread status*/
  id: string;
  title: string;
  author: string;
  subreddit: string;
  date: number;
  num_comments: number;
  clicked: boolean;
  hidden: boolean;
  score: number;
  thumbnail?: string;

  static fromJson(json): Post {
    const post = Object.create(Post.prototype);
    post.id = json.id;
    post.title = json.title;
    post.author = json.author;
    post.subreddit = json.subreddit;
    post.clicked = json.clicked;
    post.hidden = json.hidden;
    post.num_comments = json.num_comments;
    post.score = json.score;
    post.thumbnail = json.thumbnail;
    post.date = json.created;
    return post;
  }
}
