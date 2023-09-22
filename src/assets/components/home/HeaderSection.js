import React from 'react'
import styled from 'styled-components';
import personalInfos from '../../data/PersonalInfoData';
import SmallButton from '../SmallButton'
import CV from '../../docs/cv.pdf'
import { BsMouse, BsGithub } from 'react-icons/bs' 
import { AiOutlineArrowDown, AiOutlineLinkedin } from 'react-icons/ai'

const HeaderStyles = styled.div`
    @keyframes blink {
        0% {
        opacity: 1;
        }
        50% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    }

    .header {
        position: relative;
        min-height: 100vh;
        padding:0 5%;
        text-align: center;
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;

        .header_right {
            width: 50%;
            border-left: 4px solid var(--details);

            img{
                border: 4px solid var(--blue);
                border-radius:2rem;
                max-width:50%;
            }
        }

        .header_left {
            width: 50%;

            .header_heading {
                font-size: 2rem;
                
                span {
                    display: inline-block;
                    width: 80%;
    
                    &.header_name {
                        font-family: 'Montserrat SemiBold';
                        font-size: 4rem;
                        color: var(--header-title);
                    }
                    &.header_name:before{
                        content: 'Antoine-Valentin ';
                    }
                    &.header_name:after{
                        content: 'Charpentier';
                        color:var(--blue);
                    }
                }
            }

            .header_desc{
                width:80%;
                margin:0 auto;

                p{
                    margin-top:3rem;
                    font-size:2rem;
                    color:var(--text);
                    white-space: pre-line;
                    text-align: justify;
                    line-height: 2;

                    span.blue{
                        color:var(--blue);
                    }
                }
            }

            .header_buttons{
                margin:3rem auto;
                width:80%;
                display:flex;
            }
        }

        .header_bottom {
            position: absolute;
            bottom: 20px;
            display: flex;
            align-items: center;
            font-size: 20px;
            p {
                padding: 0 5px;
            }
            .blink-icon {
                animation: blink 1.5s infinite ease-in-out;
            }
        }

        .header_social_network {
            position: absolute;
            left: 20px;
            font-size: 15px;
            svg {
                padding: 10px 0;
            }
            .social_hover:hover{
                fill: var(--blue);
            }
        }
    }    
   
    @media only screen and (max-width: 1700px) {
        .header .header_right img{
            max-width:60%;
        }

    }

    @media only screen and (max-width: 1400px) {
        .header .header_right img{
            max-width:70%;
        }
    }
    
    @media only screen and (max-width: 1000px) {
        .header{
            flex-direction:column-reverse;

            .header_right{
                display:none;
            }

            .header_left{
                width:90%;

                .header_desc{    
                    p{
                        font-size:1.8rem;
                    }
                }
            }

            &::after{
                position:absolute;
                content:'';
                width:200px;
                height:200px;
                right:50px;
                bottom:50px;
                border-right: 1rem solid var(--details);
                border-bottom: 1rem solid var(--details);
            }
            &::before{
                position:absolute;
                content:'';
                width:200px;
                height:200px;
                left:50px;
                top:50px;
                border-top: 1rem solid var(--details);
                border-left: 1rem solid var(--details);
            }
        }
    }

    @media only screen and (max-width: 500px) {
        .header{
            .header_left{
                .header_heading{
                    font-size:1.5rem;
                    .header_name::before, .header_name::after{
                        font-size:2.5rem;
                    }
                }
                .header_desc{    
                    p{
                        font-size:1.5rem;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 400px) {
        .header::before{
            display:none;
        }
        .header::after{
            display:none;
        }
    }
`;


export default function HeaderSection2() {
  return (
    <HeaderStyles>
        <div className='header'>
            <div className='header_left'>
                <h1 className='header_heading'>
                    <span>Bonjour, je suis</span>
                    <span className='header_name'></span>
                </h1>
                <div className='header_desc'>
                    <p>Étudiant en dernière année de cycle ingénieur (BAC+5) en <span className='blue'>Informatique</span> et Systèmes d'Information et spécialisé en <span className='blue'>Valorisation des données</span> et des connaissances à <span className='blue'>l'Université de Technologie de Troyes</span>.</p>
                </div>
                <div className='header_buttons'>
                    <SmallButton big={true} btnLink={CV} btnLabel="Mon CV" outside={true}/>
                    <SmallButton big={true} btnLink="projects" btnLabel="Mes projets" btnBorder ={true}/>
                </div>
            </div>
            <div className='header_right'>
                <img src={personalInfos.profilePicture} alt="de profil"/>
            </div>
            <div className='header_bottom'>
                <BsMouse/>
                <p>Défiler</p>
                <AiOutlineArrowDown className='blink-icon'/>
            </div>
            <div className='header_social_network'>
                <a href="https://github.com/Antoine-ValentinCharpentier" target="_blank" rel="noopener noreferrer">
                    <BsGithub className='social_hover'/>
                </a>
                <a href="https://www.linkedin.com/in/antoine-valentin-charpentier/" target="_blank" rel="noopener noreferrer">
                    <AiOutlineLinkedin className='social_hover'/>
                </a>
            </div>
        </div>

    </HeaderStyles>
  )
}
