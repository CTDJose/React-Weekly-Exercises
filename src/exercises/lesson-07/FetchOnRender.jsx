import './Lesson07Styles.css';
import { getPosts } from './api';
import { useState } from 'react';
import { useEffect } from 'react';

export default function FetchOnRender() {
  const [renderPosts, setRenderPosts] = useState([]);
  useEffect(() => {
    getPosts().then((data) => {
      setRenderPosts(data);
    });
  }, []);
  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {renderPosts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
