import React, { lazy, Suspense } from "react";
import Foot from "../sure/footer/footer";
import l1 from "../../images/air-web-project.jpg";
import l2 from "../../images/website-building.png";

const Nav = lazy(() => import("../sure/nav/nav"));

export default function Air() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
      <section className="intro">
        <h1 className="section__title section__title--intro">
         AirBob Building<strong>  Websites </strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
        that Deliver Results
        </p>
        <img src={l2} alt="represent website building" className="intro__img" />
      </section>
      <div className="portfolio-item-individual">
        <div>
          <p>
            As a beginner in the world of web development, I am excited to share
            my first project with you - a website built using the React
            framework that is similar to the popular vacation rental platform,
            Airbnb.
          </p>
          <br />
          <p>
            The process of building this website has been a challenging and
            rewarding experience. I have gained a deep understanding of the
            React framework, as well as honed my skills in HTML, CSS, and
            JavaScript. I am constantly amazed by the power of React and its
            ability to create dynamic and interactive user interfaces.
          </p>
          <br />
          <p>
            One of the most challenging aspects of this project was
            understanding and implementing the various components of the
            website, such as the search bar, the property listing, and the
            booking process. However, with the help of online tutorials and the
            React documentation, I was able to overcome these challenges and
            bring my vision to life.
          </p>
          <br />
          <p>
            I am extremely proud of this project, as it is a tangible
            representation of my progress as a web developer. I am excited to
            continue learning and growing as a developer, and I look forward to
            the opportunity to work on more projects like this in the future.
          </p>
          <br />
          <p>
            I invite you to check out my website and let me know what you
            think, any feedback is appreciated and will help me in my future
            projects. I hope you enjoy it as much as I enjoyed creating it.
          </p>
        </div>
        <img src={l1} alt="my air bob website" />
        <p>
          One of the most important features of this web is the ability to
          access data from another file. It's important because if you create a
          large website, you will need to add data or change it consistently.
          Having a data file is much easier.
        </p>
      </div>
      <Foot />
    </div>
  );
}
