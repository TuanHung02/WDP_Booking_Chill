import React from 'react'
import './Footer.scss'
import {SiYourtraveldottv} from 'react-icons/si'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="secContainer container grid">

          <div className="logoDiv">

            <div className="footerLogo">
              <a href="#" className='logo flex'>
                <h1 className='font-bold text-2xl flex'>
                  <SiYourtraveldottv className='icon'/>
                  Booking Chill
                </h1>
              </a>
            </div>

            <div className="socials flex">
              <ImFacebook className='icon'/>
              <BsTwitter className='icon'/>
              <AiFillInstagram className='icon'/>
            </div>

          </div>

          <div className="footerLinks">
            <span className="linkTitle">
              Information
            </span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">
              Helpful Links
            </span>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Travel & Condition</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">
              Contact Us
            </span>
           <span className="phone">+99999999999</span>
           <span className="email">bookingchill@gmail.com</span>
          </div>

        </div>      
    </div>
  )
}

export default Footer
