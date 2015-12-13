import React from 'react';
import { Link } from 'react-router';

import Ajax from '../../utils/ajax';

export default class BlogListPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blogs: {}
    }
  }

  componentWillMount() {
    Ajax.GET('http://localhost:4000/blogs', {limit: 3}, (err, data) => {
      if (err) {
        throw err;
      }
      this.setState({blogs: data.message});
    })
  }

  render() {

    let items = [];
    let blogs = this.state.blogs
    console.log(this.state.blog);

    for (let id in blogs) {

      items.push(<li key={id}><Link to={'/blog/' + blogs[id].title_short}>{blogs[id].title}</Link></li>);
    }

    return (
      <div>
        <h1>Blog List Page</h1>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}