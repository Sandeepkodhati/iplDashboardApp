// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <div className="match-container">
        <p className="competing-team-heading">{competingTeam}</p>
        <p className="date-heading">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <div className="image-container">
        <img
          src={competingTeamLogo}
          className="match-image"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="container">
        <p className="custom-description">{firstInnings}</p>
        <p className="custom-description">{secondInnings}</p>
        <p className="custom-description">{manOfTheMatch}</p>
        <p className="custom-description">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
