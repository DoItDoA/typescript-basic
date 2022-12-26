type Player3 = {
  readonly name: string;
  age: number;
};

const playerMaker3 = (name: string): Player3 => ({ name, age: 2 });
const p = playerMaker3("sda");
p.age = 3; // const로 지정해도 객체내 값은 변경이 가능하다
// p.name = "s"; readonly 지정시 객체내 값의 변경이 불가능하다

//----------------------------------------------------------------------------
const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(1) 배열도 추가 삭제 불가능
