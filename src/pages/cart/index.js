import React, { Fragment } from 'react';

import { FlatList, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from 'components/Header';

import styles from './styles';
import ItemCart from './components/ItemCart';

const products = [
  {
    id: 1,
    name: 'Camiseta Hyperas Preta',
    brand: 'Quiksilver',
    image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
    price: 49.99,
  },
  {
    id: 2,
    name: 'Camiseta Double Tap Preta',
    brand: 'Quiksilver',
    image: 'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
    price: 59.99,
  },
  {
    id: 3,
    name: 'Camiseta Logo Azul',
    brand: 'Red Bull',
    image: 'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
    price: 54.99,
  },
  {
    id: 4,
    name: 'Camiseta Primo Tipper',
    brand: 'Rip Curl',
    image: 'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
    price: 39.99,
  },
  {
    id: 5,
    name: 'Camiseta Hyperas Preta',
    brand: 'Quiksilver',
    image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
    price: 49.99,
  },
  {
    id: 6,
    name: 'Camiseta Double Tap Preta',
    brand: 'Quiksilver',
    image: 'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
    price: 59.99,
  },
];

const Cart = () => (
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

export default Cart;
