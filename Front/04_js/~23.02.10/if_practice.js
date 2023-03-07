let man = {
  isAdult: true,
  isVip: false,
  isDrunken: false,
  money: false,
};

if (((man.isAdult || man.isVip) && !man.isDrunken) || man.money) {
  console.log("통과");
} else {
  console.log("돌아가");
}
