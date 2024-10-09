const ProjectPage = () => {
  return (
    <div>
      <section className="main" id="main">
        <div className="main">
          <div className="main-content">
            <h1>Where To Start</h1>
            <h4>
              To become a web developer, start with the subjects below, <br />
              in the following order:
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div
              className="accordion position-relative z-1"
              id="accordionPanelsStayOpenExample"
            >
              <div className="accordion-item">
                <h2
                  className="accordion-header "
                  id="panelsStayOpen-headingOne"
                >
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    HTML
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <h4>1. Create your first web page</h4>
                    <p>
                      The first thing you have to learn, is HTML, which is the
                      standard markup language for creating web pages.
                    </p>
                    <a
                      href="/html/html_intro.asp"
                      className="btn"
                      title="Go To Our HTML Tutorial"
                    >
                      Learn HTML
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    CSS
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <h4>2. Style your web page</h4>
                    <p>
                      The next step is to learn CSS, to set the layout of your
                      web page with beautiful colors, fonts, and much more.
                    </p>
                    <a
                      href="/html/html_intro.asp"
                      className="btn"
                      title="Go To Our HTML Tutorial"
                    >
                      Learn CSS
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    JAVASCRIPT
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <h4>3. Make your web page interactive</h4>
                    <p>
                      After studying HTML and CSS, you should learn JavaScript
                      to create dynamic and interactive web pages for your
                      users.
                    </p>
                    <a
                      href="/html/html_intro.asp"
                      className="btn"
                      title="Go To Our HTML Tutorial"
                    >
                      Learn Javascript
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-lg-end text-center ">
            <div className="video-box">
              <img
                src="/assets/Image/intro-section-illustration.png"
                alt="video illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" description">
        <div>
          <h2 className="heading">What's Next?</h2>
          <h4>
            Now you know how to use HTML, CSS, and JavaScript
            <br />
            to create, style, and make interactive web pages.
          </h4>
          <h4>
            The next step is to publish your website,
            <br />
            so that the rest of the world can see your work.
          </h4>
          <h4>
            There are tons of hosting services to choose from.
            <br />
            We have made one for you, for free:
          </h4>
        </div>
      </section>

      <section className="fontEnd">
        <div className="center">
          <h2 className="heading">
            Hello,
            <br />
            Front-End Developer!
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
            .
          </h4>
        </div>
      </section>

      <section className="backend">
        <div>
          <h2 className="heading">What About Back-End?</h2>

          <h4>
            <strong>Front-end</strong> development refers to the
            <strong> client</strong>-side (how a web page
            <strong> looks</strong>).
            <br />
            <strong> Back-end</strong> development refers to the
            <strong> server</strong> -side (how a web page{" "}
            <strong> works</strong>
            ).
          </h4>

          <h4>
            Front-end code is used to create <b>static</b> websites, where the
            purpose is to display the web page. However, if you want to make
            your website <b> dynamic</b> (manage files and databases, add
            contact forms, control user-access, etc.), you need to learn a
            back-end programming language, like{" "}
            <a href="home.html" title="Go To Our PHP Tutorial">
              PHP
            </a>{" "}
            or{" "}
            <a href="home.html" title="Go To Our Python Tutorial">
              Python
            </a>{" "}
            , and use{" "}
            <a href="home.html" title="Go To Our SQL Tutorial">
              SQL
            </a>{" "}
            to communicate with databases.
          </h4>

          <h4>
            If you already have some backend experience, you should know that
            you can use <a href="home.html">W3Schools Spaces</a> to build, test
            and deploy backend code as well.
          </h4>
          <a className="btn" href="home.html">
            Learn More
          </a>
          <h4>
            A list of other popular languages can be found on our{" "}
            <a href="home.html" title="Back To W3schools.com">
              Homepage
            </a>
            .
          </h4>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
