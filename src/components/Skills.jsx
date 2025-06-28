import './Skills.css';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTensorflow } from 'react-icons/si';
import { MdLanguage } from 'react-icons/md';

export default function Skills() {
  return (
    <section className="skills-container">
      <h1><center>Skills</center></h1>
      <div className="skill-box">
        <h2>Programming Languages</h2>
        <ul>
          <li><FaJava /> Java (DSA)</li>
          <li><FaPython /> Python</li>
          <li><FaHtml5 /> HTML</li>
          <li><FaCss3Alt /> CSS</li>
          <li><FaJs /> JavaScript</li>
        </ul>
      </div>

      <div className="skill-box">
        <h2>Frameworks</h2>
        <ul>
          <li><FaReact /> React.js</li>
          <li><FaNodeJs /> Node.js</li>
          <li><SiExpress /> Express.js</li>
        </ul>
      </div>

      <div className="skill-box">
        <h2>Technologies</h2>
        <ul>
          <li><SiTensorflow /> Machine Learning</li>
          <li><SiTensorflow /> Deep Learning</li>
        </ul>
      </div>

      <div className="skill-box">
        <h2>Languages Known</h2>
        <ul>
          <li><MdLanguage /> English</li>
          <li><MdLanguage /> Tamil</li>
          <li><MdLanguage /> Hindi</li>
        </ul>
      </div>
    </section>
  );
}
