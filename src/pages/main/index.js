import React, { Component, Fragment } from 'react';

import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CategoriesActions } from 'store/ducks/categories';

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

class Main extends Component {
  static navigationOptions = {
    header: <Header title="GoCommerce" />,
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })).isRequired,
    }).isRequired,
    getCategoriesRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCategoriesRequest();
  }

  render() {
    return (
      <Fragment>
        <View style={styles.categories}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {this.props.categories.data.map(category => (
              <TouchableOpacity
                key={category.id}
                onPress={() => { }}
                style={[styles.buttonCategory, (category.id === 2 ? styles.buttonCategoryActive : {})]}
              >
                <Text style={styles.buttonCategoryText}>{category.title}</Text>
              </TouchableOpacity>
            ))}
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
            renderItem={item => <ItemProduct onPress={() => { this.props.navigation.navigate('ProductDetail'); }} product={item.item} />}
          />
        </View>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
