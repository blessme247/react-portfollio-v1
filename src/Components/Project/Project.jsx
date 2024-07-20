import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

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

Project.propTypes = {
  image: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};

export default Project