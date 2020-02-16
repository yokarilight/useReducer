import React, { useContext } from 'react';
import ShopContext from '../context/shop-context';

const mainNavigation = props => {
  const contextTab = useContext(ShopContext);
  return(
    <header className="main-navigation">
      <nav>
        <ul>
          <li>
            <div
              onClick={()=>contextTab.changeTab('products')}
            >
              Products
            </div>
          </li>
          <li>
            <div
              onClick={()=>contextTab.changeTab('cart')}
            >
              Cart ({props.cartItemNumber})
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default mainNavigation;
