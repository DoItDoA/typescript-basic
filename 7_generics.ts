type Generics1 = {
  <T>(arr: T[]): T;
}; // 제네릭은 타입지정도 변수화(T)하여 외부 입력에 따라 변수가 지정됨
const gPrint: Generics1 = (arr) => arr[0];

const a7 = gPrint([1, 2, 3, 4]); // 암묵적으로 T를 number로 지정
const a77 = gPrint<number>([1, 2, 3, 4]); // 명시적으로 T를 number로 지정
const b7 = gPrint([true, false, false]); // 암묵적으로 T를 boolean로 지정
const c7 = gPrint([1, true, "hi"]); // 암묵적으로 T를 (number | boolean | string)으로 지정

//----------------------------------------------------------------------------
type Generics2 = {
  <T, M>(arr: T[], b: M): T;
}; // 제네릭 타입 2개 지정
const gPrint2: Generics2 = (arr, b) => arr[0];
const d7 = gPrint2([1, 2, 3, 4], "wwwww");
