let score = -49;
let grade;

switch (true) {
  case score >= 80 && score <= 100:
    grade = "A+";
    break;
  case score >= 70 && score < 79:
    grade = "A";
    break;
  case score >= 60 && score < 69:
    grade = "A-";
    break;
  case score >= 50 && score < 79:
    grade = "B";
    break;
  case score >= 40 && score < 49:
    grade = "C";
    break;
  case score >= 33 && score < 9:
    grade = "D";
    break;
  case score >= 0 && score < 33:
    grade = "F";
    break;
  default:
    grade = "Invalid score";
    break;
}

console.log("Your grade is: " + grade);
