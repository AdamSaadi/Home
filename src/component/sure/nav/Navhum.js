import React from "react";

export default function Navhum() {
  return (
    <body className="navhum-body">
      <div className="nsn">
        <ul className="Hum-elements" >
          <Customlink href="/" ><li className="Hum-element">Hoome</li></Customlink>
          <Customlink href="/Work"><li className="Hum-element">Work</li></Customlink>
          <Customlink href="/Connect" ><li className="Hum-element">Connect</li></Customlink>
        </ul>
      </div>
    </body>
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