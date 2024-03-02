import React, { createContext, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ExploreLink from './MainPage/ExploreLink';
import Navbar from './MainPage/Navbar';
import Catogories from './MainPage/Catogories'
import MainContent from './MainPage/MainContent';
import Footer from './MainPage/Footer';
import {ScrollValue} from '../App'
import { CatogaryContext } from '../App';

export const PriceFilterContext = createContext();
export const SortContext = createContext();
export const beforeTax = createContext()






function MainPage() {


    const [isLoading, setIsLoading] = useState(true)


    const {caogary,setCatogary} = useContext(CatogaryContext)
    const {setScroll} = useContext(ScrollValue)


    // create state for price for filter
    const [filterPrice, setFilterPrice] = useState()


    // create a state for sort value to true or false
    const [sort, setSort] = useState(false)




    // create a state for tax button = true or false
    const [tax,setTax] = useState(false)







    useEffect(()=>{
        const handleScroll = () =>{
            setScroll(window.scrollY <= 0)
        }
        window.addEventListener("scroll",handleScroll)
    })
    



    // setFilterPrice top of the list, otherwise array is null
    useEffect(()=>{
        setFilterPrice(9000)
    },[])

    setTimeout(()=>{
        setIsLoading(false)
    },1000)


    return (
        <>
        {isLoading ?
            <>
                <div className='flex w-screen h-screen items-center justify-center'>
                    <h1>Loading...</h1>
                </div>
            </>
        :
            <SortContext.Provider value={{sort, setSort}}>
                <PriceFilterContext.Provider value={{filterPrice, setFilterPrice}}>
                    <beforeTax.Provider value={{tax,setTax}} >
                        <div className="App">
                            {/* {scroll && <ExploreLink />} */}
                            <TopBar>
                            <Navbar />
                            <Catogories />
                            </TopBar>
                            <MainContent />
                            <Footer />
                        </div>
                    </beforeTax.Provider>
                </PriceFilterContext.Provider>
            </SortContext.Provider>
        }
        </>
    );
    }
    const TopBar = styled.div`
        position: sticky;
        top: 0px;
        z-index: 2;
        background-color: white;
    `

    export default MainPage;
