const statusSelect = document.getElementById("statusFilter");

statusSelect.addEventListener("change", () => {
    localStorage.setItem("status", statusSelect.value);
    applyFilter();
});

function applyFilter() {
    const modules =
        JSON.parse(localStorage.getItem("moduleData")) || [];

    const statusFilter = localStorage.getItem("status");

    const filteredModules = statusFilter
        ? modules.filter((m) => m.status === statusFilter)
        : modules;

    function renderList(modules) {
        const list = document.getElementById("moduleList");
        list.innerHTML = ""; // clear old content

        if (modules.length === 0) {
            list.innerHTML = "<li>No modules found</li>";
            return;
        }

        modules.forEach((m) => {
            const li = document.createElement("li");
            li.textContent = `${m.name} (${m.status})`;
            list.appendChild(li);
        });
    }
}

const savedStatus = localStorage.getItem("status");
if (savedStatus !== null) {
    statusSelect.value = savedStatus;
}

applyFilter();