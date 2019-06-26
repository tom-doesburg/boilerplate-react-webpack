import React from 'react'

import { getPokemon } from '../apis/PokeApi'

const PokeId = 87

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {
        abilities: [{
          ability :{
          }
        }]
      }
    }
  }

  componentDidMount() {
    this.getPokemonData()
  }

  getPokemonData = () => {
    getPokemon(PokeId)
      .then(pokemon =>{
        console.log('data', pokemon);
        
        this.setState({
          pokemon : pokemon
        })
      })
  }



  render(){
    console.log('this is an apility')
    return (
      <>
      <h1>Pokémon!</h1>
      
      <p>Pokemon: {this.state.pokemon.name}</p><br></br>
      <p>Height: {this.state.pokemon.height}m</p><br></br>
      Abilities:
      <ul>
      {this.state.pokemon.abilities.map(ability => {
        return <li>{ability.ability.name}</li>
      })}
      </ul>
      </>
    )
  }
}

export default App
