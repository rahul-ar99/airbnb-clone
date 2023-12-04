import React from 'react';
import styled from 'styled-components';

const Filter = () => {


    return (
        <>
        <FilterBtn>
            <FilterIcon src={require("../../assets/icons/filter.png")} />
            <FilterName>Filter</FilterName>
        </FilterBtn>
        </>
        
    );
};

export default Filter;


const FilterBtn = styled.button`
    display: flex;
    border: 1px solid lightgray;
    padding: 10px 30px 10px 10px;
    border-radius: 15px;
    width: 100px;
    box-sizing: content-box;
    gap:10px
`
const FilterIcon = styled.img`
    width: 20px;
    height: 20px;
`
const FilterName = styled.p``