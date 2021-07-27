import React, { Component } from 'react';
import Loading from '../components/app/loading/Loading';
import Quote from '../components/quote/Quote';
import { fetchQuote } from '../services/twinPeaksApi';

export default class TwinPeaksQuote extends Component {
  state = {
    loading: true,
    name: '',
    text: '',
  };

  getQuote = async () => {
    this.setState({ loading: true });
    //a call to the API
    const { name, text } = await fetchQuote();
    //then update name and text with info from the API
    this.setState({ name, text, loading: false });
  };

  componentDidMount() {
    this.getQuote();
  }

  render() {
    const { name, text, loading } = this.state;

    if(loading) return <Loading />;

    return (
      <>
        <button onClick={this.getQuote}>Get More</button>
        <Quote name={name} text={text} />
      </>
    );
  }
}
