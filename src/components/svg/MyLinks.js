//icons
import { IconContext } from "react-icons"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"

const MyLinks = (props) => {
  return (
    <>
      <IconContext.Provider value={{ color: props.color }}>
        <a href="https://github.com/mchldavid">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/mchldvid/">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/michael-david-038766195/">
          <BsLinkedin />
        </a>
      </IconContext.Provider>
    </>
  )
}

export default MyLinks
