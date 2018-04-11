import { StackNavigator } from 'react-navigation';

import Cart from 'pages/cart';
import Main from 'pages/main';
import ProductDetail from 'pages/productDetail';

const Routes = StackNavigator({
  Main: { screen: Main },
  ProductDetail: { screen: ProductDetail },
  Cart: { screen: Cart },
});

export default Routes;
