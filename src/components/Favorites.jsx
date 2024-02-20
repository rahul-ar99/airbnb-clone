import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {

    const Fav = useSelector(state=>state.favorites)

    useEffect(()=>{
        console.log(Fav)
    })


    return (
        <div>
            {Fav.map(()=>{
                <h1>aasdf</h1>
            })}
            <h1>wertjgwg</h1>
        </div>
    );
};

export default Favorites