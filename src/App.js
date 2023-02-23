import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
