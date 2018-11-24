import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BannerImage from '../../components/BannerImage';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FastFoodIcon from '@material-ui/icons/FastFood';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,

  },
  hehe: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  title: {
    textAlign: 'center'
  },
  tabs: {
    backgroundColor: '#2196f3',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  chip: {
    margin: theme.spacing.unit,
    backgroundColor: '#2196f3',
  }
});


// Import Style
//import styles from './Class.css';

class ClassDetailPage extends Component {
  render() {
    // Banner image
    // Paper Detail
      //Tabs
      // Attendance
      // Students

return <div>
      <Paper>
        <Grid container spacing={24} className={this.props.classes.root} direction="row">
          <Grid item>
            <BannerImage src="https://res.cloudinary.com/gavinching/image/upload/q_80/v1543043466/All_Lights_hpavhm.png" />
          </Grid>
          <Grid item xs={12} sm>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.class.name}
            </Typography>
            <Typography component="p">
              Sunday - 8:00PM - 9:00PM
            </Typography>
            <Typography component="p">
              John Doe
            </Typography>
          </Grid>
        </Grid>
        <Tabs className={this.props.classes.tabs} centered value={0} onChange={() => {}}>
          <Tab label="Attendance" />
          <Tab label="Students" />
        </Tabs>
        <Grid className={this.props.classes.hehe} container spacing={24} direction="column">
          <Grid item>
          <Paper>
            <Grid container spacing={24} className={this.props.classes.root} alignItems="center" alignContent="center">
              <Grid item>
                <Avatar
                  alt="Adelle Charles"
                  src="https://res.cloudinary.com/gavinching/image/upload/q_80/v1543089208/uxceo-128_n0vz7r.jpg"
                  className={this.props.classes.avatar}
                />
              </Grid>
              <Grid item xs={12} sm container direction="column">
                <Typography component="p">
                  John Cena
                </Typography>
              </Grid>
            </Grid>
            <div className={this.props.classes.root}>
            <Chip
                className={this.props.classes.chip}
                label="Peanuts"
                color="primary"
                avatar={<Avatar><FastFoodIcon/></Avatar>}
              />

                  <Chip
                      label="Needs EpiPen"
                      color="secondary"
                      avatar={<Avatar>!</Avatar>}
                    />
            </div>
          </Paper>
          </Grid>
          <Grid item>
          <Paper>
            <Grid container spacing={24} className={this.props.classes.root} alignItems="center" alignContent="center">
              <Grid item>
                <Avatar
                  alt="Adelle Charles"
                  src="https://res.cloudinary.com/gavinching/image/upload/q_80/v1543089208/uxceo-128_n0vz7r.jpg"
                  className={this.props.classes.avatar}
                />
              </Grid>
              <Grid item xs={12} sm container direction="column">
                <Typography component="p">
                  Whalvana Lee
                </Typography>
              </Grid>
            </Grid>
            <div className={this.props.classes.root}>

              <Chip
                  className={this.props.classes.chip}
                  label="Pizza"
                  color="primary"
                  avatar={<Avatar><FastFoodIcon/></Avatar>}
                />
                <Chip
                    className={this.props.classes.chip}
                    label="Cheese"
                    color="primary"
                    avatar={<Avatar><FastFoodIcon/></Avatar>}
                  />

            </div>
          </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>;
  }
}

const mapStateToProps = state => {
  return {
    class: {
      name: "LA Intermediate 5"
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

ClassDetailPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ClassDetailPage));
