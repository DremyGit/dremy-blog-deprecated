import {combineReducers} from 'redux';
import {BLOG_GET} from '../constants/BlogConst';
import {getBlog} from '../actions/BlogAction';


const blogApp = combineReducers({
  blogs
});

function blogs(state = {}, action) {
  let _state = { ...state };

  switch (action.type) {
    case BLOG_GET:
      for (let key in action.blogs) {
        _state[key] = action.blogs[key];
      }
      return _state;

    default:
      return state;
  }
}

export default blogApp;
