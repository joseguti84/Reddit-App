/*
* This function check the post thumbnail url. If the post don't have a thumbnail return a default image.
*/

export function getPostImage(post) {
  return post.thumbnail.indexOf('redditmedia.com') >= 0 ? post.thumbnail : '../../../assets/images/default.svg';
}
