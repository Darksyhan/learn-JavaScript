const dayOfWeek = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];
console.log("🚀 ~ dayOfWeek:", dayOfWeek);

const today = dayOfWeek[1];
console.log("🚀 ~ today:", today);

const favoriteDay = dayOfWeek[4];
console.log("🚀 ~ favoriteDay:", favoriteDay, "오후부터");

// 객체 [key, value]로 이루어진 속성들의 무끙ㅁ
const student = {
  name: "홍길동",
  mbti: "ENTJ",
  isMale: false,
  useAi: ["GPT", "Gemini"],
};

// console.log(student);
const stname = student["name"];
console.log("🚀 ~ stname:", stname);

const studentAi = student.useAi;
console.log(
  "🚀 ~ studentAi:",
  studentAi,
  typeof studentAi,
  Array.isArray(studentAi), // array 여부 확인용
);

/**
 *
 */
