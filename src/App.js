import './App.css';
import Navbar from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages';
import About from './Pages/about';
import Contador from './components/Counter/Counter';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={<Home/>}/>
        <Route path="/about" component={<About/>}/>
      </Routes>
    </Router>
 
      <Contador/>

  );
}

export default App;
