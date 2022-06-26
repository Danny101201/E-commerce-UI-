import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { sliderItems } from '../data'
import mobile from '../response.js'
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  background-color: coral;
  position: relative;
  overflow: hidden;
  ${mobile({display:'none'})};
`
const Arrow = styled.div`
 width:50px;
 height: 50px;
 background-color:#fff7f7;
 border-radius:50%;
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 top: 0;
 bottom: 0;
 margin: auto;
 left:${props => props.direction === 'left' && '10px'};
 right:${props => props.direction === 'right' && '10px'};
 cursor: pointer;
 opacity:0.8;
 z-index:99999;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw) ;
  transition: 0.5s;
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display:flex;
  align-items: center;
  background-color:#${props => props.bg};
`
const ImageContainer = styled.div`
  flex:1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
    user-select: none;
   pointer-events: none;
`
const Image = styled.img`
  height: 80%;

`
const InfoContainer = styled.div`
  flex:1;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
function Silder() {
  const [slideIndex, setIndex] = useState(2)
  const handleSlide = (direction) => {
    if (direction === 'left') {
      setIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1)
    }
    if (direction === 'right') {
      setIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleSlide('left')}>
        <ArrowBack />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(sliderItem => (
          <Slide bg={sliderItem.bg} key={sliderItem.id}>
            <ImageContainer>
              <Image src={sliderItem.img}></Image>
            </ImageContainer>
            <InfoContainer>
              <Title>{sliderItem.title}</Title>
              <Desc>{sliderItem.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleSlide('right')}>
        <ArrowForward />
      </Arrow>
    </Container>
  )
}

export default Silder