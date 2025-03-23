import React from 'react';
import './intro.css';
import hireme from '../../assets/Hire Me.png';
import myimage from '../../assets/myimage.png'
import { Link } from 'react-scroll';



const Intro = () => {
  return (
    <section className="intro">
        <div className="introcontent">
            <span className="hello">Hello,</span>
            <span className="introtext">I'm <span className="name">Shiva Reddy</span><br />A Web Developer</span>
            <p className="intropara">I am skilled and passionate web Developer</p>
           <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}> <button className="introbtn"><img src={hireme} alt="hireme" className="hireimg" />Hire Me</button></Link>
            
        </div>
    <img src="#" alt="myimg" className="bg" />    
    </section>

  )
}

export default Intro
