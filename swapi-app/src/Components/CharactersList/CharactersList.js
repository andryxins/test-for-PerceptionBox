/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Styles from './CharactersList.module.css';

const CharactersList = ({ characters }) => {
  return characters ? (
    <Paper elevation={3}>
      <List component="ul">
        {characters.map(({ id, name }, idx) => (
          <li key={id}>
            <ListItem button>
              <Link className={Styles.link} to={`/character/${name}`}>
                <ListItemText primary={name} />
              </Link>
            </ListItem>
          </li>
        ))}
      </List>
    </Paper>
  ) : null;
};

CharactersList.propTypes = {
  characters: PropTypes.array,
  filterQuery: PropTypes.string,
};

export default CharactersList;
