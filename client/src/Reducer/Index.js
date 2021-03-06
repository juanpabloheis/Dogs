let initialState = {
  breeds: [],
  breedsFiltered: [],
  temperaments: [],
  breedDetail: {},
  dogsPerPage:[],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_BREEDS":
      return {
        ...state,
        breeds: action.payload,
        breedsFiltered: action.payload,
      };
    case "GET_BREEDS_NAME":
      return {
        ...state,
        breedsFiltered: action.payload,
      };
    case "GET_DETAIL":
      return {
        ...state,
        breedDetail: action.payload,
      };
    case "DELETE_DETAIL":
      return {
        ...state,
        breedDetail: null,
      };
    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };
    case "ADD_DOG":
      return {
        ...state,
      };
    case "ORDER_BY":
      if (action.payload === "A-Z") {
        return {
          ...state,
          breedsFiltered: [
            ...state.breedsFiltered.sort((a, b) => {
              if (a.name.toUpperCase() > b.name.toUpperCase()) {
                return 1;
              } else {
                return -1;
              }
            }),
          ],
        };
      }
      if (action.payload === "Z-A") {
        return {
          ...state,
          breedsFiltered: [
            ...state.breedsFiltered.sort((a, b) => {
              if (a.name.toUpperCase() < b.name.toUpperCase()) {
                return 1;
              } else {
                return -1;
              }
            }),
          ],
        };
      }
      if (action.payload === "- a +") {
        return {
          ...state,
          breedsFiltered: [
            ...state.breedsFiltered.sort(
              (a, b) => (Number(a.weight.split("-")[0]) + Number(a.weight.split("-")[1])/2) - (Number(b.weight.split("-")[0]) + Number(b.weight.split("-")[1])/2)
            ),
          ],
        };
      }
      if (action.payload === "+ a -") {
        return {
          ...state,
          breedsFiltered: [
            ...state.breedsFiltered.sort(
              (a, b) => (Number(b.weight.split("-")[0]) + Number(b.weight.split("-")[1]))/2 - (Number(a.weight.split("-")[0]) + Number(a.weight.split("-")[1]) )/2
            ),
          ],
        };
      } else {
        return {
          ...state,
          breedsFiltered: [...state.breedsFiltered],
        };
      }

    case "FILTER_BY":
      if (action.payload === "All Dogs") {
        return {
          ...state,
          breedsFiltered: [...state.breeds],
        };
      }
      if (action.payload === "API") {
        return {
          ...state,
          breedsFiltered: state.breeds.filter(
            (dog) => typeof dog.id === "number"
          ),
        };
      }
      if (action.payload === "Created by User") {
        return {
          ...state,
          breedsFiltered: state.breeds.filter(
            (dog) => typeof dog.id === "string"
          ),
        };
      }
      if (action.payload === "Temperaments") {
        return {
          ...state,
          breedsFiltered: [...state.breeds],
        };
      } else {
        return {
          ...state,
          breedsFiltered: state.breeds.filter((dog) => {
            return dog.temperament?.includes(action.payload);
          }),
        };
      }
    case "CLEAN_FILTERS":
      return {
        ...state,
        breedsFiltered: [...state.breeds],
      };

    case "SET_DOGS_PER_PAGE":
      return {
        ...state,
        dogsPerPage: action.payload,
      }
    default:
      return state;
  }
}
