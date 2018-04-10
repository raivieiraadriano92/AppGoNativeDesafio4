import { StackNavigator } from 'react-navigation';

import ProductDetail from 'pages/productDetail';
import Main from 'pages/main';

const Routes = StackNavigator({
  ProductDetail: { screen: ProductDetail },
  Main: { screen: Main },
});

export default Routes;
