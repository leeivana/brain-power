import React from 'react';
import ClassItem from '../ClassItem';
import Grid from '@material-ui/core/Grid';
import { ClassesPropType } from '../../../../util/propTypes';

import styles from './ClassList.css';

function ClassList(props) {
  return (
      <Grid container spacing={24} className={styles.root}>
        {
          props.classes.map(currClass => (
            <Grid item xs={12} sm={6}>
              <ClassItem classItem={currClass} />
            </Grid>
          ))
        }
      </Grid>
  );
}

ClassList.propTypes = ClassesPropType;

export default ClassList;
