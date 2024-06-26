import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

/**
 * Represents the project area component.
 *
 * @returns {JSX.Element} The JSX element representing the project area component.
 */
const ProjectTile = ({ project }) => {
  // Truncate the text to a certain number of characters, and thereby limit the height of the tile
  const characterLimit = 150
  const truncatedText = project.text.substring(0, characterLimit)

  return (
    <div>
      <div className="col h-100">
        <Link to={`/projects/${project.id}`} className="tile">
          <div className="card">
            <img src={project.imgURL} className="card-img-top" alt={project.title} />
              <div className="card-body d-flex flex-column">
              <h5 className="card-title link-underline">{project.title}</h5>
                <p className="card-text flex-grow-1 overflow-hidden">
                  {truncatedText}
                  {/* Show ... if the text exceeds the character limit */}
                  {project.text.length > characterLimit && '...'} 
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">{project.organization}</small>
              </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

// This is a way to make sure that the component is receiving the right type of props
// If the wrong type of props is passed, the console will show an error
// This prop is required and must be an object
ProjectTile.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectTile