import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return tasks.length ? (
    <div>
      <ul>
        {tasks.map((task) => {
          return <li>{task.title}</li>;
        })}
      </ul>
    </div>
  ) : (
    <div>No Books Found</div>
  );
};

export default TaskList;
