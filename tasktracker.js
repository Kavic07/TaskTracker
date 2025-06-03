function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  if (taskInput.value !== "") {
    const li = document.createElement("li");
    li.textContent = taskInput.value;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => li.remove();

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
