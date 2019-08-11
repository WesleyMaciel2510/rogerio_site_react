import React from 'react';

import rogerio from '../../assets/rogerio.jpg'
import { Container } from './styles';

export default function Avatar() {
  return (
   <Container>
       <img src={rogerio} alt="Rogerio orioli"/> 
   </Container>
  );
}
