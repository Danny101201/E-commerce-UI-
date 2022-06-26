import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useParams } from 'react-router-dom'
import mobile from '../response.js'
const Container = styled.div`
  height:60px;
  ${mobile({ height: 'auto' })}
`
const Wrapper = styled.div`
  display:flex;
  align-items:center;
  ${mobile({ flexDirection: 'column' })}
  justify-content:space-between;
  padding:10px 20px;
`
const Left = styled.div`
  flex-basis:33.3%;
  display: flex;
  align-items:center;
  justify-content:flex-start;
`
const Input = styled.input`
 border:none;
 outline:none;
  ${mobile({ width: '200px' })}
`

const Language = styled.span`
  font-size:13px;
  cursor:pointer;
  ${mobile({ display: 'none' })}
`
const SearchContainer = styled.div`
  border:1px solid lightgrey;
  display: flex;
  align-items:center;
  margin-left: 20px;
  padding: 5px 0;
`
const Center = styled.div`
  flex-basis:33.3%;
  text-align:center;
  ${mobile({ display: 'none' })}
`
const Logo = styled.div`
  font-weight:bold;
  font-size:32px;
`
const Right = styled.div`
  flex-basis:33.3%;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  gap:25px;
  ${mobile({ margin: '10px 0' })}
`
const MenuItem = styled(Link)`
  font-size:14px;
  cursor:pointer;
  text-decoration:none;
`
function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: 'grey', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center><Logo>Logo.</Logo></Center>
        <Right>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/product">Product</MenuItem>
          <MenuItem to="/register">Register</MenuItem>
          <MenuItem to="/sign-in">Sign In</MenuItem>
          <MenuItem to="/cart">
            <Badge badgeContent={10} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar