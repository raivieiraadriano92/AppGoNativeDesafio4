import React, { Component, Fragment } from 'react';

import { ActivityIndicator, FlatList, View } from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

import Header from 'components/Header';

import styles from './styles';
import Categories from './components/Categories';
import ItemProduct from './components/ItemProduct';

class Main extends Component {
  static navigationOptions = {
    header: <Header title="GoCommerce" />,
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    products: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })).isRequired,
      loading: PropTypes.bool,
    }).isRequired,
  };

  render() {
    return (
      <Fragment>
        <Categories />

        <View style={styles.container}>
          { this.props.products.loading
            ? <ActivityIndicator size={24} style={styles.loading} />
            : <FlatList
              columnWrapperStyle={styles.columnContainer}
              data={this.props.products.data}
              keyExtractor={item => String(item.id)}
              ListFooterComponent={<View style={styles.listHeaderFooter} />}
              ListHeaderComponent={<View style={styles.listHeaderFooter} />}
              numColumns={2}
              renderItem={item => <ItemProduct onPress={() => { this.props.navigation.navigate('ProductDetail'); }} product={item.item} />}
            /> }
        </View>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(Main);
