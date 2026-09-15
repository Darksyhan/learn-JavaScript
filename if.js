/***************************************************************************
 * 3교실 - 조건문
 * 특정 조건에 따라 다르게 실행 하는 구분
 ***************************************************************************/

const score = 60;

if (score >= 60) {
  // 조건식이 True일 경우 실행
  console.log("🤗합격🤗");
} else {
  //조건식이 False일 경우 실행
  console.log("😱불합격😱");
}

score >= 60 ? console.log("🤗🤗합격🤗🤗") : console.log("😱😱불합격😱😱");

console.log(score >= 60 ? "합격" : "불합격");

let gread = "A";

if (score >= 90) {
  // 조건식이 True일 경우 실행
  gread = "A";
} else if (score >= 80) {
  gread = "B";
} else if (score >= 70) {
  gread = "C";
} else if (score >= 60) {
  gread = "D";
} else if (score >= 50) {
  gread = "F";
} else {
  //조건식이 False일 경우 실행
  gread = "F";
}
console.log(`당신의 점수는 ${gread}입니다.`);
/**
 * == 같다
 * === 정확히 같다
 * != 같지않다.
 * !==같지 않다.
 * > 크다
 * >=크거나 같다
 * < 작다
 * <= 작거나 같다
 */

const userInput = "";

if (!userInput) {
  // 사용자가 입력값이 있는 경우
  console.log("값이 비었습니다. 입력해주세요");
}
console.log("끝!!");
