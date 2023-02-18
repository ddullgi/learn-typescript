// function logMessage(value: any): void {
//   console.log(value);
// }
// logMessage("hello");
// logMessage(100);

// var seho: string | number | boolean;
function logMessage(value: string | number): void {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}
logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}
function askSomeoneU(someone: Developer | Person) {
  someone.name;
}
askSomeoneU({ name: "디벨로퍼", skill: "웹 개발" });
askSomeoneU({ name: "캡틴", age: 100 });
function askSomeoneI(someone: Developer & Person) {
  someone.name;
  someone.age;
  someone.skill;
}
askSomeoneI({ name: "디벨로퍼", skill: "웹 개발", age: 100 });

// var seho: string | number | boolean;
// var capt: string & number & boolean;
