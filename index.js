function init() {
  alert("교육");
}

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

const empty = null;
console.log("🚀 ~ empty:", empty, "/ num empty", typeof empty);

let userage;
console.log("🚀 ~ userage:", userage);
