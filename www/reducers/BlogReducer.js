import {combineReducers} from 'redux';
import {BLOG_FETCH, BLOG_RECEIVE} from '../constants/BlogConst';


const blogApp = combineReducers({
  blogs,
  page,
  tag,
  recievedAt
});

function blogs(state = {}, action) {
  let _state = { ...state };

  switch (action.type) {

    case BLOG_FETCH:
      console.log("FETCHING......");
      return _state;

    case BLOG_RECEIVE:
      action.blogs.forEach(blog => {
        _state[blog.title_short] = blog;
      });
      return _state;

    default:
      return state;
  }
}

function recievedAt(state = {}, action) {
  if (action.type == BLOG_RECEIVE) {
    return action.recievedAt;
  }
  return state;
}

function page(state = {}, action) {
  if (action.type == BLOG_RECEIVE) {
    let _state = { ...state }
    _state[action.page] = action.blogs.map(blog => blog.title_short);
    return _state;
  }
  return state;
}

function tag(state = {}, action) {
  if (action.type == BLOG_RECEIVE) {
    let _state = { ...state };
    action.blogs.forEach(blog => {

      let array = _state[blog.tag.name_short] || [];

      _state[blog.tag.name_short] = [...array, blog.title_short];
    });
    return _state;
  }
  return state;
}

export default blogApp;
