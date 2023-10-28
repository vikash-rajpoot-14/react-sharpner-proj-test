import React from 'react'
import styled from 'styled-components'
import Summary from './Summary'

const Wrapper = styled.div`
 height:100vh;
color : white
`

function Main() {
  return (
    <Wrapper>
      <Summary/>
    </Wrapper>
  )
}

export default Main
