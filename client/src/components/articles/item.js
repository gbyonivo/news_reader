import React from 'react';
import PropTypes from 'prop-types';
import styles from './articles.scss';

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
