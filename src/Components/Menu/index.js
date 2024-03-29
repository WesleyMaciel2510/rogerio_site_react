import React , { useState } from 'react';

import { Container } from './styles';


import { MdClose, MdMenu } from 'react-icons/md'

import Avatar from '../Avatar';

export default function Menu() {

const [ close , setOpen ] = useState(true);



  return (
    <Container >
         <button onClick={() => setOpen(close !== true )}>
            { close !== true ? <MdMenu  color="#000" size={30}/>  : <MdClose color="#000" size={30}/> }
         </button>
         <nav className={close !== true ? 'hide' : 'show'}>
			 <Avatar/>
            <ul>
							<li>
									<a href="/">HOME</a>
							</li>
							<li>
									<a href="/">About Me</a>
							</li>
							<li>
									<a href="/">Portifolio</a>
							</li>

							<li>
									<a href="/">Labs</a>
							</li>
							<li>
									<a href="/">Contact</a>
							</li>
            </ul>
        </nav>   
    </Container>
  );
}
