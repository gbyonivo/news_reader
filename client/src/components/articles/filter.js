import React from 'react';
import PropTypes from 'prop-types';

const FilterTextbox = (props) => {
    return <input type="text" { ...props } className={'articlesFilter'} placeholder={'Search Articles'}/>;
};

FilterTextbox.propTypes = {
    defaultValue: PropTypes.string,
    onChange: PropTypes.func
};

export default FilterTextbox;
