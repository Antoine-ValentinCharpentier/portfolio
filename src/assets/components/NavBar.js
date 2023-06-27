import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsMoon, BsSun } from 'react-icons/bs';

const NavBarStyles = styled.div`
    position: fixed;
    z-index: 100;
    top:0;
    left:0;
    width: 100%;
    padding 1rem 0;
    background: var(--first-bg);

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
            color: var(--text);
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
                a.active{
                    color: var(--first-bg);
                }
            }
        }
        
    }
    .crossCloseNav{
        display:none;
    }
    .burgerOpenNav, .dark-mode-btn{
        position:absolute;
        right: 2rem;
        top: 2rem;
        width:3rem;
        cursor:pointer;
        display:none;
        outline:none;
        *{
            pointer-events:none;
        }
    }
    .dark-mode-btn {
        left: 2rem;
        display: block;
        z-index: -1;
    }
    @media only screen and (max-width:1000px){
        padding:0; 

        .burgerOpenNav{
            display:block;
        }
        .navItems{
            transition: 0.3s ease transform;
            background-color: var(--second-bg);
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
 
export default function NavBar({isDarkMode, switchDarkMode}){
    const [showNav, SetShowNav] = useState(false);

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
    <>
        <NavBarStyles>
            <div className='burgerOpenNav' onClick={()=>SetShowNav(!showNav)} role="button"><BurgerOpenNavStyles/></div>    
            <ul className={showNav ? 'navItems' : 'navItems close'}>
                <div className='crossCloseNav' onClick={()=>SetShowNav(!showNav)} role="button" onKeyDown={()=>SetShowNav(!showNav)}><CloseCrossStyles/></div>
                <li><NavLink to="/" end onClick={()=>SetShowNav(!showNav)} role="button" onKeyDown={()=>SetShowNav(!showNav)}>Accueil</NavLink></li>
                <li><NavLink to="/projects" onClick={()=>SetShowNav(!showNav)} role="button" onKeyDown={()=>SetShowNav(!showNav)}>Mes projets</NavLink></li>
                <li><NavLink to="/contact" onClick={()=>SetShowNav(!showNav)} role="button" onKeyDown={()=>SetShowNav(!showNav)}>Me contacter</NavLink></li>
            </ul>
            <div className='dark-mode-btn' onClick={switchDarkMode}>
                { isDarkMode ?
                (<BsMoon/>) : 
                (<BsSun/>)
                }
            </div>   
        </NavBarStyles>
    </>
    )
}