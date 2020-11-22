/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import PrivatRoute from './Components/PrivatRoute/PrivatRoute';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import HomePage from './Pages/HomePage/HomePage';
import CharacterPage from './Pages/CharacterPage/CharacterPage';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Container maxWidth="sm" style={{ height: '100vh' }}>
      <Switch>
        <PrivatRoute isAuth={user} path="/" exact component={HomePage} />
        {!user && (
          <Route path="/signup">
            <SignUpPage setUser={setUser} />
          </Route>
        )}
        <PrivatRoute
          isAuth={user}
          path="/character/:characterId"
          component={CharacterPage}
        />
        <Redirect to="/" />
      </Switch>
    </Container>
  );
};

export default App;
