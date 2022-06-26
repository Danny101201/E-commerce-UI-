import React, { useEffect } from 'react'
import styled,{css} from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion"
import mobile from '../response'
const Container = styled.div`
  display:flex;
  padding: 20px;
  justify-content:space-between;
 ${mobile({ flexDirection: 'column',padding:0,gap:'10px' })}

`
function Categories() {
  const animation = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0
  })
  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration: 2, bounce: 0.3
        }
      })
    }
    if (!inView) {
      animation.start({
        x: '-100vw',
        transition: {
          type: 'spring', duration: 2, bounce: 0.3
        }
      })
    }
  }, [inView])
  return (

    <Container ref={ref}>
      {
        categories.map(item => (
          <CategoryItem item={item} key={item.id} animation={animation}></CategoryItem>
        ))
      }
    </Container>

  )
}

export default Categories