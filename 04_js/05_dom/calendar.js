// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const content = document.querySelector("#content");

// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;

function calendarTask(e) {
  if (e.target.tagName === "P") {
    targetEl = e.target;
    date.setAttribute("value", `2023년 2월 ${targetEl.textContent}일`);
    return;
  }
  if (e.target.tagName === "DIV") {
    e.target.remove();
    return;
  }
}

function writeSchedule() {
  const divEl = document.createElement("div");
  divEl.textContent = `${content.value}`;
  divEl.setAttribute("style", "cursor : pointer");
  targetEl.parentNode.append(divEl);
  content.value = "";
}

calendar.addEventListener("click", calendarTask);
