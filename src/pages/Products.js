import React, { useContext } from 'react';
import ShopContext from '../context/shop-context';

const ProductsPage = props => {
  const context_p = useContext(ShopContext);

  return (
        <React.Fragment>
          <main className={`products ${context_p.tabName==='products' ? '' : 'disabled'}`}>
            <ul>
              {context_p.products.map(product => (
                <li key={product.id}>
                  <div>
                    <strong>{product.title}</strong> - ${product.price}
                  </div>
                  <div>
                    <button
                      onClick={context_p.addProductToCart.bind(this, product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </React.Fragment>
  );
};

export default ProductsPage;
