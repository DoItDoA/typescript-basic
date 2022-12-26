type Player2 = {
  name: string;
  age: number;
};

// 함수 입력인자 name을 string으로 지정
function playerMaker(name: string) {
  return { name }; // 리턴타입이 암묵적으로 string 지정
}

// 리턴 타입을 Player2 로 명시적 지정
function playerMaker2(name: string): Player2 {
  return {
    name,
    age: 1,
  }; // 리턴타입이 암묵적으로 string 지정
}

//----------------------------------------------------------------------------
type Pa = (a: number, b: string) => boolean; // 타입을 한번에 입력과 리턴타입을 지정할 수 있다
const aa: Pa = (a, b) => true;
