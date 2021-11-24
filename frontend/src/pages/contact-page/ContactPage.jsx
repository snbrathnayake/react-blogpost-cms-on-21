import React from 'react';
import './contact-page.css';

export default function ContactPage() {
  return (
    <div className='pageLayout'>
      <div className='contact'>
        <div className='contactInfo'>
          <h1 className='contactTitle'>get in touch</h1>
          <div className='contactInfoGroup'>
            <div className='contactInfoData'>
              <i className='fas fa-phone-alt'></i> <b>Phone:</b> +2(02) 2737 6759
            </div>
            <div className='contactInfoData'>
              <i class='far fa-envelope'></i> <b>Email:</b> infoselakmosttafa@gmail.com
            </div>
            <div className='contactInfoData'>
              <i class='fas fa-search-location'></i> <b>Address:</b> 18 Mahamud Azmy Street , off
              26th July Street,Zamalek,Cairo,Egypt.
            </div>
          </div>
        </div>
        {/* FORM  */}
        <form className='contactForm'>
          <div className='contactFormGroup'>
            <input type='text' placeholder='your name' className='contactInputbox' />
            <input type='email' placeholder='your email' className='contactInputbox' />
            <input type='tel' placeholder='your phone' className='contactInputbox' />
          </div>
          <div className='contactFormGroup'>
            <textarea
              placeholder='your message...'
              type='text'
              className='contactInputbox contactText'
            ></textarea>
          </div>
        </form>
        <button className='contactSubmitBtn'>Submit</button>
      </div>
    </div>
  );
}
