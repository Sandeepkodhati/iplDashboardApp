import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    matchData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedMatchData = data.teams.map(eachMatch => ({
      id: eachMatch.id,
      name: eachMatch.name,
      teamImageUrl: eachMatch.team_image_url,
    }))
    console.log(updatedMatchData)
    this.setState({matchData: updatedMatchData, isLoading: false})
  }

  render() {
    const {matchData, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" />
          </div>
        ) : (
          <div className="home-container">
            <div className="ipl-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="ipl-heading">IPL Dashboard</h1>
            </div>
            <ul className="list-container">
              {matchData.map(eachData => (
                <TeamCard matchDetails={eachData} key={eachData.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
