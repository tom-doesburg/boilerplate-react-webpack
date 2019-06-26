import React from 'react'

import { getPokemon } from '../apis/poke'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {},
      name: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    
  }

  componentDidMount() {
    this.getPokemonData(1)
  }

  getPokemonData = (id) => {
    getPokemon(id)
    .then(pokemon => {
      this.setState({
        pokemon: pokemon
      })
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.getPokemonData(this.state.id)
  }

  handleChange() {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    console.log(this.state)
    
    return (
      <div>
        <div>
          <h1>hi friends and family</h1>
        </div>
        <div>
          <form method= "POST" onSubmit={this.handleSubmit}/>
          <label style={{display: 'block'}}/>PokéDex Number: <input type="text" name="id" onChange={this.handleChange}/>
          {/* <input type="submit">Go!</input><br/><br/>  */}
          <button onClick={this.handleSubmit}>ok</button><br/><br/> 
          Name: {this.state.pokemon.name && this.state.pokemon.name}
        </div>
      </div>
    )
  }
}



export default App
