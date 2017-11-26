import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Articles from '../components/articles';

class Container extends Component {
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
