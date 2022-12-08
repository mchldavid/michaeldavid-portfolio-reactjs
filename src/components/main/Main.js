import { useEffect } from "react"

//component
import ParticlesBG from "../particles/Particles-app"
import Home from "./home/Home"
import About from "./about/About"
import palettes from "../../json/palettes.json"
import Projects from "./projects/Projects"
import Experience from "./experience/Experience"
import Skills from "./skills/Skills"
import Contact from "./contact/Contact"

import "./main.scss"

const Main = () => {
  const topClassParticlesID = "particles-container-top"
  const bottomClassParticlesID = "particles-container-bottom"

  const winListen = () => {
    let cnvsParticle1 = document.querySelector(`#${topClassParticlesID}`)
    let cnvsParticle2 = document.querySelector(`#${bottomClassParticlesID}`)
    let contact_el = document.querySelector("#contact")

    //find the position and height of contact element to set the particles2 position properly to make a parallax effect
    let COffsetTop = contact_el.offsetTop
    let computedInnerHeight = window.getComputedStyle(contact_el).height
    computedInnerHeight = computedInnerHeight.substring(
      0,
      computedInnerHeight.indexOf("px")
    ) 
    computedInnerHeight = parseInt(computedInnerHeight) + 50

    // set the Y particles2 to #contact by default from fixed position
    cnvsParticle2.style.transform = `translateY(${
      COffsetTop - computedInnerHeight
    }px)`

    window.addEventListener("scroll", () => {
      let value = window.scrollY

      //move the Y particles1 to make parallax effect
      cnvsParticle1.style.transform = `translateY(-${value / 30}px)`

      // set the parallax effect on particles2
      if (window.innerHeight >= contact_el.getBoundingClientRect().top) {
        cnvsParticle2.style.transform = `translateY(${
          window.innerHeight - computedInnerHeight - value / 30
        }px)`
      } else
        cnvsParticle2.style.transform = `translateY(${
          COffsetTop - computedInnerHeight - value
        }px)`
    })
  }

  useEffect(() => {
    winListen()
  }, [])

  return (
    <main className="wrapper">
      <ParticlesBG
        id={topClassParticlesID}
        color={palettes.Themes.Color.clr2}
        linkedColor={palettes.Themes.Color.clr2}
        bgColor={palettes.Themes.Color.clr1}
      />
      <ParticlesBG
        id={bottomClassParticlesID}
        color={palettes.Themes.Color.clr3}
        linkedColor={palettes.Themes.Color.clr3}
        bgColor={palettes.Themes.Color.clr1}
      />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}

export default Main
