import React from 'react';

import { Image, Text, View } from 'react-native';

import styles from './styles';

const ItemProduct = props => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: props.product.image }} />
    <Text style={styles.name}>{props.product.name}</Text>
    <Text style={styles.brand}>{props.product.brand}</Text>
    <Text style={styles.price}>{props.product.price}</Text>
  </View>
);

export default ItemProduct;
