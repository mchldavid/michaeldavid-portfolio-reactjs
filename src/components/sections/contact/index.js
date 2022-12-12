import "./_contact.scss"

import sass_colors from "../../../abstract/_colors.module.scss"

//icons
import { IconContext } from "react-icons"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"

const Contact = () => {
  return (
    <>
      <div className="contact-bg">
        <section id="contact" className="contact-section">
          <h2>
            Let's <span>Work Together</span>
          </h2>
          <h4>
            david.michael15.md@gmail.com
          </h4>

          <IconContext.Provider value={{ color: sass_colors.color2 }}>
            <div className="social-icons">
              <BsGithub />
              <BsInstagram />
              <BsLinkedin />
            </div>
          </IconContext.Provider>
        </section>
      </div>
    </>
  )
}

export default Contact
