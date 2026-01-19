import { getModules } from "./getModules";

const reload = document.getElementById("reload");
const tasks = document.querySelectorAll("#tasks li");

const newModuls = getModules();

reload.addEventListener("click", () => {
  listItems.forEach((li, index) => {
    li.textContent = `${newModuls[index]}`;
  });
})

