import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Class.css';

class Class extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

Class.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Class);
