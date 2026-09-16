/**
 * React
 * 1. 논리연산자 - Logical operators
 * 2. Spread Syntax
 */

// 논리연산자 - Logical operators

/**
 * 관리자 페이지 접근 조건
 *  1. 로그인된 상태 일것
 *  2. role이 admin일 것
 */
const user = {
  isLoggedin: true, // 로그인 여부
  role: "user", // ["user", "guest", "admin"]
};

if (user.isLoggedin && user.role == "admin") {
  // 관리자 페이지 접근 가능한 상태
  console.log("👌관리자 페이지 접근 가능");
} else {
  // 관리자 페이지 접근 불가능한 상태
  console.log("❌관리자 페이지 접근 실패");
}

// 회원만 접근 가능한 페이지 체크
/**
 * 1. 조건 1 : 로그인 된 상태인 경우
 * OR
 * 2. 조건 2 : role이 admin인 경우
 */
if (user.isLoggedin || user.role == "admin") {
  // 페이지 접근 가능한 상태
  console.log("👌회원 접근 페이지 접근 가능");
} else {
  // 페이지 접근 불가능한 상태
  console.log("❌회원 접근 페이지 접근 실패");
}

// NOT = "!"ss
if (!user.isLoggedin) {
  // 로그인 안된 상태인 경우
  console.log("💢로그인 되지 않는 경우");
}

// 응용
const userage = 33;
const isLoggedin = false;

let message;
if (userage >= 18) {
  message = "성인입니다.";
} else {
  message = "미성년자입니다.";
}
console.log("🚀 ~ message:", message);

const messageTxt = userage >= 18 ? "성인입니다." : "미성년자 입니다.";
console.log("🚀 ~ messageTxt:", messageTxt);

const message2 = isLoggedin && "환영합니다.";
console.log("🚀 ~ message2:", message2);

// Spread Syntax
const recenKor = ["원이", "리브", "미나미", "메이", "제나"];
console.log("🚀 ~ recenKor:", recenKor);

const copyMembers = [...recenKor, "박보영"];
console.log("🚀 ~ copyMembers:", copyMembers);

const copyUser = { ...user, age: 33, isLoggedin: false };
console.log("🚀 ~ user:", user);
console.log("🚀 ~ copyUser:", copyUser);
