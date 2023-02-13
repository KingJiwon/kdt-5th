const jiwon = {
  name: "박지원",
  age: 26,
  isMarried: false,
};

console.log(jiwon.name);
console.log(jiwon["age"]);

jiwon.gender = "M";
console.log(jiwon);

jiwon["head"] = "empty";
console.log(jiwon);

delete jiwon.isMarried;
console.log(jiwon);
