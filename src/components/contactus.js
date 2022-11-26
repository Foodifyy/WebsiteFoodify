import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-scroll'
import '../style/contactus.css';

const ContactUs = () => {
  return (
    <div id='contact '> 
    
      <footer className={`footer`}>
      <div className={`container`}>
        <div className={`row`}>
          <div className="footer-col transition-all duration-300 ">
            <h4>Jump To</h4>
            <ul>
              <li><Link to='home' smooth={true} offset={-100} duration={700} className='navButton curPointer'>Home</Link></li>
              <li><Link to='service' smooth={true} offset={-100} duration={700} className='navButton curPointer'>Service</Link></li>
              <li><Link to='about' smooth={true} offset={-100} duration={700} className='navButton curPointer'>About Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Reach Us</h4>
            <ul>
             <li><iframe title="locMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d272214.98437789315!2d77.1811365245633!3d28.598938719824535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1595df8090d%3A0x5f00018ffd0e2edf!2sDelhi%20Institute%20of%20Tool%20Engineering!5e0!3m2!1sen!2sin!4v1662571508355!5m2!1sen!2sin" width="300" height="150" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></li>
              
              <li><a href="/"> <strong style={{color:"#7fffd4"}}>&#95;</strong> EMAIL - fooddifyy@gmail.com</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links flex">
              <a href="https://www.linkedin.com/company/foodifyy/" target='_blank' rel='noreferrer'><FaLinkedin className='socialIcon'/></a>
            </div>
          </div>
        </div>
      </div>
     </footer>

  </div>
  )
}

export default ContactUs
