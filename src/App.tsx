import React, { useState } from 'react';
import Amplify from 'aws-amplify';
import { Route, Switch } from 'react-router';
import WithAuth from './WithAuth';
import auth from './aws-exports';
import { BookmarksPage } from './pages/BookmarksPage';

Amplify.configure(auth);

function App() {
  return (
    <WithAuth>
      <Switch>
        <Route exact path="/bookmarks/:userName" render={() => <BookmarksPage />} />
      </Switch>
    </WithAuth>
  );
}

export default App;
