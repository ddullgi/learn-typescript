// JS 문자열 선언
// var str = "hello";

// TS 문자열 선언
let str: string = "hello";

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["Capt", "Thor", "Hulk"];
let items: number[] = [1, 2, 3];

// TS 튜플
// 배열 전체 뿐만이아니라 배열안의 순서와 타입까지 지정
let address: [string, number] = ["gangnam", 10];

// TS 객체
let obj: object = {};
// let person: object = {
//   name: "capt",
//   age: 100,
// };
let person: { name: string; age: number } = {
  name: "thor",
  age: 1000,
};

// TS 진위값
let show: boolean = true;
