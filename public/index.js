import { getModules } from "./getModules.js";

const reload = document.getElementById("reload");

export function setTasks(modules) {
  const list = document.getElementById("tasks");
  list.innerHTML = "";

  modules.forEach((module) => {
    
    // Since "some css classes/values have a space in the class itself, we need to replace it for safety
    const statusClass = `status-${module.status.replace(" ", "_")}`;

    const li = document.createElement("li");
    
    // Set the content of each li with a task
    li.innerHTML = `
      <div class="task-header">
        <span class="task-title">${module.title}</span>
        <div class="task-container-category-status">
            <span class="task-category">${module.category}</span>
            <span class="task-status ${statusClass}">${module.status}</span>
        </div>
      </div>
      <p class="task-desc">${module.description}</p>
    `;
    list.appendChild(li);
  });
}

if (reload) {
  reload.addEventListener("click", () => {
    console.log("Reloaded");
    const newModules = getModules();
    setTasks(newModules);
  });
}

// Initial load
const initialModules = getModules();
setTasks(initialModules);
