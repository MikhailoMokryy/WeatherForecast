import React from 'react';
import styles from './App.module.scss';
import WeatherPage from '../pages/WeatherPage';

function App() {
  return (
    <div className={styles.App}>
      <WeatherPage />
    </div>
  );
}

export default App;
