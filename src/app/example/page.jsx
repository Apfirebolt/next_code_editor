// app/example/page.js
import InteractiveView from './InteractiveView';

async function getPostData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
}

// 1. Server fetches metadata using hardcoded ID
export async function generateMetadata() {
  const post = await getPostData(1);

  return {
    title: post.title,
    description: post.body.slice(0, 100),
  };
}

// 2. Server fetches post data and passes it directly as a prop
export default async function Page() {
  const post = await getPostData(1);

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto' }}>
      <p style={{ color: '#666' }}>Server Rendered Post #1</p>
      
      {/* Pass server data to client component */}
      <InteractiveView initialData={post} />
    </main>
  );
}