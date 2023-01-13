import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import RegisterationPage from './pages/RegistrationPage';
import { useAuthContext } from './hooks/useAuthContext';
import HomePage from './pages/HomePage';

function App() {

  const {user} = useAuthContext()
  
  return (
    <Router>
      <div className='flex flex-col text-xs items-center'>   
        <div className='grid grid-cols-1 md:w-6/12 '>
          <Routes>
            <Route exact path={`/`} element={!user ? <LoginPage/> : <Navigate to={`/home`} />} />
            <Route path={`/register`} element={!user ? <RegisterationPage/> : <Navigate to={`/`} />} />
            <Route path={`/home`} element={user ? <HomePage/> : <Navigate to={`/`} />} />
          </Routes>
        </div>
      </div>
    </Router>  
  );
  
}

export default App;
