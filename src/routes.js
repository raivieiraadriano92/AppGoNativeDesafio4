import { StackNavigator, TabNavigator } from 'react-navigation';

import Cart from 'pages/cart';
import Main from 'pages/main';
import ProductDetail from 'pages/productDetail';

import { colors } from 'styles';

const Product = StackNavigator({
  Main: { screen: Main },
  ProductDetail: { screen: ProductDetail },
});

const Routes = TabNavigator(
  {
    Product: { screen: Product },
    Cart: { screen: Cart },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      indicatorStyle: {
        opacity: 0,
      },
      showIcon: true,
      showLabel: false,
      activeTintColor: colors.pink,
      inactiveTintColor: colors.grey,
      style: {
        backgroundColor: colors.white,
      },
    },
  },
);

export default Routes;
