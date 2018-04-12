import React, { Fragment } from 'react';

import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from 'components/Header';

import styles from './styles';
import ItemProduct from './components/ItemProduct';

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

const categories = [
  {
    id: 1,
    title: 'Camisetas',
  },
  {
    id: 2,
    title: 'Camisas',
  },
  {
    id: 3,
    title: 'Calças',
  },
  {
    id: 4,
    title: 'Blusas',
  },
  {
    id: 5,
    title: 'Bonés',
  },
  {
    id: 6,
    title: 'Casacos',
  },
];

const Main = ({ navigation }) => (
  <Fragment>
    <View style={styles.categories}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        { categories.map(category => (
          <TouchableOpacity
            key={category.id}
            onPress={() => {}}
            style={[styles.buttonCategory, (category.id === 2 ? styles.buttonCategoryActive : {})]}
          >
            <Text style={styles.buttonCategoryText}>{category.title}</Text>
          </TouchableOpacity>
        )) }
      </ScrollView>
    </View>

    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={styles.columnContainer}
        data={products}
        keyExtractor={item => String(item.id)}
        ListFooterComponent={<View style={styles.listHeaderFooter} />}
        ListHeaderComponent={<View style={styles.listHeaderFooter} />}
        numColumns={2}
        renderItem={item => <ItemProduct onPress={() => { navigation.navigate('ProductDetail'); }} product={item.item} />}
        // onRefresh={this.loadOrganizations}
        // refreshing={this.state.refreshing}
        // ListFooterComponent={<View style={styles.listFooter} />}
      />
    </View>
  </Fragment>
);

Main.navigationOptions = {
  header: <Header title="GoCommerce" />,
  tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />,
};

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Main;
