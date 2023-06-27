import React from 'react'
import styled from 'styled-components';
import TitleSection from '../TitleSection';

const TimeLineStyles = styled.div`
    .container {
        margin-top:10rem;
        
        display: flex;

        .timeline {
            width: 80%;
            margin: 0 auto;
            position: relative;
    
            ul{
                li {
                    padding: 20px;
                    background-color: var(--deep-dark);
                    color: var(--white);
    
                    .timeline-content{
                        h1{
                            font-weight: 500;
                            font-size: 2.5rem;
                            line-height: 1.2em;
                            margin-bottom: 1rem;
                        }
                        p {
                            font-size: 1.5em;
                            line-height: 2em;
                            font-weight: 300;
                        }
                        .date {
                            font-size: 1.2em;
                            font-weight: 300;
                            margin-bottom: 10px;
                            letter-spacing: 2px;
                            color: var(--blue);
                        }
                    }
                }
    
                li:last-child {
                    margin-bottom: 0;
                }
    
                li:hover .timeline-content h1 {
                    color: var(--blue);
                }
            }
        }
    }

    @media only screen and (max-width: 1000px){
        .container{
            margin-top:0rem;
        }
    }

    @media only screen and (min-width: 1000px) {
        
        .timeline:before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 100%;
            background-color: var(--gray-1);
        }

        .timeline ul{

            li{
                width: 50%;
                position: relative;
                margin-bottom: 50px;
            }

            li:nth-child(2n+1) {
                float: left;
                clear: right;
                transform: translateX(-30px);
                border-radius: 20px 0px 20px 20px;
            }

            li:nth-child(2n) {
                float: right;
                clear: left;
                transform: translateX(30px);
                border-radius: 0px 20px 20px 20px;
            }

            li::before { 
                content: "";
                position: absolute;
                height: 20px;
                width: 20px;
                border-radius: 50%;
                background-color: var(--white);
                top: 0px;
            }

            li:nth-child(2n+1)::before {
                transform: translate(50%, -50%);
                right: -30px;
            }

            li:nth-child(2n)::before {
                transform: translate(-50%, -50%);
                left: -30px;
            }

            li:hover::before {
                background-color: var(--blue);
            }

            .timeline-content .date {
                position: absolute;
                top: -30px;
            }
        } 
      }
`;

export default function TimeLine({datas, title}) {
  return (
    <div>
        <TitleSection title={title}/>
        <TimeLineStyles>
            <div className='container'>
                <div className='timeline'>
                    <ul>
                    {datas.map((data, index) => {
                        return (
                            <li key={`Timeline-${index}`}>
                                <div className="timeline-content">
                                    <h3 className="date">{data.date} | {data.city}</h3>
                                    <h1>{data.company}</h1>
                                    <p>{data.desc}</p>
                                </div>
                            </li>
                        );
                        })}
                    </ul>
                </div>
            </div>
        </TimeLineStyles>
    </div>
    
  )
}
