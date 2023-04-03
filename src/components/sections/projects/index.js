import "./projects.scss"

import ProjectItem from "./ProjectItem"
import { BsGithub } from "react-icons/bs"
import { GoLinkExternal } from "react-icons/go"

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
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-duration="800"
            data-aos-easing="ease-out"
            data-aos-once="true"
          >
            <h2>
              My <span>Projects</span>
            </h2>
          </div>

          <div className="project-list-grid">
            <ProjectItem
              image={
                window.location.origin +
                "/assets/pictures/project-thumbnail-03.jpg"
              }
              no="#01"
              title="Chat-kel 💬"
              description="💬 A Chat messaging web app allows users to communicate with each other in real-time powered by firebase. It has an easy-to-use interface and supports multimedia file sharing."
              technology={["ReactJS", "Sass", "Figma", "Firebase"]}
              test={<BsGithub />}
              links={[
                {
                  href: "https://github.com/mchldavid/chat-kel",
                  icon: <BsGithub />,
                  title: "Github",
                },
                {
                  href: "https://mchldavid.github.io/chat-kel/",
                  icon: <GoLinkExternal />,
                  title: "Chat-kel",
                },
              ]}
              delay={200}
            />
            <ProjectItem
              image={
                window.location.origin +
                "/assets/pictures/project-thumbnail-01.jpg"
              }
              no="#01"
              title="Portfolio"
              description="🚀 My Website Portfolio made in ReactJS. 🌟 Showcases my skills and projects in a clean and modern design. With an intuitive interface, visitors can easily navigate and view my work, read about my experience and skills, and get in touch with me through a contact form. The website is fully responsive, ensuring it looks great on all devices."
              technology={["ReactJS", "Sass", "Figma"]}
              links={[
                {
                  href: "https://github.com/mchldavid/michaeldavid-portfolio-reactjs",
                  icon: <BsGithub />,
                  title: "Github",
                },
              ]}
              delay={200}
            />
            <ProjectItem
              image={
                window.location.origin +
                "/assets/pictures/project-thumbnail-02.jpg"
              }
              no="#02"
              title="PUPSMB Class Scheduling"
              description="Undergrad thesis: A computer-aided system that will produce a schedule while monitoring all the possible conflicts during the process of class scheduling."
              technology={["Csharp"]}
              links={[
                {
                  href: "https://github.com/mchldavid/pupsmb-class-scheduling",
                  icon: <BsGithub />,
                  title: "Github",
                },
              ]}
              delay={200}
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
