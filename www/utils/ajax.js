let ajax = {};

ajax.sendAjax = function (url, options) {

  let data = options.data || null;
  let callback = options.callback;
  let type = options.type || 'GET';

  let xhttp = new XMLHttpRequest();

  xhttp.open(type, url);

  if (type.toUpperCase() != 'GET') {

    if (typeof data === "object") {
      data = JSON.stringify(data);
    }

    xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhttp.send(data);

  } else {

    xhttp.send(data);
  }

  xhttp.onreadystatechange = function () {

    if (xhttp.readyState == 4) {

      let res = xhttp.responseText || '{}';

      let data = JSON.parse(res);

      if (Math.floor(xhttp.status / 100) != 2) {
        callback(new Error(`Request Error: ${xhttp.status} ${data.error || 'Unknow Error'}`));
        return;
      }

      console.log(data);

      if (callback) {
        callback(null, data, xhttp.status);
      }
    }
  }
};

ajax.GET = function (url, data, callback) {

  if (typeof data == "function") {
    callback = data;
    data = null;
  }

  ajax.sendAjax(url + buildParam(data), {callback: callback, type: 'GET'});
};

ajax.POST = function (url, data, callback) {
  ajax.sendAjax(url, {data: data, callback: callback, type: 'POST'})
};

ajax.PUT = function (url, data, callback) {
  ajax.sendAjax(url, {data: data, callback: callback, type: 'PUT'})
};

ajax.DELETE = function (url, data, callback) {

  if (typeof data == "function") {
    callback = data;
    data = null;
  }

  ajax.sendAjax(url + buildParam(data), {callback: callback, type: 'DELETE'})
};

function buildParam(data) {
  let str = '';
  for (let key in data) {
    str += (str === '') ? '?' : '&';
    str += key + '=' + encodeURIComponent(data[key]);
  }
  return str;
}

export default ajax;