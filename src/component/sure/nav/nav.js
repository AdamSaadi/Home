import React from "react";
import l1 from "../../../images/Nav-logo.png"
export default function Nav() {
  return (
    <nav className="nnn">
      <Customlink href="/"><img src={l1}  className="logo" alt="decription"></img></Customlink>
      <ul className="nav__links" >
        <Customlink href="/" className="li-in-nav" >Home</Customlink>
        <Customlink href="/Work" className="li-in-nav">Work</Customlink>
        <Customlink href="/Connect" className="li-in-nav">Connect</Customlink>
      </ul>
      <Customlink href="/Navhum" >
        <button className="hamburger" type="none">
          <span className="lala"></span>
          <span className="lala2"></span>
          <span className="lala3"></span>
        </button>
      </Customlink>
    </nav>

  )
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
/*    "homepage": "http://adamsaadi.github.io/Home",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
        "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js", */