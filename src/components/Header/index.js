import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const Header = props => (
  <View style={styles.container}>
    { props.showBackButton === true
      ? (
        <TouchableOpacity
          onPress={() => { }}
          style={styles.backButton}
        >
          <Icon name="keyboard-arrow-left" size={24} style={styles.backIcon} />
        </TouchableOpacity>
      )
      : null }

    <View style={styles.containerTitle}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  </View>
);

Header.defaultProps = {
  showBackButton: false,
};

Header.propTypes = {
  showBackButton: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default Header;
