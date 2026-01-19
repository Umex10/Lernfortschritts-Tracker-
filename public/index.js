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
window.getModules = getModules;

document.addEventListener("DOMContentLoaded", () => {
  const modules = getModules();
  if (modules){setTasks(modules);
  }
});

reload.addEventListener("click", () => {
  console.log("Reloaded");
//Speichere den aktuellen Filterstatus im localStorage  
  const statusFilter = document.getElementById("statusFilter");
  if (statusFilter) {
    localStorage.setItem("stautusFilter", statusFilter.value);
  }
 // Lade die Module neu
  const newModules = getModules();

  const savedStatus= localStorage.getItem("stautusFilter") || "all";
  const filteredModules = savedStatus === "all" ? newModules : newModules.filter(m => m.status === savedStatus.replace("-", " "));

  setTasks(filteredModules);
});

const sendButton = document.getElementById("send");
if (sendButton) {
  sendButton.addEventListener("click", () => {
    const statusFilter = document.getElementById("statusFilter");
    if (statusFilter) {
      const selectedStatus = statusFilter.value;
      localStorage.setItem("stautusFilter", selectedStatus);

      // Filter the modules based on the selected status
      const modules = getModules();
      const filteredModules = selectedStatus === "all" ? modules : modules.filter(m => m.status === selectedStatus.replace("-", " "));

      setTasks(filteredModules);
    }
  });
}





