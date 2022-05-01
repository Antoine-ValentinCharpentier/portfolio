import React from 'react'
import HeaderImg from '../images/header-img.png';
import Button from './Button';
import HeaderSectionInfo from './HeaderSectionInfo';
import SocialMediaArrow from '../images/social-media-arrow.svg';
import ScrollDownArrow from '../images/scroll-down-arrow.svg';
import styled from 'styled-components';
import { AiOutlineLinkedin as Linkedin } from 'react-icons/ai';




const HeaderStyles = styled.div`
    .header {
        height: 100vh;
        min-height: 1000px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .header_heading {
        font-size: 2rem;
        margin-bottom: -3rem;
        position: relative;
        
        span {
            display: inline-block;
            width: 100%;
        }
    }
    .header_name {
        font-family: 'Montserrat SemiBold';
        font-size: 5rem;
        color: var(--white);
    }
    .header_name:before{
        content: 'Antoine-Valentin ';
    }
    .header_name:after{
        content: 'Charpentier';
        color:var(--blue);
    }
    .header_img {
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--gray-1);
    }
    .header_info {
        margin-top: -18rem;
    }
    .header_social,
    .header_scrollDown {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: absolute;
        bottom: 20px;
        width: 50px;
    }
    .header_social {
        left: 50px;
    }
    .header_scrollDown {
        right: 50px;
    }
    .header_social_indicator,
    .header_scrollDown {
        width: 50px;
        p {
            font-size: 1.6rem;
            transform: translateY(-70px) rotate(90deg);
            letter-spacing: 0.7rem;
            text-transform: uppercase;
            color:var(--blue);
        }
        img {
            max-height: 45px;
            width: 16px;
            margin: 0 auto;
            object-fit: contain;
        }
    }
    .header_scrollDown {
        img {
            max-height: 70px;
        }
    }
   
    .header_social_icon {
        ul {
            li {
                margin-bottom: 1rem;
                a {
                    color:var(--blue);
                    width:3rem;
                    display: inline-block;
                    transform: rotate(-90deg);
                    margin-bottom: 2rem;
                }
            }
        }
    }
    
    @media only screen and (max-width: 1000px) {
        .header {
            min-height: 750px;
        }
        .header_heading {
            font-size: 1.4rem;
            margin-bottom: 5rem;
            
            .header_name {
                font-size: 4.5rem;
            }
        }
        .header_img {
            height: 300px;
        }
        .header_info {
            margin-top: 5rem;
        }
        .header_social {
            width: 10px;
            
            .header_social_indicator {
                width: 20px;
                p {
                    font-size: 1.2rem;
                }
                img {
                    max-height: 22px;
                }
            }
            
            .header_social_icon {
                ul {
                    li {
                        a {
                            width:2rem;
                            margin-bottom: 1rem;
                        }
                    }
                }
            }
        }
        .header_scrollDown {
            right: 10;
            width: 20px;
            gap: 1rem;
            
            p {
                font-size: 1.3rem;
            }
        }
    }
`;

const LinkedinStyles = styled(Linkedin)`
    fill: var(--blue);
    color: var(--blue);
    transform: rotate(-270deg);
`;

export default function HeaderSection() {
  return (
    <HeaderStyles>
        <div className='header'>
            <div className='container'>
                <h1 className='header_heading'>
                    <span>Bonjour, je suis</span>
                    <span className='header_name'></span>
                </h1>
                <div className='header_img'>
                    <img src={HeaderImg} alt="de profil"/>
                </div>
                <div className='header_info'>
                    <HeaderSectionInfo>Étudiant en première année du cycle ingénieur (BAC+3) en Informatique et Systèmes d'Information à l’Université de Technologie de Troyes.</HeaderSectionInfo>
                    <Button btnLink="/projects" btnLabel="Mes projets" btnBorder={false}></Button>
                </div>
                <div className='header_social'>
                    <div className='header_social_indicator'>
                        <p>Suivez-moi</p>
                        <img src={SocialMediaArrow} alt="flèche réseaux sociaux"/>
                    </div>
                    <div className='header_social_icon' >
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/antoine-valentin-charpentier/" target="_blank" rel="noreferrer"><LinkedinStyles/></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='header_scrollDown'>
                    <p>Défiler</p>
                    <img src={ScrollDownArrow} alt="flèche défilement vers le bas"/>
                </div>
            </div>
        </div>
    </HeaderStyles>
  )
}
