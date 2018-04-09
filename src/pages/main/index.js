import React from 'react';

import { View } from 'react-native';

import Header from 'components/Header';

import styles from './styles';

const Main = () => (
  <View style={styles.container} />
);

Main.navigationOptions = {
  header: <Header title="GoCommerce" />,
};

export default Main;
