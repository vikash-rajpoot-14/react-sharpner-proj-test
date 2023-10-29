import React from 'react'
import styled from 'styled-components'
import Summary from './Summary'
import Items from './Items'

const Wrapper = styled.div`
color : white;
padding : 40px;
`

function Main() {
  return (
    <Wrapper>
      <Summary/>
      <Items/>
    </Wrapper>
  )
}

export default Main
