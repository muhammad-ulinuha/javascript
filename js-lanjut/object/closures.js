// function init() {
//     let nama = 'nuha';
//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// }
// init();


// contoh kasus
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

// prolem menambahkan value counter dari luar yg bisa menggangu value counter didalam method add
counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());

