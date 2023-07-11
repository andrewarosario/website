import { allPosts } from 'contentlayer/generated';

export default function Home() {
  const posts = allPosts.map((post) => post);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>
      <div dangerouslySetInnerHTML={{ __html: posts[0]?.title }}></div>
    </main>
  );
}
