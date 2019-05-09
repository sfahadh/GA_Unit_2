import React from 'react';

export default props => {
  return (
    <ul>
      {props.poke.map(item => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
}
