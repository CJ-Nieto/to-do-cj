import "./styles/App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function App() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#222" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 150 },
            move: { enable: true, speed: 2 },
            number: { value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: 3 },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          zIndex: 0,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      />
      <div className="app-container" style={{ position: "relative", zIndex: 1 }}>
        <h1>To-Do List con Prioridades 🚀</h1>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;