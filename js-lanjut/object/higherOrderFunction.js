const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari anfka >=3

// menggunakan for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++){
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);


// menggunakan filter

// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });
// memperpendek code dengan arrow function
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);


// map / menambahkan array baru
// contoh kasus dikalikan 2

// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);



// redunce / menggabungkan
// contoh kasus menjumlahkan seluruh elemen pada array

// const newAngka = angka.reduce((accumulator, curentValue) => accumulator+curentValue);
// console.log(newAngka);


// mthod chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((acc, cur) => acc + cur);
console.log(hasil);