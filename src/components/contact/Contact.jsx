import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>rumueldiogo@gmail.com</h5>
            <a href="mailto:rumueldiogo@gmail.com" target="_Blank">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsGithub/>
            <h4>Github</h4>
            <h5>rumueldiogo@gmail.com</h5>
            <a href="">Send a Message</a>
          </article>
          <article className="contact_option"> 
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            
            <a href="https://api.whatsapp.com/send?phone+351999999999" target="_Blank">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsLinkedin/>
            <h4>LinkedIn</h4>
            <h5>rumueldiogo@gmail.com</h5>
            <a href="" target="_Blank">Send a Message</a>
          </article>
        </div>
        {/*End Of Contact Options*/ }
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" />
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact