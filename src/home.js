import React, { Component } from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import './components/sass/globals.scss'
import 'flexboxgrid';
import './components/sass/utilities.scss';
import Screen from './components/screen.js';
import './components/sass/modals.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Screen />
        <Footer />
      </div>
    );
  }
}

export default Home;
