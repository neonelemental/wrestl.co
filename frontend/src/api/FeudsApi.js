import Api from './Api'

export default class FeudsApi extends Api {
  index = ( options = {} ) => {
    return this.spoofResponse({
      type: 'feuds',
      data: [
        {
          heatIndex: 100,
          teams: [
            [
              {
                name: 'Vince McMahon',
                id: 1,
              },
            ],
            [
              {
                name: 'Steve Austin',
                id: 2,
              }
            ]
          ]
        }
      ]
    }, true)
  }

  create = ( options = {} ) => {
    return this.spoofResponse({
      status: 'success'
    }, true)
  }
}
