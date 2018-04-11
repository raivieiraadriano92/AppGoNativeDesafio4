import React from 'react';

import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const ItemCart = ({ product }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: product.image }} />

    <View style={styles.info}>
      <Text style={styles.name}>{product.name}asd</Text>
      <Text style={styles.brand}>{product.brand}</Text>
      <Text style={styles.price}>R$ {product.price}</Text>
    </View>

    <View style={styles.actions}>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={() => {}}
        onSubmitEditing={() => { }}
        style={styles.input}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
      />

      <TouchableOpacity
        onPress={() => {}}
        style={styles.removeButton}
      >
        <Icon name="times" size={18} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  </View>
);

export default ItemCart;
