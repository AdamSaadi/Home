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
                        <h2 className="the-text-in-top">Get in Touch</h2>
                        <p className="the-text-in-top-sm">We're always here to help. Whether you have a question, want to discuss a potential project, or just want to say hello, we'd love to hear from you.</p>
                        <p className="the-text-in-top-sm">If you're interested in working together, please don't hesitate to reach out. You can also check out my Fiverr profile to book a project directly.</p>
                        <p className="the-text-in-top-sm">Thank you for your interest, we look forward to connecting with you!</p>
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