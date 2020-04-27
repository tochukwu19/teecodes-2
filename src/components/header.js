/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import { animated as a, useSpring } from "react-spring"
import {Link} from "gatsby";

const Header = () => {
  const [clicked, setClicked] = useState(false)
  // const [menuOpen, setMenuOpen] = useState(false)

  const Propsone = useSpring({
    transform: clicked
      ? "rotate(45deg) translateX(10px)"
      : "rotate(0deg) translateX(0px)",
  })

  const Propstwo = useSpring({
    transform: clicked
      ? "rotate(-45deg) translateX(10px)"
      : "rotate(0deg) translateX(0px)",
  })

  const Propsmenu = useSpring({
    transform: !clicked ? "translateX(-7px)," : "translateX(0px)",
    opacity: !clicked ? 1 : 0,
  })

  const Propsmenulist = useSpring({
    transform: clicked ? "translateX(-17px)" : "translateX(0px)",
    opacity: clicked ? 1 : 0,
  })

  return (
    <header>
      <div className="header-container">
        <div className="logo-c">
          <Link to="/">
            <h1>
              tee<span className="logo-span">codes</span>
            </h1>
          </Link>
        </div>
        <div className="our-menu-container">
          <a.h3 style={Propsmenu} className="menu-text">
            MENU
          </a.h3>
          <a.div className="our-menu" style={Propsmenulist}>
            <li>
              <Link to="/about"><h3>ABOUT</h3></Link>
            </li>
            <li>
              <Link to="/contact"><h3>CONTACT</h3></Link>
            </li>
            <li>
              <Link to="/blog"><h3>BLOG</h3></Link>  
            </li>
          </a.div>
          <div
            role="button"
            tabIndex="0"
            className="menu-handle"
            onKeyDown={() => setClicked(!clicked)}
            onClick={() => {
              setClicked(!clicked)
            }}
          >
            <a.div className="handles" style={Propsone}></a.div>
            <a.div className="handles" style={Propstwo}></a.div>
          </div>
        </div>
        <div className={clicked ? "mobile-nav slide-in" : "mobile-nav"}>
          <ul>
            <li>
              <Link to="/about"><h3>ABOUT</h3></Link>
            </li>
            <li>
              <Link to="/contact"><h3>CONTACT</h3></Link>
            </li>
            <li>
              <Link to="/blog"><h3>BLOG</h3></Link>  
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
export default Header
