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

      {/* Pie de página */}
      <footer style={{ textAlign: "center", padding: "10px", fontSize: "14px", marginTop: "20px" }}>
        <p>Desarrollado por <strong>CJ Nieto</strong></p>
        <a href="https://www.linkedin.com/in/cjnieto" target="_blank" style={{ marginRight: "10px" }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="30" height="30" />
        </a>
        <a href="https://github.com/CJ-Nieto" target="_blank">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="30" height="30" />
        </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
