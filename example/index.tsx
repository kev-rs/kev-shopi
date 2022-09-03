import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCart } from '../.'

const product = {
  id: '1',
  title: 'Product',
  // url: './coffee-mug.png'
}

const App = () => {
  return (
    <ProductCart
      product={product}
      initialValue={{
          count: 4,
          maxCount: 10,
      }}
    >
      {
          ({reset, increaseBy, maxCount, isMaxReached, count, product}) => (
              <>
                  <ProductCart.Img />
                  <ProductCart.Title />
                  <ProductCart.Btns />
              </>
          )
      }
    </ProductCart>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
