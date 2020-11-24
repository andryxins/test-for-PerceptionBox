import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularLoader from '../CircularLoader/CircularLoader';
import CustomTableRowCell from '../CustomTableRowCell/CustomTableRowCell';
import { getAdditionalInformation } from '../../api/swapiApi';
import Styles from './CharacterHomeWorld.module.css';

const CharacterHomeWorld = ({ url }) => {
  const [characterHomeWorld, setCharacterHomeWorld] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    async function getHomeWorld() {
      const homeWorld = await getAdditionalInformation(url);

      setIsLoading(false);
      return setCharacterHomeWorld(homeWorld);
    }

    getHomeWorld();
  }, [url]);

  return (
    <>
      <h2 className={Styles.title}>Home World</h2>
      {isLoading ? (
        <CircularLoader />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  <CustomTableRowCell
                    cellTitle="Planet"
                    cellValue={characterHomeWorld.name}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

CharacterHomeWorld.propTypes = {
  url: PropTypes.string,
};

export default CharacterHomeWorld;
