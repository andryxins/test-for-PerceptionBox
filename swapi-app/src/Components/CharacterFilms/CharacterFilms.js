import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import SectionTitle from '../SectionTitle/SectionTitle';
import CircularLoader from '../CircularLoader/CircularLoader';
import CustomTableRowCell from '../CustomTableRowCell/CustomTableRowCell';
import { getAdditionalInformation } from '../../api/swapiApi';

const CharacterFilms = ({ filmsUrls }) => {
  const [characterFilms, setCharacterFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!filmsUrls) return;

    async function getAllFilms() {
      await filmsUrls.forEach((url) =>
        getAdditionalInformation(url).then((film) => {
          setCharacterFilms((prev) => [...prev, film]);
          setIsLoading(false);
        })
      );
    }

    getAllFilms();
  }, [filmsUrls]);

  return (
    <>
      <SectionTitle value="Films" />
      {isLoading ? (
        <CircularLoader />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {characterFilms.map((film, idx) => (
                <TableRow key={film.title}>
                  <TableCell component="th" scope="row">
                    <CustomTableRowCell
                      cellTitle={`${idx + 1}`}
                      cellValue={film.title}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

CharacterFilms.propTypes = {
  filmsUrls: PropTypes.arrayOf(PropTypes.string),
};

export default CharacterFilms;
