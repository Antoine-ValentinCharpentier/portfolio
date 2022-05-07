import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const NavBarStyles = styled.div`
    position: fixed;
    z-index: 100;
    top:0;
    left:0;
    width: 100%;
    padding 1rem 0;
    background: var(--dark-bg);

    .navItems{
        max-width : 1200px;
        margin: 0 auto;
        width: 90%;
        text-align:center;
        
        a{
            display:inline-block;
            font-family:'RobotoMono Regular';
            padding: 1rem 2rem;
            font-size: 2rem;
            color: var(--gray-1);
            outline: none;

            &.active{
                color: var(--blue);
            }
            
        }
        
        li{
            display: inline-block;
            border-radius: 8px;
            transition: 0.4s ease background-color;
            &:hover{
                background-color: var(--blue);
                a{
                    color: var(--gray-2);
                }
                a.active{
                    color: var(--white);
                }
            }
        }
        
    }
    .crossCloseNav{
        display:none;
    }
    .burgerOpenNav{
        position:absolute;
        right: 2rem;
        top: 1rem;
        width:3rem;
        cursor:pointer;
        display:none;
        outline:none;
        *{
            pointer-events:none;
        }
    }
    @media only screen and (max-width:1000px){
        padding:0; 

        .burgerOpenNav{
            display:block;
        }
        .navItems{
            transition: 0.3s ease transform;
            background-color: var(--deep-dark);
            padding: 2rem;
            width: 100%;
            border-radius: 12px;
            position:absolute;
            top:1rem;

            .crossCloseNav{
                display:block;
                width: 3rem;
                margin: 0 0 0 auto;
                cursor:pointer;
                
                *{
                    pointer-events:none;
                }
            }

            li{
                display:block;
                margin-bottom: 1rem;
            }
        }
        .close{
            transform : translateX(calc(-100%));
        }
        
    }
`;

const CloseCrossStyles = styled(AiOutlineCloseCircle)`
    fill: var(--blue);
    color: var(--blue);
`;

const BurgerOpenNavStyles = styled(GiHamburgerMenu)`
    fill: var(--blue);
    color: var(--blue);
`;
 
export default function NavBar(){
    const [showNav, SetShowNav] = useState(false);
    return (
    <>
        <NavBarStyles>
            <div className='burgerOpenNav' onClick={()=>SetShowNav(!showNav)} role="button" onKeyDown={()=>SetShowNav(!showNav)}><BurgerOpenNavStyles/></div>    
            <ul className={showNav ? 'navItems' : 'navItems close'}>
                <div className='crossCloseNav' onClick={()=>SetShowNav(!showNav)} role="button" onKeyDown={()=>SetShowNav(!showNav)}><CloseCrossStyles/></div>
                <li><NavLink to="/" exact onClick={()=>SetShowNav(!showNav)} role="button" onKeyDown={()=>SetShowNav(!showNav)}>Home</NavLink></li>
                <li><NavLink to="/projects" onClick={()=>SetShowNav(!showNav)} role="button" onKeyDown={()=>SetShowNav(!showNav)}>Projects</NavLink></li>
                <li><NavLink to="/contact" onClick={()=>SetShowNav(!showNav)} role="button" onKeyDown={()=>SetShowNav(!showNav)}>Contact</NavLink></li>
            </ul>
        </NavBarStyles>
    </>
    );
}