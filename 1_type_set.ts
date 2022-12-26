let a: number = 1; // 타입지정(명시적)
let b = 1; // 타입지적(암묵적)

let c: number[] = []; // 내용물이 없을시 명시적 표현

//----------------------------------------------------------------------------
const player: {
  name: string;
  age?: number; // ?처리하여 옵션입력 처리 (number | undefined)
} = {
  name: "sda",
}; // 객체의 타입 설정

if (player.age && player.age < 10) {
  // age는 undefined 일수 있어서 조건식에 저렇게 처리
}

//----------------------------------------------------------------------------
type Age = number;
type Player = {
  name: string;
  age?: Age;
}; // 공통 타입을 묶을 수 있음

const name1: Player = {
  name: "1", // 지정된 타입의 이름과 반드시 같아야한다
};

const name2: Player = {
  name: "2",
  age: 12,
};

//----------------------------------------------------------------------------
type Words = {
  [whatever: string]: string; // 키를 string으로 지정
};
let dict: Words = {
  whateer: "food", // key 명칭을 아무거나 해도 됨
};

//----------------------------------------------------------------------------
type Color = "red" | "blue" | "green"; // 타입이 아닌 특정값을 지정할 수도 있다
