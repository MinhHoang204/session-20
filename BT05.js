let physicsScore = prompt("Nhập điểm Vật lý:");
let chemistryScore = prompt("Nhập điểm Hóa học:");
let biologyScore = prompt("Nhập điểm Sinh học:");

let totalScore = parseFloat(physicsScore) + parseFloat(chemistryScore) + parseFloat(biologyScore);
let averageScore = totalScore / 3;

console.log(`Tổng điểm của sinh viên là: ${totalScore}`);
console.log(`Điểm trung bình của sinh viên là: ${averageScore}`);