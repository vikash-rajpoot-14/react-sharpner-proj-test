import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { DUMMY_MEALS } from '../../utils/dummydata'
import CartContext from '../CartContext.js'

const Card = styled.div`
margin :  auto;
width: 70vw;
color : black;
background-color : white;
padding :20px;
border-radius :20px;
z-index :1
`
const List = styled.ul`
  list-style : none;
`

const Name = styled.p`
font-weight : bold;
margin:5px 20px
`
const DESC = styled.p`
font-style : italic;
margin:5px 20px
`
const Price = styled.p`
color : #de930a;
margin:5px 20px
`
const Block = styled.div`
display : flex;
justify-content: space-between;
align-items: center;
`;
const Title = styled.div``;
const Description = styled.div`
margin : 5px;
padding : 5px;
`;

const Button = styled.button`
margin: 5px 5px 5px 10px;
background-color: white;
padding: 5px 13px;
font-size: 14px;
color: #520606;
cursor: pointer;
font-weight: bold;
border-radius: 30px;
box-shadow: 0 4px #999;
&:hover {
  background-color:#520606 ;
  color: white
}
&:active {
  background-color:#520606 ;
  color: white;
  box-shadow: 0 0px #999;
  transform: translateY(4px);
}
`;
function Meals() {
  const ctx = useContext(CartContext);
  
  const [collection,setCollection] = useState(DUMMY_MEALS)


  const addHandler = (item,size) => {
    const idx = collection.findIndex(el => el.id === item.id);
    if(collection[idx]['stock'][size]===0) return ;
    collection[idx]['stock'][size] = collection[idx]['stock'][size] - 1;
    setCollection([...collection])
    const ans = ctx.cartItem.findIndex(el => el.id === item.id);
    if (ans === -1) {
      const data = {
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        stock:{
          L: 0,
          M: 0,
          S: 0,
        }
      }
      data.stock[size] =data.stock[size] + 1;
      ctx.setCartItem([...ctx.cartItem,data]);
    } else {
      ctx.cartItem[ans].stock[size] += 1;
      ctx.setCartItem([...ctx.cartItem]);
    }
  
  }
  return (
    <Card>
      <List>
        {collection?.map((item, index) => <li key={item.id}>
          <Block>
            <Title>
              <Name>{item.name}</Name><DESC>{item.description}</DESC><Price>${item.price}</Price>
            </Title>
            <Description>
              <Button onClick={(e) => addHandler(item,"L")}>{item.stock.L} L</Button>
              <Button onClick={(e) => addHandler(item,"M")}>{item.stock.M} M</Button>
              <Button onClick={(e) => addHandler(item,"S")}>{item.stock.S} S</Button>
            </Description>
          </Block>
          <hr />
        </li>)}
      </List>
    </Card>
  )
}

export default Meals
