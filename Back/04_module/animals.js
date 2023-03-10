const animals = ['puppy', 'cat'];

// exports.animals = animals;
// exports.showAnimals =
function showAnimals() {
  animals.map((el) => console.log(el)); // 바로 return에 한줄이라 리턴과 중괄호 생략
}

module.exports = {
  animals,
  showAnimals,
};
