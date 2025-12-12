function addTodo() {
    const input = document.getElementById("todo-input");
    const date = document.getElementById("todo-date");
    const list = document.getElementById("todo-list");

    if (input.value.trim() === "") {
        alert("Please enter a todo item.");
        return;
    }

    if (list.children[0].innerText === "No todos available") {
        list.innerHTML = "";
    }

    const li = document.createElement("li");
    li.className = "p-3 bg-white rounded-xl shadow flex justify-between items-center border border-pink-200";

    li.innerHTML = `
        <span>
            <strong class="text-pink-700">${input.value}</strong><br>
            <small class="text-pink-400">${date.value || "No date"}</small>
        </span>

        <button onclick="this.parentElement.remove()" 
                class="px-3 py-1 bg-red-400 hover:bg-red-500 text-white rounded-lg">
            X
        </button>
    `;

    list.appendChild(li);

    input.value = "";
    date.value = "";
}

function resetTodos() {
    const list = document.getElementById("todo-list");
    list.innerHTML = `<li class="text-pink-500">No todos available</li>`;
}
