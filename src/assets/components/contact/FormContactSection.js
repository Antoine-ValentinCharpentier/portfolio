import React, { useRef } from 'react'
import TitleSection from '../TitleSection'
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import personalInfos from '../../data/PersonalInfoData';
import SubtitleSection from '../SubtitleSection';
import SmallButton from '../SmallButton';
import { useForm } from 'react-hook-form';

const FormStyles = styled.div`
    width:60%;
    margin: 0 auto;
    form{
        padding:2rem;
        background-color:var(--gray-2);
        border-radius:1rem;
        margin-bottom:4rem;
        .form_row{
            width:100%;
            display:flex;
            flex-direction:row;
            label{
                color:var(--blue);
                padding:0.5rem;
                font-size: 2rem;
                line-height: 1.5em;
                width:50%;
                display:flex;
                flex-direction:column;
                
                input,textarea{
                    font-size: 1.5rem;
                    border: 2px solid blue;
                    background-color:var(--deep-dark);
                    color:var(--gray-1);
                    border:none;
                    border-radius:0.5rem;
                    padding:0.8rem;
                    outline:none;
                    border:1px solid var(--deep-dark);
                }

                input:focus,textarea:focus{
                    border:1px solid var(--white);
                    color:var(--white);
                }

                &:hover{
                    color:var(--white);
                    transition: 0.3s ease;
                }
            }

            &.sent{
                font-size: 1.2rem;
                background-color:var(--blue);
                border-radius:0.5rem;
                padding:0.7rem;
                margin-top:1rem;
                p{
                    color: var(--black);
                }
            }
        }
    }

    @media only screen and (max-width: 1000px){
        width:70%;
        form{
            .form_row{
                display:flex;
                flex-direction:column;
                label{
                    width:100%;
                }
            }
        }
    }

    
`;

export default function FormContactSection() {

    const {register, handleSubmit, reset, formState:{isSubmitSuccessful}} = useForm();

    const form = useRef();
    const sendEmail = (e) => {

        emailjs.sendForm(personalInfos.emailjs.emailServiceID, personalInfos.emailjs.emailTemplateID, form.current, personalInfos.emailjs.publicKey)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
          reset();
      };
    

    return (
        <>
        <TitleSection title="Envie de me contacter ?"/>
        <SubtitleSection subtitle="Formulaire de contact"/>
        <FormStyles>
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <div className='form_row'>
                    <label htmlFor="last-name">Nom
                        <input type="text" id="last-name" placeholder='Votre nom' {...register("lastName", { 
                            required: {
                                value: true,
                                message: "Ce champ est requis"
                            }, maxLength: {
                                value: 26,
                                message: "Ce champ ne doit pas dépasser 26 caractères."
                            }, minLength: {
                                value: 1,
                                message: "Ce champ ne doit pas dépasser 26 caractères."
                            }
                        })}/>
                    </label>
                    <label htmlFor="first-name">Prénom<input type="text" id="first-name" placeholder='Votre Prénom' {...register("firstName", { maxLength: 26})}/></label>
                </div>
                <div className='form_row'>
                    <label htmlFor="email">Email<input type="email" id="email" placeholder='Votre email' {...register("email", { required: true })}/></label>
                    <label htmlFor="tel">Numéro de téléphone<input type="tel" id="tel" placeholder='Votre numéro de téléphone' {...register("tel", { required: true, maxLength: 10,minLength:10})}/></label>
                </div> 
                <div className='form_row'>
                    <label htmlFor='msg'>Message<textarea id='msg' placeholder='Votre message' rows='4' {...register("msg", { required: true })}/></label>
                </div>   
                <div className='form_row'>
                    <SmallButton btnLabel="Envoyer" outside={false} form={true}/>
                </div>  
                {isSubmitSuccessful && 
                    <div className='form_row sent'>
                        <p>Le formulaire a bien été soumit.</p>
                    </div> 
                }
            </form>
        </FormStyles>
        </>
    )
}
