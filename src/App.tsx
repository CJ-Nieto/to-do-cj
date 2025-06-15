import "./styles/App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="app-container">
      <h1>To-Do List con Prioridades 🚀</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
