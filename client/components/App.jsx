import React from 'react'

import { getXkcd } from '../apis/xkcd'

const id = 614


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comic: {
        title: '', 
        img: ''
      }
    }
  }

  componentDidMount() {
    this.showXkcd()
  }
  
  showXkcd = () => {
    console.log(id);
    
    getXkcd(id)
    .then(comic => {
      this.setState({
        comic: comic
      })
    })
  }

  render() {
    return (
      <>
      <h1>Woo! XKCD Comics!</h1>
    
      Title:{this.state.comic && this.state.comic.title}<br/>
      Image:<img src={this.state.comic.img} alt={this.state.comic.alt}/><br/>
      <button onClick={this.showXkcd}>Refresh</button>
      </>
    )
  }
}

export default App