import React from 'react';

import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { PropTypes } from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CartActions } from 'store/ducks/cart';

import styles from './styles';

const ItemCart = ({ product, changeAmountProduct, removeProduct }) => (
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
        keyboardType="numeric"
        onChangeText={amount => changeAmountProduct(product.id, amount)}
        style={styles.input}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
        value={String(product.amount)}
      />

      <TouchableOpacity
        onPress={() => removeProduct(product.id)}
        style={styles.removeButton}
      >
        <Icon name="times" size={18} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  </View>
);

ItemCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.oneOfType(PropTypes.number.isRequired, null),
  }).isRequired,
  removeProduct: PropTypes.func.isRequired,
  changeAmountProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemCart);
