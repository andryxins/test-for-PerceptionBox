import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import { writeStorage } from '@rehooks/local-storage';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Styles from './LikeActionButton.module.css';

const LikeActionButton = ({ user, userHandler, actionType, character }) => {
  const handleAddToLikes = (character) => {
    const updatedUser = {
      ...user,
      likes: [...user.likes, { name: character.name }],
    };
    writeStorage('swapi-user', updatedUser);
    userHandler(updatedUser);
  };

  const handleDeleteFromLikes = (characterToDelete) => {
    const updatedUser = {
      ...user,
      likes: user.likes.filter(
        (character) => character.name !== characterToDelete.name
      ),
    };
    writeStorage('swapi-user', updatedUser);
    userHandler(updatedUser);
  };

  return (
    <div className={Styles.btnContainer}>
      <Fab
        onClick={
          (actionType === 'add' && (() => handleAddToLikes(character))) ||
          (actionType === 'delete' && (() => handleDeleteFromLikes(character)))
        }
      >
        {(actionType === 'add' && <FavoriteIcon />) ||
          (actionType === 'delete' && <FavoriteIcon color="secondary" />)}
      </Fab>
    </div>
  );
};

LikeActionButton.propTypes = {
  user: PropTypes.object,
  userHandler: PropTypes.func,
  actionType: PropTypes.string,
  character: PropTypes.object,
};

export default LikeActionButton;
