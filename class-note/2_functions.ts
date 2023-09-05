const sum = (a: number, b: number): number => {
  return a + b;
};
sum(10, 20);

// 반환값이 없는 경우
function log(): void {
  console.log("hello");
}

// params의 엄격한 제한

// function sum1(a, b) {
//   return a + b;
// }
// sum1(10, 20, 30, 40, 50);

// TS로 params의 type이 정의되면 이런 유연함을 불허
function sum2(a: number, b: number): number {
  return a + b;
}

sum2(10, 20, 30, 40);

// optional parameter
// 여러 params를 쓸 때도 있고, 안 쓸 때도 있는 경우에 사용
// 인자의 type을 미리 정의한 후, 필요한 경우 인자 생략을 허용

function log2(a: string, b?: string): string {
  return a + b;
}

log2("hello world");
log2("hello ts", "abc");

//'?'를 params 옆에 바로 붙여 표시
// 만약 해당 param이 있다면 type은 ~~라는 의미
