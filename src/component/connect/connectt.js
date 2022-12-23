import React from "react";
import ContactForm from "./themainconnect";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";

export default function Contact() {
    return (
        <>
            <Nav />

            <body class="page5">
                <section className="contact">
                    <div >
                        <h2 className="the-text-in-top">Contact Us</h2>
                        <p className="the-text-in-top-sm">Got a question? I'd love to hear from you. Send me a message and I will respond as soon as possible.</p>
                        <p className="the-text-in-top-sm">Book an interview now, or see my Fiverr account to work together</p>
                    </div>
                    <div className="containerr">
                        <div className="contactInfo">
                            <div className="box">
                                <div className="icon"><i className="fa fa-map-marker-alt">  Syria, As Suwayda City, Al-Jalla nighborhood, masaken Al Moalemeen</i></div>
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
            </body>
            <Foot />
        </>

    )
}