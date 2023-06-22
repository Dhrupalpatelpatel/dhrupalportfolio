import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i7aqqh3', 'template_ad044up', form.current, 'PCqyWVCe-ozMP-G_Y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5 >Get in touch</h5>
      <h2>Contact me</h2>
     <div className="container contact__container">
      <div className="container__options">
        <article className='contact__option'>
          <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>dhrupal.84205301@gmail.com</h5>
          <a href="mailto:dhrupal.84205301@gmail.com" target='blank'> Send a message</a>
        </article>
        <article className='contact__option'>
          <AiOutlineWhatsApp className='contact__option-icon' />
          <h4>WhatsApp</h4>
          <h5>+9724954533</h5>
          <a href="https://api.whatsapp.com/send?phone+9724954533" target='blank'> Send a message</a>
        </article>
        <article className='contact__option'>
          <AiOutlineInstagram className='contact__option-icon'/>
          <h4>Instagram</h4>
          <h5>dhrupal.143</h5>
          <a href="https://www.instagram.com/dhrupal.143/?hl=en" target='blank'> Send a message</a>
        </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='your full name'  required/>
        <input type="email" name='email' placeholder='your email'  required/>
        <textarea name="message" placeholder='your message'  required/>
        <button type='submit' className='btn btn-primary'> Send a Message</button>
      </form>
     </div>
     
    </section>
  )
}

export default Contact
