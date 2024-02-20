export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const addToFAvorites = (item) => ({
    type:ADD_TO_FAVORITES,
    payload:item,
})
export const removeFromFAvorites = (item) => ({
    type:removeFromFAvorites,
    payload:item,
})