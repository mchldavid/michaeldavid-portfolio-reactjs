import "./_projects.scss"

import ProjectItem from "./ProjectItem"

const Projects = () => {
  return (
    <>
      <div className="project-bg">
        {/* svg line curve */}
        <div className="curve1">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>

        <section id="project" className="project-section">
          <h2>My <span>Projects</span></h2>
          <div className="project-list-grid">
            <ProjectItem
              image={
                window.location.origin + "/assets/pictures/sample-photo-1.jpg"
              }
              no="#01"
              title="my portfolio"
              description="My personal website"
            />
            <ProjectItem
              image={
                window.location.origin + "/assets/pictures/sample-photo-1.jpg"
              }
              no="#01"
              title="my portfolio"
              description="My personal website"
            />
            <ProjectItem
              image={
                window.location.origin + "/assets/pictures/sample-photo-1.jpg"
              }
              no="#01"
              title="my portfolio"
              description="My personal website"
            />
          </div>
        </section>

        {/* svg line curve */}
        <div className="curve2">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Projects
