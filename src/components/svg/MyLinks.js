import "./mylinks.scss"

//icons
import { IconContext } from "react-icons"
import { BsGithub, BsInstagram } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"

const MyLinks = (props) => {
  var delayValue = props.delay||0
  const getDelayValue = () => {
    return (delayValue += 100)
  }
  return (
    <>
      <div className="social-icons">
        <IconContext.Provider value={{ color: props.color }}>
          <div
            data-aos="zoom-in"
            data-aos-delay={getDelayValue()}
            data-aos-duration="500"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
          >
            <a title="Github" href="https://github.com/mchldavid">
              <BsGithub />
            </a>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay={getDelayValue()}
            data-aos-duration="500"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
          >
            <a title="Instagram" href="https://www.instagram.com/mchldvid/">
              <BsInstagram />
            </a>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay={getDelayValue()}
            data-aos-duration="500"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
          >
            <a
              title="Linkedin"
              href="https://www.linkedin.com/in/michael-david-038766195/"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </>
  )
}

export default MyLinks
