// 1. object literal
// let mahasiswa = {
//     nama: 'nuha',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }
// }

// 2. object declaration
function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    mahasiswa.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    }

    return mahasiswa;
}

let nuha = Mahasiswa('nuha', 10);
let ulin = Mahasiswa('ulin', 20);

// 3. function constructor
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    }
}

let nuha = new Mahasiswa('nuha', 10);