import React, { Component } from 'react';
import Header from './components/header.js';
import Form from './components/contact-form.js';
import Footer from './components/footer.js';
import './components/sass/globals.scss';
import 'flexboxgrid';
import './components/sass/utilities.scss';
import './components/sass/modals.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
