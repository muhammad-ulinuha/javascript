// spread operator

// menggabungkan 2 array
// const mhs = ['Muhammad', 'Ulin', 'Nuha'];
// const doesen = ['ade', 'fauzan', 'aji'];
// const orang = [...mhs, 'sam', ...doesen];
// console.log(orang);


// meng-copy array
// const mhs = ['Muhammad', 'Ulin', 'Nuha'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs1);


// cara lain mengambil data dari nodelist
// const liMhs = document.querySelectorAll('li');
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);



// contoh style
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;