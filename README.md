# To-Do List con Prioridades 🚀

Una aplicación web de lista de tareas con prioridades, desarrollada en React + TypeScript y Vite, con un fondo animado de partículas para una experiencia visual atractiva.

## Características

- Añade tareas manualmente con prioridad (Alta, Media, Baja)
- Elimina tareas fácilmente
- Las tareas se muestran ordenadas por prioridad
- Fondo animado de partículas usando [react-tsparticles](https://github.com/matteobruni/tsparticles)
- Descarga de tareas en formato CSV
- Interfaz moderna y responsiva

## Tecnologías utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (entorno de desarrollo ultrarrápido)
- [Zustand](https://github.com/pmndrs/zustand) (manejo de estado)
- [react-tsparticles](https://github.com/matteobruni/tsparticles) (fondo animado)
- [tsparticles](https://github.com/matteobruni/tsparticles)

## Instalación y uso

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia la aplicación en modo desarrollo con Vite:**
   ```bash
   npm run dev
   ```
   La app estará disponible en [http://localhost:5173](http://localhost:5173) (o el puerto que indique tu terminal).

## Estructura del proyecto

```
src/
  components/
    TaskInput.tsx
    TaskList.tsx
  hooks/
    useStore.ts
  utils/
    formatTasks.ts
  styles/
    App.css
  App.tsx
public/
  favicon.ico
```

## Personalización

- **Fondo animado:** Puedes modificar el comportamiento y colores de las partículas en `App.tsx` dentro de la propiedad `options` del componente `<Particles />`.
- **Prioridades:** Puedes cambiar los nombres o colores de las prioridades en los componentes y estilos.

## Créditos

Desarrollado por [Carlos J Nieto](https://www.linkedin.com/in/cjnieto).

---

¡Disfruta tu nueva To-Do List con estilo y velocidad gracias a Vite!

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

While this project uses React, Vite supports many popular JS frameworks. [See all the supported frameworks](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

## Deploy Your Own

Deploy your own Vite project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/vite-react&template=vite-react)

_Live Example: https://vite-react-example.vercel.app_

### Deploying From Your Terminal

You can deploy your new Vite project with a single command from your terminal using [Vercel CLI](https://vercel.com/download):

```shell
$ vercel
```
