import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './articles.scss';
import { filterList } from '../../functions';
import Filter from './filter';
import Item from './item';
import * as Actions from '../../actions';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        };
        this.changeFilterText = this.changeFilterText.bind(this);
    }
    changeFilterText(e) {
        this.setState({ filterText: e.target.value });
    }
    render() {
        const { articles } = this.props;
        const { filterText } = this.state;
        return (<div className={'articles'}>
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
