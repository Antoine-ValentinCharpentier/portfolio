import React from 'react';
import Button from '../Button';
import InfoText from '../InfoText';
import styled from 'styled-components';

const ContactBannerStyles = styled.div`
    padding: 5rem 0;

    .contactBanner_wrapper {
        background-color: var(--deep-dark);
        border-radius: 12px;
        padding: 5rem 0rem;
        text-align: center;
    }

    .contactBanner_heading {
        font-size: 3.5rem;
        margin-bottom: 2rem;
        color:var(--blue);
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
                <InfoText>Vous avez une offre de stage à me proposer ?</InfoText>
                <h4 className='contactBanner_heading'>Contactez moi</h4>
                <Button btnLabel="Contact" btnLink="/contact"></Button>
            </div>
        </div>
    </ContactBannerStyles>
  )
}
