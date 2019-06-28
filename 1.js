/* bài 1
function input() {
    let a = Number(prompt('Nhập số A:'));
    let b = Number(prompt('Nhập số B:'));
    if (a % b == 0) {
        alert("A chia hết cho B");
    } else {
        alert("A không chia hết cho B");
    }
}
input();
*/

/*Bài 2
let a = Number(prompt('Nhập tuổi:'));

switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
        alert('Bạn k đủ tuổi vào lớp 10');
        break;
    default:
        alert('Bạn năm nay '+ a);
        break;
}
*/

/*bài 3
let a = parseInt(prompt('Nhập số nguyên'));
if(a<0){
    alert("Bạn nhập số nhỏ hơn 0");
}
else {
    alert("Bạn nhập số lớn hơn 0");
}
 */

/*Bài 4
let a = parseInt(prompt('Nhập số nguyên A'));
let b = parseInt(prompt('Nhập số nguyên B'));
let c = parseInt(prompt('Nhập số nguyên C'));
let max=a;
if(max<b){
    max =b;
}
if(max<c){
    max =c;
}
alert("Số lớn nhất là: "+ max);
 */
