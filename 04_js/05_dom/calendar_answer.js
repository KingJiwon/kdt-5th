const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const input = document.querySelector("#content");
// 내가 클릭한 td의 위치
let targetEl;

function calendarTask(e) {
  if (e.target.tagName === "P") {
    date.value = `2023년 2월 ${e.target.textContent}일`;
    targetEl = e.target.parentNode;
  } else if (e.target.tagName === "TD") {
    const day = e.target.children[0].textContent;
    date.value = `2023년 2월 ${day}일`;
    targetEl = e.target;
  }
}

function writeSchedule() {
  if (input.value === "" && date.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요!");
    date.setAttribute("placeholder", "날짜를 선택하세요!");
    return;
  } else if (input.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요!");
    return;
  } else if (date.value === "") {
    date.setAttribute("placeholder", "날짜를 선택하세요!");
    return;
  }

  const addDiv = document.createElement("div");
  addDiv.textContent = input.value;
  addDiv.addEventListener("click", function () {
    addDiv.remove();
  });

  targetEl.append(addDiv);
  input.value = "";
}

calendar.addEventListener("click", calendarTask);
