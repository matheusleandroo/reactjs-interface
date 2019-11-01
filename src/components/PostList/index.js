import React, { Component } from 'react';
import Post from '../Post/index';
import matheus from '../../assets/matheus.png';
import diego3g from '../../assets/diego3g.jpg';
 
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
        date: "01 Nov 2019",
        content: "Pessoal, estamos contratando. Será que tens o necessário?",
        comments: [
          {
            id: 1,
            author: {
              name: "Matheus Leandro",
              avatar: matheus
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices arcu sed velit consequat euismod. Aliquam ut sollicitudin lectus. Sed tincidunt, ante id vulputate vulputate, mi urna sagittis diam, non consequat ipsum libero id risus. Pellentesque vel aliquam massa. Vivamus sed lectus sit amet quam rutrum blandit. Nulla at eros mollis, elementum lorem non, lacinia risus. Nam hendrerit vitae lorem ut posuere. Aliquam in velit nec elit vehicula gravida ut eu magna. Suspendisse viverra magna quis augue venenatis gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ornare nulla in rutrum pellentesque. In pretium, nulla eu euismod placerat, velit ante condimentum nisi, eu porttitor arcu erat et augue. Integer euismod velit eu vestibulum venenatis."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Ana Maria",
          avatar: diego3g,
        },
        date: "04 Jun 2019",
        content: "Pessoal, estamos contratando. Alguém se habilita?",
        comments: [
          {
            id: 1,
            author: {
              name: "Matheus Leandro",
              avatar: matheus
            },
            content: "Euuuu!!!"
          },
          {
            id: 2,
            author: {
              name: "Matheus Leandro",
              avatar: matheus
            },
            content: "Euuuu também!!!"
          }
        ]
      }
      ,
      {
        id: 3,
        author: {
          name: "Julia Alves",
          avatar: diego3g,
        },
        date: "04 Jun 2019",
        content: "Pessoal, estamos contratando. Alguém se habilita?",
        comments: [
          {
            id: 1,
            author: {
              name: "Matheus Leandro",
              avatar: matheus
            },
            content: "Euuuu!!!"
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