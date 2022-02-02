import './App.css';
import Navbar from './components/NavBar/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages';
import About from './Pages/about';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={<Home/>}/>
        <Route path="/about" component={<About/>}/>
      </Routes>
    </Router>

  );
}

export default App;
