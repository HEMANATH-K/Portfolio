import { Routes, Route } from 'react-router-dom';
import Home from './components/Hero';
import About from './components/About';
import  Skills  from  './components/Skills';
import Portfolio from './components/Portfolio'
import  Contact from  './components/Contact'


function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route  path="/Skills"  element={<Skills/>}/>
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route  path="/Contact" element={<Contact/>}/>
     
      </Routes>
    </>
  );
}

export default App;
