import React from 'react'
import { getPeople } from '../api/swapi'



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      people: []
    }
  }

  componentDidMount() {
    this.getPeopleData()
  }

  getPeopleData = () => {
    getPeople()
      .then(people => {
        this.setState({
          people: people

        })
      })
  }

  render() {
    return (
      <>
      <h1> Star Wars Characters </h1>
        {this.state.people.map(person => {
          return (
            <div>
              <p><h2>{person.name} was born {person.birth_year}</h2></p>

              <p><h3>Personal details</h3></p>
              <ul>
                <li>Eye Color: {person.eye_color}</li>  <li>Mass: {person.mass}</li>
                <li>Gender: {person.gender}</li><li>Skin Color: {person.height}</li>
                <li>Hair Color: {person.hair_color}</li><li>Height: {person.height}</li>
              </ul>
            </div>
          )
        })}
      </>
    )
  }
}

// const App  = () => {
//   return (
//     <h1>React development has begun!</h1>
//   )
// }

export default App
