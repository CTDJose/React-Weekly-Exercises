//SnackList.jsx
function SnackApp() {
  const snacks = [
    { name: 'saltines', rank: 4 },
    { name: 'popcorn', rank: 3 },
    { name: 'chocolate', rank: 2 },
    { name: 'chips', rank: 1 },
  ];
  const snackOrdered = snacks.toSorted((a, b) => a.rank - b.rank);
  return (
    <ul>
      {snackOrdered.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ul>
  );
}

export default SnackApp;
