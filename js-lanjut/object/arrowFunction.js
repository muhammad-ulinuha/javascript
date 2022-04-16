// Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('nuha'));

// Arrow Function

// parameter satu
// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('nuha'));

// contoh lain implisit return



// dua parameter
// const tampilNama = (nama, waktu) => {
//     return `Halo ${nama} selamat ${waktu}`;
// }
// console.log(tampilNama('nuha', 'pagi'));




// contoh kasus
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }
    
    this.classList.toggle(satu);
    setTimeout(
        () => {
            this.classList.toggle(dua);
        }, 600);
});