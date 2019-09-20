import React from "react";
import { Audio } from "src/components";
// import styles from './index.module.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Audio src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4">
        播放
      </Audio>
    </div>
  );
};

export default App;
