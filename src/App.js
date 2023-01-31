import './App.css';
// import key from './apikey/key';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Home from './pages/home/Home'
import About from './pages/about/About'
import More from './pages/more/More';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/movie/:id' element={<More />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  
    </div>
  );
}

export default App;
