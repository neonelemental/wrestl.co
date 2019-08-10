export default class Api {
  get = (uri, params) => {
    return this._request(uri, params, {
      method: 'GET'
    })
  };

  _request = (uri, params = {}, options = {}) => {
    return fetch(this._buildUrl(uri, params), options)
      .then(response => response.json())
      .then(json => this._handleStatus(json))
  };

  _buildUrl = (uri, params = {}) => {
    let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    return `/api/v1${uri}${queryString.length ? '?' : ''}${queryString}`;
  };

  _handleStatus = (responseJson) => {
    switch (responseJson.status) {
      case 500:
        throw new Error(responseJson.exception);
      case 404:
        throw new Error(responseJson.exception);
      default:
        return responseJson;
    }
  };

  _spoofResponse = (responseBody, crazyMonkey = false) => {
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
}
