import "./mylinks.scss"

//icons
import { IconContext } from "react-icons"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"

const MyLinks = (props) => {
  return (
    <>
      <div className="social-icons">
        <IconContext.Provider value={{ color: props.color }}>
          <a href="https://github.com/mchldavid">
            <BsGithub />
          </a>
          <a href="https://www.instagram.com/mchldvid/">
            <BsInstagram />
          </a>
          <a href="https://www.linkedin.com/in/michael-david-038766195/">
            <FaLinkedinIn />
          </a>
        </IconContext.Provider>
      </div>
    </>
  )
}

export default MyLinks
