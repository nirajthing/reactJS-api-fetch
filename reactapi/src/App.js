import React, { Component } from 'react';

export default class FetchRandomUser extends 
Component {

  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false })
    // console.log(data.results[0]);
  }

  render() {
    if (this.state.loading) {
      return <div>Loading.....</div>
    }

    if (!this.state.person) {
      return <div>Didnt Get Person Detail.</div>
    }

    return (
      <div>
        <div>{this.state.person.name.title}</div>
        <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div>
        <img src={this.state.person.picture.large} alt="person face" />
      </div>
    );
  }
}




