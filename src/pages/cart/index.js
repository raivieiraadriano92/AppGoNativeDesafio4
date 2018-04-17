import React, { Fragment } from 'react';

import { FlatList, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Header from 'components/Header';

import styles from './styles';
import ItemCart from './components/ItemCart';

const Cart = ({ products }) => (
  <Fragment>
    <Header title="Carrinho" />
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        ListFooterComponent={<View style={styles.listHeaderFooter} />}
        ListHeaderComponent={<View style={styles.listHeaderFooter} />}
        renderItem={item => <ItemCart product={item.item} />}
      />

      <View style={styles.subtotal}>
        <Text style={styles.subtotalTitle}>Subtotal</Text>
        <Text style={styles.subtotalValue}>R$ 200,00</Text>
      </View>
    </View>
  </Fragment>
);

Cart.navigationOptions = () => ({
  tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" size={20} color={tintColor} />,
});

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  products: state.cart.data,
});

export default connect(mapStateToProps)(Cart);
