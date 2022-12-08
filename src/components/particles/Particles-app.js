import { useCallback } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import particlesJSON from "./particles.json"

//styles
import "./particles.scss"

const ParticlesBG = (props) => {
  //to instance an object and initialize new value from props
  let prtcls = JSON.parse(JSON.stringify(particlesJSON))

  prtcls.particles.color.value = props.color
  prtcls.particles.line_linked.color = props.linkedColor
  prtcls.background.color.value = props.bgColor
  prtcls.background.opacity = 1

  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  return (
    <>
      <Particles
        id={props.id}
        init={particlesInit}
        loaded={particlesLoaded}
        options={prtcls}
      />
    </>
  )
}

export default ParticlesBG
