const initialState={
    favorites:[]
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_FAV':
            return{
                ...state,
                favorites:[...state.favorites,action.payload]
            }
        case 'DELETE_FAV':
            return{
                ...state,
                favorites:state.favorites.filter((_,index)=>index != action.payload)
            }
    }
}