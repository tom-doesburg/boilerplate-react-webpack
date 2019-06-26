import React from 'react'

import { getPokemon } from '../apis/poke'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {},
      name: '',
      order: '',
      image: '',
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
        pokemon: pokemon,
        image: pokemon.sprites.front_default
      })
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.getPokemonData(this.state.id)
  }

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    
    return (
      <div>
        <div className="blue-text">
          <h1>hi friends and family</h1>
        </div>
        <div className="blue-text">
          <form method= "POST" onSubmit={this.handleSubmit}/>
          <label style={{display: 'block'}}/>Insert a number: <input type="text" name="id" onChange={this.handleChange}/>
          {/* <input type="submit">Go!</input><br/><br/>  */}
          <button onClick={this.handleSubmit}>ok</button><br/><br/> 
          Name: {this.state.pokemon.name && this.state.pokemon.name} <br/>
          PokéDex Number: {this.state.pokemon.order && this.state.pokemon.order} <br/>
          <img src={this.state.image}/>
          <h3>i hate coding</h3>
        </div>
      </div>
    )
  }
}



export default App
