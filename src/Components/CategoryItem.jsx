import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import mobile from '../response'

const Container = styled(motion.div)`
  flex:1;
  height:70vh ;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  ${mobile({height:"40vh"})}
  object-Fit: cover;
`
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  color:white;
  margin-bottom: 20px;
`
const Button = styled.button`
  border:none;
  outline: none;
  padding: 10px;
  background-color:white;
  cursor: pointer;
  color:gray;
  font-weight: 400;

`
function CategoryItem({ item, animation }) {
  return (
    <Container animate={animation}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem