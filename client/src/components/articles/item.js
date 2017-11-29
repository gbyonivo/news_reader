import React from 'react';
import PropTypes from 'prop-types';
import styles from './articles.scss';

/**
 * @const
 * @type {Closure} Item - creates react component
 * @param {Object} prop - object
 */

const Item = ({ item }) => (
    <div className={styles.item}>
        <h2><a href={item.link}>{item.title}</a></h2>
        {
            item.images.map((image, index) => (<img src={image} key={index}/>))
        }
    </div>
);

Item.propTypes = {
    item: PropTypes.object.isRequired
};

export default Item;
