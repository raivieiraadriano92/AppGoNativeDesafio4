import React from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const ItemProduct = ({ product }) => (
  <TouchableOpacity
    onPress={() => {}}
    style={styles.container}
  >
    <Image style={styles.image} source={{ uri: product.image }} />
    <View>
      <Text style={styles.name}>{product.name}asd</Text>
      <Text style={styles.brand}>{product.brand}</Text>
      <Text style={styles.price}>R$ {product.price}</Text>
    </View>
  </TouchableOpacity>
);

ItemProduct.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemProduct;
