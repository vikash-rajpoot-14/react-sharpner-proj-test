import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
width: 40rem;
margin : 80px auto;
background-color : grey;
padding :10px;
border-radius :10px;
font-weight : bold;
`
const H2 = styled.h2`
text-align : center;
font-size :30px;
margin : 5px;
padding :5px;
`

const P = styled.p`text-align : center;margin : 5px;padding :5px;`

function Summary() {
  return (
    <Card >
    <H2>Delicious Food, Delivered To You</H2>
    <P>
      Choose your favorite meal from our broad selection of available meals
      and enjoy a delicious lunch or dinner at home.
    </P>
    <P>
      All our meals are cooked with high-quality ingredients, just-in-time and
      of course by experienced chefs!
    </P>
  </Card>
  )
}

export default Summary
