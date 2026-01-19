import { getModules } from "./getModules.js";
import {changeModuleStatus} from "./statusFilter.js";


const reload = document.getElementById("reload");
const taskList = document.getElementById("tasks");

export const setTasks = (newModules) => {
  taskList.innerHTML = ""; // reset

  newModules.forEach(module => {
    const li = document.createElement("li");
    li.className = "module-item";
    li.innerHTML = `
    <strong>${module.title}</strong>(ID: ${module.id})
    <span class = "status">${module.status}</span>
    <button onclick="changeModuleStatus(${module.id}, 'todo')">To do</button>
    <button onclick="changeModuleStatus(${module.id}, 'in-progress')">In Progress</button>
    <button onclick="changeModuleStatus(${module.id}, 'done')">Done</button>
    `;
    taskList.appendChild(li);
  });
};
window.setTasks = setTasks; 
windows.getModules = getModules;

document.addEventListener("DOMContentLoaded", () => {
  const modules = getModules();
  if (modules){setTasks(modules);
  }
});

reload.addEventListener("click", () => {
  console.log("Reloaded")
  const newModules = getModules();
  setTasks(newModules);
});

