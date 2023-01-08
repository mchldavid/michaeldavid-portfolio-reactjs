import "./about.scss"

//icons
import {
  FaReact,
  FaNodeJs,
  FaSass,
  FaCss3Alt,
  FaHtml5,
  FaGit,
  FaFigma,
} from "react-icons/fa"
import { DiJavascript1, DiMysql } from "react-icons/di"
import { SiCsharp } from "react-icons/si"

const About = () => {
  return (
    <>
      <div className="about-bg">
        <section id="about" className="about-section">
          <div className="grid">
            <div className="left-section">
              <div
                data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <h2>
                  About <span>me</span>
                </h2>
              </div>

              <p
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                Welcome, I am MICHAEL DAVID
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                After obtaining my Bachelor's Degree in Information Technology,
                I started my journey as an OutSystems developer based in the
                Philippines. I am a great team player and an independent worker
                that can adapt to all challenging situations.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                In addition, I am into web designing by making it a responsive
                and user friendly through the applications I develop.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                Currently, I am focusing on studying ReactJS.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                If you're interested in connecting with me, send me a message
                below!
              </p>
            </div>

            <div className="right-section">
              <div
                data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="800"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <h4>Skills & Technologies</h4>
              </div>
              <div className="tech-icons-grid">
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 970.82 970.82"
                    fill="currentColor"
                  >
                    <path
                      d="M313.54,514.23c9,90.31,85.79,161,179.11,161s170.09-70.74,179.12-161c0-6,1.5-12,1.5-18.07,0-99.33-81.28-179.1-180.62-179.1s-179.11,81.27-179.11,179.1v18.07M8,491.65C8,223.75,224.75,7,492.65,7S978.82,223.75,978.82,491.65,760.57,977.82,492.65,977.82,8,759.57,8,491.65"
                      transform="translate(-8 -7)"
                    />
                  </svg>
                  <div className="icon-label">Outsystems</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <FaReact />
                  <div className="icon-label">ReactJS</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <FaNodeJs />
                  <div className="icon-label">NodeJS</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <DiJavascript1 />
                  <div className="icon-label">Javascript</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <FaSass />
                  <div className="icon-label">Sass</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <FaCss3Alt />
                  <div className="icon-label">Css</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <FaHtml5 />
                  <div className="icon-label">HTML5</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <SiCsharp />
                  <div className="icon-label">Csharp</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="1100"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <DiMysql />
                  <div className="icon-label">MySQL</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="1200"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <FaGit />
                  <div className="icon-label">Git</div>
                </div>
                <div
                  className="item"
                  data-aos="zoom-in"
                  data-aos-delay="1300"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-back"
                  data-aos-once="true"
                >
                  <FaFigma />
                  <div className="icon-label">Figma</div>
                </div>
              </div>
            </div>

            {/* end of grid div*/}
          </div>
        </section>

        {/* svg line curve */}
        <div className="curve">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default About
