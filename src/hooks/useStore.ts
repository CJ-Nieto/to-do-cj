import create from 'zustand';
import { generateTaskId } from "../utils/formatTasks";

interface Task {
  id: string;
  name: string;
  priority: "Alta" | "Media" | "Baja";
  createdAt: Date;
}

interface StoreState {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
}

const useStore = create<StoreState>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({
    tasks: [...state.tasks, task].sort((a, b) => {
      const priorityOrder = { Alta: 1, Media: 2, Baja: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }),
  })),
  removeTask: (id) => set((state) => ({ tasks: state.tasks.filter(task => task.id !== id) })),
}));

export default useStore;
