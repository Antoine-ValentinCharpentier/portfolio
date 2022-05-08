import React from 'react'
import Footer from '../components/Footer'
import FormContactSection from '../components/contact/FormContactSection'
import ContactInfosSection from '../components/contact/ContactInfosSection'

export default function Contact() {
  return (
    <div>
      <FormContactSection/>
      <ContactInfosSection/>
      <Footer/>
    </div>
  )
}
