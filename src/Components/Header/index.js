import React,{ useState } from 'react';
import Menu from '../Menu';
import { Container } from './styles';
import Social from '../Social';


export default function Header() {

  
  return (
      <Container  >
          <Menu/>
          <Social/>
      </Container>

    );
}
