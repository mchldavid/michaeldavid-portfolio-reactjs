import "./contact.scss"
import MyLinks from "../../svg/MyLinks"
import { AiOutlineCopy } from "react-icons/ai"
import { FiSend } from "react-icons/fi"
import { useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

const Contact = () => {
  const emojis = ["😁", "🤓", "😎", "🤗", "🧐", "😇", "👌", "👋", "🤟"]

  useEffect(() => {
    const span = document.querySelector(".email-copy")

    span.onclick = function (event) {
      console.log(Math.random())
      navigator.clipboard.writeText("david.michael15.md@gmail.com")
      toast(
        `${emojis[Math.floor(Math.random() * emojis.length)]} Email Copied!`,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        }
      )
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
              <span title="david.michael15.md@gmail.com">david.michael15.md@gmail.com</span>
              <div className="send-email">
                david.michael15.md@gmail.com
                <FiSend />
              </div>
            </a>
            <span className="email-copy" title="Copy Email">
              <AiOutlineCopy />
            </span>
          </h4>

          <MyLinks />
        </section>
        <ToastContainer />
      </div>
    </>
  )
}

export default Contact
