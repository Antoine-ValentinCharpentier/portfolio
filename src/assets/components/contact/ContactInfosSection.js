import React from 'react'
import SubtitleSection from '../SubtitleSection'
import ContactItem from '../Card'
import { AiTwotonePhone, AiOutlineMail } from 'react-icons/ai';
import { MdOutlinePlace } from 'react-icons/md';
import personalInfos from '../../data/PersonalInfoData'
import styled from 'styled-components';

const ContactInfosSectionStyles = styled.div`
    width:70%;
    display:flex;
    flex-direction:row;
    margin:3rem auto;
    *{
        margin:0 auto;
    }

    @media only screen and (max-width:1000px){
        flex-direction:column;
        *{
            margin: 1rem auto;
        }
    }
`;

export default function ContactInfosSection() {
  return (
    <>
        <SubtitleSection subtitle="Me contacter autrement"/>
            <ContactInfosSectionStyles>
            <ContactItem icon={<AiTwotonePhone/>} desc={<p>{personalInfos.phone}</p>}/>
            <ContactItem icon={<AiOutlineMail/>} desc={<p>{personalInfos.email}</p>}/>
            <ContactItem icon={<MdOutlinePlace/>} desc={<p>{personalInfos.place}</p>}/>
        </ContactInfosSectionStyles>
    </>
    
  )
}
