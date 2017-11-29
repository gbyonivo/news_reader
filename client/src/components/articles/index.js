import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './articles.scss';
import { filterList } from '../../functions';
import Filter from './filter';
import Item from './item';
import * as Actions from '../../actions';

/**
 * this is Articles class
 */
class Articles extends Component {
    /**
     * @param {Object} props - initial props supplied into the component
     */
    constructor(props) {
        /**
         * intialising Articles object
         */
        super(props);
        this.state = {
            filterText: ''
        };
        this.changeFilterText = this.changeFilterText.bind(this);
    }
    /**
     * Method of class articles for changing the filterText in the state
     * @param {Object} e - DOM object
     */
    changeFilterText(e) {
        this.setState({ filterText: e.target.value });
    }
    render() {
        const { articles } = this.props;
        const { filterText } = this.state;
        return (<div className={styles.articles}>
            <Filter onChange={this.changeFilterText} defaultValue={filterText}/>
            {
                filterList(articles, filterText, 'title').map((item, index) => <Item item={item} key={index}/>)
            }
        </div>);
    }
}

Articles.defaultProps = {
    articles: []
};

Articles.propTypes = {
    articles: PropTypes.array.isRequired
};

const mapStateToProps = ({ articles }) => ({ articles: articles.articles });

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Articles);
