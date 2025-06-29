document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addBtn");
  const taskTitle = document.getElementById("taskTitle");
  const taskDate = document.getElementById("taskDate");
  const taskTime = document.getElementById("taskTime");
  const taskList = document.getElementById("taskList");

  addBtn.addEventListener("click", addTask);

  function addTask() {
    const title = taskTitle.value.trim();
    const date = taskDate.value;
    const time = taskTime.value;

    if (!title) {
      alert("Please enter a task title.");
      return;
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = `${title} - ${date || "No Date"} ${time || ""}`;

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.classList.add("edit");
    editBtn.onclick = () => editTask(taskSpan);

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔️";
    completeBtn.classList.add("complete");
    completeBtn.onclick = () => li.classList.toggle("completed");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = () => li.remove();

    actions.append(editBtn, completeBtn, deleteBtn);
    li.append(taskSpan, actions);
    taskList.appendChild(li);

    taskTitle.value = "";
    taskDate.value = "";
    taskTime.value = "";
  }

  function editTask(taskSpan) {
    const newText = prompt("Edit your task:", taskSpan.textContent);
    if (newText !== null && newText.trim() !== "") {
      taskSpan.textContent = newText.trim();
    }
  }
});
