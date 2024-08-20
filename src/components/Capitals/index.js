import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

const Options = props => {
  const {capitalDisplayText, cid} = props

  return (
    <option className="op" value={cid}>
      {capitalDisplayText}
    </option>
  )
}

class Captials extends Component {
  state = {
    selectedCountry: countryAndCapitalsList[0].id,
    showcountry: countryAndCapitalsList[0].country,
  }

  onUserChange = event => {
    const filtered = countryAndCapitalsList.filter(
      each => each.id === event.target.value,
    )
    const {country} = filtered[0]
    console.log(country)
    this.setState({
      selectedCountry: event.target.value,
      showcountry: country,
    })
  }

  render() {
    const {selectedCountry, showcountry} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="head">Countries And Capitals</h1>
          <select
            onChange={this.onUserChange}
            name="captials"
            id="cselect"
            className="select"
            value={selectedCountry}
          >
            {countryAndCapitalsList.map(each => (
              <Options
                key={each.id}
                country={each.country}
                capitalDisplayText={each.capitalDisplayText}
                cid={each.id}
              />
            ))}
          </select>
          <label className="para" htmlFor="cselect">
            is capital of which country
          </label>
          <p className="con">{showcountry}</p>
        </div>
      </div>
    )
  }
}

export default Captials
