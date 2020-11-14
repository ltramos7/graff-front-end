import React from 'react';
import './scss/main.scss';


import Signup from './components/Signup'
// import SignupHooks from './components/SignupHooks'
import UserProfile from './components/UserProfile'
import Navigation from './components/Navigation';

// a hooks version of signup component might not be ideal. I have to lift the state to the app component.

// make sure I can lift state to app
// pass the state information to profile or figure out how to add redux at this point. 



function App() {
  return (
    <div>
      <Navigation/>
      {/* <Signup/>  Might need to place this component within Navigation*/}
      {/* <SignupHooks/> */}
      {/* <UserProfile/> */}

      
    </div>
  );
}

export default App;
