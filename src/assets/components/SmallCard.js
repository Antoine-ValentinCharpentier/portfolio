import React from 'react'
import styled from 'styled-components';

const ItemStyles = styled.span`
    width:80%;
    margin: 0 auto;
    font-size: 1.5em;

    margin-top:2rem;
    
    background-color:var(--deep-dark);
    border-radius: 0.5em;

    padding: 0.75em 1em;
    text-align:center;
    border:3px solid var(--deep-dark);

    img{
        max-height:1.5em;
        object-fit: contain;
        margin-right:0.5em;
    }

    &:hover{
        background:var(--dark-bg);
        border:3px solid var(--blue);
        transform:scale(1.1);
        transition:0.5s ease;
        color:var(--blue);
    }
`;
export default function SmallCard({icon="", desc="test"}) {
  return (
    <ItemStyles>
        {icon !== "" && <img src={icon} alt=""/>}{desc}
    </ItemStyles>
  )
}
