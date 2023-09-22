import React from 'react'
import TitleSection from '../TitleSection'
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
        background-color:var(--second-bg);
        border-radius:1rem;
        margin-bottom:4rem;
        .form_row{
            width:100%;
            display:flex;
            flex-direction:row;
            label{
                color:var(--text);
                padding:0.5rem;
                font-size: 2rem;
                line-height: 1.5em;
                width:50%;
                display:flex;
                flex-direction:column;
                
                input,textarea{
                    font-size: 1.5rem;
                    border: 2px solid blue;
                    background-color:var(--first-bg);
                    color:var(--text);
                    border:none;
                    border-radius:0.5rem;
                    padding:0.8rem;
                    outline:none;
                    border:1px solid var(--details);
                }

                input:focus,textarea:focus{
                    border:1px solid var(--blue);
                    color:var(--blue);
                }

                &:hover{
                    color:var(--blue);
                    transition: 0.3s ease;
                    input, textarea {
                        border:1px solid var(--blue);
                        color:var(--blue);
                    }
                }
            }

            &.sent{
                font-size: 1.2rem;
                background-color:var(--blue);
                border-radius:0.5rem;
                padding:0.7rem;
                margin-top:1rem;
                p{
                    color: var(--text);
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

    const {register, reset, formState:{isSubmitSuccessful}} = useForm();    

    return (
        <>
        <TitleSection title="Envie de me contacter ?"/>
        <SubtitleSection subtitle="Formulaire de contact"/>
        <FormStyles>
            <form handleSubmit={() => reset()} action={`https://formsubmit.co/${personalInfos.email}`} autoComplete="off" method="POST">
                <div className='form_row'>
                    <label htmlFor="last-name">
                        Nom
                        <input name="surname" type="text" id="last-name" placeholder='Votre nom' {...register("lastName", { 
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
                    <label htmlFor="first-name">
                        Prénom
                        <input name="firstname" type="text" id="first-name" placeholder='Votre Prénom' {...register("firstName", { maxLength: 26})}/>
                    </label>
                </div>
                <div className='form_row'>
                    <label htmlFor="email">
                        Email
                        <input name="email" type="email" id="email" placeholder='Votre email' {...register("email", { required: true })}/>
                    </label>
                    <label htmlFor="tel">
                        Numéro de téléphone
                        <input name="tel" type="tel" id="tel" placeholder='Votre numéro de téléphone' {...register("tel", { required: false, maxLength: 10,minLength:10})}/>
                    </label>
                </div> 
                <div className='form_row'>
                    <label htmlFor='msg'>
                        Message
                        <textarea name="msg" id='msg' placeholder='Votre message' rows='4' {...register("msg", { required: true })}/>
                    </label>
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
