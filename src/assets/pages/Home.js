import React from 'react'
import ContactBanner from '../components/ContactBanner'
import Footer from '../components/Footer'
import HeaderSection from '../components/HeaderSection'
import TimeLine from '../components/Timeline'
import educations from '../data/EducationData'
import works from '../data/WorkData'

export default function Home() {
  return (
    <div>
      <HeaderSection/>
      <TimeLine datas={educations} title="Mon parcours académique"/>
      <TimeLine datas={works} title="Mon expérience professionnelle"/>
      <ContactBanner/>
      <Footer/>
    </div>
  )
}
