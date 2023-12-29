import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FilterModal from '../../modal/FilterModal';

const Filter = () => {

    // open and close filter modal with useState
    const [filter, setFilter] = useState(false)

    return (
        <>
        {/* change setFilter to false and true, when filter is true modal is open */}
        <FilterBtn onClick={()=>setFilter(filter?false:true)}>

            <FilterIcon src={require("../../../assets/icons/filter.png")} />
            
            <FilterName>Filter</FilterName>

        </FilterBtn>


        {/* when filter is true show FilterModal is show otherwise don't show */}
        {filter && <FilterModal close={setFilter}/>}
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