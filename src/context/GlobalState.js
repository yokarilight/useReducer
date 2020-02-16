import React, { useReducer } from 'react';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import MainNavigation from '../components/MainNavigation';
import { Provider } from './shop-context';
import { shopReducer, tabReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers';

const GlobalState = props => {
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
  const [tabName, tabDispatch] = useReducer(tabReducer, { tab: 'products' })
  
  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };
  
  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };
  const changeTab = tabName => {
    tabDispatch({type: tabName});
  };
  const products = [
    { id: 'p1', title: '商品1', price: 1000 },
    { id: 'p2', title: '商品2', price: 800 },
    { id: 'p3', title: '商品3', price: 5000 },
    { id: 'p4', title: '商品4', price: 2500 },
    { id: 'p5', title: '商品5', price: 1999 },
  ];
  const contextValue = {
    products: products,
    cart: cartState.cart,
    addProductToCart: addProductToCart,
    removeProductFromCart: removeProductFromCart,
    tabName: tabName.tab,
    changeTab: changeTab,
  };

  return (
    <Provider value={contextValue}>
      <MainNavigation
        cartItemNumber={cartState.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <Products/>
      <Cart/>
    </Provider>
  );
};

export default GlobalState;
