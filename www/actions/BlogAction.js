import fetch from 'isomorphic-fetch'

import GlobalConst from '../constants/GlobalConst'
import {BLOG_GET} from '../constants/BlogConst'

export function getBlog(blogs) {
  return {
    type: BLOG_GET,
    blogs
  }
}