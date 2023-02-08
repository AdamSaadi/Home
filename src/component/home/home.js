import React, { lazy, Suspense } from "react";
import Foot from "../sure/footer/footer";
import L1 from "../../images/Home-me.jpg"
import L2 from "../../images/Home-photoToMe.jpg"



const Nav = lazy(() => import("../sure/nav/nav"));

export default function Home() {
  return (
    <>
          <Suspense fallback={<div>Loading...</div>}>
          <Nav />
        </Suspense>
      <div className="container">

        <section className="intro" id="home">
          <h1 className="section__title section__title--intro">
             Hello, I am <strong>Adam Saadi</strong>
          </h1>
          <p className="section__subtitle section__subtitle--intro"> Developer  / Designer</p>
        <img src={L1} alt=" Adam Saadi smiling" className="intro__img"></img>
        </section>
        <section className="my-services" id="services">
          <h2 className="section__title section__title--services">What I do</h2>
          <div className="services">


            <div className="service">
              <h3>Website Design</h3>
              <p>
              I am a professional designer, delivering visually pleasing designs that reflect my clients' personalities and businesses. I infuse my experience and creativity into every project, staying current with trends and technologies to ensure each website is both beautiful and efficient. My goal is to exceed client expectations and help them achieve their business objectives.
              </p>
              </div>

            <div className="service">
              <h3>Website development</h3>
              <p>
              As a full-stack developer, I specialize in creating high-quality websites and software using various tools including React, HTML, and CSS. In addition, I have expertise in SEO, which enables me to optimize your website to rank higher in search results. My goal is to deliver fast, reliable, and personalized websites that reflect your unique preferences.        </p>    </div>
              
            <div className="service">
              <h3>Python development </h3>
              <p>
              I find immense pleasure in utilizing my skills in math and programming. Being passionate about both, I have delved into advanced studies in Python and have successfully implemented it in various projects, which makes it one of the most satisfying aspects of my work.</p>
            </div>

          </div>

          <div className="maybe">
          <Customlink href="/Work" className="btn">Our Work</Customlink>
          </div>

        </section>
        <section className="about-me" id="about">
          <h2 className="section__title section__title--about">Who I am</h2>
          <p className="section__subtitle section__subtitle--about"> Developer / Designer </p>

          <div className="about-me__body">
            <p>
            My name is Adam Saadi. I am a 17-year-old self-motivated individual,I began my
             learning and working journey at a young age. I am driven by creative ideas and 
             am a proficient Python developer who is eager to continue learning and working.
              I have completed various website design courses and have designed several projects,
               including this website. My skill set includes proficiency in HTML, CSS, SCSS, JavaScript,
                Git, Docker, Linux, React, and JSX. While I am capable of working independently, I 
                also have a network of engineers and experts who I collaborate with when needed. I 
                am fluent in English, German, and Arabic. In my free time, I enjoy sports both playing 
                and watching, photography, reading, and spending time with friends and family discussing 
                new ideas. I am also passionate about protecting the environment and work towards its
                 preservation.
            </p>
          </div>

          <img src={L2}  alt="Adam leaning against a bus" className="about-me__img"></img> 

        </section>
      </div>
      <Foot />
    </>
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

