import Api from './Api';

export default class SearchApi extends Api {
  search = (searchQuery) => {
    return this.spoofResponse({
      'People': [
        {
          text: 'Vince McMahon',
          id: 1,
        },
        {
          text: 'Cody Rhoades',
          id: 2,
        }
      ],
      'Companies': [
        {
          text: 'World Wrestling Entertainment',
          id: 1,
        },
        {
          text: 'Impact Wrestling',
          id: 2,
        },
        {
          text: 'All Elite Wrestling',
          id: 3,
        }
      ],
      'Venues': [
        {
          text: 'Madison Square Garden',
          id: 1,
        },
        {
          text: 'Superdome',
          id: 2,
        },
        {
          text: 'Silverdome',
          id: 3,
        }
      ]
    })
  }
}
