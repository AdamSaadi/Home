import React, { useState } from 'react';
import l1 from "../../../images/nav-logo.png"

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div>


<nav className="navbar">
<Customlink href="/" ><img className="logo-pc" src={l1} alt="logo"/></Customlink>
      <ul className="nav__links" >
        <Customlink href="/" className="li-in-nav"> Home </Customlink>
        <Customlink href="/Work" className="li-in-nav"> Work </Customlink>
        <Customlink href="/Connect" className="li-in-nav"> Connect </Customlink>
      </ul>
      


      <button className="hamburger" type="none" onClick={() => setShowNavbar(!showNavbar)}>
          <span className="lala"></span>
          <span className="lala2"></span>
          <span className="lala3"></span>
      </button>

      <div className='mobile-navbar'>


    

      
      {showNavbar && <div className="wow">
        <ul className="Hm-elements" >
          <Customlink href="/" ><li className="Hm-element" activeClassName="selected">Home</li></Customlink>
          <Customlink href="/Work"><li className="Hm-element" activeClassName="selected">Work</li></Customlink>
          <Customlink href="/Connect" ><li className="Hm-element" activeClassName="selected">Connect</li></Customlink>
        </ul>
        </div>
}
</div>
    </nav>
        {showNavbar ? null : (
          <img src={l1}  alt="Logo" className="logo"/>
        )}
        
        

    </div>
    
  );
}
function Customlink({ href, children, ...props }) {
  const path = window.location.pathname

  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  )
}
export default App;
