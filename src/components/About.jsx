import './About.css';
import profile from '../assets/Profile.jpg';

export default function About() {
  return (
    <>
      <section className='about-page'>
        {/* LEFT SIDE */}
        <div className='about-container'>
          <div className="hero-left">
            <h1><strong>About me</strong></h1>
            <p>
              Hi, I’m Hemanath K, a final-year B.Tech student majoring in Computer Science and Business Systems. I’m a passionate full-stack developer who enjoys building engaging, user-friendly websites and applications using React, CSS, and modern web tools. Alongside web development, I’ve also explored machine learning, applying algorithms in real-world projects to gain insights from data and drive smarter solutions. I've completed two valuable internships that helped me sharpen my technical skills, collaborate with teams, and understand real-world development workflows.
            
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero1-image">
          <img src={profile} alt="Hemanath profile" />
        </div>
      </section>
    </>
  );
}
