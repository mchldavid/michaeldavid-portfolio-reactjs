import { useEffect } from "react"

//component
import ParticlesBG from "../particles/Particles-app"
import Home from "./home/Home"
import About from "./about/About"
import palettes from "../../json/palettes.json"
import Projects from "./projects/Projects"
import Experience from "./experience/Experience"
import Contact from "./contact/Contact"

import "./main.scss"

const Main = () => {
  const topClassParticlesID = "particles-container-top"
  const bottomClassParticlesID = "particles-container-bottom"

  const winListen = () => {
    let cnvsParticle1 = document.querySelector(`#${topClassParticlesID}`)
    let cnvsParticle2 = document.querySelector(`#${bottomClassParticlesID}`)
    let about_el = document.querySelector("#experience")

    //find the position and height of about element to set the particles2 position properly to make a parallax effect
    let aboutOffsetTop = about_el.getBoundingClientRect().top
    let computedInnerHeight = window.getComputedStyle(about_el).height
    computedInnerHeight = computedInnerHeight.substring(
      0,
      computedInnerHeight.indexOf("px")
    )
    computedInnerHeight = parseInt(computedInnerHeight) + 50

    console.log('offsettop',aboutOffsetTop)
    // // set the Y particles2 to #contact by default from fixed position
    cnvsParticle2.style.transform = `translateY(${
      aboutOffsetTop - computedInnerHeight
    }px)`

    window.addEventListener("scroll", () => {
      let value = window.scrollY

      //move the Y particles1 to make parallax effect
      cnvsParticle1.style.transform = `translateY(-${value / 30}px)`

      // set the parallax effect on particles2
      if (window.innerHeight >= about_el.getBoundingClientRect().top) {
        cnvsParticle2.style.transform = `translateY(${
          window.innerHeight - computedInnerHeight - value / 30
        }px)`
      } else {
        console.log("test")
        cnvsParticle2.style.transform = `translateY(${
          aboutOffsetTop - computedInnerHeight - value
        }px)`
      }
    })
  }

  useEffect(() => {
    winListen()
  }, [])

  return (
    <main>
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
      <Projects />
      <Experience />
      <About />
      <Contact />
    </main>
  )
}

export default Main
