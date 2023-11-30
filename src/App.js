import './App.css';
import ExploreLink from './components/ExploreLink';
import Navbar from './components/Navbar';
import Catogories from './components/Catogories'

function App() {
  return (
    <div className="App">
        <ExploreLink />
        <Navbar />
        <Catogories />
    </div>
  );
}

export default App;
