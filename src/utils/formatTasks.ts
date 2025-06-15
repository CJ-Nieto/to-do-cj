import { v4 as uuidv4 } from "uuid";

export const generateTaskId = (): string => uuidv4();

export const normalizeTask = (task: string): string => {
  return task.trim().replace(/\s+/g, " ").replace(/^\w/, (c) => c.toUpperCase());
};
