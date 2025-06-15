import useStore from "../hooks/useStore";

const TaskList = () => {
  const tasks = useStore((state) => state.tasks);
  const removeTask = useStore((state) => state.removeTask);

  // Función para descargar tareas en CSV
  const handleDownloadTasksCSV = () => {
    const csvContent = [
      ["ID", "Nombre", "Prioridad", "Fecha Creación"],
      ...tasks.map(task => [task.id, task.name, task.priority, task.createdAt.toISOString()])
    ]
    .map(row => row.join(","))
    .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const downloadAnchor = document.createElement("a");
    downloadAnchor.href = URL.createObjectURL(blob);
    downloadAnchor.download = "tareas.csv";
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
  };

  return (
    <div>
      <h2>Tareas Prioritarias</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas pendientes.</p>
      ) : (
        <div>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <span>{task.name} - <strong>{task.priority}</strong></span>
                <button onClick={() => removeTask(task.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button onClick={handleDownloadTasksCSV}>📥 Descargar tareas (CSV)</button>
        </div>
      )}
    </div>
  );
};

export default TaskList;
