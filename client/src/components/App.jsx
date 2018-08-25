import React from 'react';
import axios from 'axios';
import styles from '../css/App.css';
import PostureList from './PostureList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className={styles.app}>
        Render Something
        Yoga-T to Try out this App!
        <PostureList/>
      </div>
    );
  }
}

export default App;