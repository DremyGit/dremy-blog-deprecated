module.exports = function (html) {
  return html.replace(/[<>'"& ]/g, function (char) {
    switch (char) {
      case '<':   return '&lt;';
      case '>':   return '&gt;';
      case '\'':  return '&#39;';
      case '"':   return '&#34;';
      case '&':   return '&amp;';
      case ' ':   return '&nbsp';
      default:    return '';
    }
  })
}