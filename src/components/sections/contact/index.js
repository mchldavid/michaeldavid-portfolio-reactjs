import "./contact.scss"
import MyLinks from "../../svg/MyLinks"
import { AiOutlineCopy } from "react-icons/ai"
import { FiSend } from "react-icons/fi"
import { useEffect } from "react"

const Contact = () => {
  useEffect(() => {
    const span = document.querySelector(".email-copy")

    span.onclick = function (event) {
      navigator.clipboard.writeText("david.michael15.md@gmail.com")
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
          <h4 className="my-email">
            <a href="mailto:david.michael15.md@gmail.com">
              <span>david.michael15.md@gmail.com</span>
              <div className="send-email">
                Email
                <FiSend />
              </div>
            </a>
            <span className="email-copy">
              <AiOutlineCopy />
            </span>
          </h4>

          <MyLinks />
        </section>
      </div>
    </>
  )
}

export default Contact
