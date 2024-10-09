import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

const AboutPage = () => {
  useEffect(() => {
    // ==================scroll reveal================
    ScrollReveal({
      reset: true,
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(
      ".home-img, .services-container, .portfolio-box, .contact form",
      { origin: "bottom" }
    );
    ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
    ScrollReveal().reveal(".home-content p, .about-content", {
      origin: "right",
    });

    // ==================type js================
    const options = {
      strings: ["Frontend Developer", "YouTuber", "Blogger"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(".multiple-text", options);

    // Cleanup function to destroy Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Chạy effect một lần khi component mount

  return (
    <div>
      <section className="home flex-column flex-md-row" id="home">
        <div className="home-content">
          <h3>Hello, It's me</h3>
          <h1>Tuan Nhat</h1>
          <h3>
            And I'm a <span className="multiple-text">Frontend Developer</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            convallis pulvinar vulputate. Phasellus lacinia nunc quis neque
            condimentum, et egestas nulla tempus.
          </p>

          <div className="social-media">
            <a href="/">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <a href="/" className="btn">
            Download CV
          </a>
        </div>
        <div className="home-img">
          <img src="/assets/Image/home.png" alt="" />
        </div>
      </section>

      <section className="about flex-column-reverse flex-md-row" id="about">
        <div className="about-img">
          <img src="/assets/Image/about.png" alt="" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            Tuan <span>Nhat</span>
          </h2>
          <h3>Frontend Developer!</h3>
          <p>
            The easiest way to get icons on your website is with a Kit. It's
            your very own custom version of Font Awesome, all bundled up with
            only the icons, tools, and settings you need.
          </p>
          <a href="/about" className="btn">
            Read more
          </a>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="heading">
          Our <span>Services</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <i className="fa-solid fa-code"></i>
            <h3>Web Development</h3>
            <p>
              Web development is the process of creating and maintaining
              websites or web applications. It covers several aspects, including
              web design, web content creation.
            </p>
            <a href="/about" className="btn">
              Read more
            </a>
          </div>

          <div className="services-box">
            <i className="fa-solid fa-paintbrush"></i>
            <h3>Graphic Design</h3>
            <p>
              Graphic design is a craft where professionals create visual
              content to communicate messages. By applying visual hierarchy and
              page layout techniques.
            </p>
            <a href="/about" className="btn">
              Read more
            </a>
          </div>

          <div className="services-box">
            <i className="fa-sharp fa-solid fa-chart-simple"></i>
            <h3>Digital Marketing</h3>
            <p>
              Digital marketing, also known as online marketing, is the use of
              digital media and technologies to promote products and services,
              and connect with potential.
            </p>
            <a href="/about" className="btn">
              Read more
            </a>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Project</span>
        </h2>

        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src="/assets/Image/portfolio1.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, voluptatum.
              </p>
              <a href="/">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="/assets/Image/portfolio2.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, voluptatum.
              </p>
              <a href="/">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="/assets/Image/portfolio3.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, voluptatum.
              </p>
              <a href="/">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="/assets/Image/portfolio4.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, voluptatum.
              </p>
              <a href="/">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="/assets/Image/portfolio5.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, voluptatum.
              </p>
              <a href="/">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="/assets/Image/portfolio6.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, voluptatum.
              </p>
              <a href="/">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </div>
  );
};

export default AboutPage;
