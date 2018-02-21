import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import random from './random.js';


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
      countTwo: 0,
      message: "",
      ranNum: random.getRandomInt(1, 50)
    }
  }

onClickOne(e) {
  console.log(this.state.ranNum)
  if (this.state.countOne === this.state.ranNum){
  this.setState({
    message: 'Fighter One Wins!'
  })} else {
    this.setState({
      countOne: this.state.countOne + 1
    })
  }
}
onClickTwo(e) {
  console.log(this.state.ranNum)
  if (this.state.countTwo === this.state.ranNum){
  this.setState({
    message: 'Fighter Two Wins!'
  })} else {
    this.setState({
      countTwo: this.state.countTwo + 1
    })
  }
 }

 // handleClick(e) {
 //   if (this.state.countOne === 3) {
 //     this.setState({
 //       Message: "You Win!"
 //     })
 //   }
 // }

  componentDidMount() {
    console.log(random.getRandomInt(1, 10))
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
        <br />
        <h1 id="derp" className="countOne">{this.state.countOne}</h1>
        <h1 id="derp"className="countTwo">{this.state.countTwo}</h1>
        <h4 className="winningMessage">{this.state.message}</h4>
        <button id="fO" type='button' className="fighterOne" onClick = {this.onClickOne}>Fighter One</button>
        <button id="fT" type='button' className="fighterTwo" onClick = {this.onClickTwo}>Fighter Two</button>
      </div>
    );
  }
}

export default App;
