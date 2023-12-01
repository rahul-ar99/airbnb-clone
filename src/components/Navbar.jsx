import React from 'react';
import CenterNav from './navbar/CenterItems';
import RightNav from './navbar/RightNav';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Navbar1>
            <div className='wrapper'>
                <Content>

                    <BrandName className='text text-[#FF385C]'>
                        <div className='w-8'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 24 24" id="airbnb"><path fill="#FF385C" d="M22.517 16.886c-.813-1.725-2.018-4.264-3.243-6.846-1.364-2.877-2.754-5.808-3.66-7.73C14.954.907 13.535 0 12 0S9.046.907 8.385 2.31c-.92 1.954-2.342 4.952-3.729 7.875-1.201 2.532-2.376 5.008-3.175 6.702A4.94 4.94 0 0 0 1 19c0 2.757 2.243 5 5 5 1.873 0 4.114-1.343 6-3.234C13.886 22.657 16.127 24 18 24c2.757 0 5-2.243 5-5 0-.724-.163-1.435-.483-2.114zM9 13c0-1.654 1.346-3 3-3s3 1.346 3 3c0 2.002-1.293 4.356-3 6.277-1.707-1.921-3-4.275-3-6.277zm9 10c-1.507 0-3.543-1.235-5.299-2.981C14.606 17.864 16 15.201 16 13c0-2.206-1.794-4-4-4s-4 1.794-4 4c0 2.201 1.394 4.864 3.299 7.019C9.543 21.765 7.507 23 6 23c-2.206 0-4-1.794-4-4 0-.575.13-1.143.387-1.688.798-1.692 1.973-4.168 3.173-6.7C6.947 7.689 8.369 4.69 9.29 2.735 9.786 1.681 10.85 1 12 1s2.214.681 2.71 1.735c.905 1.923 2.296 4.855 3.661 7.732 1.225 2.582 2.428 5.12 3.242 6.845.257.545.387 1.113.387 1.688 0 2.206-1.794 4-4 4z"></path><linearGradient id="a" x1="4.675" x2="23.584" y1="10.039" y2="18.856" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".2"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><path fill="url(#a)" d="M22.517 16.886c-.813-1.725-2.018-4.264-3.243-6.846-1.364-2.877-2.754-5.808-3.66-7.73C14.954.907 13.535 0 12 0S9.046.907 8.385 2.31c-.92 1.954-2.342 4.952-3.729 7.875-1.201 2.532-2.376 5.008-3.175 6.702A4.94 4.94 0 0 0 1 19c0 2.757 2.243 5 5 5 1.873 0 4.114-1.343 6-3.234C13.886 22.657 16.127 24 18 24c2.757 0 5-2.243 5-5 0-.724-.163-1.435-.483-2.114zM9 13c0-1.654 1.346-3 3-3s3 1.346 3 3c0 2.002-1.293 4.356-3 6.277-1.707-1.921-3-4.275-3-6.277zm9 10c-1.507 0-3.543-1.235-5.299-2.981C14.606 17.864 16 15.201 16 13c0-2.206-1.794-4-4-4s-4 1.794-4 4c0 2.201 1.394 4.864 3.299 7.019C9.543 21.765 7.507 23 6 23c-2.206 0-4-1.794-4-4 0-.575.13-1.143.387-1.688.798-1.692 1.973-4.168 3.173-6.7C6.947 7.689 8.369 4.69 9.29 2.735 9.786 1.681 10.85 1 12 1s2.214.681 2.71 1.735c.905 1.923 2.296 4.855 3.661 7.732 1.225 2.582 2.428 5.12 3.242 6.845.257.545.387 1.113.387 1.688 0 2.206-1.794 4-4 4z"></path></svg>
                        </div>
                        aribnb
                    </BrandName>
                    <CenterNav />
                    <RightNav /> 
                </Content>
            </div>
        </Navbar1>
    );
};


const Navbar1 = styled.section`
    border: 1px solid lightgray;

    background-color: white;

`

const Content = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px black;
    align-items: center;
    padding: 20px 0;

`;

const BrandName = styled.h1`
    display: flex;
    font-size: 25px;
`



export default Navbar;