import React from 'react'
import { getPokemon } from '../api/pokemon'

// const pokemonName = 'pokemon'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: []
    }

    // this.showDetails = this.showDetails.bind(this)
  }

  componentDidMount() {
    this.getPokemonData()
  }

  getPokemonData = () => {
    getPokemon()
      .then(pokemon => {
        this.setState({
          pokemon: pokemon
        })
        console.log(pokemon)
      })
  }

  // showDetails (pokemon) {
  //   this.setState({

  //   })
  // }

  render() {
    return (
       <>
        <h1>React development has begun!</h1>
        <ul>{this.state.pokemon.map(pokemon => {
          return <li>{pokemon.name} &nbsp; <a href="https://pokeapi.co/api/v2/pokemon/1/"></a></li>
        })}
        </ul>
        
      </>

    )
  }
}











// GETS INDIVIDUAL POKEMON
// const pokemonName = 'bulbasaur'

// class App extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       pokemon: {}
//     }
//   }
//   componentDidMount() {
//     this.getPokemonData()
//   }

//   getPokemonData = () => {
//     getPokemon(pokemonName)
//       .then(pokemon => {
//         this.setState({
//           pokemon: pokemon
//         })
//         console.log(pokemon)
//       })
//   }

//   render() {
//     return (
//       <>
//         <h1>React development has begun!</h1>
//         {this.state.pokemon && this.state.pokemon.base_experience}


//       </>
//     )
//   }
// }







export default App
