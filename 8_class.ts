class Person {
  constructor(
    private firstName: string,
    private lastName: string,
    private age: number
  ) {}
} // 아래 주석 처럼 자동으로 할당
/*
class Person {
  // 클래스내 변수는 보이지는 않지만 생성자에 의해 자동 할당

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
*/

const man = new Person("d", "s", 1);

//----------------------------------------------------------------------------
// 추상클래스 사용
abstract class User {
  constructor(
    protected firstName: string, // 상속된 자식 클래스에서 접근할 시 protected 사용
    protected lastName: string,
    protected age: number
  ) {}
}

class People extends User {}
const man1 = new People("d", "s", 1);
