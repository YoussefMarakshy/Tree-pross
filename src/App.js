import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepagefolder/Homepage'
import NavBar from './components/navbarfolder/Navbar'
import TreeTrimming from './components/treetrimmingfolder/TreeTrimming'
import StormDamage from './components/stormdamagefolder/Stromdamage'
import TreeRemoval from './components/treeremovalfolder/Treeremoval'
import StumpGrinding from './components/stumpgrindingfolder/Stumpgrinding'


class App extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous" />
        <NavBar />
        <Homepage />
        <TreeRemoval />
        <StumpGrinding />
        <TreeTrimming />
        <StormDamage />
      </div>
    );
  }
}

export default App;

        // stormdamage in middle