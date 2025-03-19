import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

function Footer() {
  return (
    <>
      <footer className='x py-4'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img className='u' src="https://vajraadventure.com/img/front-logo.png" alt="" />
              <div className="py-5">
                <a className='p-2 text-white'><FaFacebook /></a>
                <a className=' p-2 text-white'><FaInstagramSquare />
                </a>
                <a className='p-2 text-white'><IoLogoLinkedin /></a>
                <a className='p-2 text-white'><FaWhatsapp /></a>
              </div>
            </div>
            <div className="col-lg-3">
              <h2 className='q'>Useful Links</h2>
              <p className='text-light'>Home</p>
              <p className='text-light'> About Us </p>
              <p className='text-light'>All Packages </p>
              <p className='text-light'>Blog</p>
            </div>
            <div className="col-lg-3">
              <h2 className='q'>Help and Support</h2>
              <p className='text-light'>Contact Us</p>
              <p className='text-light'>FAQ</p>
              <p className='text-light'>Help Center</p>
              <p className='text-light'>Privacy Policy</p>
              <p className='text-light'>Terms and Conditions</p>
            </div>
            <div className="col-lg-3">
              <h2 className='q'>Contact Us</h2>
             <a className='o'><MdEmail />info@vajraadventure.com</a>
             <br />
             <a className='o'> <FaPhoneAlt /> +9779851039785</a>
             <br />
            <a className='o'> <IoMdHome />
            Aasahi Homes Complex, Bharma Kumari Marga,  Thamel 
               Kathmandu,Nepal</a> 
            </div>

          </div>
        </div>
      </footer>

      <section className='s py-2'>
      <div className="container">
        <div className="row">
          <div className="col-lgl-6 text-center text-white">
          © Copyrights 2025 All rights reserved. Vajra Adventure Pvt. Ltd.
          </div>
          <div className="col-lgl-6"></div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Footer

