import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  color:#fff;
  text-align: center;
  padding:10px;
  background: teal;
`
function Announcement() {
  return (
    <Container>
      Super Detail ! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement