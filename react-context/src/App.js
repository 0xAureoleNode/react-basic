import TaskList from './components/Tasklist';
import TaskContextProvider from './contexts/TaskContext';

const App = () => {
  return (
    <div>
      <TaskContextProvider>
        <TaskList />
      </TaskContextProvider>
    </div>
  );
};

export default App;
