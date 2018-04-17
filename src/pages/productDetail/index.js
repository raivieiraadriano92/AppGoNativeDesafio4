import React, { Component } from 'react';

import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { PropTypes } from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

import Header from 'components/Header';

import styles from './styles';

class ProductDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} showBackButton title="Detalhe do produto" />,
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    product: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };

  addToCart = () => {
    this.props.navigation.navigate('Cart');
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerProduct}>
          <Image style={styles.image} source={{ uri: this.props.product.image }} />

          <View style={styles.info}>
            <View style={styles.containerText}>
              <Text style={styles.name}>{this.props.product.name}asd</Text>
              <Text style={styles.brand}>{this.props.product.brand}</Text>
            </View>

            <View style={styles.containerPrice}>
              <Text style={styles.price}>R$ {this.props.product.price}</Text>
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

const mapStateToProps = state => ({
  product: state.products.productSelected,
});
export default connect(mapStateToProps)(ProductDetail);
