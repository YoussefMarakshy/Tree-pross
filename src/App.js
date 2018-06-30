import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepagefolder/Homepage'
import TreeTrimming from './components/treetrimmingfolder/TreeTrimming'
import StormDamage from './components/stormdamagefolder/Stromdamage'
import TreeRemoval from './components/treeremovalfolder/Treeremoval'
import StumpGrinding from './components/stumpgrindingfolder/Stumpgrinding'


class App extends Component {
  render() {
    return (
      <div>
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