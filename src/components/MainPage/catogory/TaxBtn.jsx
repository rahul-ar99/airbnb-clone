import React, { useContext } from 'react';
import styled from 'styled-components';
import { beforeTax } from '../../MainPage';

const TaxBtn = () => {



    const {setTax} = useContext(beforeTax)


    const handleChange = (e) =>{
        setTax(e.target.checked)
    }


    return (
        <TaxDiv>
            <TaxP>Display total before taxes</TaxP>
            <ToggleLabel>
                <ToggleInput type='checkbox' onClick={handleChange}/>
                <ToggleSpan></ToggleSpan>
            </ToggleLabel>
        </TaxDiv>
    );
};


const TaxDiv = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    border: 1px solid #c6c6c6;
    padding: 10px;
    gap: 10px;
    border-radius: 15px;
`
const TaxP = styled.p`
    font-size: 13px;
    font-weight: 500;
`
const ToggleLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 28px;
    
`


const ToggleInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    `

const ToggleSpan = styled.span`
    position: absolute;
    cursor: pointer;
    top:0;
    left: 0;
    right: 0;
    bottom:0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;


    :checked{
        background-color: #767676;

    }

    &:before{
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
    &:hover::before{
    }
    ${ToggleInput}:checked + & {
        background-color: #ff0000;
        &:before{
            -webkit-transform: translateX(21px);
            -ms-transform: translateX(21px);
            transform: translateX(21px);
            background-color: #f5f5f5;
        }
    }

`

export default TaxBtn;