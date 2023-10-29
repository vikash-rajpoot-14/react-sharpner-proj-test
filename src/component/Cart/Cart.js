import React from 'react'
import Modal from '../UI/Modal'
import styled from 'styled-components'

const Wrapper = styled.div`
position: absolute;
top: 20%;
left :29%;
background-color :white;
color : black;
border-radius : 10px;
font-weight: bold;
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
font-size : 20px;
margin:5px 25px 5px 0px;
`

const Price = styled.div`
display : flex ;
align-items : center;
justify-content : space-between;
color : #be5521;
`
const Block = styled.div`
display : flex;
width : 40vw;
justify-content: space-between;
align-items: center;
`;
const Title = styled.div`
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

const Button = styled.button`
margin: 5px;
padding: 2px 13px;
cursor: pointer;

font-size: 20px;
color: #520606;
border-radius: 5px;
`;
const Sum = styled.div`
display : flex ;
align-items : center;
justify-content : space-between;
`;

const Box = styled.p`
border: 1px solid grey;
border-radius: 5px;
padding:2px;
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
`;
const Button2 = styled.button`
margin: 5px;
padding: 2px 13px;
font-size: 17px;
color: #520606;
border-radius: 20px;
cursor: pointer;
`;

const dummyData = [{ id: "1", name: "susshi", price: 150, quantity: 1 }, { id: "2", name: "banana", price: 100, quantity: 3 }]


function Cart({ cart, setCart }) {

    const closehandler = () => {
        setCart(false)
    }

    return (
        <Modal>
            {cart && <Wrapper>
                <List>
                    {dummyData?.map((item, index) => <li key={index}>
                        <Block>
                            <Title>
                                <Name>{item.name}</Name><Price>${item.price}<Box>x {item.quantity}</Box></Price>
                            </Title>
                            <Description>
                                <Button >-</Button>
                                <Button >+</Button>
                            </Description>
                        </Block>
                        <hr />
                    </li>)}
                </List>
                <Desc>
                    <Description>
                        <Sum >
                            <Amount>Total Amount</Amount>
                            <div>$5500</div>
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

export default Cart
