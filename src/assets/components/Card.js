import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import styled from 'styled-components';

const ItemStyles = styled.div`
    width: 100%;
    background-color:var(--second-bg);
    border-radius: 1rem;
    margin:1rem;
    border:3px solid var(--second-bg);
    div{
        margin:0 auto;
        &.logo{
            padding-top:2rem;
            width:20%;
        }
        &.body{
            text-align:center;
            font-size:1.5rem;
            padding-bottom:2rem;
        }
    }

    &:hover{
        background:var(--second-bg);
        border:3px solid var(--blue);
        
        div.body{
            p,span,a,li{
                color:var(--blue);
            }
        }
        div.logo{
            svg{
                fill:var(--blue);
                color:var(--blue);
            }
            
        }
        
    }

    @media only screen and (max-width:1000px){
        width:70%;
        margin:1rem auto;
    }
    @media only screen and (max-width: 500px){
        width:100%;
    }
`;

export default function ContactItem({icon = <AiOutlineHome/>, desc = <></>}) {
  return (
    <ItemStyles>
        <div className='logo'>
            {icon}
        </div>
        <div className='body'>
            {desc}
        </div>
    </ItemStyles>
  )
}
