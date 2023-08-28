
import './App.css';
import {BrowserRouter,Routes,Route, Router} from "react-router-dom"
import Home from './components/homePage/home';
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import About from './components/homePage/about';

function App() {
const translatorApiKey = process.env.REACT_APP_TRANSLATOR_API_KEY;
console.log(translatorApiKey,"translatorApiKey")
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
