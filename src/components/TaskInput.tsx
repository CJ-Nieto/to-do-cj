import { useState } from "react";
import useStore, { Task } from "../hooks/useStore";
import { generateTaskId, normalizeTask } from "../utils/formatTasks";
//import { fetchAIEnhancements } from "../services/aiService";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState<"Media" | "Alta" | "Baja">("Media");
  //const [loading, setLoading] = useState(false);
  //const [showAI, setShowAI] = useState(false);
  //const [username, setUsername] = useState("");
  const addTask = useStore((state) => state.addTask);
  const tasks = useStore((state) => state.tasks);

  const handleAddTask = () => {
    if (!task.trim()) return;

    const newTask: Task = {
      id: Number(generateTaskId(tasks)),
      name: normalizeTask(task),
      priority,
      createdAt: new Date(),
    };

    addTask(newTask);
    setTask("");
  };

/*
const handleGenerateAITasks = async () => {
  if (!username.trim()) return;
  setLoading(true);
  try {
    const aiTasks = await fetchAIEnhancements(`Lista de tareas para ${username}`);
    if (aiTasks && typeof aiTasks === "string") {
      aiTasks.split("\n").forEach((taskText: string) => {
        if (taskText.trim()) {
          addTask({
            id: generateTaskId(),
            name: normalizeTask(taskText),
            priority: "Media",
            createdAt: new Date(),
          });
        }
      });
    } else {
      console.error("La respuesta de la IA es nula o no es texto:", aiTasks);
      // Aquí puedes mostrar un mensaje de error al usuario si lo deseas
    }
  } catch (error) {
    console.error("Error al procesar la IA:", error);
  }
  setLoading(false);
  setShowAI(false); // Cierra el pop-up
};
*/

  return (
    <div>
      <input 
        type="text" 
        placeholder="Añadir tarea..." 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value as "Media" | "Alta" | "Baja")}>
        <option value="Alta">Alta 🚀</option>
        <option value="Media">Media 📌</option>
        <option value="Baja">Baja 🛑</option>
      </select>
      <button onClick={handleAddTask}>Agregar tarea</button>

      {/*
      // Botón para activar IA
      <button className="ai-button" onClick={() => setShowAI(true)}>
        🤖
      </button>
      */}

      {/*
      //Pop-up de IA 
      {showAI && (
        <>
          <div className="ai-overlay"></div> //Fondo borroso
          <div className="ai-popup">
            <h3>¡Hola! Soy CJ</h3>
            <input 
              type="text" 
              placeholder="Describe tipo de tareas que requieres" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <button onClick={handleGenerateAITasks} disabled={loading}>
              {loading ? "Generando tareas..." : "Generar lista"}
            </button>
            <button onClick={() => setShowAI(false)}>Cerrar</button>
          </div>
        </>
      )}*/}
    </div>
  );
};

export default TaskInput;
