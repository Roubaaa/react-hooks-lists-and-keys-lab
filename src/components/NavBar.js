import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const Links =links.map((link, index)=>  <a href= {`#${link}`} key ={index}> {link}</a>)
   
    
      return (
        <nav>
          {Links}
        </nav>
    )
 
}

export default NavBar;
