import './App.css';
import styled from 'styled-components';
import MainPage from './components/MainPage';
import HelpPage from './components/HelpPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>

        <Route path="/" element={<MainPage />} />
        <Route path="help" element={<HelpPage />} />
        </Routes>
    </div>
  );
}

export default App;
