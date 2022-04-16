// for..of
// array
// const mhs = ['Muhammad', 'Ulin', 'Nuha'];

// cara pertama
// for (let i = 0; i < mhs.length; i++){
//     console.log(mhs[i]);
// }

// cara kedua
// mhs.forEach(m => console.log(m));

// cara ketiga
// for (const m of mhs) {
//     console.log(m);
// }

// ---------------------------------------------
// string
// const nama = 'Nuha';
// for (const n of nama) {
//     console.log(n);
// }


// contoh lain
// const mhs = ['Muhammad', 'Ulin', 'Nuha'];

// menggunkan foreach
// mhs.forEach((m, i) => {
//     console.log(`${m} mahasiswa ke-${i + 1}`);
// });

// for..of
// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} mahasiswa ke-${i + 1}`);
// }


// ---------------------------------------------
// NodeList
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.textContent));

// for (n of liNama) {
//     console.log(n.innerHTML);
// }


// ---------------------------------------------
// Arguments

// function jumlahkanAngka() {
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));


// ---------------------------------------------
// ---------------------------------------------
// fo..in
// ---------------------------------------------

const mhs = {
    nama: 'nuha',
    umur: 24,
    email:'nuha@gmail.com'
}

for (m in mhs) {

    // untuk mengambil indexnya
    console.log(m);

    // untuk mengambil property
    console.log(mhs[m]);
}