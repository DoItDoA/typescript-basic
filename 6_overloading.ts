type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
}; // 리턴 타입이 2개일 경우 and로 취급하여 각 타입의 경우를 if문 써서 출력 해야한다

const add: Add = (a, b) => {
  if (typeof b == "string") {
    return a;
  }
  return a + b;
};

//----------------------------------------------------------------------------
type Add2 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add2: Add2 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
