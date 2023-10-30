import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import styled from 'styled-components'
import CartContext from '../CartContext';

const Wrapper = styled.div`
position: absolute;
top: 20%;
left :29%;
min-width:60vw;
background-color :white;
box-shadow : 100px 100px 400px black,-100px -100px 400px black,100px -100px 400px black,-100px 100px 400px black;
color : black;
border-radius : 10px;
font-weight: bold;
opacity : 1;
`

const Desc = styled.div`
margin : 0 5px 0 0;
`;
const List = styled.ul`
  list-style : none;
  margin : 5px;
  padding : 5px;
`

const Name = styled.p`
font-weight : bold;
font-size : 15px;
width : 30vw;
margin:5px 25px 5px 0px;
`

const Price = styled.div`
display : flex ;
align-items : center;
justify-content : space-between;
color : #be5521;
`
const Block = styled.div`
width : 60vw;
align-items: center;
`;
const Title = styled.div`
display : flex;
justify-content: space-between;
align-items: center;
margin : 5px;
padding : 5px;`;
const Description = styled.div`
margin : 5px;
padding : 5px;
`;
const Amount = styled.div`
margin : 5px 10px;
font-weight : bold;
`;

// const Button = styled.button`
// margin: 5px;
// padding: 2px 13px;
// cursor: pointer;
// &:hover {
//     background-color: #520606;
//     color: white
// }
// box-shadow: 0 4px #999;
// &:active {
//   background-color:#520606 ;
//   color: white;
//   box-shadow: 0 0px #999;
//   transform: translateY(4px);
// }

// font-size: 20px;
// color: #520606;
// border-radius: 5px;
// `;
const Sum = styled.div`
display : flex ;
align-items : center;
justify-content : space-between;
`;

const Box = styled.p`
border: 1px solid grey;
border-radius: 5px;
padding:2px;
height:fit-content;
color: #be5521;
`;
const Close = styled.div`
display : flex ;
justify-content :flex-end;
align-items : center;
`;
const Button1 = styled.button`
margin: 5px;
padding: 2px 13px;
font-size: 17px;
color: white;
border-radius: 20px;
background-color :#520606;
cursor: pointer;
&:hover {
    background-color: #520606;
    color: white
}
box-shadow: 0 4px #999;
&:active {
  background-color:#520606 ;
  color: white;
  box-shadow: 0 0px #999;
  transform: translateY(4px);
}
`;
const Button2 = styled.button`
margin: 5px;
padding: 2px 13px;
font-size: 17px;
color: #520606;
border-radius: 20px;
cursor: pointer;
&:hover {
    background-color: #520606;
    color: white
}
box-shadow: 0 4px #999;
&:active {
  background-color:#520606 ;
  color: white;
  box-shadow: 0 0px #999;
  transform: translateY(4px);
}
`;



function Cart({ cart, setCart }) {

   const ctx = useContext(CartContext);
    
    const closehandler = () => {
        setCart(!cart)
    }

    let total = 0
    ctx.cartItem.forEach(item=>{
        total += item.price * (item['stock']['L']+item['stock']['M']+item['stock']['S'])
    })
   
   

    return (
        <Modal>
            {!!cart && <Wrapper >
                <List>
                    {ctx.cartItem?.map((item) => <li key={item.id}>
                        <Block>
                            <Title>
                                <Name>{item.name}</Name><Box>{item['stock']['L']} L</Box><Box>{item['stock']['M']} M</Box><Box>{item['stock']['S']} S</Box><Price>${item.price*(item['stock']['L']+item['stock']['M']+item['stock']['S'])}</Price>
                            </Title>
                        </Block>
                        <hr />
                    </li>)}
                </List>
                <Desc>
                    <Description>
                        <Sum >
                            <Amount>Total Amount</Amount>
                            <div>${total}</div>
                        </Sum>
                        <Close>
                            <Button2 onClick={closehandler}>Close</Button2>
                            <Button1 >Order</Button1>
                        </Close>
                    </Description>
                </Desc>
            </Wrapper>}
        </Modal>
    )
}

export default Cart;
