export function generateTaskId(tasks: Array<{ id: number }>) {
  if (!tasks.length) return 1;
  const ids = tasks.map((t) => t.id);
  // Busca el menor ID disponible (por si hay huecos)
  let id = 1;
  while (ids.includes(id)) id++;
  return id.toString();
}

export function normalizeTask(name: string) {
  return name.trim();
}