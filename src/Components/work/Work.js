import React from 'react';
import './work.css';
import work1 from '../../assets/work1.png';
import work2 from '../../assets/work2.png'

const Work = () => {
  return (
   <section id="works">
    <h2 className="workstitle">My Portfolio</h2>
    <span className="worksdesc">Proficient in web development (HTML, CSS, JS, React.js), Java (Spring, Hibernate), DSA, and Python with a focus on efficient coding and backend integration.</span>
    <p className="disclai">*Click images to view my works</p>
    <div className="worksimgs">
      <div className="todolist-div">
      <a href="https://shivareddy8008.github.io/Todo-list-project/" target="_blank"><img src={work1} alt="work1" className="workimg" /></a>
      <br />
      <h1 className="todolist">Todo list </h1>
      </div>
      <div className="port">
      <a href="#" ><img src={work2} alt="work2" className="workimg" /></a>
      <br />
      <h1 className="portfolio">Portfolio Website</h1>
      </div>
    </div>
   
      
   </section>
  );
};

export default Work;