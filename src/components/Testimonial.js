import React from 'react';
import '../style/tesimonial.css'

function Testimonial() {
  return (
        <div id="testimonial">
          <div className='testimonial_heading'>
            <h2>What Clients Say</h2>
          </div>
          <div className='heading_bar'>
              <h5>------------------------- o -------------------------</h5>
          </div>
          <div className='testimonial_card'>
            <div className='main_card'>
              <div className='test_card'>
                  <img src="logo192.png" className='clinet_image' alt="__"/>
              </div>
              <div className='client_name'>
                  <p className='name_placeholder'>Client Name</p>
              </div>
              <div className='client_feedback'>
                  <p className='feedback_placeholder'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                  </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Testimonial