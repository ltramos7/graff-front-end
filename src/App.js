import React from 'react';

import Signup from './components/signup'
// import SignupHooks from './components/SignupHooks'
import UserProfile from './components/UserProfile'

// a hooks version of signup component might not be ideal. I have to lift the state to the app component.

// make sure I can lift state to app
// pass the state information to profile or figure out how to add redux at this point. 



function App() {
  return (
    <div>
      <Signup/>
      {/* <SignupHooks/> */}
      <UserProfile/>

      
    </div>
  );
}

export default App;
