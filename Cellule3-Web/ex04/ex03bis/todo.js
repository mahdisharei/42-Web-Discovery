function setCookie(name, value, days = 7) {
  const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}
function getCookie(name) {
  const target = encodeURIComponent(name) + "=";
  const parts = document.cookie.split("; ");
  for (const p of parts) {
    if (p.indexOf(target) === 0) return decodeURIComponent(p.substring(target.length));
  }
  return null;
function setCookie(name, value, days = 7) {
  const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/";
}
function getCookie(name) {
  const target = encodeURIComponent(name) + "=";
  const parts = document.cookie.split("; ");
  for (const p of parts) {
    if (p.indexOf(target) === 0) return decodeURIComponent(p.substring(target.length));
  }
  return null;
}

// مدل ما: [{id, text}, ...]
let todos = [];

function saveTodos() {
  setCookie("todo_list", JSON.stringify(todos), 7);
}

function renderTodo(item, prepend = true) {
  const $div = $("<div>", {
    class: "todo",
    "data-id": item.id,
    title: "Click to remove",
    text: item.text
  });

  $div.on("click", function() {
    if (confirm("Remove this TO DO?")) {
      const id = $(this).data("id");
      todos = todos.filter(t => t.id !== id);
      $(this).remove();
      saveTodos();
    }
  });

  if (prepend) {
    $("#ft_list").prepend($div);
  } else {
    $("#ft_list").append($div);
  }
}

function loadTodos() {
  const raw = getCookie("todo_list");
  if (!raw) return;
  try {
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) {
      todos = arr;
      for (const t of todos) renderTodo(t, false);
    }
  } catch (_) {}
}

$(function() {
  loadTodos();

  $("#newBtn").on("click", function() {
    const val = prompt("TO DO");
    if (val == null) return;
    const text = val.trim();
    if (!text) return;

    const item = { id: Date.now().toString(36) + Math.random().toString(36).slice(2), text };
    
    todos.unshift(item);
    renderTodo(item, true);
    saveTodos();
  });
});
}

let todos = []; 

const listEl = document.getElementById("ft_list");
const newBtn = document.getElementById("newBtn");

function saveTodos() {
  setCookie("todo_list", JSON.stringify(todos), 7);
}

function loadTodos() {
  const raw = getCookie("todo_list");
  if (!raw) return;
  try {
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) {
      todos = arr;
      for (let i = 0; i < todos.length; i++) {
        addTodoToDOM(todos[i], false);
      }
    }
  } catch(_) {}
}

function addTodoToDOM(text, prependOnly = true) {
  const div = document.createElement("div");
  div.className = "todo";
  div.title = "Click to remove";
  div.textContent = text;

  div.addEventListener("click", () => {
    if (confirm("Remove this TO DO?")) {
      
      const idx = todos.indexOf(text);
      if (idx !== -1) todos.splice(idx, 1);
      
      div.remove();
      
      saveTodos();
    }
  });

  if (prependOnly) {
    listEl.prepend(div);
  } else {
    listEl.append(div);
  }
}

newBtn.addEventListener("click", () => {
  const val = prompt("TO DO");
  if (!val) return;
  const text = val.trim();
  if (text.length === 0) return;

  todos.unshift(text);
  addTodoToDOM(text, true);
  saveTodos();
});

loadTodos();