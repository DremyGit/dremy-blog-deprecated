import React from 'react';
import { fetchBlog } from '../../actions/BlogAction';

export default class BlogDetailPage extends React.Component {

  componentDidMount() {
    const { router, dispatch } = this.props;
    dispatch(fetchBlog(router.params.title))
  }

  render() {

    const blog = this.props.blog.blog;

    if (!blog) {
      return (<h1>NULL</h1>);
    }

    return (
      <div>
        <h1>blog Detail Page</h1>
        <h1>{blog.title}</h1>
        <hr />
        <div dangerouslySetInnerHTML={{__html: blog.html}} />
      </div>

    )
  }
}