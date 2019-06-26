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
        <h1>React development has begun!</h1>
        {this.state.people.map(person => {
          return (
            <p>{person.name}</p>
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
