import React, { useState } from 'react';
import Amplify from 'aws-amplify';
import WithAuth from './WithAuth';
import auth from './aws-exports';

Amplify.configure(auth);

function App() {
  return (
    <WithAuth />
  );
}

export default App;
