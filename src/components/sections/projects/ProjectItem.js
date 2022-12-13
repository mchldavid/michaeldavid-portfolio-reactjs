const ProjectItem = (props) => {
  console.log("image", props.image)
  return (
    <>
      <div className="project-item radius">
        <div className="top-container">
          <img className="filter-sepia" src={props.image} alt="" />
          <div className="gradient"></div>

          <div className="top-details">
            <div className="number">{props.no}</div>
            <div className="title">{props.title}</div>
            <div className="technology">
              {/* list of technology */}
              react js, sass
            </div>
          </div>
        </div>
        <div className="bottom-container">
          {/* details sections */}
          <p>{props.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectItem
