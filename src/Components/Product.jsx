import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ZoomOutOutlinedIcon from '@mui/icons-material/ZoomOutOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styled from 'styled-components'
import mobile from '../response'
const Info = styled.div`
  opacity: 0;
  position: absolute;
  inset: 0;
  z-index:3;
  background-color:rgba(0,0,0,0.2) ;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ;
  cursor: pointer;
`
const Container = styled.div`
  flex:1;
  margin: 5px;
  min-width:280px;
  height: 350px;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color:#f5f5f5;
  position: relative;
  &:hover ${Info}{
    opacity:1;
  }
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  background-color: white;
  border-radius:50%;
`
const Img = styled.img`
  height: 75%;
  z-index:2;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color:white;
  border-radius:50%;
  margin: 10px;
  display:grid;
  place-items: center;
  transition: all 0.5s;
  &:hover{
    transform: scale(1.1) ;
    background-color:#e9f5f5;
  }
`
function Product({ item }) {
  return (
    <Container>
      <Circle />
      <Img src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <ZoomOutOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product