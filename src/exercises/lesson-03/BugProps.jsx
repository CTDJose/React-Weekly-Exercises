// src/exercises/lesson-03/BugProps.jsx

import { useState } from 'react';

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/

export default function BugProps({ name = 'friend' }) {
  const [message, newMessage] = useState('Hello ' + name);
  function handleChange() {
    newMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
/*The reason that it wasent working becuase the code was changing variables there was not a use state or setters. I added a useState
so it could store the initial message as well a setter. When the button is cliked the setter takes effect after that
React displays the new message.

*/
