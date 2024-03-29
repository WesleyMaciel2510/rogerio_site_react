import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500i&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Merriweather:700&display=swap');
    * {
        margin : 0 ;
        padding : 0;
        box-sizing : border-box;
        outline : 0;
    }
    html ,body , #root {
        height : 100% ;
    }
     body {
         font :  14px 'Roboto' , sans-serif;
         background: #ecf1f8;
         color:#333;
         -webkit-font-smoohing : antialiasead !important;
     }
     h1, h2, h3 {
        font-family: 'Merriweather', serif;
     }
     ul {
         list-style: none;
     }
`