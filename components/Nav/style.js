import styled from "styled-components";


export const NavContainer = styled.div`

    background: black;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 5rem;
    position: fixed;
    z-index: 100;
    width: 100%;
    margin-bottom: 10rem;
    justify-content: space-between;
    

    ul{
        list-style: none;
        display: flex;
        width: 100%;
        margin-left: 5rem;
        justify-content: space-around;
        max-width: 800px;
        align-items: center;

    @media (max-width: 890px){
        display: none;
    }
    
        li{
            font-size: 1.2rem;
            font-weight: 300;
        }
    }
    span{
        
        display: none;
    @media (max-width: 890px){
        display: block;
    }
    }


`


