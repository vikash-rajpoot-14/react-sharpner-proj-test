import React, { useContext } from 'react'
import styled from 'styled-components';
import { BiCartAlt } from 'react-icons/bi';
import CartContext from '../CartContext';

const Wrapper = styled.div`
position: sticky;
top: 0px;
  display: flex;
  justify-content: space-around;
  padding : 10px;
  background-color :#890707;
  align-items : center;
  z-index: 1000;
`;

const Head = styled.div`
   font-size : 30px;
   font-weight : bold;
   color :white
`;
const Cart = styled.div`
display:flex;
justify-content: center;
align-items : center;
padding : 2px 20px;
background-color :#520606;
color :white;
border-radius : 50px;
cursor : pointer;
`;

const Value = styled.div`
background-color :#890707;
margin : 3px 10px;
padding : 2px 15px;
border-radius : 50px
`

const Text = styled.div`
font-size : 15px;
font-weight : bold;
`

function Header({cart,setCart}) {
   const ctx = useContext(CartContext);
   let cartvalue = ctx.cartItem.reduce((a,cv)=>cv.quantity+a,0 )

    const handleClick = ()=>{
        setCart(true)
    }
    return (
        <Wrapper>
            <Head>React Meals</Head>
            <Cart onClick={handleClick}><BiCartAlt style={{ margin: "5px", width: "20px", height: "20px" }} /><Text>Your Cart</Text> <Value>{cartvalue}</Value></Cart>
        </Wrapper>
    )
}

export default Header
