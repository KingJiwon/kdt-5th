function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showInfo = () => {
    console.log(`참여자의 이름은 ${this.name}님 성별은 ${this.gender} 입니다.`); //화살표 함수 내부에서 this 없고 생성자 함수꺼 가져와서 가능
  };
}

const user1 = new Kdt("박지원", "M");
const user2 = new Kdt("김민정", "F");
const user3 = new Kdt("송민영", "F");
const user4 = new Kdt("이찬호", "M");

user1.showInfo();
user2.showInfo();
user3.showInfo();
user4.showInfo();
