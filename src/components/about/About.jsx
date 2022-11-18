import React from 'react'
import './about.css'
import  ME from '../../assets/me-about.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {MdOutlineFolderSpecial} from 'react-icons/md'
import {BsPeopleFill} from 'react-icons/bs'

const About = () => {
  return (
    
      <section id="about">
        <h5>Saiba Mais</h5>
        <h2>Sobre Mim</h2>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="About Image"/>
            </div>          
          </div>

          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <BsAwardFill className="about_icon"/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>

              <article className="about_card">
                <BsPeopleFill className="about_icon"/>
                <h5>Clients</h5>
                <small>200+ WorldWide</small>
              </article>

              <article className="about_card">
                <MdOutlineFolderSpecial className="about_icon"/>
                <h5>Projects</h5>
                <small>88+ Completed</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt excepturi eius exercitationem natus. Amet ipsum quidem corrupti molestias voluptatum accusamus quasi non nulla vero saepe, repellat, dignissimos, ipsam quis.
            </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
          
        </div>
      </section>

    
  )
}

export default About