import './index.css'
import {Link} from 'react-router-dom'

// bug - 6 => Link is not imported

// bug -7 => while defining link they wrote "path" but it actually "to" should be written

// bug -8 => ":" is added before id (params) and change path to `/team-matches/${id}`

// bug - 11 => className in Link container is written wrong

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageURL} = teamDetails

  return (
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
