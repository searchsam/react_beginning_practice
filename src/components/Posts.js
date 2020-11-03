import React, {Component} from "react";

class Posts extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    this.setState({posts: data});
  }

  render() {
    return (
      <div>
        <h1>Publicaciones</h1>
        {this.state.posts.map(post => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
