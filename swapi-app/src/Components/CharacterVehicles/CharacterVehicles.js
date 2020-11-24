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
import Styles from './CharacterVehicles.module.css';
import { getAdditionalInformation } from '../../api/swapiApi';

const CharacterVehicles = ({ vehiclesUrls }) => {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!vehiclesUrls) return;

    async function getAllVehicles() {
      await vehiclesUrls.forEach((url) =>
        getAdditionalInformation(url).then((vehicle) => {
          setVehicles((prev) => [...prev, vehicle]);
          setIsLoading(false);
        })
      );
    }

    getAllVehicles();
  }, [vehiclesUrls]);

  return (
    <>
      <h2 className={Styles.title}>Vehicles</h2>
      {isLoading ? (
        <CircularLoader />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {vehicles.map((vehicle) => (
                <TableRow key={vehicle.name}>
                  <TableCell component="th" scope="row">
                    <CustomTableRowCell
                      cellTitle={vehicle.name}
                      cellValue={vehicle.model}
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

CharacterVehicles.propTypes = {
  vehiclesUrls: PropTypes.arrayOf(PropTypes.string),
};

export default CharacterVehicles;
