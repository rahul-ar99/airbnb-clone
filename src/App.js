import './App.css';
import styled from 'styled-components';
import MainPage from './components/MainPage';
import HelpPage from './components/HelpPage';
import SingleItem from './components/SingleItem';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from './components/Favorites';
import Authentication from './components/Authentication';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createContext, useState } from 'react';
export const ScrollValue = createContext()
export const CatogaryContext = createContext()



function App() {
// create state for scroll
const [scroll, setScroll] = useState(true)

// create a state for which catogary selected
const [catogary, setCatogary] = useState("amazing_pools")


return (
    <Authentication>

    <div className="App">
    <ScrollValue.Provider value={{scroll,setScroll}}>
    <CatogaryContext.Provider value={{catogary,setCatogary}}>


        <Provider store={store}>

        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="help" element={<HelpPage />} />
            <Route path="singleitem" element={<SingleItem />} />
            <Route path="favorites" element={<Favorites />} />
        </Routes>
        </Provider>
        </CatogaryContext.Provider>

        </ScrollValue.Provider>

    </div>
    </Authentication>
);
}

export default App;
