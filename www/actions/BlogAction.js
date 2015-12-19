import fetch from 'isomorphic-fetch'

import GlobalConst from '../constants/GlobalConst'
import Page from '../utils/Page';
import { BLOG_LIST_FETCH, BLOG_LIST_RECEIVE, BLOG_LIST_CLEAN,
         BLOG_FETCH, BLOG_RECEIVE, BLOG_CLEAN } from '../constants/BlogConst'

function requestBlogList() {
  return {
    type: BLOG_LIST_FETCH
  }
}

export function receiveBlogList(blogList) {
  return {
    type: BLOG_LIST_RECEIVE,
    blogList
  }
}

export function cleanBlogList() {
  return {
    type: BLOG_LIST_CLEAN
  }
}

export function fetchBlogList(page = 1) {
  return (dispatch) => {
    dispatch(cleanBlogList());
    dispatch(requestBlogList());
    return fetch(GlobalConst.HOST + '/blogs?' + Page(page))
      .then(response => response.json())
      .then(json => dispatch(receiveBlogList(json.message, page)))
      .catch()
  }
}

function requestBlog() {
  return {
    type: BLOG_FETCH
  }
}

export function receiveBlog(blog) {
  return {
    type: BLOG_RECEIVE,
    blog
  }
}

export function cleanBlog() {
  return {
    type: BLOG_CLEAN
  }
}

export function fetchBlog(title) {
  return (dispatch) => {
    dispatch(cleanBlog());
    dispatch(requestBlog());
    return fetch(`${GlobalConst.HOST}/blogs?blog_title=${title}`)
        .then(response => response.json())
        .then(json => dispatch(receiveBlog(json.message)))
        .catch()
  }
}
