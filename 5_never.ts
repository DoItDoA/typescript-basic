// 참고만 하기

// never 는 절대 리턴하지 않을 때 사용
function n(): never {
  throw new Error("xx");
}

function nn(name: string | number) {
  if (typeof name == "string") {
    name;
  } else if (typeof name == "number") {
    name;
  } else {
    name; // string 이나 number가 아닐시 never 반환
  }
}
