import './index.css'

const MatchCard = props => {
  const {recentMatchesData} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = recentMatchesData

  const isWin = () => {
    if (matchStatus === 'Lost') {
      return <p className="lost">{matchStatus}</p>
    }
    return <p className="win">{matchStatus}</p>
  }

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        className="match-card-image"
        alt={`competing team ${competingTeam}`}
      />
      <p className="heading">{competingTeam}</p>
      <p className="description">{result}</p>
      {isWin()}
    </li>
  )
}

export default MatchCard
