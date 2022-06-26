import React from 'react'
import NewLetter from '../Components/NewLetter'
import Footer from "../Components/Footer"
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import mobile from '../response'

const Wrapper = styled.div`
  padding: 50px;
  display:flex;
  ${mobile({flexDirection: 'column',padding:0})}
`
const CSSVariables = styled.div`
  --gap:40px;
`
const ImageContainer = styled.div`
 flex:1; 
`
const Image = styled.img`
  width:100%;
  height:90vh;
  ${mobile({ height:'50vh'})}
  object-fit:cover;
`
const InfContainer = styled.div`
  flex:1;
  padding: 0 50px;
  ${mobile({padding:'50px'})}
`
const Title = styled.h1`
  font-weight:200;
`
const Text = styled.p`
  margin:20px 0;
  font-size:20px;

`
const Price = styled.span`
  font-weight: 100;
  font-size:40px;
`
const FilterContainer = styled.div`
  display:flex;
  margin:40px 0 ;
  gap:var(--gap);
`
const Filter = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
`
const FilterText = styled.h1`
  font-weight:200;
  line-height:0;
`
const FilterColor = styled.div`
  width: 25px;
  height:25px;
  background-color:${({ color }) => color};
  border-radius:50%;
  cursor:pointer;
`
const FilterSize = styled.select`
  padding: 10px;
  margin-left: 10px;
`
const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 50%;
`
const AmountContainer = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  justify-content:center;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius:10px;
  border:1px solid teal;
  display:grid;
  place-items:center;
`
const AddButton = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
    background-color: #f8f4f4;
  }
`
function Product() {
  return (
    <CSSVariables>
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfContainer>
          <Title>Denim Jumpsuit</Title>
          <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro commodi similique dicta modi expedita eius voluptas quos iste neque sunt, vitae soluta eum enim consectetur consequatur praesentium, rerum, in odio?</Text>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterText>Color</FilterText>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterText>Size</FilterText>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <AddButton>ADD TO CART</AddButton>
          </AddContainer>
        </InfContainer>
      </Wrapper>
      <NewLetter />
      <Footer />
    </CSSVariables>
  )
}

export default Product