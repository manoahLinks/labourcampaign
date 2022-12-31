import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import RegisterationPage from './pages/RegistrationPage';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='flex flex-col text-xs items-center'>   
          <div className='grid grid-cols-1 md:w-6/12 '>
            <Routes>
              <Route exact path={`/`} element={<LoginPage></LoginPage>}></Route>
              <Route path={`/register`} element={<RegisterationPage></RegisterationPage>}></Route>
            </Routes>
          </div>
        </div>
      </Router>  
    );
  }
}

export default App;
