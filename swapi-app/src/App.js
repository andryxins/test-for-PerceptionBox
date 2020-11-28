import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import Container from '@material-ui/core/Container';
import createUserObject from './libs/createNewUser';
import PrivatRoute from './Components/PrivatRoute/PrivatRoute';
import Nav from './Components/Nav/Nav';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import HomePage from './Pages/HomePage/HomePage';
import CharacterPage from './Pages/CharacterPage/CharacterPage';
import FavoriteCharactersPage from './Pages/FavoriteCharactersPage/FavoriteCharactersPage';

const App = () => {
  // getting user from LocalStorage, if not exist singup with FB or LinkedIn
  const [userDataFromLS] = useLocalStorage('swapi-user');

  const [user, setUser] = useState(userDataFromLS);

  // I take only user name, and adding array "likes" where I store characters names
  const createNewUser = (name) => {
    const newUser = createUserObject(name);
    writeStorage('swapi-user', newUser);
    return setUser(newUser);
  };

  return (
    <Container maxWidth="sm" style={{ padding: '10px 0 ', minHeight: '100vh' }}>
      {user && <Nav />}
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
