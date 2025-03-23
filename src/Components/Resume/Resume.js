import React from 'react';
import './resume.css';
import myimage from '../../assets/Resume.png';
import dwnimg from '../../assets/file.png';


const Resume = () => {
  return (
    <section className="resume">
        <h2 className="certi">Resume</h2>
        <p className="certi-desc">Experienced web developer with strong Java and DSA skills, currently enhancing expertise in algorithms and Python programming.</p>
        <p className="download">*Click below to Download Resume</p>
        <div className="resume-div">
         <img src={dwnimg} alt="dwnimg" className="dwn-img" />
        <a className="resume-download" href={myimage}download>Download</a>
        </div>
       
        


    </section>
  )
}

export default Resume
