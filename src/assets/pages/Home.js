import React from 'react'
import ContactBanner from '../components/home/ContactBanner'
import Footer from '../components/Footer'
import HeaderSection from '../components/home/HeaderSection'
import TimeLine from '../components/home/Timeline'
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
