//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  let myName = 'Jose Prieto';
  let myAge = 25;
  const myHobbies = [
    { id: 1, title: 'Running' },
    { id: 2, title: 'Video Games' },
    { id: 3, title: 'Watching Sports' },
  ];
  return (
    <div>
      <h1>About Me</h1>
      {/* add JSX here */}
      <p>
        Hello my name is {myName} and I am {myAge}.
      </p>
      <ul>
        {myHobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.title}</li>
        ))}
      </ul>
    </div>
  );
}
