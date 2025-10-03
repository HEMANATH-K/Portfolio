import './Hero.css';
import profile from '../assets/Profile.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; 

export default function Hero() {
  return (
   
    <>
    


    <nav className="navbar">
            <ul className="nav-links">
        <li><NavLink to="/about">About me</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/Portfolio">Portfolio</NavLink></li>
        <li> <NavLink to="/contact">
        <button className="contact-btn">Contact Me</button>
      </NavLink></li>
      </ul>
     
         
        </nav>
        
    <section className="hero">
      {/* LEFT PANEL */}
      <div className="hero-left">
        

        <div className="hero-text">
          <h1>Hi, I’m Hemanath K</h1>
          <h2>Software Developer</h2>
          <p>
            I specialize in creating beautiful and interactive websites using <strong>React</strong>, <strong>CSS</strong>, and modern development tools. Additionally, I have hands-on experience with <strong>machine learning algorithms</strong> and have built several projects in this domain.
          </p>
          <a href="/Hemanath-K.pdf.pdf" download>
  <button className="hero-button">Download Resume</button>
</a>

        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hero-image">
        <img src={profile} alt="Hemanath profile" />
      </div>
    </section>
    </>
  );
}
