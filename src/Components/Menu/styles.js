import styled from 'styled-components';

export const Container = styled.div`
    button {
        border : none;
        border-right : 1px solid #000;
        background : transparent ;
        cursor: pointer;
        padding : 20px;
        &:focus {
            outline : none;
        }
    }
    nav {
        position : fixed;
        transition : all 0.5s ;
        background : #fff;
        height : 100%;
        width : 250px;
        margin-top: 1px;
        &.hide {
            visibility : hidden;
            left : -300px;
            opacity : 0;

        }
        &.show {
            visibility : visible;
            left : 0;
            opacity : 1;
        }
        ul {
            li {
                border-bottom : 1px solid #000;
                a {
                    padding: 20px;
                    text-transform : uppercase;
                    font-weight : 700;
                    text-decoration : none;
                    color :  #000;
                    transition: all 0.5s;
                    width: 100%;
                    height: 100%;
                    display : block;
                    &:hover {
                        transform: translate(28px, 0px);
                    }
                }
            }
        }
    }
  
`;
