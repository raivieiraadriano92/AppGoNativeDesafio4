import React, { Component } from 'react';

import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CategoriesActions } from 'store/ducks/categories';

import styles from './styles';

class Categories extends Component {
  static propTypes = {
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })).isRequired,
      categoryIdSelected: PropTypes.number,
    }).isRequired,
    getCategoriesRequest: PropTypes.func.isRequired,
    selectCategory: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCategoriesRequest();
  }

  render() {
    return (
      <View style={styles.categories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {this.props.categories.data.map(category => (
            <TouchableOpacity
              key={category.id}
              onPress={() => { this.props.selectCategory(category.id); }}
              style={[styles.buttonCategory, (category.id === this.props.categories.categoryIdSelected ? styles.buttonCategoryActive : {})]}
            >
              <Text style={styles.buttonCategoryText}>{category.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
