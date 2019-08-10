import React from 'react';
import { Container } from './styles';
import { IoLogoGithub , IoLogoLinkedin , IoLogoTwitter , IoLogoCodepen , IoLogoWhatsapp } from 'react-icons/io'

export default function Social() {
    const social = [
        {
            "rede" : <IoLogoGithub size={30}/>,
             "url"  : '/',
             'title' : 'GitHub'  
        },
        {
            "rede" : <IoLogoLinkedin size={30}/>,
             "url"  : '/',
             'title' : 'LinkedIn'  
        },

        {
            "rede" : < IoLogoTwitter size={30}/>,
             "url"  : '/',
             'title' : 'Twitter'  
        },

        {
            "rede" : <IoLogoCodepen size={30}/>,
             "url"  : '/',
             'title' : 'CodePen'  
        },
        {
            "rede" : <IoLogoWhatsapp size={30}/>,
             "url"  : '/',
             'title' : 'Whatsapp' 
        }


    ]
  return (
    <Container>
        <nav>
            <ul>
                {social.map(links => <li key={links.title}> <a href={links.url} target="blank" title={links.title}>{links.rede}</a></li>)} 
            </ul>
        </nav>

    </Container>
  );
}
