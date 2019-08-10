export default class Api {
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
}
