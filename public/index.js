import { getModules } from "./getModules.js";

const reload = document.getElementById("reload");
const tasks = document.querySelectorAll("#tasks li");

export const setTasks = (newModules) => {
reload.addEventListener("click", () => {
  tasks.forEach((li, index) => {
    const newModuleString = newModules[index];
    li.textContent = `${newModuleString.id} 
    ${newModuleString.status}`;
  });
})
}


