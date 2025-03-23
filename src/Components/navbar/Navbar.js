import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contact from '../../assets/phone.png';
import menu from '../../assets/mobmenu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showmenu,setshowmenu]=useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopmenu">
        <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}className="desktop-listitem">Home
        </Link>
        <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className="desktop-listitem">
          Skills
        </Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}className="desktop-listitem">
          Portfolio
        </Link>
       
        <Link  activeClass='active' to='resume'spy={true} smooth={true} offset={-100} duration={500}className="desktop-listitem">
          Resume
        </Link>
      </div>
      <button className="desktopmenubtn" onClick={() => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}}>
  <img src={contact} alt="contact" className="desktopmenubtnimg" />
  Contact Me
</button>
<img src={menu} alt="logo" className="mobmenu" onClick={()=>{setshowmenu(!showmenu)}}/>
      <div className="navMenu"style={{display:showmenu?'flex':'none'}}>
        <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}className="listitem"onClick={()=>setshowmenu(false)}>Home
        </Link>
        <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className="listitem"onClick={()=>setshowmenu(false)}>
          Skills
        </Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}className="listitem"onClick={()=>setshowmenu(false)}>
          Portfolio
        </Link>
       
        <Link  activeClass='active' to='resume'spy={true} smooth={true} offset={-100} duration={500}className="listitem"onClick={()=>setshowmenu(false)}>
          Resume
        </Link>
        <Link  activeClass='active' to='contact'spy={true} smooth={true} offset={-100} duration={500}className="listitem"onClick={()=>setshowmenu(false)}>
          contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;