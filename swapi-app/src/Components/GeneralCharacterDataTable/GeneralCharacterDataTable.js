/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomTableRowCell from '../CustomTableRowCell/CustomTableRowCell';
import Styles from './GeneralCharacterDataTable.module.css';

const GeneralCharacterDataTable = ({ character }) => {
  return (
    <>
      <h2 className={Styles.title}>Character general info</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <CustomTableRowCell
                  cellTitle="Name"
                  cellValue={character.name}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <CustomTableRowCell
                  cellTitle="Height"
                  cellValue={character.height}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <CustomTableRowCell
                  cellTitle="Mass"
                  cellValue={character.mass}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <CustomTableRowCell
                  cellTitle="Hair color"
                  cellValue={character.hair_color}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <CustomTableRowCell
                  cellTitle="Skin color"
                  cellValue={character.skin_color}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <CustomTableRowCell
                  cellTitle="Eye color"
                  cellValue={character.eye_color}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <CustomTableRowCell
                  cellTitle="Birth year"
                  cellValue={character.birth_year}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

// GeneralCharacterDataTable.propTypes = {};

export default GeneralCharacterDataTable;
