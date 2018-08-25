import React from 'react';
import axios from 'axios';
import styles from '../css/App.css';
import InputDetails from './InputDetails.jsx';
import Options from './Options.jsx';
import Schedule from './Schedule.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  ComponentDidMount () {

  }
  render () {
    return (
      <div className={styles.app}>
        Render Something
        
        <InputDetails/>
        <Options/>
        <Schedule/>
      </div>
    );
  }
}

export default App;