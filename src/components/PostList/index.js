import React, { Component } from 'react';
import Post from '../Post/index';

import matheus from '../../assets/matheus.png';
import leandro from '../../assets/leandro.jpg';
import diego3g from '../../assets/diego3g.jpg';
import laura from '../../assets/laura.jpg';
import rogerio from '../../assets/rogerio.png';
import julia from '../../assets/julia.jpeg';
 
import './postList.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Diego Fernandes",
          avatar: diego3g,
        },
        date: "07 Nov 2019",
        content: "Guys, we're hiring. Do you have what it takes?",
        comments: [
          {
            id: 1,
            author: {
              name: "Matheus Leandro",
              avatar: matheus
            },
            content: "I got what it takes, just give me a chance!!!"
          },
          {
            id: 2,
            author: {
              name: "Leandro Matheus",
              avatar: leandro
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus tincidunt orci, vel scelerisque orci volutpat eu. Nunc ac velit magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam pellentesque felis purus, congue fermentum diam rutrum vel."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Laura Ferreira",
          avatar: laura,
        },
        date: "04 Oct 2019",
        content: "Hi guys, do you know anyone good at Node.JS, ReactJS and React Native? Is urgent!",
        comments: [
          {
            id: 1,
            author: {
              name: "Rogerio Fernando",
              avatar: rogerio
            },
            content: "Matheus Leandro is very good, and he is passionate for technology. He still learn everyday."
          }
        ]
      }
      ,
      {
        id: 3,
        author: {
          name: "Julia Alves",
          avatar: julia,
        },
        date: "29 May 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus tincidunt orci, vel scelerisque orci volutpat eu. Nunc ac velit magna.",
        comments: [
          {
            id: 1,
            author: {
              name: "Matheus Leandro",
              avatar: matheus
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus tincidunt orci, vel scelerisque orci volutpat eu. Nunc ac velit magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam pellentesque felis purus, congue fermentum diam rutrum vel. Proin condimentum metus metus, id tristique massa tempus vitae. Fusce at mollis ipsum. In non enim finibus, dictum arcu ac, molestie enim. Duis eget luctus nunc. Aliquam ut fermentum nisl. Mauris pellentesque, arcu ut ornare lacinia, erat neque sagittis leo, sed consectetur justo libero sed lacus. Integer molestie est in enim lacinia, sed posuere mauris suscipit."
          }
        ]
      }
    ]
  };
 
  render() {
    return (
      <div id="content">
        {this.state.posts.map(post => (
          <Post
            key={post.id}
            data={post}
          />
        ))}
      </div>
    );
  };
};
 
export default PostList;