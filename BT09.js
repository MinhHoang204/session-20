let a = 5;
let b= “5”;
console.log(a==b);  console.log(a===b);
console.log(a!=b);  console.log(a!==b);

// Toán tử == so sánh giá trị của hai biến, nên a == b trả về true vì giá trị của a và b đều là "5".
// Toán tử === so sánh giá trị và kiểu dữ liệu của hai biến, nên a === b trả về false vì kiểu dữ liệu của a là number còn kiểu dữ liệu của b là string.
// Toán tử != và !== là toán tử ngược lại của == và ===, tương ứng trả về false và true.