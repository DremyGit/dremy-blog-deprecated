import React from 'react';
import { fetchBlogs } from '../../actions/BlogAction';

export default class BlogDetailPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { router, blog, dispatch } = this.props;
    const theBlog = blog.blogs[router.params.id];
    if (!theBlog) {
      dispatch(fetchBlogs());
    }
  }

  render() {

    const { router, blog} = this.props;
    const theBlog = blog.blogs[router.params.id];
    if (!theBlog) {
      return (<div>加载中</div>)
    }

    return (
      <div>
        <h1>Blog Detail Page</h1>
        <h1>{theBlog.title}</h1>
        <hr />
        <div dangerouslySetInnerHTML={{__html: theBlog.html}} />
      </div>

    )
  }
}