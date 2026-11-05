//studentWork.jsx
import UserProfile from './components/UserProfile';
import TaskFilters from './components/TaskFilters';
import TaskItem from './components/TaskItem';
import filterTasks from './utils/filterTasks';
import useTasks from './hooks/useTasks';
import { useState } from 'react';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useTasks();

  //  #1: Data fetching + state + UI logic all mixed together

  // #2: Filtering logic inside component
  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}
      <UserProfile studentName={'Student'} />

      {/* #4: Repeated button JSX */}
      <div>
        <TaskFilters filter={filter} setFilter={setFilter} />
      </div>

      {/* #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}
