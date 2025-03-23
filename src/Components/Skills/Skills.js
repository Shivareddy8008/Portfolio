import React from 'react';
import './skills.css';
import DSimage from '../../assets/datastructure.png';
import Javaimg from '../../assets/javadevelpo.png';
import webimg from '../../assets/webdevelop.png';


const Skills = () => {
  return (
<section className="skills">
  <h1 className="skilltext">What I Do</h1>
  <h4 className="skilldesc">I'm a passionate and skilled developer with expertise in web development, Java development, and Data Structures and Algorithms (DSA). With a strong foundation in programming, I create efficient, scalable, and responsive web applications.</h4>
  <div className="skillbars">
  <div className="skillbar">
  <img src={webimg} alt="" className="skillimg" />
  <div className="skillbartext">
  <h2>Web Development</h2>
  <p>Crafting responsive, user-friendly websites and full-stack applications using the latest web technologies</p>
  </div>
  </div>
  <div className="skillbar">
  <img src={Javaimg} alt="javadevelopment" className="skillimg" />
  <div className="skillbartext">
  <h2>Java Development</h2>
  <p>Building robust backend systems with Java, focusing on clean, maintainable, and high-performance code.</p>
  </div>
  </div>
  <div className="skillbar">
  <img src={DSimage} alt="Dsa" className="skillimg" />
  <div className="skillbartext">
  <h2>Data Structures and Algorithms</h2>
  <p>Solving complex problems with optimized algorithms to enhance application efficiency and performance.</p>

  </div>
  </div>
  </div>
</section>
  )
}

export default Skills
