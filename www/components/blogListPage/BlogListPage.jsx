import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Ajax from '../../utils/ajax';
import { getBlog } from '../../actions/BlogAction'
import { store } from '../../stores/store';

export default class BlogListPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const data = {
      "566d2fe2f132bd912d12b414": {
        "_id": "566d2fe2f132bd912d12b414",
        "tag": {
          "_id": "566d2fcef132bd912d12b413",
          "name_short": "test",
          "name": "test"
        },
        "status": 1,
        "time": "2015-12-13T15:45:21.388Z",
        "summary": "summary",
        "title_short": "testing",
        "title": "测试拉"
      },
      "566d56a2ef16024a371dc0e7": {
        "_id": "566d56a2ef16024a371dc0e7",
        "tag": {
          "_id": "566d2fcef132bd912d12b413",
          "name_short": "test",
          "name": "test"
        },
        "status": 1,
        "time": "2015-12-13T15:45:21.389Z",
        "summary": "summary",
        "title_short": "testing",
        "title": "测试拉"
      },
    };

    store.dispatch(getBlog(data))
  }

  render() {
    const {blog: {blogs}} = this.props;
    let items = [];

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

