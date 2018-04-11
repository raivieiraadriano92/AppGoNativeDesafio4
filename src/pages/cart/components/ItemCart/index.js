import React from 'react';

import { Image, Text, View } from 'react-native';

import styles from './styles';

const ItemCart = ({ product }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: product.image }} />
    <View>
      <Text style={styles.name}>{product.name}asd</Text>
      <Text style={styles.brand}>{product.brand}</Text>
      <Text style={styles.price}>R$ {product.price}</Text>
    </View>
  </View>
);

export default ItemCart;
