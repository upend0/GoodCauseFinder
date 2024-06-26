import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import GiveLoveIcon from "./../assets/give-love.png"

/**
 * Represents an organization tile component.
 *
 * @param {Object} props - The component props.
 * @param {number} props.id - The ID of the organization.
 * @returns {JSX.Element} The JSX element representing the organization tile.
 */
const OrganizationTile = ({ id }) => {
  return (
    <div className="organization-tile">
      <div className="card mb-3 organization-card p-3">
        <Link to={`/organizations/${id}`} className="tile">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={GiveLoveIcon} className="card-img-top" alt="Give love icon" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title link-underline">Organization {id}</h5>
                <p className="card-text">Organization description {id} - This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-body-secondary">Something else {id}</small></p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

// This is a way to make sure that the component is receiving the right type of props
// If the wrong type of props is passed, the console will show an error
// This prop is required and must be a number
OrganizationTile.propTypes = {
  id: PropTypes.number.isRequired,
}

export default OrganizationTile