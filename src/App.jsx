import './App.css'
import { IoIosMenu } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { CgQuote } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import {  FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";






import{ useRef, useEffect } from "react"


function App() {
  useEffect(() => {

    AOS.init({
      duration:1500,
      once:false
    })
  }, [])
  

  const showRef = useRef(null)

  const showNav = () => {
    showRef.current.classList.toggle('responsive');
  }
  return (
    <>
    <section id='home'>
          <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li className='logo'><a href="#home">King's</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

        <nav className='drop-down'>
          <label htmlFor="" className="logo">King's Clip</label>
      <ul ref={showRef}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <IoIosMenu onClick={showNav} className='menu'/>
    </nav>

      <div data-aos = "fade-up" className='home-intro'>
        <h4>Styled in shadows. Defined by precision</h4>
        <h1>Precision Meets Personality</h1>
        <button>View Our Gallery</button>
      </div>
      <div data-aos = "fade-right" className='socials'>
        <div className='home-social-info'> 
          <div className="icon-div">
                    <FaPhoneAlt className='icons' />

            </div>   
            <div className='content'>
            <i>Phone Number</i>
             <p> 09113097228</p>

              </div>    
         </div>
                 <div className='home-social-info'>        
          <div className="icon-div">
                    <FaLocationDot className='icons' />

            </div>  
            <div className='content'>
               <i>Address</i>
               <p> 61,Abimbola Awoliyi Estate</p>

              </div>     
         </div>
        <div className='home-social-info'>        
          <div className="icon-div">
                    <FaClock className='icons' />

            </div>  
            <div className='content'>
                <i>Working Days</i>
                <p> Mon-Fri 8am-10pm</p>

              </div>     
         </div>
               <div className='more'>
        <h4>More About Us</h4>
        <a className='down-link' href="#about">        <FaArrowDown className='down' />
</a>


      </div>


      </div>


    </section>

    <section id="about">
      <div className="about-grid">
        <div data-aos = "fade-up" className='about-text'>
          <h3>About Kings Clip</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolores. Cum, tempora tempore expedita beatae, placeat velit enim nostrum quae maiores inventore hic laboriosam minima quas iste sequi? Est, omnis.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem sunt veritatis sapiente voluptatem. Est in maiores repellat harum aut itaque, eaque, deleniti repudiandae dolorem voluptate quaerat modi, animi <ratione className="lorem">cia deleniti ullam dicta, quibusdam, sunt odit perspiciatis fugiat ipsum repellendus ve!</ratione>
          </p>

          <button>Book an Appointment</button>
        </div>

        <div data-aos = "fade-up" className='about-img'>
          <img src="about-img.jpg" alt="" />


        </div>
      </div>
    </section>

    <section id="services">
      <div className="services-intro">
        <h3 data-aos = "fade-up">Barber Services</h3>
             </div>
        <div className='services-grid'>
          <div className='services-info'>
            <div className='info'>
            <h4>Men's Haircut</h4>
            <p>Mens Hair cut of varying length and styles</p>
            </div>
            <div className='price'>
              <p>from 2000#</p>
            </div>

          </div>
                    <div className='services-info'>
            <div className='info'>
            <h4>Men's Haircut</h4>
            <p>Mens Hair cut of varying length and styles</p>
            </div>
            <div className='price'>
              <p>from 2000#</p>
            </div>

          </div>
          <div className='services-info'>
            <div className='info'>
            <h4>Men's Haircut</h4>
            <p>Mens Hair cut of varying length and styles</p>
            </div>
            <div className='price'>
              <p>from 2000#</p>
            </div>

          </div>
          <div className='services-info'>
            <div className='info'>
            <h4>Men's Haircut</h4>
            <p>Mens Hair cut of varying length and styles</p>
            </div>
            <div className='price'>
              <p>from 2000#</p>
            </div>

          </div>
          <div className='services-info'>
            <div className='info'>
            <h4>Men's Haircut</h4>
            <p>Mens Hair cut of varying length and styles</p>
            </div>
            <div className='price'>
              <p>from 2000#</p>
            </div>

          </div>
          <div className='services-info'>
            <div className='info'>
            <h4>Men's Haircut</h4>
            <p>Mens Hair cut of varying length and styles</p>
            </div>
            <div className='price'>
              <p>from 2000#</p>
            </div>

          </div>
          <div className='services-info'>
            <div className='info'>
            <h4>Men's Haircut</h4>
            <p>Mens Hair cut of varying length and styles</p>
            </div>
            <div className='price'>
              <p>from 2000#</p>
            </div>

          </div>
          <div className='services-info'>
            <div className='info'>
            <h4>Men's Haircut</h4>
            <p>Mens Hair cut of varying length and styles</p>
            </div>
            <div className='price'>
              <p>from 2000#</p>
            </div>

          </div>


        </div>
        <div className='service-button'>
          <button>Online Booking</button>

        </div>
 
    </section>

    <section id="gallery">
      <div className='gallery-intro'>
        <h3>Our Gallery</h3>
      </div>

      <div className='gallery-grid'>
        <div data-aos = "fade-up"><img className='gallery-img' src="gallery1.jpg" alt="" /></div>
                <div data-aos = "fade-up"><img className='gallery-img' src="gallery2.jpg" alt="" /></div>
        <div data-aos = "fade-up"><img className='gallery-img' src="gallery3.jpg" alt="" /></div>
        <div data-aos = "fade-up"><img className='gallery-img' src="gallery4.jpg" alt="" /></div>
        <div data-aos = "fade-up"><img className='gallery-img' src="gallery5.jpg" alt="" /></div>
        <div data-aos = "fade-up"><img className='gallery-img' src="gallery6.jpg" alt="" /></div>


      </div>

      <div data-aos = "fade-up" className='gallery-button'>
        <button>Tap To See More</button>

      </div>
    </section>

    <section id="testimonial">
      <div className='testimonial-intro'>
        <h3 data-aos = "fade-up">Rating From Visitors</h3>
      </div>

      <div className='testimonial-grid'>
        <div data-aos = "fade-up" className="testimonial-card">
          <CgQuote className='quote' />

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iusto tempora porro, quia odio nostrum obcaecati molestiae placeat aliquam ratione laborum vel non magni sunt quas reprehenderit cum incidunt eum.</p>

          <p className='star'>⭐⭐⭐⭐⭐</p>

          <div className='profile'>
            <CgProfile className='photo' />
          </div>
          <div className="testmonial-content">
            <p>Mr. Johnson</p>
            <p>3 months ago</p>
          </div> 
      </div>
              <div data-aos = "fade-up" className="testimonial-card">
          <CgQuote className='quote' />

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iusto tempora porro, quia odio nostrum obcaecati molestiae placeat aliquam ratione laborum vel non magni sunt quas reprehenderit cum incidunt eum.</p>

          <p className='star'>⭐⭐⭐⭐⭐</p>

          <div className='profile'>
            <CgProfile className='photo' />
          </div>
          <div className="testmonial-content">
            <p>Mr. Johnson</p>
            <p>3 months ago</p>
          </div> 
      </div>
        <div data-aos = "fade-up" className="testimonial-card">
          <CgQuote className='quote' />

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iusto tempora porro, quia odio nostrum obcaecati molestiae placeat aliquam ratione laborum vel non magni sunt quas reprehenderit cum incidunt eum.</p>

          <p className='star'>⭐⭐⭐⭐⭐</p>

          <div className='profile'>
            <CgProfile className='photo' />
          </div>
          <div className="testmonial-content">
            <p>Mr. Johnson</p>
            <p>3 months ago</p>
          </div> 
      </div>


      </div>

      <div className='experience'>
        <div>
          <h4>2021</h4>
          <p>Available Since</p>
         </div>


        <div>
          <h4>3+</h4>
          <p>Branch Number</p>
        </div>
        <div>
          <h4>12</h4>
          <p>Professional Barbers</p>
        </div>
                <div>
          <h4>3</h4>
          <p>Years Of Experience</p>
        </div>





     </div>
    </section>

    <section id="team">
      <div className="team-intro">
        <h3 data-aos = "fade-right">Barbers</h3>
      </div>

      <div className='team-grid'>
        <div data-aos = "fade-up" className="team-card">
          <div className="img-div">
          <img className='team-img' src="team1.jpg" alt="" />
          </div>
          <div className='image-content'>
            <h4>Mr. Adenuga</h4>
            <p>Top Barber</p>
          </div>
        </div>
        <div data-aos = "fade-up" className="team-card">
          <div className="img-div">
          <img className='team-img' src="team2.jpg" alt="" />
          </div>
          <div className='image-content'>
            <h4>Mr. Adenuga</h4>
            <p>Top Barber</p>
          </div>
        </div>
        <div data-aos = "fade-up" className="team-card">
          <div className="img-div">
          <img className='team-img' src="team3.jpg" alt="" />
          </div>
          <div className='image-content'>
            <h4>Mr. Adenuga</h4>
            <p>Top Barber</p>
          </div>
        </div>


      </div>
    </section>

    <section id="contact">
      <div className='contact-grid'>
        <div className='contact-info'>
          <h3>Contact Us</h3>

          <div className='contact'>
            <div className='div-icon'>
            <FaLocationDot className='fa-icon'/>
            </div>
            <div className='contact-icon-info'>
              <i>Address</i>
              <p>61,abiimbola awoliyi estate</p>
            </div>
          </div>
                    <div className='contact'>
            <div className='div-icon'>
            <FaPhoneAlt className='fa-icon'/>
            </div>
            <div className='contact-icon-info'>
              <i>Phone Number</i>
              <p>09113097228</p>
            </div>
          </div>
          <div className='contact'>
            <div className='div-icon'>
            <MdEmail className='fa-icon'/>
            </div>
            <div className='contact-icon-info'>
              <i>Email</i>
              <p>chukwuwetaluprayet@gmail.com</p>
            </div>
          </div>

          <div className="social-media">
            <p><FaFacebook className='social-media-icons'/></p>
            <p><FaInstagram className='social-media-icons' /></p>
            <p><FaLinkedin className='social-media-icons' /></p>
          </div>


        </div>

        <div className='opening-hours'>
          <div>
            <table>
              <tr>
                <td>Mon</td>
                <td>Closed</td>
              </tr>
                            <tr>
                <td>Tues</td>
                <td>10 am - 8 pm</td>
              </tr>
              <tr>
                <td>Wed</td>
                <td>10 am - 8 pm</td>
              </tr>
              <tr>
                <td>Thurs</td>
                <td>10 am - 8 pm</td>
              </tr>
              <tr>
                <td>Fri</td>
                <td>10 am - 8 pm</td>
              </tr>
              <tr>
                <td>Sat</td>
                <td>10 am - 8 pm</td>
              </tr>
              <tr>
                <td>Sun</td>
                <td>10 am - 8 pm</td>
              </tr>


            </table>
          </div>

        </div>

        <div className="map">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.906508736715!2d7.495097174999704!3d6.310047726942235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a364dc6e741f%3A0x715cc39b7361df7e!2sRome%20Fitness%20Gym!5e0!3m2!1sen!2sng!4v1697488356794!5m2!1sen!2sng"
  width="100%"
  height="400"
  
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>

        </div>

      </div>
    </section>
<hr />
    <div className='contact-form'>
      <h3>Get In Touch</h3>
      <div data-aos = "fade-up" className="form">
      <div className='name'>
     <label htmlFor="">Name</label>
      <input type="text" />
      </div>

      <div className='email-phone'>
      <div className='email'>
        <label htmlFor="">E-mail</label>
        <input type="email" />
      </div>

      <div className='phone'>
        <label htmlFor="">Phone</label>
        <input type="text" />
      </div>

      </div>


      <div className='message'>
        <label htmlFor="">Message</label>
        <textarea name="" id="" rows = "10" cols="30"></textarea>

      </div>
      <button className='submit'>Submit</button>

      </div>


    </div>

    <footer class="footer">
  <div class="footer-container">
    <div class="footer-logo">
      <h2>King's<span>Clip</span></h2>
      <p>Where style meets precision.</p>
    </div>

    <div class="footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div class="footer-contact">
      <h3>Contact</h3>
      <p>📍 45 Main Street, Lagos</p>
      <p>📞 +234 812 345 6789</p>
      <p>✉️ info@barberzone.com</p>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2025 BarberZone. All rights reserved.</p>
  </div>
</footer>



    </>
  )
}

export default App
