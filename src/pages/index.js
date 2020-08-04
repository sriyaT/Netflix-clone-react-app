import React, { Component } from 'react';
import Header from '../components/Header';
import TabComponents from '../components/TabComponent';
import Footer from '../components/tabs_nav/Footer';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <TabComponents />
        <Footer />
      </div>
    );
  }
}
export default Main;
