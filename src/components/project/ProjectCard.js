import React from 'react'
import styled from 'styled-components';
import SmallButton from '../SmallButton'


const CardStyles = styled.div`
    
    display: flex;
    flex-direction: ${props => props.gauche ? "row" : "row-reverse"};
    margin: 2rem auto;
    width: 100%;
    border-radius:1rem;
    overflow:hidden;

    .img{
        border-radius:1rem;
        width:40%;
        max-width:40%;
        transition: 0.5s;
        overflow:hidden;

        img{
            width:100%;
            filter: grayscale(1);
            min-height:100%;  
            min-width:100%;   
            transition: 0.5s;
        }
    }

    .body{
        background: var(--second-bg);
        border-radius:1rem;
        padding:1rem;
        width:60%;
        padding:2rem;
        margin-right:${props => props.gauche ? "2rem" : "0rem"};
        margin-left:${props => props.gauche ? "0rem" : "2rem"};;


        .title{
            h2{
                margin:0 auto;
                text-align:center;
                color: var(--blue);
                font-size: 2em;
                transition: 0.3s;
                font-weight: lighter;
            }
        }

        .desc, .techno{
            margin-top:1rem;
            p{
                color:var(--text);
                font-size:1.5em;
                display:inline-block;
            }
        }

        .techno:before{
            content:"Technologies : ";
            color:var(--text);
            font-size:1.5em;
        }

        .button{
            margin-top:0.5rem;
            width:100%;
            display: flex;
        }
        
    }
    
    &:hover{
        .img{
            img{
                transition: 0.5s ease;
                transform:scale(1.2);
                filter: grayscale(0);
            }
        }
        .body{
            .title{
                h2{
                    color:var(--header-title);
                }
            } 
            
        }
        
    }

    @media only screen and (max-width: 1000px) {


        .img{
            display: none;
        }
        .body{
            width:100%;
            margin-left:0;
            margin-right:0;
        }
        
    }
    
`;


export default function ProjectCard({index, project}) {

    const {title, desc, image, git="", youtube="", techno=[]} = project;
    return (
        <CardStyles gauche={index%2}>
            <div className='body'>
                <div className='title'>
                    <h2>{title}</h2>
                </div>
                <div className='desc'>
                    <p>{desc}</p>
                </div>
                {techno.length !== 0 && 
                    <div className='techno'>
                        <p>{techno.join(", ")}</p>
                    </div>
                }
                {(git !== "" || youtube !== "") && 
                    <div className='button'>
                        {git !== "" &&
                            <SmallButton btnLink={git} btnLabel="Github" btnBorder ={false} outside={true}/>
                        }
                        {youtube !== "" &&
                            <SmallButton btnLink={youtube} btnLabel="Youtube" btnBorder ={true} outside={true}/>
                        }
                    </div>
                }
            </div>
            <div className='img'>
                <img src={image} alt='' />
            </div>
        </CardStyles>
        
    )
}
