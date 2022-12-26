import "./contact.scss"
import MyLinks from "../../svg/MyLinks"
import { AiOutlineCopy } from "react-icons/ai"
import { useEffect } from "react"

const Contact = () => {
  useEffect(() => {
    const span = document.querySelector(".email-to")

    span.onclick = function (event) {
      navigator.clipboard.writeText("david.michael15.md@gmail.com");
    }

    // span.addEventListener("copy", function (event) {
    //   event.preventDefault()
    //   if (event.clipboardData) {
    //     event.clipboardData.setData(
    //       "text/plain",
    //       "david.michael15.md@gmail.com"
    //     )
    //     console.log("copied text", event.clipboardData.getData("text"))
    //   }
    // })
  }, [])

  return (
    <>
      <div className="contact-bg">
        <section id="contact" className="contact-section">
          <h2>
            Let's <span>Work Together</span>
          </h2>
          <h4>
            <a href="mailto:david.michael15.md@gmail.com">
              david.michael15.md@gmail.com
            </a>
            <span className="email-to">
              <AiOutlineCopy />
            </span>
          </h4>

          <div className="social-icons">
            <MyLinks />
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
