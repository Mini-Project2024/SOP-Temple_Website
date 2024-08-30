import React from 'react'
import SliderPage from './SliderPage'
import images from "../images/images"
import HistoryPage from './HistoryPage'
import GalleryPage from './GalleryPage'
import ContactPage from './ContactPage'
import LandingPage from './LandingPage'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <div>
      <Header/>
      <LandingPage/>
      {/* <SliderPage>
        {images.map((image, index) => (
          <img 
            className='w-full h-60 object-cover' 
            key={index} 
            src={image.imgURL} 
            alt={image.imgAlt} 
          />
        ))}
      </SliderPage> */}
      <HistoryPage id="history" />
      <GalleryPage id="gallery" />
      <ContactPage id="contact" />
      <Footer/>
    </div>
  )
}

export default Index
