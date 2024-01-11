const PI = 3.14159265358979323846;
let radius = prompt("Nhập bán kính của hình tròn:");
let diameter = radius * 2;
let circumference = 2 * PI * radius;
let area = PI * radius * radius;

console.log(`Đường kính của hình tròn là: ${diameter}`);
console.log(`Chu vi của hình tròn là: ${circumference}`);
console.log(`Diện tích của hình tròn là: ${area}`);