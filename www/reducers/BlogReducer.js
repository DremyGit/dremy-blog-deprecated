import {combineReducers} from 'redux';
import {BLOG_LIST_FETCH, BLOG_LIST_RECEIVE, BLOG_LIST_CLEAN, BLOG_RECEIVE} from '../constants/BlogConst';


const blogApp = combineReducers({
  blogList,
  blog
});

function blogList(state = {}, action) {
  let _state = { ...state };

  switch (action.type) {

    case BLOG_LIST_FETCH:
      console.log("FETCHING......");
      return _state;

    case BLOG_LIST_RECEIVE:
      action.blogList.forEach(blog => {
        _state[blog.title_short] = blog;
      });
      return _state;

    case BLOG_LIST_CLEAN:
      return {};

    default:
      return state;
  }
}

function blog(state = {}, action) {
  let _state = { ...state };
  switch (action.type) {
    case BLOG_RECEIVE:
      return action.blog;
    default:
      return state;
  }
}

function recievedAt(state = {}, action) {
  if (action.type == BLOG_LIST_RECEIVE) {
    return action.recievedAt;
  }
  return state;
}
//
//function page(state = {}, action) {
//  if (action.type == BLOG_LIST_RECEIVE) {
//    let _state = { ...state }
//    _state[action.page] = action.blogs.map(blog => blog.title_short);
//    return _state;
//  }
//  return state;
//}
//
//function tag(state = {}, action) {
//  if (action.type == BLOG_LIST_RECEIVE) {
//    let _state = { ...state };
//    action.blogs.forEach(blog => {
//
//      let array = _state[blog.tag.name_short] || [];
//
//      _state[blog.tag.name_short] = [...array, blog.title_short];
//    });
//    return _state;
//  }
//  return state;
//}

export default blogApp;
