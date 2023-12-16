import React from 'react';
import { useParams } from 'react-router-dom';


const SingleItem = () => {

    const {cardId} = useParams()
    return (
        <div>
            <h1>single item</h1>
            <h6>{cardId}</h6>
        </div>
    );
};

export default SingleItem;