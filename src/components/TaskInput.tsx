import { useState } from "react";
import useStore from "../hooks/useStore";
import { fetchAIEnhancements } from "../services/aiService";
import { generateTaskId, normalizeTask } from "../utils/formatTasks";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Media");
  const [loading, setLoading] = useState(false);
  const addTask = useStore((state) => state.addTask);

  const handleAddTask = async () => {
    if (!task.trim()) return;

    setLoading(true);
    try {
      const enhancedTask = await fetchAIEnhancements(task);
      const newTask = {
        id: generateTaskId(),
        name: normalizeTask(enhancedTask || task),
        priority,
        createdAt: new Date(),
      };

      addTask(newTask);
      setTask("");
    } catch (error) {
      console.error("Error al procesar la tarea:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Añadir tarea..." 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Alta">Alta 🚀</option>
        <option value="Media">Media 📌</option>
        <option value="Baja">Baja 🛑</option>
      </select>
      <button onClick={handleAddTask} disabled={loading}>
        {loading ? "Procesando..." : "Agregar"}
      </button>
    </div>
  );
};

export default TaskInput;
