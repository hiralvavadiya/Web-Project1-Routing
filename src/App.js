// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Component/Home';
import Footer from './Component/Footer';
// import { IoIosArrowDown } from "react-icons/io";
// import { FaSearch } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// import { BsFillBagDashFill } from "react-icons/bs";
// import { FaHeart } from "react-icons/fa";
// import { FaCoffee } from "react-icons/fa";
// import { FaLightbulb } from "react-icons/fa6";
// import { MdCelebration } from "react-icons/md";
// import { RiComputerLine } from "react-icons/ri";
// import { FaRegFileAlt } from "react-icons/fa";
// import { GrTask } from "react-icons/gr";
// import { BsBricks } from "react-icons/bs";
// import { TbTargetArrow } from "react-icons/tb";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { IoCall } from "react-icons/io5";
// import { FaTwitter } from "react-icons/fa";
// import { FaBehance } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaPinterestP } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import ReactDOM from 'react-dom';
// import { Link } from '@mui/material';
// import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Elements from './Component/Elements';
import Blog from './Component/Blog';
import Pages from './Component/Pages';
import Portfolio from './Component/Portfolio';
import Shop from './Component/Shop';
import Header from './Component/Header';
// import ResponsiveAppBar from './ResponsiveAppBar';



function App() {
  return (
    <div>
      {/* <header  className='container'> */}
        {/* <div className='logo'>
          <img src={require('./image/logo.png')}/>
        </div>
        <div className='main-menu'>
          <div className='menu-text'>
            <ul>
              <li><><Link to='/'>Home</Link> <IoIosArrowDown className='icon-menu'/></></li>
              <li><><Link to='Pages'>Pages</Link> <IoIosArrowDown className='icon-menu'/></></li>
              <li><><Link to='Elements'>Elements</Link> <IoIosArrowDown className='icon-menu'/></></li>
              <li><><Link to='Portfolio'>Portfolio</Link> <IoIosArrowDown className='icon-menu'/></></li>
              <li><><Link to='Blog'>Blog</Link> <IoIosArrowDown className='icon-menu'/></></li>
              <li><><Link to='Shop'>Shop</Link><IoIosArrowDown className='icon-menu'/></></li>
             
            </ul>
          </div>
          <div className='side-menu'>
            <ul>
              <li><a href='#'><FaSearch className='icon-side'/> Search</a></li>
              <li><a href='#'><FaShoppingCart className='icon-side'/> Cart</a></li>
              <li><a href='#' className='english'>Eng <IoIosArrowDown className='icon-side-menu'/></a></li>
            </ul>
          </div>
        </div> */}
        {/* <div>
          <ResponsiveAppBar/>
        </div> */}
      {/* </header>  */}
      <Header></Header>

        <Routes>
          <Route path='/'  element={<Home />}></Route>
          <Route path='Elements'  element={<Elements />}></Route>
          <Route path='Blog'  element={<Blog />}></Route>
          <Route path='Shop'  element={<Shop />}></Route>
          <Route path='Pages'  element={<Pages />}></Route>
          <Route path='Portfolio'  element={<Portfolio />}></Route>
        </Routes>
      {/* <section className='section1'>
        <img src={require('./image/home-bg.jpeg')}/>
        <div className='img-text'>
          <p>The Design Makers</p>
          <samll>Extraordinary Design & Development Studio</samll>
        </div>
      </section>

      <section className='section2 container'>
        <div>
          <h1>Our mission is to make design simple and useful.</h1>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet conseur adipisci inerene maximus ligula sempe metuse pelente mattis. Maecenas volutpat, diam eni sagittise quame porta quam. Sed id dolor consectetur fermentum volutpat accumsan purus.</p>
        </div>
        <div>
          <p>Etiam sit amet fringilla lacus susantebe sit ullamcorper pulvinar neque porttitor. Integere lectus. Praesent sede nisi eleifend fermum orci amet, iaculis libero. Donec vel ultricies purus. Name dictum sem ipsumebe euliquam.</p>
        </div>
      </section>

      <section className='section3 container spacer'>
        <div className='cnt-box'>
          <div>
            <div className='number-count'>320</div>
            <div className='count-desc'>
              <BsFillBagDashFill />
              <span>Projects Done</span>
            </div>
          </div>
          <div>
            <div className='number-count'>150</div>
            <div className='count-desc'>
              <FaHeart />
              <span>Happy Clients</span>
            </div>
          </div>
          <div>
            <div className='number-count'>933</div>
            <div className='count-desc'>
              <FaCoffee />
              <span>Coffee Cups</span>
            </div>
          </div>
          <div>
            <div className='number-count'>975</div>
            <div className='count-desc'>
              <FaLightbulb />
              <span>Great Ideas</span>
            </div>
          </div>
        </div>
      </section>

      <hr color='grey'></hr>

      <section className='section4 container'>
        <div className='serice-text'>
          <h1>Our Services</h1>
          <p>We provide the best digital solutions.</p>
        </div>
        <div className='services'>
          <div className='row1'>
            <div>
              <MdCelebration className='servce-icon'/>
              <h3>Branding</h3>
              <p>Lorem ipsum dolor sit amet, rembe adipiscing elite. Inwege maximus ligula semper metusere pellentesque mattis. Maecenas volutpat, diam enime volutpa.</p>
              <a href='#'>Learn more</a>
            </div>
            <div>
              <RiComputerLine className='servce-icon'/>
              <h3>Web Design</h3>
              <p>Lorem ipsum dolor sit amet, rembe adipiscing elite. Inwege maximus ligula semper metusere pellentesque mattis. Maecenas volutpat, diam enime volutpa.</p>
              <a href='#'>Learn more</a>
            </div>
            <div>
              < FaRegFileAlt className='servce-icon'/>
              <h3>Product Design</h3>
              <p>Lorem ipsum dolor sit amet, rembe adipiscing elite. Inwege maximus ligula semper metusere pellentesque mattis. Maecenas volutpat, diam enime volutpa.</p>
              <a href='#'>Learn more</a>
            </div>
          </div>
          <div className='row2'>
            <div>
              <GrTask className='servce-icon'/>
              <h3>Research</h3>
              <p>Lorem ipsum dolor sit amet, rembe adipiscing elite. Inwege maximus ligula semper metusere pellentesque mattis. Maecenas volutpat, diam enime volutpa.</p>
              <a href='#'>Learn more</a>
            </div>
            <div>
              <BsBricks className='servce-icon'/>
              <h3>Development</h3>
              <p>Lorem ipsum dolor sit amet, rembe adipiscing elite. Inwege maximus ligula semper metusere pellentesque mattis. Maecenas volutpat, diam enime volutpa.</p>
              <a href='#'>Learn more</a>
            </div>
            <div>
              <TbTargetArrow className='servce-icon'/>
              <h3>Production</h3>
              <p>Lorem ipsum dolor sit amet, rembe adipiscing elite. Inwege maximus ligula semper metusere pellentesque mattis. Maecenas volutpat, diam enime volutpa.</p>
              <a href='#'>Learn more</a>
            </div>
          </div>
        </div>
      </section>

      <section className='section5 spacer'>
      <div className='container'>
        <div className='img-text'>
          <div className='img1'>
            <img src={require('./image/service1.jpeg')} />
          </div>
          <div className='img2'>
            <img src={require('./image/service2.jpeg')} className='img2'/>
          </div>
          <div className='text'>
            <h1>Looking for exclusive digital services?</h1>
            <p>Proin fringilla augue at maximus vestibulum. Proin fringilla augue at maximus vestibulum. Proin fringilla augue at maximus vestibulum. Proin fringilla augue at maximus vestibulum.</p>
            <button>view services</button>
          </div>
        </div>
      </div>
      </section>
      


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
      </footer> */}
      <Footer></Footer>
      
    </div>
  );
}

export default App;
