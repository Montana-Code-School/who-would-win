import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.onClickOne = this.onClickOne.bind(this);
    this.onClickTwo = this.onClickTwo.bind(this);
    this.state = {
      response: ``,
      playerOneURL: ``,
      playerTwoURL: ``,
      countOne: 0,
      countTwo: 0
    }
  }
onClickOne(e) {
  this.setState({
    countOne: this.state.countOne + 1
  });
}

onClickTwo(e) {
  this.setState({
    countTwo: this.state.countTwo + 1
  });
 }

 handleClick(e) {
   const clicked = e.target.dataset.id
   if (this.state.countOne(clicked) || this.state.countTwo(clicked) === 3) {
     this.setState({
       message: 'You win!'
     })
   }
 }

  componentDidMount() {
    this.callToPixabay()
    .then((res) => {
      console.log(res)
      this.setState({ playerOneURL: res.hits[Math.floor(Math.random() * 49)].webformatURL})

    })
    .catch(err => console.error(err))

    this.callToPixabay()
    .then((res) => {
      console.log(res)
      this.setState({ playerTwoURL: res.hits[Math.floor(Math.random() * 49)].webformatURL})
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
    const pictureType = '&image_type=photo&page=1&per_page=50';
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
          <h1 className="App-title">Choose Your Victor!</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <img id='fighterOne' src={this.state.playerOneURL} alt='Fighter One'/>
        <img id='fighterTwo' src={this.state.playerTwoURL} alt='Fighter Two'/>
        <h1 className="countOne">{this.state.countOne}</h1>
        <h1 className="countTwo">{this.state.countTwo}</h1>
        <button onClick = {this.onClickOne}>Fighter One</button>
        <button onClick = {this.onClickTwo}>Fighter Two</button>
      </div>
    );
  }
}

export default App;
