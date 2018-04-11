import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const Header = ({ showBackButton, title, navigation }) => (
  <View style={styles.container}>
    { showBackButton === true
      ? (
        <TouchableOpacity
          onPress={() => { navigation.goBack(); }}
          style={styles.backButton}
        >
          <Icon name="keyboard-arrow-left" size={24} style={styles.backIcon} />
        </TouchableOpacity>
      )
      : null }

    <View style={styles.containerTitle}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

Header.defaultProps = {
  showBackButton: false,
};

Header.propTypes = {
  showBackButton: PropTypes.bool,
  title: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Header;
