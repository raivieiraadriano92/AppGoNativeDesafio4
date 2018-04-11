import { StackNavigator } from 'react-navigation';

import Cart from 'pages/cart';
import Main from 'pages/main';
import ProductDetail from 'pages/productDetail';

const Routes = StackNavigator({
  Cart: { screen: Cart },
  Main: { screen: Main },
  ProductDetail: { screen: ProductDetail },
});

export default Routes;
