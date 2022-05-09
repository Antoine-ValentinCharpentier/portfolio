import React from 'react'
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

export default function LanguageItem({language}) {
    const {img, label} = language;
  
    return (
    <ItemStyles>
        <div className='logo'>
            <img src={img} alt='' />
        </div>
        <div className='body'>
            <p>{label}</p>
        </div>
    </ItemStyles>
  )
}
