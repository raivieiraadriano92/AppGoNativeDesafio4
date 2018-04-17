import React, { Component, Fragment } from 'react';

import { FlatList, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Header from 'components/Header';

import styles from './styles';
import ItemCart from './components/ItemCart';

class Cart extends Component {
  static navigationOptions = () => ({
    tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" size={20} color={tintColor} />,
  });

  static propTypes = {
    cart: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
      })).isRequired,
    }).isRequired,
  };

  totalPrice = () => {
    if (!this.props.cart.data.length) {
      return 0;
    }

    return this.props.cart.data
      .map(product => product.price)
      .reduce((total, next) => total + next);
  }

  render() {
    return (
      <Fragment>
        <Header title="Carrinho" />
        <View style={styles.container}>
          <FlatList
            data={this.props.cart.data}
            keyExtractor={item => String(item.id)}
            ListFooterComponent={<View style={styles.listHeaderFooter} />}
            ListHeaderComponent={<View style={styles.listHeaderFooter} />}
            renderItem={item => <ItemCart product={item.item} />}
          />

          <View style={styles.subtotal}>
            <Text style={styles.subtotalTitle}>Subtotal</Text>
            <Text style={styles.subtotalValue}>R$ {this.totalPrice()}</Text>
          </View>
        </View>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
