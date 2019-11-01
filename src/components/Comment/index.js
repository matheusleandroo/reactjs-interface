import React from 'react';
 
import './comment.css';

function Comment({ data }) {
  return (
    <div id="comments">
      {data.map(comment => (
        <div id="comments-group" key={comment.id}>
          <div id="comments-group-avatar">
            <img src={comment.author.avatar}></img>
          </div>
          <div id="comments-group-publication">
            <p>{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
 
export default Comment;