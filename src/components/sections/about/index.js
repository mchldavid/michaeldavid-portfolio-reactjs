import "./about.scss"
import SkillsTechnology from "./SkillsTechnology"

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
              <SkillsTechnology />
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
