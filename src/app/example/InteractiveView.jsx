'use client';

import { useState } from 'react';

export default function InteractiveView({ initialData }) {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h1>{initialData.title}</h1>
      <p>{initialData.body}</p>
      
      <button onClick={() => setLikes(likes + 1)}>
        ❤️ Likes: {likes}
      </button>
    </div>
  );
}