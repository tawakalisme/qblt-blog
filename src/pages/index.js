import { Link } from "gatsby";
import Icon from "../images/icon.svg";
import SocialLinkedin from "../images/Icons/Social/cib_linkedin-in.svg";
import SocialDribbble from "../images/Icons/Social/cib_dribbble.svg";
import SocialTwitter from "../images/Icons/Social/cib_twitter.svg";
import SocialInstagram from "../images/Icons/Social/cib_instagram.svg";
import SocialGithub from "../images/Icons/Social/cib_github.svg";
import * as React from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <title>Iqbal Tawakal</title>
        <meta
          name="description"
          content="Iqbal Tawakal is a UI/UX Designer and Front-End Developer from Indonesia. Currently working as Web Designer in YCP Solidiance Indonesia"
        />
      </Helmet>
      {/* SECTION Header */}
      <header>
        <nav className="container mx-auto flex flex-row justify-center lg:justify-between py-8">
          <Link to="/">
            <Icon />
          </Link>
          <div className="gap-12 hidden lg:flex lg:flex-row">
            <Link to="#">About</Link>
            <Link to="#">Contact</Link>
            <Link to="#">Portfolio</Link>
          </div>
        </nav>
      </header>
      {/* !SECTION Header */}
      <main>
        {/* SECTION Hero */}
        <section
          id="hero"
          className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center"
          style={{ height: "700px" }}
        >
          <div className="flex flex-col gap-4 p-4 lg:p-0">
            <h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-left">
              Hello! Iqbal's Here
            </h1>
            <p className="text-xl text-center lg:text-left">
              I currently work for YCP Solidiance in Surabaya as Web Designer. I
              post my projects here and my social media. Let's get connected
              through internet!
            </p>
            <div className="flex justify-center lg:justify-start mt-6 gap-4">
              <a
                href="https://linkedin.com/in/miqbaltawakal"
                target="_blank"
                className="solid-box-shadow-4 border-2 border-black p-2"
                rel="noreferrer"
              >
                <SocialLinkedin />
              </a>
              <a
                href="https://dribbble.com/tawakalisme"
                target="_blank"
                className="solid-box-shadow-4 border-2 border-black p-2"
                rel="noreferrer"
              >
                <SocialDribbble />
              </a>
              <a
                href="https://twitter.com/tawakalisme"
                target="_blank"
                className="solid-box-shadow-4 border-2 border-black p-2"
                rel="noreferrer"
              >
                <SocialTwitter />
              </a>
              <a
                href="https://instagram.com/tawakalisme"
                target="_blank"
                className="solid-box-shadow-4 border-2 border-black p-2"
                rel="noreferrer"
              >
                <SocialInstagram />
              </a>
              <a
                href="https://github.com/tawakalisme"
                target="_blank"
                className="solid-box-shadow-4 border-2 border-black p-2"
                rel="noreferrer"
              >
                <SocialGithub />
              </a>
            </div>
          </div>
          <div className="order-first lg:order-last flex justify-end">
            <StaticImage
              src="../images/hero.png"
              alt="Hero Image"
              layout="constrained"
              placeholder="blurred"
            />
          </div>
        </section>
        {/* !SECTION Hero */}
        {/* SECTION Portfolio */}
        <section id="portfolio"></section>
        {/* !SECTION Portfolio */}
        {/* !SECTION Hero */}
      </main>
      {/* SECTION Footer */}
      <footer id="footer">
        <div className="container mx-auto flex flex-row justify-center lg:justify-between py-8">
          <Link to="/">
            <Icon className="hidden lg:flex" />
          </Link>
          <div className="flex items-center lg:items-end flex-col lg:flex-row gap-2 lg:gap-12">
            <a
              href="https://linkedin.com/in/miqbaltawakal"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://dribbble.com/tawakalisme"
              target="_blank"
              rel="noreferrer"
            >
              Dribbble
            </a>
            <a href="mailto:tawakalisme@gmail.com">tawakalisme@gmail.com</a>
          </div>
        </div>
        <div className="text-center my-4 text-base p-4">
          Copyright © 2021 Muhamad Iqbal Tawakal. All rights reserved.
        </div>
      </footer>
      {/* !SECTION Footer */}
    </div>
  );
};

export default IndexPage;
