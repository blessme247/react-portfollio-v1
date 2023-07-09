import { Link } from 'react-router-dom'

const Project = ({image, projectTitle, projectLink }) => {
  return (
    <div className="project">
    <div className="project-wrapper">
      <img src={image} alt = "projectImage" />
      <div className="img-overlay" />
      <div className="project-copy">
        <div className="project-name"> {projectTitle} <Link to={projectLink} target="blank">Visit Site</Link></div>
      </div>
    </div>
  </div>
  )
}

export default Project