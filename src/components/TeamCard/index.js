// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {matchDetails} = props
  const {id, name, teamImageUrl} = matchDetails
  return (
    <Link to={`/team-matches/${id}`} className="list-item-link">
      <li className="list-item-container">
        <div className="row-styling">
          <img src={teamImageUrl} className="image" alt={name} />
          <p className="list-item-heading">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
