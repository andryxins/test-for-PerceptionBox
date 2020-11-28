import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import deleteSpacesInUrl from '../../libs/deleteSpacesInUrl';
import Styles from './CharactersList.module.css';

const CharactersList = ({ characters }) =>
  characters ? (
    <Paper elevation={3}>
      <List component="ul">
        {characters.map(({ name }) => (
          <li key={name}>
            <ListItem button>
              <Link
                className={Styles.link}
                to={`/character/${deleteSpacesInUrl(name)}`}
              >
                <ListItemText primary={name} />
              </Link>
            </ListItem>
          </li>
        ))}
      </List>
    </Paper>
  ) : null;

CharactersList.propTypes = {
  characters: PropTypes.array,
  filterQuery: PropTypes.string,
};

export default CharactersList;
