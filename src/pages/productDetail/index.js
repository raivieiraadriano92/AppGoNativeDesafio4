import React, { Component } from 'react';

import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { PropTypes } from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from 'components/Header';

import styles from './styles';

const product = {
  id: 1,
  name: 'Camiseta Hyperas Preta',
  brand: 'Quiksilver',
  image: 'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
  price: 49.99,
};

export default class ProductDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} showBackButton title="Detalhe do produto" />,
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  addToCart = () => {
    this.props.navigation.navigate('Cart');
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerProduct}>
          <Image style={styles.image} source={{ uri: product.image }} />

          <View style={styles.info}>
            <View style={styles.containerText}>
              <Text style={styles.name}>{product.name}asd</Text>
              <Text style={styles.brand}>{product.brand}</Text>
            </View>

            <View style={styles.containerPrice}>
              <Text style={styles.price}>R$ {product.price}</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={this.addToCart}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
