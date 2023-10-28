import React from 'react'
import styled from 'styled-components'
import { DUMMY_MEALS } from '../../utils/dummydata'

const Card = styled.div`
margin : 80px auto;
width: 55rem;
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

function Items() {
  return (
    <Card>
      <List>
        {DUMMY_MEALS?.map(item=><li><Name>{item.name}</Name><DESC>{item.description}</DESC><Price>${item.price}</Price><hr/></li>)}
      </List>
    </Card>
  )
}

export default Items
