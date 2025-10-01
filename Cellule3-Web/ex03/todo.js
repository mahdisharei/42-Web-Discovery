// ===== Cookie helpers =====
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
}

// ===== Model (array of strings) =====
let todos = []; // آخرین آیتم در اندیس 0 نیست؛ ما همیشه به ابتدای DOM اضافه می‌کنیم

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
      // قدیمی‌ترین پایین؛ جدیدترین بالا — ما از ابتدا تا انتها می‌سازیم ولی prepend می‌کنیم تا ترتیب حفظ شود
      for (let i = 0; i < todos.length; i++) {
        addTodoToDOM(todos[i], /*prependOnly=*/false);
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
      // حذف از مدل
      const idx = todos.indexOf(text);
      if (idx !== -1) todos.splice(idx, 1);
      // حذف از DOM
      div.remove();
      // ذخیره
      saveTodos();
    }
  });

  // آیتم جدید باید بالا اضافه شود
  if (prependOnly) {
    listEl.prepend(div);
  } else {
    listEl.append(div);
  }
}

newBtn.addEventListener("click", () => {
  const val = prompt("TO DO");
  if (!val) return; // cancel یا رشته خالی
  const text = val.trim();
  if (text.length === 0) return;

  // مدل: آیتم جدید را در ابتدای آرایه می‌گذاریم تا ترتیب بالا->پایین حفظ شود
  todos.unshift(text);
  // DOM
  addTodoToDOM(text, /*prependOnly=*/true);
  // ذخیره
  saveTodos();
});

// ابتدا لیست را از کوکی بارگذاری کن
loadTodos();