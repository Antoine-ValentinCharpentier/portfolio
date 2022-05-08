import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import styled from 'styled-components';

const ItemStyles = styled.div`
    width:100%;
    background-color:var(--deep-dark);
    border-radius: 1rem;
    margin:1rem;
    div{

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

    @media only screen and (max-width:1000px){
        width:60%;
        margin:1rem auto;
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
