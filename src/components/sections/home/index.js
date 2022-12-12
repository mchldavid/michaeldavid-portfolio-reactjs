import "./_home.scss"

import sass_colors from "../../../abstract/_colors.module.scss"

//icons
import { IconContext } from "react-icons"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"

const Home = () => {
  return (
    <>
      <section id="home" className="home-section">
        <div className="left-grid">
          <div>Hello, I am</div>
          <div>
            <h1>
              Michael <span>David</span>
            </h1>
          </div>
          <p>
            Thank you for visiting. I am a developer specializing in front-end
            and back-end in web and mobile applications using Outsystems in the
            low-code platforms and now I found myself studying in ReactJS
          </p>

          <h4>Front End Web Developer</h4>

          <IconContext.Provider value={{ color: sass_colors.color2 }}>
            <div className="social-icons">
              <BsGithub />
              <BsInstagram />
              <BsLinkedin />
            </div>
          </IconContext.Provider>
        </div>

        <div className="right-grid">
          <div className="radius">
            <div className="radius">
              <img
                className="filter-sepia"
                src={
                  window.location.origin + "/assets/pictures/sample-photo-1.jpg"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <div className="whatido-bg">
        {/* svg line curve */}
        <div className="curve">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>

        <section className="whatido-section">
          <h1>
            What <span>I do?</span>
          </h1>
          <div>
            <div className="cube"></div>
            <h6>
              I’ve been coding professionally for 3 years as a systems
              developmennt specialist that focuses in customizable solutions
            </h6>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
