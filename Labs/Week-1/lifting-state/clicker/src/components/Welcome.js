import React from 'react';

const users = [
  'kendrick',
  'soleil',
  'celeste',
  'derick',
  'daniel'
];

function sendWelcomeEmail(name) {
  console.log(`sending email to ${name}`)
}

export default props => (
  <div>
    <h1>Welcome New Users</h1>
    {users.map(user => (
      <div key={user}>
        {user} <button
          onClick={() => sendWelcomeEmail(user)}
        >Send Email</button>
      </div>
    ))}
  </div>
);
