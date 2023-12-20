import './App.css';
import styled from 'styled-components';
import MainPage from './components/MainPage';
import HelpPage from './components/HelpPage';
import SingleItem from './components/SingleItem';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="App">
        <Routes>

        <Route path="/" element={<MainPage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="singleitem" element={<SingleItem />} />
        <Route path="favorites" element={<Favorites />} />
        </Routes>
    </div>
  );
}

export default App;
