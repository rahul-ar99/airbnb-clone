import React from 'react';
import styled from 'styled-components';
import Cards from './main/Cards';
import ShowMore from './main/ShowMore';

const MainContent = () => {
    return (
        <div>
            <Cards/>
            <ShowMore />
        </div>
    );
};

export default MainContent;