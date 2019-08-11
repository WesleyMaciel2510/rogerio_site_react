import React from 'react';

import Header from '../Components/Header'

import { Container } from './styles';

export default function Layouts({children}) {
  return (
    <>
        <Header/>
            <Container>
                <div className="main-container">
                    {children}
                </div>
            </Container>
        <footer>aqui é um footer</footer>    
    </>
  );
}
