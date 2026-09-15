console.log("Hello Js");

// 변수 - 값을 저장하는 이름을 가진 공간
/**
 * const 변경 불가 변수 ,
 * let 변경 가능한 변수 (var과 동일)
 */
const userNm = "다크시니";
let userTit = "java Script 교육";

console.log("userNm", userNm);

// const의 변조를 시도 하였으나 스크립트 오류가 발생
// userNm = "시니냥";
// console.log(userNm);

console.log("userTit", userTit);
userTit = "go to the Home!!!";
console.log("userTit", userTit);

/** 데이터 타입
 *  숫자
 *  문자열
 *  boolean
 *  null / undifined
 */

// 데이터 타입 선언 및 사용 예제
const num = 10; // 숫자
console.log("🚀 ~ num:", num, "/ num type", typeof num);

const text = "안녕하세요"; // 문자열
console.log("🚀 ~ text:", text);

/**
 * is Y or N
 * has 보유 여부 체크
 */
const isDarkMode = true; // boolean
console.log("🚀 ~ isDarkMode:", isDarkMode);
console.log("🚀 ~ isDarkMode:", typeof isDarkMode);

// 변수 선언 및 null 셋팅
const empty = null;
console.log("🚀 ~ empty:", empty, "/ num empty", typeof empty);

let userage; // 변수 선언
console.log("🚀 ~ userage:", userage);

/***************************************************************************
 * 2교실 - 함수
 * 특정 기능을 수행하도록 만든 코드 조각
 ***************************************************************************/
function init() {
  // 함수 실행한다, 호출한다.
  //fngreeting();
  greeting("한상열", "극-J"); // "극-J"라는 인자값을 보냈다.

  fnView();
  arrowView();

  let sum = add(10, 20);
  console.log("🚀 ~ init ~ sum:", sum);
  console.log("🚀 ~ init ~ doubleSum:", doubleSum(5));
}

// 함수를 정의한다, 선언한다. 라고 표현
function fngreeting() {
  //실행 로직
  //console.log("???님, 반갑습니다.");
  console.log(`${userNm}님, 반갑습니다.`); // 백틱 문법 ??

  console.log("안녕하세요 " + userNm + "님");
  console.log(userNm + "님, 반갑습니다.");
}

// 화살표 함수 변환
const greeting = (studentname, psMbti) => {
  // psMbti : 파라미터로서 값을 받아주는 변수
  //실행 로직
  console.log(`${studentname}님, 반갑습니다.`);
  console.log(`MBTI는 ${psMbti}이군요`);
};

// 미션 - 숙제 : "프론트엔드부터 만드는 AI챗봇 수강생 ???입니다."
function fnView() {
  console.log("프론트엔드부터 만드는 AI챗봇 수강생 " + userNm + "입니다.");
}

const arrowView = () => {
  // console.log("프론트엔드부터 만드는 AI챗봇 수강생 " + userNm + "입니다.");
  console.log(`프론트엔드부터 만드는 AI챗봇 수강생 ${userNm}입니다.`);
};

const doubleSum = (num) => {
  console.log("🚀 ~ doubleSum ~ doubleSum:", doubleSum);
  return num * 2;
};

// 결과 값 반환 하는 함수
const add = (num1, num2) => {
  return num1 + num2;
};
