import React from 'react';
import { Audio } from 'src/components'
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Audio className={styles.btn} src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4">播放</Audio>
    </div>
  );
}

export default App;
