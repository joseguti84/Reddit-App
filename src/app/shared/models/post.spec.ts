import { Post } from './post';

describe('Post', () => {
  it('should create an instance', () => {
    expect(new Post()).toBeTruthy();
  });

  it('Should be create a Post instance from Json', () => {
    const postJson = {
        author: "skumar92",
        clicked: false,
        created: 1598494442,
        hidden: false,
        id: "ih43y6",
        num_comments: 485,
        score: 82471,
        subreddit: "aww",
        thumbnail: "https://b.thumbs.redditmedia.com/-b7gkWI8EbGVoIxAXoQ-SYO9YF6dSSa1aLqOLyEMjyI.jpg",
        title: "Here’s my dog trying to get my sisters attention",
      };
    const post = Post.fromJson(postJson);

    expect(post.author).toEqual('skumar92');
    expect(post.clicked).toBeFalse();
    expect(post.date).toEqual(1598494442);
    expect(post.hidden).toBeFalse();
    expect(post.id).toEqual('ih43y6');
    expect(post.num_comments).toEqual(485);
    expect(post.score).toEqual(82471);
    expect(post.subreddit).toEqual('aww');
    expect(post.thumbnail).toEqual('https://b.thumbs.redditmedia.com/-b7gkWI8EbGVoIxAXoQ-SYO9YF6dSSa1aLqOLyEMjyI.jpg');
    expect(post.title).toEqual('Here’s my dog trying to get my sisters attention');
  });
});
