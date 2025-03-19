import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

function Header() {
  return (
    <>

      <header className='a  text-white py-2'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <a> <FaPhoneAlt />
                +977-1-5191103</a>
              <a > <MdEmail /> info@vajraadventure.com</a>
            </div>
            <div className="col-lg-6 text-end">
              <a className='p-3 text-white'><FaFacebook /></a>
              <a className='p-3 text-white'><FaInstagramSquare />
              </a>
              <a className='p-3 text-white'><IoLogoLinkedin /></a>
              <a className='p-3 text-white'><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </header>

       <nav className="navbar navbar-expand-lg d shadow">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img className='b' src="https://vajraadventure.com/img/front-logo.png" alt="" />
                    </a>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Trekking</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/themes">Themes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " href="blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link c" href="/book">Book Now</Link>
                            </li>
                        </ul>
                    </div>
                </div>
    </nav>  



    </>
  )
}

export default Header

