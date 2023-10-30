import styled from "styled-components";
import Header from "./component/Layout/Header";
import myImage from "./assets/lidye-1Shk_PkNkNw-unsplash.jpg"
import Main from "./component/Layout/Main";
import Cart from "./component/Cart/Cart";
import { useState } from "react";
import "./index.css"
import CartContext from "./component/CartContext";
const Wrapper = styled.div`
background-image: url(${myImage});
background-repeat: no-repeat;
background-size: 100% 100% ;
background-attachment: scroll;
background-position:center;
min-height: 100vh;
margin : 0px;
`

function App() {
  const [cart,setCart] = useState(false);
  const [cartItem,setCartItem] = useState([])

  return (
    <CartContext.Provider value={{cartItem :cartItem,setCartItem:setCartItem}}>
    <Wrapper>
      <Cart cart={cart} setCart={setCart}/>
      <Header cart={cart} setCart={setCart} />
      <Main />
    </Wrapper>
    </CartContext.Provider>
  );
}

export default App;
