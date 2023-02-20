import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LandingPage, Register, SignIn } from './pages';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
