import "./_about.scss"

//icons
import {
  FaReact,
  FaNodeJs,
  FaSass,
  FaCss3Alt,
  FaHtml5,
  FaGit,
} from "react-icons/fa"
import { DiJavascript1 } from "react-icons/di"
import { SiCsharp, SiMysql} from "react-icons/si"

const About = () => {
  return (
    <>
      <div className="about-bg">
        <section id="about" className="about-section">
          <div className="grid">
            <div className="left-section">
              <h2>
                About <span>me</span>
              </h2>
              <p>Welcome, I am MICHAEL DAVID</p>
              <p>
                After graduating with a bachelor's degree in Information
                Technology, I started my journey as an OutSystems developer
                based in the Philippines. I am a mature team worker and
                adaptable to all challenging situations and a great team player.
              </p>
              <p>
                And I'm also interested in designing by making it responsive and
                comfortable to use through the applications I develop.
              </p>
              <p>Now I am focusing on studying ReactJS.</p>
              <p>
                If you're interested in connecting with me, send me a message
                below!
              </p>
            </div>

            <div className="right-section">
              <div><h4>Skills</h4></div>
              <div className="tech-icons-grid">
                <div className="item">
                  <FaReact />
                  <div className="icon-label">ReactJS</div>
                </div>
                <div className="item">
                  <FaNodeJs />
                  <div className="icon-label">NodeJS</div>
                </div>
                <div className="item">
                  <DiJavascript1 />
                  <div className="icon-label">Javascript</div>
                </div>
                <div className="item">
                  <FaSass />
                  <div className="icon-label">Sass</div>
                </div>
                <div className="item">
                  <FaCss3Alt />
                  <div className="icon-label">Css</div>
                </div>
                <div className="item">
                  <FaHtml5 />
                  <div className="icon-label">HTML5</div>
                </div>
                <div className="item">
                  <FaGit />
                  <div className="icon-label">Git</div>
                </div>
                <div className="item">
                  <SiCsharp />
                  <div className="icon-label">Csharp</div>
                </div>
                <div className="item">
                  <SiMysql />
                  <div className="icon-label">MySQL</div>
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
