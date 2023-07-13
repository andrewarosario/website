import { allPosts } from 'contentlayer/generated';

import { PostCard } from '@/components/PostCard';

export default function Home() {
  const posts = allPosts.map((post) => post);

  return (
    <main className="">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae provident
        officiis perferendis placeat explicabo iure deleniti harum praesentium,
        esse aperiam, quod accusamus at atque delectus ipsam animi repellendus
        quidem expedita?
      </div>
      <div>
        {posts.map((post) => (
          <PostCard key={post._id} />
        ))}
      </div>
    </main>
  );
}
