// Destructuring Variable / Assigment


// // Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'ulin'];

// // const [salam, satu, dua, nama] = perkenalan;
// // contoh skip item
// const [salam, , , nama] = perkenalan;

// console.log(dua);

// ---------------------------------------------------

// Destructuring Function

// contoh
// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// ---------------------------------------------------

// contoh lain
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const [tambah, kurang, kali, bagi ='tidak ada'] = kalkulasi(2, 3);
// console.log(bagi);
// // console.log(jumlah);


// ----------------------------------------------------

// objek destructuring
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(kurang);


// ----------------------------------------------------
// Destructuring function arguments

const mhs1 = {
    nama: 'Nuha',
    umur: 33,
    email: 'Nuha@gmail.com',
    nilai: {
        uas: 80,
        tugas: 75,
        uts: 90,
    }
}


// cara pertama
// function cetakMhs(nama, umur) {
//     return `halo saya ${nama} umur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));

// cara kedua
function cetakMhs({ nama, umur, nilai:{ uas, uts, tugas } }){
    return `halo saya ${nama} umur ${umur} tahun, nilai uts ${uts}`;
}

console.log(cetakMhs(mhs1));