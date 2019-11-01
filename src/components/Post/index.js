import React from 'react';
import Comment from '../Comment/index';

import './post.css';
 
function Post({ data }) {
  return (
    <div id="post">
      <div id="post-user">
        <div id="post-user-avatar">
          <img src={data.author.avatar}></img>
        </div>
        <div id="post-user-info">
          <span>{data.author.name}</span>
          <p>{data.date}</p>
        </div>
      </div>
      <div id="post-user-publication">
        {data.content}
      </div>

      {<Comment
      key={data.comments.id}
      data={data.comments}
      />}
      
    </div>
  )
}
 
export default Post;
