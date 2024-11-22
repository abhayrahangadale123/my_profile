import React, { useRef, useState } from 'react'
import logo from "../../assets/Bull.png"
import { MdOutlineMenu} from "react-icons/md";
import './NavBar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = () => {
  const [menu, setMenu] = useState("Project");
   const menuRef = useRef();

   const openMenu = ()=>{
    menuRef.current.style.right="0"
   }
   
   const closeMenu = ()=>{
    menuRef.current.style.right="-350px"
   }
   
  return (
    <>
      <div id="main_Nav">
        <div id="logo">
          {/* <img src={logo} alt="" /> */}
          <h1><span>@</span>bhay</h1>
          <div className='nav_mob_open' onClick={openMenu} ><MdOutlineMenu/></div>
        </div>
        <ul ref={menuRef} id="four_Type" className='nav_menu'>
        <div className='nav_mob_close' onClick={closeMenu}>❌</div>
          <li><AnchorLink className='Ancr_link' offset={50} href='#Home'><p onClick={() => setMenu("Home")}>Home</p></AnchorLink></li>
          <li><AnchorLink className='Ancr_link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About</p></AnchorLink></li>
          <li><AnchorLink className='Ancr_link' offset={50} href='#Contect'><p onClick={() => setMenu("Contect")}>Contect</p></AnchorLink></li>
          <li><AnchorLink className='Ancr_link' offset={50} href='#Project'><p onClick={() => setMenu("Project")}>Project</p></AnchorLink></li>
        </ul>
        
        <div id="with_me">
          <AnchorLink className="Ancr_link" offset={50} href="#Contect">
            Connect with me
          </AnchorLink>
        </div>

      </div>
    </>
  )
}

export default NavBar
