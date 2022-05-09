import React from 'react'
import SocialMediaArrow from '../../images/social-media-arrow.svg';
import styled from 'styled-components';
import { AiOutlineLinkedin as Linkedin } from 'react-icons/ai';
import personalInfos from '../../data/PersonalInfoData';
import SmallButton from '../SmallButton'
import CV from '../../docs/cv.pdf'

const HeaderStyles = styled.div`
    .header {
        min-height: 100vh;
        width: 90%;
        margin:0 auto;
        text-align: center;
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;

        .header_right {
            width: 50%;
            border-left: 4px solid var(--white);

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
                        color: var(--white);
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
                    color:var(--white);
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
                border-right: 1rem solid var(--gray-2);
                border-bottom: 1rem solid var(--gray-2);
            }
            &::before{
                position:absolute;
                content:'';
                width:200px;
                height:200px;
                left:50px;
                top:50px;
                border-top: 1rem solid var(--gray-2);
                border-left: 1rem solid var(--gray-2);
            }
        }
    }

    @media only screen and (max-width: 500px) {
        .header{
            .header_left{
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
                    <p>Étudiant en première année du cycle ingénieur (BAC+3) en <span className='blue'>Informatique</span> et Systèmes d'Information à <span className='blue'>l’Université de Technologie de Troyes</span>. Je souhaiterais par la suite me spécialiser dans le domaine de <span className='blue'>l'innovation par le logiciel.</span></p>
                </div>
                <div className='header_buttons'>
                    <SmallButton big={true} btnLink={CV} btnLabel="Mon CV" outside={true}/>
                    <SmallButton big={true} btnLink="projects" btnLabel="Mes projets" btnBorder ={true}/>
                </div>
            </div>
            <div className='header_right'>
                <img src={personalInfos.profilePicture} alt="de profil"/>
            </div>
        </div>

    </HeaderStyles>
  )
}
