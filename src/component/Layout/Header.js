import React from 'react'
import styled from 'styled-components';
import { BiCartAlt } from 'react-icons/bi';

const Wrapper = styled.div`
position: sticky;
top: 0;
  display: flex;
  justify-content: space-around;
  padding : 10px;
  background-color :#890707;
  align-items : center;
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
border-radius : 50px
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
const cartvalue = 0;

function Header() {
    return (
        <Wrapper>
            <Head>React Meals</Head>
            <Cart><BiCartAlt style={{ margin: "5px", width: "20px", height: "20px" }} /><Text>Your Cart</Text> <Value>{cartvalue}</Value></Cart>
        </Wrapper>
    )
}

export default Header