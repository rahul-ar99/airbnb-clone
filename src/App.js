import './App.css';
import styled from 'styled-components';
import ExploreLink from './components/ExploreLink';
import Navbar from './components/Navbar';
import Catogories from './components/Catogories'
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        {/* <ExploreLink /> */}
        <TopBar>
          <Navbar />
          <Catogories />
        </TopBar>
        <MainContent />
        <Footer />
    </div>
  );
}
const TopBar = styled.div`
      position: sticky;
      top: 0px;
      z-index: 2;
      background-color: white;
`

export default App;
