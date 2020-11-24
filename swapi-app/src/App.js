import React, { useState } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import createUserObject from './libs/createNewUser';
import PrivatRoute from './Components/PrivatRoute/PrivatRoute';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import HomePage from './Pages/HomePage/HomePage';
import CharacterPage from './Pages/CharacterPage/CharacterPage';
import FavoriteCharactersPage from './Pages/FavoriteCharactersPage/FavoriteCharactersPage';

const App = () => {
  const [userDataFromLS] = useLocalStorage('swapi-user');

  const [user, setUser] = useState(userDataFromLS);

  const createNewUser = (name) => {
    const newUser = createUserObject(name);
    writeStorage('swapi-user', newUser);
    return setUser(newUser);
  };

  return (
    <Container maxWidth="sm" style={{ height: '100vh' }}>
      <Button variant="contained" color="primary">
        <NavLink className="btn" activeClassName="disabledBtn" to="/favorite">
          Go to favorite
        </NavLink>
      </Button>
      <Switch>
        <PrivatRoute isAuth={user} path="/" exact component={HomePage} />
        {!user && (
          <Route path="/signup">
            <SignUpPage setUser={createNewUser} />
          </Route>
        )}
        <PrivatRoute
          isAuth={user}
          userHandler={setUser}
          path="/character/:characterName"
          component={CharacterPage}
        />
        <PrivatRoute
          isAuth={user}
          path="/favorite"
          exact
          component={FavoriteCharactersPage}
        />
        <Redirect to="/" />
      </Switch>
    </Container>
  );
};

export default App;
