import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      response: ``,
      playerOneURL: `I'm a stringy string!!`,
      playerTwoURL: ``
    }
  }


  componentDidMount() {
    this.callToPixabay()
    .then((res) => {
      console.log(res)
      this.setState({ playerOneURL: res.hits[3].webformatURL})

    })
    .catch(err => console.error(err))

    this.callToPixabay()
    .then((res) => {
      console.log(res)
      this.setState({ playerTwoURL: res.hits[7].webformatURL})
    })
    .catch(err => console.error(err))

  }

  getAnimalArr () {
    const animalArr = ['fish', 'dogs', 'cats', 'dinosaurs', 'birds', 'rodents', 'reptiles', 'insects', 'primate'];
    return animalArr[Math.floor(Math.random() * animalArr.length)]
  }

  callApi = async () => {
    const response = await fetch('localhost:5000/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  callToPixabay = async () => {
    const apiKey = 'https://pixabay.com/api/?key=8108440-7022e5e45a6d1378cd0d81f25&q=';
    const searchParamater = this.getAnimalArr()
    const pictureType = '&image_type=photo&page=1&per_page=11';
    const completeStr = apiKey + searchParamater + pictureType;
    const response = await fetch(completeStr);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <img src={this.state.playerOneURL} alt='Fighter One'/><img src={this.state.playerTwoURL} alt='Fighter Two'/>
      </div>
    );
  }
}

export default App;
