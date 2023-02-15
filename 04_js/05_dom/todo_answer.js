const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

// function delTask(t) {
//   t.parentNode.remove(); //delBtn onclick 속성 방법용 함수
// }

function addList() {
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "내용을 입력해 주세요.");
    return; //함수 빠져나가기, { 중첩을 줄이며 else 대신에
  }

  const addLi = document.createElement("li");
  const checkBtn = document.createElement("input");
  checkBtn.setAttribute("type", "checkbox");
  checkBtn.addEventListener("click", function () {
    if (checkBtn.checked === true) {
      checkBtn.parentNode.style.textDecoration = "line-through";
    } else {
      checkBtn.parentNode.setAttribute("style", "text-decoration : none");
    }
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "삭제";
  delBtn.addEventListener("click", function (e) {
    e.target.parentNode.remove(); //어떤 삭제버튼이 눌렸는지 알아야 하기 때문에 event target 사용
  });

  //delBtn기능 다른 방법
  //delBtn.setAttribute("onclik", "delTask(this)"); //html에 onclik 속성 넣기

  addLi.append(checkBtn);
  addLi.append(inputTask.value);
  addLi.append(delBtn); // append는 text도 붙일수 있다.
  todoList.appendChild(addLi);
  inputTask.value = "";
}

addBtn.addEventListener("click", addList); //길어지면 함수 따로
