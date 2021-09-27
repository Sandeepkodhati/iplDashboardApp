// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    bannerImageUrl: '',
    latestMatches: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const teamBannerUrl = data.team_banner_url

    const latestMatchDetails = {
      id: data.latest_match_details.id,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const recentMatchDetails = data.recent_matches.map(eachTeam => ({
      id: eachTeam.id,
      competingTeam: eachTeam.competing_team,
      competingTeamLogo: eachTeam.competing_team_logo,
      date: eachTeam.date,
      firstInnings: eachTeam.first_innings,
      manOfTheMatch: eachTeam.man_of_the_match,
      matchStatus: eachTeam.match_status,
      result: eachTeam.result,
      secondInnings: eachTeam.second_innings,
      umpires: eachTeam.umpires,
      venue: eachTeam.venue,
    }))

    this.setState({
      bannerImageUrl: teamBannerUrl,
      latestMatches: latestMatchDetails,
      recentMatches: recentMatchDetails,
      isLoading: false,
    })
  }

  getTeamColorClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SRH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return null
    }
  }

  render() {
    const {bannerImageUrl, latestMatches, recentMatches, isLoading} = this.state
    const className = `team-matches-container ${this.getTeamColorClassName()}`
    console.log(bannerImageUrl)

    return (
      <div>
        {isLoading ? (
          <div testid="loader" className={`loader ${className}`}>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={className}>
            <img
              src={bannerImageUrl}
              alt="team banner"
              className="team-image"
            />
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <div className="main-container">
              <LatestMatch latestMatchData={latestMatches} />
              <ul className="match-item-container">
                {recentMatches.map(eachMatchData => (
                  <MatchCard
                    recentMatchesData={eachMatchData}
                    key={eachMatchData.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
