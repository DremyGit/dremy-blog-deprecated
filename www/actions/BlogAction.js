import fetch from 'isomorphic-fetch'

import GlobalConst from '../constants/GlobalConst'
import Page from '../utils/Page';
import { BLOG_FETCH, BLOG_RECEIVE } from '../constants/BlogConst'

function requestBlogs() {
  return {
    type: BLOG_FETCH
  }
}

export function receiveBlogs(blogs, page) {
  return {
    type: BLOG_RECEIVE,
    blogs,
    page,
    recievedAt: Date.now()
  }
}

export function fetchBlogs(page = 1) {
  return (dispatch, getState) => {
    let recievedAt = getState().blog.recievedAt;
    if (recievedAt && Date.now() - recievedAt < 60 * 1000 && typeof getState().blog.page[page] != 'undefined') {
      return;
    }
    dispatch(requestBlogs())
    return fetch(GlobalConst.HOST + '/blogs?' + Page(page))
      .then(response => response.json())
      .then(json => dispatch(receiveBlogs(json.message, page)))
      .catch()
  }
}