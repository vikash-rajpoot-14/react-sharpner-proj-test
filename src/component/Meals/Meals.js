import React, { useContext } from 'react'
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
const Amount = styled.div`
margin : 5px 10px;
font-weight : bold;
`;
const Input = styled.input`
width : 45px;
height : 25px;
font-weight: bold;
border-radius : 5px;
text-align : center;
`;
const Button = styled.button`
margin: 5px 5px 5px 50px;
background-color: #520606;
padding: 5px 13px;
font-size: 14px;
color: white;
cursor: pointer;
font-weight: bold;
border-radius: 30px;
`;
function Meals() {
  const ctx = useContext(CartContext);

  const addHandler = (item) => {
    const quantity = document.getElementById(`${item.id}`).value;
    const ans = ctx.cartItem.findIndex(el => el.id === item.id);
    if (ans === -1) {
      const data = {
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        quantity: +quantity
      }
    ctx.setCartItem([...ctx.cartItem, data])
    } else {
      ctx.cartItem[ans].quantity += +quantity;
      ctx.setCartItem([...ctx.cartItem]);
    }

  }
  return (
    <Card>
      <List>
        {DUMMY_MEALS?.map((item, index) => <li key={item.id}>
          <Block>
            <Title>
              <Name>{item.name}</Name><DESC>{item.description}</DESC><Price>${item.price}</Price>
            </Title>
            <Description>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Amount>Amount</Amount>
                <Input type='number' id={item.id} min={1} max={5} defaultValue={1}  />
              </div>
              <Button onClick={(e) => addHandler(item)}>+ Add</Button>
            </Description>
          </Block>
          <hr />
        </li>)}
      </List>
    </Card>
  )
}

export default Meals
