export const addFav = (fav) =>({
    type:'ADD_fAV',
    payload:fav
})

export const deleteFav = (index) =>{
    return{
        type:'DELETE_TODO',
        payload:index
    };
}

