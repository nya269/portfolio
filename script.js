function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Veuillez entrer une tâche !");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function toggleTask(element) {
    element.parentElement.classList.toggle("done");
}

function deleteTask(button) {
    button.parentElement.remove();
}