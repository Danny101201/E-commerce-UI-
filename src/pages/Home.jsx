import React from 'react'
import Silder from '../Components/Silder'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import NewLetter from '../Components/NewLetter'
import Footer from '../Components/Footer'
function Home() {
  return (
    <div style={{overflowY: 'hidden'}}>
      <Silder></Silder>
      <Categories></Categories>
      <Products></Products>
      <NewLetter></NewLetter>
      <Footer></Footer>
    </div>
  )
}

export default Home