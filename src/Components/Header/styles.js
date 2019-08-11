import styled from 'styled-components';

export const Container = styled.div`
    position : fixed;
    display : flex;
    border :  1px solid #000;  
    align-items: center;
    justify-content: space-between;
    background: #fff;
    width: 100%;
    top : 0;
    transition: all 0.5s;
    &.true {
        position : relative;
        display : block;

    }

`;
