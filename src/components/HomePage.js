const HomePage = () => {
  return (
    <div>
      <section className="home home-home flex-column flex-md-row" id="home">
        <div className="home-content">
          <h3>Hello, It's me</h3>
          <h1>Tuan Nhat</h1>
          <h3>
            And I'm a <span className="multiple-text">Frontend Developer</span>
          </h3>
          <p>
            A front-end developer is a software developer who creates the user
            interface (UI) and user experience (UX) of websites and web
            applications. They use coding languages like HTML, CSS, and
            JavaScript to ensure that the visual and interactive aspects of a
            website or application are user-friendly, aesthetically pleasing,
            and functionally efficient.
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

      <section className="home-fontEnd fontEnd">
        <div className="center">
          <h2 className="heading">
            Hello,
            <br />
            <span>Front-End Developer!</span>
          </h2>

          <h4>
            People who create websites and web applications for a living, <br />
            are called <strong>Front-End Developers</strong> .
          </h4>
          <h4>
            <strong>Tip:</strong> Many Front-End Developers also have basic
            knowledge of
            <br /> different CSS and JavaScript frameworks and libraries,
            <br /> like{" "}
            <a href="home.html" title="Go To Our Bootstrap 5 Tutorial">
              Bootstrap
            </a>
            ,{" "}
            <a href="home.html" title="Go To Our SASS Tutorial">
              SASS (CSS pre-processor)
            </a>
            ,{" "}
            <a href="home.html" title="Go To Our jQuery Tutorial">
              jQuery
            </a>{" "}
            and{" "}
            <a href="home.html" title="Go To Our React Tutorial">
              React
            </a>
            ,<br />
            and the popular version control system,{" "}
            <a href="home.html" title="Go To Our Git Tutorial">
              Git
            </a>
            . <br />
            <input type="submit" value="Read More" className="btn" />
          </h4>
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

export default HomePage;
