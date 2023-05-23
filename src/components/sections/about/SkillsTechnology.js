import React from "react"
import icons from "../../../list/icons"

//json
import skillsJSON from "../../../json/skills.json"

const SkillsTechnology = () => {
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-easing="ease-out"
        data-aos-once="true"
      >
        <h4>Skills & Technologies</h4>
      </div>
      <div className="tech-icons-grid">
        {skillsJSON.map((skill, id) => (
          <div
            className="item"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
            key={id}
          >
            {icons[skill.icon]}
            <div className="icon-label">{skill.title}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SkillsTechnology
