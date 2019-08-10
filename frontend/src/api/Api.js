export default class Api {
  get = (uri, params) => {
    return this._request(uri, params, {
      method: 'GET'
    })
  };

  spoofResponse = (responseBody, crazyMonkey = false) => {
    return new Promise(async (resolve, reject) => {
      await this._delay()
      if(crazyMonkey && Math.random() >= 1) {
        console.debug('Simulated error response.')
        reject(new Error('Oops.'))
      }
      else resolve(responseBody)
    })
  };

  _delay = () => {
    return new Promise( resolve => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  };

  _request = (uri, params = {}, options = {}) => {
    return fetch(this._buildUrl(uri, params), options)
      .then(response => {
        if(!response.ok)
          throw new Error(response.responseText)
      })
  };

  _buildUrl = (uri, params = {}) => {
    let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    return `api${uri}${queryString.length ? '?' : ''}${queryString}`;
  };
}
