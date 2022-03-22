import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {FaDiscord} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ohpi39f', 'template_w4m0rvc', form.current, 'pNU5wqfZLAB1fmFt2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>edu.hen.fm@gmail.com</h5>
            <a href="mailto:edu.hen.fm@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+55 (95) 991258388</h5>
            <a href="https://api.whatsapp.com/send?phone=+55991258388" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact__option">
            <FaDiscord className='contact__option-icon' />
            <h4>Discord</h4>
            <h5>p1zza#5559</h5>
            <a href="https://discordapp.com/users/243409681995792385/" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>

  )
}

export default Contact