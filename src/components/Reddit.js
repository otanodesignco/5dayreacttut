import React, { Component } from 'react';
import axios from 'axios';

export default class Reddit extends Component {

    constructor(props){

        super(props);

        this.state = {
            posts: []
        };
    }   

    componentDidMount()
    {
        axios.get(`https://reddit.com/r/reactjs.json`)
        .then(res => {
            const posts = res.data.data.children.map( obj  => obj.data );
            this.setState({posts})
        });
    }

  render() {

    return (
      <div>
        <h1>r/reactjs</h1>
            <ul>
                {this.state.posts.map( post => (
                    <li key={post.id}>
                        <h1><a href={post.url}>{post.title}</a></h1> - <small><i>{post.author}</i></small>
                        <hr/>
                        <i class="fas fa-thumbs-up">{post.ups}</i><i class="fas fa-thumbs-down">{post.downs}</i><i class="fas fa-comment-alt">{post.num_comments}</i>
                    </li>
                ))}
            </ul>
      </div>
    )
  }
}
