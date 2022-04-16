// 1. HMTL Fragments
// const mhs = {
//     nama: 'Nuha',
//     umur: 24,
//     nrp: '171051011',
//     email: 'nuha@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. looping
// const mhs = [
//     {
//         nama: 'nuha',
//         email: 'nuha@gmail.com'
//     },
//     {
//         nama: 'ulin',
//         email: 'ulin@gmail.com'
//     },
//     {
//         nama: 'ulindua',
//         email: 'ulindua@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
// <li>${m.nama}</li>
// <li>${m.email}</li>
// </ul>`).join('')}
// </div>`;


// 3. conditionals
// ternary

// const lagu = {
//     judul: 'kau adalah',
//     penyanyi: 'bandron',
//     feat:'rayi'
// }

// const el = `<div class="lagu">
// <ul>=
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul}${lagu.feat ? `(feat.${lagu.feat})` : ''}</li>
// </ul>
// </div>`;


// 4. nested
// HTML Fragment bersarang

// const mhs = {
//     nama: 'ulin',
//     semester: 5,
//     mataKuliah: [
//         'rekayasa web',
//         'perancangan',
//         'pemrograman',
//         'PBOL'
//     ]
// };

// function cetakMatakuliah(mataKuliah) {
//     return `
//     <ol>
//     ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>`;
// }

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="semester">semester : ${mhs.semester}</span>
// <h4>Mata kuliah : </h4>
// ${cetakMatakuliah(mhs.mataKuliah)}
// </div>`;

// document.body.innerHTML = el;


// 5. Tagged Templates
// const nama = 'nuha';
// const umur = 24;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     // cara lain
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


// contoh tagged template
// highlight
const nama = 'nuha';
const umur = 24;
const email = 'nuha@gmail.com';

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="h1">${values[i] || ''}</span>`, '');
}

const str = highlight`Hallo, nama saya ${nama}, saya ${umur} tahun. email saya ${email}`;

document.body.innerHTML = str;