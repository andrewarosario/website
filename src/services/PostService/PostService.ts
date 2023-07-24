import { allPosts } from 'contentlayer/generated';

export const PostService = {
  getAll: () => {
    return {
      posts: allPosts
    };
  }
};
