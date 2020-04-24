import React, { useState } from "react"
import { animated as a, useSpring } from "react-spring";




const Header = () => {
  const [clicked, setClicked] = useState(false);

  const Propsone = useSpring({
    transform: clicked ? "rotate(45deg) translateX(10px)" : "rotate(0deg) translateX(0px)",
  })

  const Propstwo = useSpring({
    transform: clicked ? "rotate(-45deg) translateX(10px)" : "rotate(0deg) translateX(0px)",
  })

  const Propsmenu = useSpring({
    transform: !clicked ? "translateX(-7px)," : "translateX(0px)",
    opacity: !clicked ? 1 : 0
  })

  const Propsmenulist = useSpring({
    transform: clicked ? "translateX(-17px)" : "translateX(0px)",
    opacity: clicked ? 1 : 0
  })



  console.log(clicked)
        return(
        <header>
          <div className="header-container">
              <div>
                <h1>tee<span className="logo-span">codes</span></h1>
              </div>
              <div className="our-menu-container">
                <a.h3 style={Propsmenu} className="menu-text">MENU</a.h3>
                <a.div className="our-menu" style={Propsmenulist}>
                  <li><h3>ABOUT</h3></li>
                  <li><h3>CONTACT</h3></li>
                  <li><h3>BLOG</h3></li>
                </a.div>
                <div role="button" tabIndex="0" className="menu-handle"  onKeyDown={()=> setClicked(!clicked)} onClick={()=> setClicked(!clicked)}>
                  <a.div className="handles" style={Propsone}>
                  </a.div>
                  <a.div className="handles" style={Propstwo}>
                  </a.div>
                </div>
              </div>
          </div>  
        </header>
      )
}
export default Header
