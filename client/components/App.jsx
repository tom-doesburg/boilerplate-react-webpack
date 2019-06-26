import React from 'react'
import { getPokemon } from '../api/pokemon'

const pokemonName = 'bulbasaur'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {}
    }
  }
  componentDidMount() {
    this.getPokemonData()
  }

  getPokemonData = () => {
    getPokemon(pokemonName)
      .then(pokemon => {
        this.setState({
          pokemon: pokemon
        })
        console.log(pokemon)
      })
  }

  render() {
    return (
      <>
        <h1>React development has begun!</h1>
        {this.state.pokemon && this.state.pokemon.base_experience}


      </>
    )
  }
}







export default App
