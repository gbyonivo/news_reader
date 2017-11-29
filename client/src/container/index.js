import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Articles from '../components/articles';

/**
 * this is the Container class
 */
class Container extends Component {
    /**
     * @function
     * just executes the loadArticles action
     */
    componentDidMount() {
        this.props.actions.loadArticles();
    }
    render() {
        return (<div>
            <Articles/>
        </div>);
    }
}

Container.propTypes = {
    actions: PropTypes.object
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
