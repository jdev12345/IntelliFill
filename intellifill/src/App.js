import './styles/App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
        <Route exact path='/detail/:id' element={<Detail/>}/>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
