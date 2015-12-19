import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Ajax from '../../utils/ajax';
import { fetchBlogList } from '../../actions/BlogAction'

export default class BlogListPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fetching: false
    }
  }

  componentDidMount() {
    const { dispatch, router } = this.props;
    dispatch(fetchBlogList(router.params.page || '1'));
  }


  render() {
    const {blog, router} = this.props;
    const blogs = blog.blogList;
    const page = (router.params.page || '1');

    if (typeof blogs == 'undefined') {
      return (<h1>加载中</h1>)
    }
    let items = [];
    for (let id in blogs) {
      items.push(<li key={id}><Link to={`/blog/${blogs[id].title_short}`}>{blogs[id].title}</Link></li>);
    }

    return (
      <div>
        <h1>Blog List Page</h1>
        <ul>
          {items}
        </ul>
        <Link to={`/blog/page/${+page + 1}`}>下一页</Link>
      </div>
    )
  }
}

