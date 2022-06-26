import React from 'react'
import Footer from '../Components/Footer'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import mobile from '../response'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display:flex;
  ${mobile({flexDirection: 'column',gap:'20px'})}
  align-items: center;
  justify-content:space-between;
  padding: 20px;
`
const TopButton = styled.button`
  font-weight: 600;
  background-color:${({ type }) => type === 'filled' ? 'black' : 'transparent'} ;
  color:${({ type }) => type === 'filled' ? 'white' : 'inherts'} ;
  cursor: pointer;
  padding:10px 15px;
`
const TopTexts = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
`
const TopText = styled.div`
 text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`
const Bottom = styled.div`
  display:flex;
  ${mobile({flexDirection: 'column'})}
`
const Info = styled.div`
  flex:3;
  ${mobile({ flex:1 })}
`
const Product = styled.div`
  display:flex;
`
const ProductDetail = styled.div`
  flex:2;
  display:flex;
  align-items: center;
  justify-content: start;
`
const Image = styled.img`
  width:200px;
`
const Detail = styled.div`
  display:flex;
  flex-direction: column;
  gap:20px;
  margin-left: 20px;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius:50%;
  background-color:${({ color }) => color};
`
const ProductSize = styled.div``
const PriceDetail = styled.div`
  flex:1;
  display:flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;
`
const ProductAmountContainer = styled.div`
  display:flex;
  align-items:center;
  gap:20px;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
  font-size:24px;
`
const ProductPrice = styled.div`
  font-size:28px;
  padding-right:10px;
`
const Hr = styled.hr`
  background-color:#eee;
  height:1px;
  border:none;
`

const Summary = styled.div`
  flex:1;
  border:2px solid #eee;
  border-radius:10px;
  padding: 20px 15px;
`
const SummaryTitle = styled.h1`
  font-size:32px;
  font-weight:300;
  margin-bottom:20px;
  letter-spacing:1px;
`
const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight:${({ type }) => type === 'total' && 500};
  font-size:${({ type }) => type === 'total' && '24px'};
  margin:30px 0;
`
const SummaryItemText = styled.div``
const SummaryItemPrice = styled.div``
const Button = styled.button`
 width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`
function Cart() {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                  <Detail>
                    <ProductName>
                      <b>Product:</b> JESSIE THUNDER SHOES
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 93813718293
                    </ProductId>
                    <ProductColor color="black" />
                    <ProductSize>
                      <b>Size:</b> 37.5
                    </ProductSize>
                  </Detail>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddIcon />
                    <ProductAmount>2</ProductAmount>
                    <RemoveIcon />
                  </ProductAmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                  <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                  <Detail>
                    <ProductName>
                      <b>Product:</b> HAKURA T-SHIRT
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 93813718293
                    </ProductId>
                    <ProductColor color="gray" />
                    <ProductSize>
                      <b>Size:</b> M
                    </ProductSize>
                  </Detail>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddIcon />
                    <ProductAmount>1</ProductAmount>
                    <RemoveIcon />
                  </ProductAmountContainer>
                  <ProductPrice>$ 20</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default Cart