const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

addBtn.addEventListener("click", function () {
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = inputTask.value;
  const checkBtn = document.createElement("input");
  checkBtn.setAttribute("type", "checkbox");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "삭제";

  todoList.append(li);
  li.prepend(checkBtn);
  li.append(delBtn);
  inputTask.value = "";

  checkBtn.addEventListener("click", function () {
    if (checkBtn.checked === true) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  });

  delBtn.addEventListener("click", function () {
    li.remove();
  });
});
