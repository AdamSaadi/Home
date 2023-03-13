import React, { lazy, Suspense } from "react";
import ContactForm from "./themainconnect";
import Foot from "../sure/footer/footer";
import { HashRouter as Router } from 'react-router-dom';

const Nav = lazy(() => import("../sure/nav/nav"));
export default function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
      <Router>
        <Contact />
      </Router>
      <Foot />
    </>
  )
}

function Contact() {
  return (
    <div className="page5">
      <section className="contact">
        <div >
          <h2 className="the-text-in-top">Get in Touch</h2>
          <p className="the-text-in-top-sm">I'm always here to help. Whether you have a question, want to discuss a potential project, or just want to say hello, I'd love to hear from you.</p>
          <p className="the-text-in-top-sm">If you're interested in working together, please don't hesitate to reach out.</p>
          <p className="the-text-in-top-sm">Thank you for your interest, I look forward to connecting with you!</p>
        </div>
        <div className="containerr">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><i className="fa fa-map-marker-alt">  Syria, As Suwayda City</i></div>
              <div className="textt">
              </div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-phone">  +963940711862</i></div>
              <div className="textt">
              </div>
            </div>
            <div className="box">
              <div className="icon"><i className="fa fa-envelope">  adamsaadi06.as@gmail.com</i></div>
              <div className="textt">
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  )
}


