import React, {useState } from 'react';

import Header from './components/Layout/Header'
import Cart from './components/Cart/Cart'
import MainPage from './components/Map/MainPage';
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] =   useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      { cartIsShown && <Cart onClose={hideCartHandler} />}
     <Header onShowCart={showCartHandler}/>
     <main>
      <MainPage />
     </main>
    </CartProvider>
  );
}

export default App;