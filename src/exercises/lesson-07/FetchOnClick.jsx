import './Lesson07Styles.css';
import { getSinglePost } from './api';
import { useState } from 'react';

export default function FetchOnClick() {
  const [clickPost, setClickPost] = useState(null);

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>

      <button
        type="button"
        onClick={() => {
          getSinglePost(1).then((data) => {
            setClickPost(data);
          });
        }}
      >
        Get post
      </button>

      <div className="content">
        {clickPost && (
          <>
            <h2>{clickPost.title}</h2>
            <p>{clickPost.body}</p>
          </>
        )}
      </div>
    </div>
  );
}
