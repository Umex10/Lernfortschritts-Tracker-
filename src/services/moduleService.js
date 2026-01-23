// Fetches the module.json and saves it to localStorage
export const fetchModule = async () => {
  try {

    const data = localStorage.getItem("moduleData");

    if (!data) {
    const res = await fetch("module.json");

    if (!res.ok) throw new Error("Fetch failed");

    const modules = await res.json();
    localStorage.setItem("moduleData", JSON.stringify(modules));
    console.log("module.json saved to localStorage");
    return modules;
    }

    const localStorageModuls = JSON.parse(data);
    return localStorageModuls;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
