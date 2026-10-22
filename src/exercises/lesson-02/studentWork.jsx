//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//studentWork.jsx
import SimpleHeading from './SnackHeader.jsx';
import FunFooter from './SnackFooter.jsx';
import SnackApp from './SnackList.jsx';
export default function StudentWork() {
  return (
    <div>
      <SimpleHeading />
      {/* add JSX here */}
      <SnackApp />
      <FunFooter />
    </div>
  );
}
