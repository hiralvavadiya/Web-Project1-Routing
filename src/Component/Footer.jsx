import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
        <footer>
        <section className='container section1 spacer'>
          <div className='text'>
            <h1>Contact</h1>
            <p>We’re available for the new projects</p>
          </div>
          <div className='contact-details'>
            <div className='detail'>
              <div className='icon'>
                <IoCall />
              </div>
              <div>
                <h1>Call Us</h1>
                <p>+61 383 767 284</p>
              </div>
            </div>
            <div className='detail'>
              <div className='icon'>
                <FaLocationDot />
              </div>
              <div>
                <h1>Address</h1>
                <p>245 Quigley Blvd, Ste K</p>
              </div>
            </div>
            <div className='detail'>
              <div className='icon'>
                <MdOutlineMailOutline />
              </div>
              <div>
                <h1>Email</h1>
                <p>support@bestlooker.pro</p>
              </div>
            </div>
          </div>
        </section>
        <section className='container section2 spacer'>
          <div>
            <h1>Want to discuss your new project?</h1>
            <p>Proin fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Integer non dapibus diam, ac eleifend lectus. Duis placerat ex gravida nibh tristique ultricies eros lorem blandit.</p>
            <button>LET'S TALK</button>
          </div>
        </section>
        <section>
          <div className='details spacer'>
            <div className='icon'>
              <FaTwitter />
            </div>
            <div className='icon'>
              <FaFacebookF />   
            </div>
            <div className='icon'>
              <FaInstagram />
            </div>
            <div className='icon'>
              <FaBehance />
            </div>
            <div className='icon'>
              <FaPinterestP />
            </div>
          </div>
          <div className='footer-text'>
            <h3>
            © Rhythm 2023.
            </h3>
            <p>Made with love for great people.</p>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer;