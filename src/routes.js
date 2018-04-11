import { StackNavigator } from 'react-navigation';

import ProductDetail from 'pages/productDetail';
import Main from 'pages/main';

const Routes = StackNavigator({
  Main: { screen: Main },
  ProductDetail: { screen: ProductDetail },
});

export default Routes;
