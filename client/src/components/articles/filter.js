/**
 * this is the filter component for searching/filtering through list of articles
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './articles.scss';

/**
 * @const
 * @type {Closure} FilterTextbox
 * @param {object} props - defaultValue and onChange
 * @returns {object} returns a react component
 */
const FilterTextbox = props => {
    return <input type="text" { ...props } className={styles.articlesFilter} placeholder={'Search Articles'}/>;
};

FilterTextbox.propTypes = {
    defaultValue: PropTypes.string,
    onChange: PropTypes.func
};

export default FilterTextbox;
