import React from 'react'

import { getXkcd } from '../apis/xkcd'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comic: {
        title: '',
        img: '',
        alt: '',
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.showXkcd(1)
  }

  showXkcd = (id) => {
    getXkcd(id)
      .then(comic => {
        this.setState({
          comic: comic
        })
      })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.showXkcd(this.state.id)
  }

  handleChange() {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Get some XKCD comics! XD</h1>
        </div>
        <div>
          <form method="POST" onSubmit={this.handleSubmit} />
          <label style={{ display: 'block' }} />Choose a number between 0 and like 2500 and we'll serve up a comic: <input type="text" name="id" onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>ok</button><br />
          {this.state.comic.img && <img src={this.state.comic.img}/>}<br />
          {this.state.comic.alt}
        </div>
      </div>
    )
  }
}



export default App