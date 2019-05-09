import React from 'react';

export default function Click(props) {
  return (
    <div>
      <button onClick={() => console.log(`I've been clicked!`)}>Log the Click!</button>
    </div>
  )
};
