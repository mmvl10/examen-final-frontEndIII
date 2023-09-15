import React from 'react'
import imgDH from '../assets/DH.png'
import imgFace from '../assets/ico-facebook.png'
import imgInsta from '../assets/ico-instagram.png'
import imgWaths from '../assets/ico-whatsapp.png'
import imgTiktok from '../assets/ico-tiktok.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='logo'>
        <p>Powered by</p>
        <img src={imgDH} alt='DH-logo' />
      </div>
      <div className='redes'>
        <span><img src={imgFace} alt='DH-face' /></span>
        <span><img src={imgInsta} alt='DH-insta' /></span>
        <span><img src={imgWaths} alt='DH-waths' /></span>
        <span><img src={imgTiktok} alt='DH-tiktok' /></span>

      </div>
    </footer>
  )
}

export default Footer

