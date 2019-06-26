import React from 'react'
import { getMemes } from '../apis/memes'

const memeId = 112126428

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      memes: []
    }
  }

  componentDidMount() {
    this.getMemesData()
  } 

  getMemesData = () =>  {
    getMemes(memeId).then(memes => {
      console.log(memes)
      this.setState({
        memes: memes,
      })
    })
  
  }

  render(){
    return (<h1>Lets get this working!!! Boom</h1>)
    this.state = map(memes)
  }


}

// const App = () => {
//   return (
    
//   )
// }


export default App
