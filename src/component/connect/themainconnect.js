import React from "react";
import emailjs from "emailjs-com"
export default function ContactForm() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    function sendemail(e) {
        e.prevventDefault();
        emailjs.sendForm('service_bhd3kxz', 'template_c8awr0a', e.target, 'cz7PvekM1HDonXWur').then(res => {
            console.log(res);

        }).catch(err => console.log(err))
    }
    return (
        <div className="contactForm">
            <div className="the-text-in-connection">
                <h2>Get in Touch</h2>
                <p className="pisp">We're always here to help. Whether you have a question, want to discuss a potential project, or just want to say hello, we'd love to hear from you.</p>
                <p className="pisp">If you're interested in working together, please don't hesitate to reach out. You can also check out my Fiverr profile to book a project directly.</p>
                <p className="pisp">Thank you for your interest, we look forward to connecting with you!</p>
            </div>
            <form
                onSubmit={sendemail}>
                <div className="form-gruop">
                    <label htmlFor="name">

                        <input
                            className='text-box'
                            placeholder="Your Name."
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-gruop">
                    <label htmlFor="email">

                        <input
                            className='text-box'
                            placeholder="Your Email."
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-gruop">
                    <label htmlFor="message">

                        <textarea
                            className="massage"
                            placeholder="Type Your Message..."
                            type="submit"
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                </div>
                <button className="subb" type="submit" ><span className="send-btn-connetion"> Send </span><i className="send-btn-connetion-ii"></i></button>
            </form>
        </div>
    )
}