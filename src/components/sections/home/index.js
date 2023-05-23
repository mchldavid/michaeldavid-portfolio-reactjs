import "./home.scss"
import MyLinks from "../../svg/MyLinks"
import { useEffect } from "react"
// import resumePDF from "../../../files/michael-david-resume.pdf"

const Home = () => {
  const AnimateTitle = (elementClass, delay) => {
    const title = document.querySelector(elementClass)

    const textArr = title.innerText.split("")

    // reset text
    title.textContent = ""

    textArr.forEach((letters) => {
      let div = document.createElement("div")
      div.innerHTML = letters
      title.appendChild(div)
    })

    const getText = document.querySelectorAll(elementClass + " div")
    getText.forEach((el) => {
      setTimeout(function () {
        el.classList.add("animate-text")
        el.style.opacity = "1"
      }, delay)
      delay += 100
    })
  }

  const handleGetInTouch = () => {
    window.location.href = "mailto:david.michael15.md@gmail.com";
  }

  //open pdf in a new tab
  const handleDownloadResume = () => {
    window.open("assets/files/michael-david-resume.pdf", "_blank").focus()
  }

  useEffect(() => {
    document.querySelector(".name").style.opacity = 1
    AnimateTitle(".text1", 1300)
    AnimateTitle(".text2", 2000)
  })

  return (
    <>
      <section className="home-section">
        <div className="left-grid">
          <div
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="800"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
          >
            Nice to meet you <span className="wave">👋</span>, I am
          </div>

          <div>
            <h1
              className="name"
              data-aos-delay="1000"
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
              data-aos-once="true"
            >
              <div className="text1">Michael </div>
              <div className="text2">David</div>
            </h1>
          </div>
          <p
            data-aos="fade-right"
            data-aos-delay="2350"
            data-aos-duration="800"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
          >
            Thank you for visiting. I am a developer specializing in front-end
            and back-end on web and mobile applications using Outsystems in
            low-code platforms. Now I have found myself studying ReactJS.
          </p>

          <div
            className="roles"
            data-aos="fade-right"
            data-aos-delay="2450"
            data-aos-duration="800"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
          >
            <h4>Web & Mobile Developer</h4>
          </div>

          <MyLinks delay={2650} />
          <div
            data-aos="fade-right"
            data-aos-delay="2700"
            data-aos-duration="800"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
          >
            <button className="primary" onClick={handleGetInTouch}>Get in Touch</button>
            <button className="resume" onClick={handleDownloadResume}>Download Resume</button>
          </div>
        </div>

        <div className="right-grid">
          <div
            className="radius"
            data-aos="fade-left"
            data-aos-delay="2500"
            data-aos-duration="800"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
          >
            <div className="radius">
              <img
                className=""
                src={window.location.origin + "/assets/pictures/myphoto.jpg"}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <div className="whatido-bg">
        {/* svg line curve */}
        <div className="curve">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>

        {/* <section className="whatido-section">
          <h1
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="800"
            data-aos-easing="ease-out"
            data-aos-once="true"
          >
            What <span>I do?</span>
          </h1>

          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="800"
            data-aos-easing="ease-out"
            data-aos-once="true"
          >
            <div className="cube radius"></div>
            <h6>
              I’ve been coding professionally for three years as a Systems
              Development Specialist, focusing on customizable solutions.
            </h6>
          </div>
        </section> */}
      </div>
    </>
  )
}

export default Home
