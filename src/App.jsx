import React from 'react';
import Navbar from './components/Navbar';
import Place from './components/Place';
import data from './db/db';

const App = () => {
  return (
    <div className='journal-wrapper'>
      <Navbar />
      {data && data.map(travel => {
        return (
          <Place travel={travel} />
        );
      })}
    </div>
  );
};

export default App;