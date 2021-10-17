let initialState = {
  breeds: [],
  breedsFiltered: [],
  temperaments: [],
  breedDetail: {}
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_BREEDS': return {
      ...state,
      breeds: action.payload,
      breedsFiltered: action.payload
    };
    case 'GET_BREEDS_NAME': return {
      ...state,
      breedsFiltered: action.payload
    };
    case 'GET_DETAIL': return {
      ...state,
      breedDetail: action.payload
    };
    case 'DELETE_DETAIL': return {
      ...state,
      breedDetail: null
    };
    case 'GET_TEMPERAMENTS': return {
      ...state,
      temperaments: action.payload
    };
    case 'ADD_DOG': return {
      ...state
    };
    case 'ORDER_BY':
      if (action.payload === 'A-Z') {
        console.log({ 'entre a Reducer A-Z': action.payload })
        return {
          ...state,
          breedsFiltered: [...state.breedsFiltered.sort((a, b) => {
            if (a.name.toUpperCase() > b.name.toUpperCase()) {
              return 1;
            } else {
              return -1;
            }
          })]
        }
      };
      if (action.payload === 'Z-A') {
        console.log({ 'entre a Reducer Z-A': action.payload })
        return {
          ...state,
          breedsFiltered: [...state.breedsFiltered.sort((a, b) => {
            if (a.name.toUpperCase() < b.name.toUpperCase()) {
              return 1;
            } else {
              return -1;
            }
          })]
        };
      }
      if (action.payload === '- a +') {
        console.log({'estoy en reducer -a+': action.payload})
        return {
          ...state,
          breedsFiltered: [...state.breedsFiltered.sort((a, b) => a.weight.imperial.split('-')[0] - b.weight.imperial.split('-')[0])]
        }
      }
      if (action.payload === '+ a -') {
        return {
          ...state,
          breedsFiltered: [...state.breedsFiltered.sort((a, b) => b.weight.imperial.split('-')[0] - a.weight.imperial.split('-')[0])]
        }
      } else {
        return {
          ...state,
          breedsFiltered: [...state.breedsFiltered]
        }
      }
      
    case 'FILTER_BY':
      console.log({ 'Entre a FILTER_BY': action.payload })
      if (action.payload === 'All Dogs') {
        return {
          ...state,
          breedsFiltered: [...state.breeds]
        }
      }
      if (action.payload === 'API') {
        return {
          ...state,
          breedsFiltered: state.breeds.filter(dog => typeof dog.id === 'number')
        }
      }
      if (action.payload === 'Created by User') {
        return {
          ...state,
          breedsFiltered: state.breeds.filter(dog => typeof dog.id === 'string')
        }
      }
      if (action.payload === 'Temperaments') {
        return {
          ...state,
          breedsFiltered: [...state.breeds]
        }
      } else {
        return {
          ...state,
          breedsFiltered: state.breeds.filter(dog => {
            return dog.temperament?.includes(action.payload)
          })
        }
      }

    default: return state;
  }
};




