import React from 'react';
import PropTypes from 'prop-types';
import styles from './articles.scss';

const FilterTextbox = (props) => {
    return <input type="text" { ...props } className={styles.articlesFilter} placeholder={'Search Articles'}/>;
};

FilterTextbox.propTypes = {
    defaultValue: PropTypes.string,
    onChange: PropTypes.func
};

export default FilterTextbox;
