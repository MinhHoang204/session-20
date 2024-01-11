let length = prompt("Nhập chiều dài của hình chữ nhật:");
let width = prompt("Nhập chiều rộng của hình chữ nhật:");

let perimeter = 2 * (parseFloat(length) + parseFloat(width));
let area = parseFloat(length) * parseFloat(width);

console.log(`Chu vi của hình chữ nhật là: ${perimeter}`);
console.log(`Diện tích của hình chữ nhật là: ${area}`);