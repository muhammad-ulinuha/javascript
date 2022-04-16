// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam *2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }

// let nuha = new Mahasiswa('nuha', 10);


// versi class
class Mahasiswa{
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }
    
    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain!`;
    }
    
    tidur(jam) {
        this.energi += jam *2;
        return `Halo ${this.nama}, selamat tidur!`;
    }
}

let nuha = new Mahasiswa('nuha', 10);
