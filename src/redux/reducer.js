import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./action"

const initialState={
    favorites:[]
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_FAVORITES:
            return{
                ...state,
                favorites:[...state.favorites, action.payload],
            };
            case REMOVE_FROM_FAVORITES:
                
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== action.payload.id), // Remove item from favorites
      };
        default:
            return state;
    }
}


export default rootReducer