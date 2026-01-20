const STORAGE_KEY = "moduleData";

document.addEventListener("DOMContentLoaded", () => {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
        console.error("No module data in localStorage");
        return;
    }

    const modules = JSON.parse(data);

    renderModules(modules);

    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
        filterAndRender(modules);
    });

    const statusFilter = document.getElementById("statusFilter");
    statusFilter.addEventListener("change", () => {
        const value = statusFilter.value;

        if (value === "All") {
            renderModules(modules);
        } else {
            const filtered = modules.filter(m => m.status === value);
            renderModules(filtered);
        }
    });
});

function filterAndRender(modules) {
    const searchInput = document.getElementById("searchInput");
    const statusFilter = document.getElementById("statusFilter");

    const searchText = searchInput.value.toLowerCase();
    const statusValue = statusFilter.value;

    const filtered = modules.filter(m => {

        const matchesSearch =
            m.title.toLowerCase().includes(searchText) ||
            (m.description && m.description.toLowerCase().includes(searchText));


        const matchesStatus = statusValue === "All" || m.status === statusValue;

        return matchesSearch && matchesStatus;
    });

    renderModules(filtered);
}


function renderModules(modules) {
    const container = document.getElementById("moduleList");
    container.innerHTML = "";

    modules.forEach(module => {
        const card = document.createElement("div");
        card.className = "moduleCard";

        const headerRow = document.createElement("div");
        headerRow.className = "card-header-row";

        const title = document.createElement("div");
        title.className = "ModuleTitle";
        title.textContent = module.title;

        const categoryBadge = document.createElement("div");
        categoryBadge.className = "category-badge";
        categoryBadge.textContent = module.category;

        headerRow.appendChild(title);
        headerRow.appendChild(categoryBadge);

        const status = document.createElement("div");
        const statusClass = module.status.toLowerCase().replace(/\s+/g, '-');
        status.className = `status status-${statusClass}`;
        status.textContent = module.status;

        card.appendChild(headerRow);
        card.appendChild(status);

        card.addEventListener('click', () => {
            const detailContent = document.getElementById("moduleDetailContent");
            detailContent.innerHTML = `
                <div class="detail-item"><strong>Title:</strong> ${module.title}</div>
                <div class="detail-item"><strong>Category:</strong> ${module.category}</div>
                <div class="detail-item"><strong>Status:</strong> ${module.status}</div>
                <div class="detail-item"><strong>Description:</strong> ${module.description}</div>
                <div class="detail-item"><strong>Default:</strong> ${module.default}</div>
            `;
        });

        container.appendChild(card);
    });

    updateOverallProgress(modules);
}

function updateOverallProgress(modules) {
    const total = modules.length;
    const doneCount = modules.filter(m => m.status.toLowerCase() === 'done').length;
    const percentage = total > 0 ? Math.round((doneCount / total) * 100) : 0;

    const progressBar = document.getElementById("overallProgressBar");
    const percentText = document.getElementById("overallPercent");

    if (progressBar) progressBar.style.width = percentage + "%";
    if (percentText) percentText.textContent = percentage + "%";
}