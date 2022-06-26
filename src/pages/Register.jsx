import React from 'react'
import styled from 'styled-components'
import mobile from '../response'
const Container = styled.div`
  width: 100%;
  height: 90vh;

  background: linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.4)), url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
  ;
  background-size:cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  padding:20px;
  width: 40%;
  ${mobile({ width: '80%' })}

  background: white;
  box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
`
const Title = styled.h1`
  font-weight:300 ;
  font-size:24px;
`
const Form = styled.form`
  display:flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex:1;
  min-width:40%;
  margin:20px 10px 0 0;
  padding: 10px;
`
const Agreement = styled.span`
font-size:10px;
margin:20px 0  ;
`
const Button = styled.button`
  width:40%;
  border:none;
  outline: none;
  color:white;
  background:teal;
  cursor: pointer;
  padding:15px 20px;
`
function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register