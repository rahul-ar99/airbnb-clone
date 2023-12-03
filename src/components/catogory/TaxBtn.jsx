import React from 'react';
import styled from 'styled-components';

const TaxBtn = () => {
    return (
        <TaxDiv>
            <TaxP>Display total before taxes</TaxP>
            <ToggleLabel>
                <ToggleInput></ToggleInput>
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
        -webkit-transform: translateX(21px);
        -ms-transform: translateX(21px);
        transform: translateX(21px);
    }
    ${ToggleInput}:checked + & {
        background-color: red;
        &:before{
            background-color: blue;
        }
    }

`

export default TaxBtn;