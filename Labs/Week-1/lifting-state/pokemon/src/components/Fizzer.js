import React from 'react';

export default function Fizzer(props) {
  let { ctr } = props;
  switch(true) {
    case ctr === 0:         // base case for 0
      break;
    case ctr % 15 === 0:    // deal with fifteen first
      ctr = 'FizzBuzz';
      break;
    case ctr % 3 === 0:     // three and five are interchangeable
      ctr = 'Fizz';
      break;
    case ctr % 5 === 0:
      ctr = 'Buzz';
      break;
    default:                // otherwise do nothing
      break; 
  }
  return (
    <div>
      <h1>Here is the fizzer</h1>
      <div>{ctr}</div>
    </div>
  )
};
