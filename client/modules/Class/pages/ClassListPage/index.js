import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ClassList from '../../components/ClassList';
import Typography from '@material-ui/core/Typography';


// Import Style
//import styles from './Class.css';

class ClassListPage extends Component {
  render() {
    return <div>
      <Typography gutterBottom variant="h2" component="h2" align="center">
        Classes
      </Typography>
      <ClassList classes={this.props.classes}/>
    </div>;
  }
}

const mapStateToProps = state => {
  return {
    classes: [{
      name: 'LA Intermediate 2'
    }, {
      name: 'LA Intermediate 1'
    },  {
      name: 'LA Intermediate 3'
    },  {
      name: 'LA Intermediate 4'
    },  {
      name: 'LA Intermediate 5'
    }]
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

ClassListPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(ClassListPage);
