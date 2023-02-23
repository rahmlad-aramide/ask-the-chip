import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LandingPage, Onboarding, Register, RegisterAsProvider, SignIn } from './pages';
// import Onboarding from './pages/Onboarding';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register-as-provider' element={<RegisterAsProvider />} />
        <Route path='/onboarding' element={<Onboarding />} />
      </Routes>
    </div>
  );
}

export default App;
