import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepagefolder/Homepage'
import NavBar from './components/navbarfolder/Navbar'
import TreeTrimming from './components/treetrimmingfolder/TreeTrimming'
import StormDamage from './components/stormdamagefolder/Stromdamage'
import TreeRemoval from './components/treeremovalfolder/Treeremoval'
import StumpGrinding from './components/stumpgrindingfolder/Stumpgrinding'
import Contact from './components/contactfolder/contact'
import Footer from './components/contactfolder/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faUsers, faExclamationTriangle, faMoneyBillAlt, faBolt, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
library.add(faUsers)
library.add(faExclamationTriangle)
library.add(faMoneyBillAlt)
library.add(faBolt)
library.add(faPhone)




class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Homepage />
        <TreeRemoval />
        <StumpGrinding />
        <TreeTrimming />
        <StormDamage />
        <Footer />
      </div>
    );
  }
}

export default App;

        // stormdamage in middle