type Type = {
  name: string;
  age: number;
};

type Type2 = Type & {
  name2: string;
}; // 타입의 상속

interface Interface {
  name: string;
  age: number;
}

interface Interface2 extends Interface {
  name2: string;
} // 인터페이스 상속(자주씀)

const who: Interface = {
  name: "2",
  age: 12,
}; // 타입과 인터페이스는 유사하여 타입대신 인터페이스로 타입지정해도 같다. 각각 성격에 맞춰 써야하기때문에 type 많이씀

//----------------------------------------------------------------------------
interface A {
  name: string;
}
interface A {
  lastName: string;
}
interface A {
  age: number;
}

const aMan: A = {
  name: "a",
  lastName: "z",
  age: 1,
}; // 인터페이스는 명칭 중복 가능, 중복된 인터페이스 전부다 적용

//----------------------------------------------------------------------------
interface Hi {
  name: string;
  sayHi(name: string): string;
}

class Someone implements Hi {
  name: string;
  sayHi(name: string): string {
    return `hi ${name}`;
  }
} // 인터페이스 구현

class Someone2 implements Hi {
  name: string;
  sayHi(name: string): string {
    return `hi ${name}`;
  }
} // 인터페이스 구현

const hi: Hi = new Someone();
const hi2: Hi = new Someone2();
