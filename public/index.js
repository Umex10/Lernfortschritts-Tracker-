import { initializeTasks } from "./initializeTasks.js";

const reload = document.getElementById("reload");

export function setTasks(modules) {
  const list = document.getElementById("tasks");
  if (!list) return;
  
  list.innerHTML = "";

  if (!modules || modules.length === 0) {
    console.log("No modules to display");
    return;
  }

  modules.forEach((module) => {
    if (!module || !module.status) {
      console.warn("Module missing status:", module);
      return;
    }

    //SInce some status values have a space letter
    const statusClass = `status-${module.status.replace(/\s+/g, "_")}`;
    
    // Add empty class if category or description is missing
    const categoryClass = module.category ? "" : "empty";
    const descClass = module.description ? "" : "empty";
    
    // Initialize archive array if it doesn't exist
    if (!module.archive) {
      module.archive = [];
    }
    
    // Create archive HTML if there are entries
    let archiveHTML = '';
    if (module.archive && module.archive.length > 0) {
      const archiveItems = module.archive.map(entry => 
        `<li>${entry.timestamp} - Status: <strong>${entry.status}</strong></li>`
      ).join('');
      archiveHTML = `
        <details class="task-archive">
          <summary>History (${module.archive.length})</summary>
          <ul class="archive-list">
            ${archiveItems}
          </ul>
        </details>
      `;
    }

    const li = document.createElement("li");
    
    li.className = `task-item ${statusClass}`; 
    li.setAttribute("data-testid", `task-${module.id}`);

    li.innerHTML = `
      <div class="task-header">
        <span class="task-title" data-testid="task-title">${module.title ?? "Ohne Titel"}</span>
        <div class="task-container-category-status" data-testid="task-meta">
            <span class="task-category ${categoryClass}" data-testid="task-category">${module.category ?? ""}</span>
            <select class="task-status-select ${statusClass}" data-testid="task-status" data-task-id="${module.id}">
              <option value="todo" ${module.status === "todo" ? "selected" : ""}>todo</option>
              <option value="in progress" ${module.status === "in progress" ? "selected" : ""}>in progress</option>
              <option value="done" ${module.status === "done" ? "selected" : ""}>done</option>
            </select>
        </div>
      </div>
      <p class="task-desc ${descClass}" data-testid="task-desc">${module.description ?? ""}</p>
      ${archiveHTML}
    `;
    
    list.appendChild(li);
  });

  // Add event listeners to all status dropdowns
  const statusSelects = document.querySelectorAll('.task-status-select');
  statusSelects.forEach(select => {
    select.addEventListener('change', (e) => {
      const taskId = parseInt(e.target.dataset.taskId);
      const newStatus = e.target.value;
      
      // Update CSS class for color change
      const oldStatusClass = Array.from(e.target.classList).find(cls => cls.startsWith('status-'));
      if (oldStatusClass) {
        e.target.classList.remove(oldStatusClass);
      }
      const newStatusClass = `status-${newStatus.replace(/\s+/g, "_")}`;
      e.target.classList.add(newStatusClass);
      
      // Update in localStorage
      const modules = JSON.parse(localStorage.getItem("moduleData")) || [];
      const moduleToUpdate = modules.find(m => m.id === taskId);
      
      if (moduleToUpdate) {
        // Add to archive
        if (!moduleToUpdate.archive) {
          moduleToUpdate.archive = [];
        }
        const timestamp = new Date().toLocaleString('de-DE');
        moduleToUpdate.archive.push({
          status: newStatus,
          timestamp: timestamp
        });
        
        // Update status
        moduleToUpdate.status = newStatus;
        localStorage.setItem("moduleData", JSON.stringify(modules));
        console.log(`Updated task ${taskId} to status: ${newStatus}`);
        
        // Re-render to show updated archive
        setTasks(modules);
      }
    });
  });
}

if (reload) {
  reload.addEventListener("click", () => {
    console.log("Reloaded");
    initializeTasks();
  });
}