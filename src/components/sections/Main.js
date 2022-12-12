import { useEffect } from "react"

//component
import ParticlesBG from "../particles/Particles-app"
import Home from "./home"
import About from "./about"
import Projects from "./projects"
import Experience from "./experience"
import Contact from "./contact"

//exported from sass variables
import sass_colors from "../../abstract/_colors.module.scss"

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
    computedInnerHeight = parseInt(computedInnerHeight) 

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
          aboutOffsetTop - computedInnerHeight
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
        color={sass_colors.color2}
        linkedColor={sass_colors.color2}
        bgColor={sass_colors.color1}
      />
      <ParticlesBG
        id={bottomClassParticlesID}
        color={sass_colors.color2}
        linkedColor={sass_colors.color2}
        bgColor={sass_colors.color1}
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
