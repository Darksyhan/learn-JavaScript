let i;
// for문
for (i = 0; i < 10; i++) {
  console.log(`[${i}] 번째 실행 중`);
}

console.log(i + " 번째 최종");

console.log("====== 반복문 끝 =====");

const recen = ["woni", "liv", "minami", "may", "zena"];
//구버전
for (let i = 0; i < recen.length; i++) {
  console.log(`${i} 번째 멤버 : ${recen[i].toUpperCase()}`);
}
console.log("===========================================");

//1차 새로운 버전
recen.forEach((member, index) => {
  // 배열의 요소들을 순회하면서 반복 실행할 로직
  console.log(`${index} 번째 멤버 : ${member.toUpperCase()}`);
});
console.log("===========================================");
//array.forEach((element) => {});
/**
 * map:배열
 * filter - 배열
 *   > 조건에 맞는 그룹을 찾아라
 * find- 요소 또는 undefined
 *   > 조건에 맞는 대상이 있는가?
 * some/every - boolean
 *   > 대상이 있는가?
 */

// 자주 사용되는 배열 함수
//map : 기존 배열을 조작하여 새로운 배열을 리턴
const recenKor = ["원이", "리브", "미나미", "메이", "제나"];

const emojiMem1 = recenKor.map((member) => {
  return `❤️${member}❤️`;
});
console.log("🚀 ~ emojiMem1:", emojiMem1);

console.log("===========================================");

const emojiMem2 = recenKor.map((member) => `❤️${member}❤️`);
console.log("🚀 ~ emojiMem2:", emojiMem2);

console.log("===========================================");

// return 축약
const add = (num1, num2) => num1 + num2;

/*****************************************************************
 * filter : 배열안의 요소들 중 특정 조건을 만족하는 요소들을 새로운 배열로 리턴
 ****************************************************************/
// 조건 : 글자수가 세글자 이상인 멤버만 리턴
const filterMem = recenKor.filter((member) => member.length >= 3);
console.log("🚀 ~ filterMem:", filterMem, Array.isArray(filterMem));

/******************************************************************
 * find : 배열안의 요소들 중 특정 조건을 만족하는 첫번째 요소를 리턴 / 조건을 만족하는 요소가 없으면 undifined 리턴
 *****************************************************************/
const findMem = recenKor.find((member) => member.length >= 3);
console.log("🚀 ~ findMem:", findMem);

/******************************************************************
 * every / some : 배열안의 요소들 중 특정 조건을 만족하는 요소가 있는지 여부 리턴
 * every : 배열의 요소 중 하나라도 조건을 만족하면 true, 그렇지 않으면 false
 * some : 배열의 모든 요소가 조건을 만족해야만 true, 그렇지 않으면 false
 ******************************************************************/
const someMem = recenKor.some((member) => member.length >= 3);
console.log("🚀 ~ someMem:", someMem);

const everyMem = recenKor.every((member) => member.length >= 3);
console.log("🚀 ~ everyMem:", everyMem);
