import React from 'react';
import Button from '../Button';
import styled from 'styled-components';

const ContactBannerStyles = styled.div`
    padding: 5rem 0;

    .contactBanner_wrapper {
        background-color: var(--second-bg);
        border-radius: 12px;
        padding: 5rem 0rem;
        text-align: center;

        p{
            width:70%;
            max-width: 500px;
            margin: 0 auto;
            font-size: 1.8rem;
            line-height: 1.3em;
            text-align: center;
            text-justify: auto;
    
            @media only screen and (max-width: 1000px){
                font-size: 1.4 rem;
            }
        }

        .contactBanner_heading {
            font-size: 3.5rem;
            margin-bottom: 2rem;
            color:var(--blue);
        }
    }

    @media only screen and (max-width: 768px) {
        .contactBanner_heading {
            font-size: 2.8rem;
        }
    }

    
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
        <div className='container'>
            <div className='contactBanner_wrapper'>
                <p>Vous avez une offre de stage à me proposer ?</p>
                <h4 className='contactBanner_heading'>Contactez moi</h4>
                <Button btnLabel="Contact" btnLink="/contact" />
            </div>
        </div>
    </ContactBannerStyles>
  )
}
