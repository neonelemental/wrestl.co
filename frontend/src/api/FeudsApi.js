import Api from './Api'

export default class FeudsApi extends Api {
  index = (options = {}) => {
    return this.
      get('/feuds', options).
      catch(error => { throw new Error(error.message) })
  };

  create = (options = {}) => {
    return this._spoofResponse({
      status: 'success'
    }, true)
  }
}
