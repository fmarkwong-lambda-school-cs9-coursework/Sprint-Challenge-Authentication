import React, { Component } from 'react';
import axios from 'axios';
import Joke from './joke';

export default class Jokes extends Component {
  constructor() {
    super();
    this.state = {
      jokes: [] 
    }
  }

  async componentDidMount() {
    const token = localStorage.token;
    const requestOptions = {
      headers: {
        Authorization: token,
      },
    };

    try {
      const jokes = (await axios.get('http://localhost:5000/api/jokes', requestOptions)).data;
      console.log('jokes are', jokes);
      this.setState({ jokes: jokes });
    }
    catch(err) {
      console.log("ERROR", err);
    }
  }

  render() {
    return (
      <div className="joke-list">
        {this.state.jokes.map( joke => <Joke joke={joke} />)} 
      </div>
    );
  }
}
