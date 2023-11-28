import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

// pages 
import Navbar from './pages/navbar';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
      </Routes>
      </BrowserRouter>
   

    </div>
  );
}

export default App;
