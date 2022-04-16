// manipulasi attribute
// setAttribute untuk menambahkan atau setting element
// getAttribute untuk mengambil value dari attribute
// removeAtttribute unruk menghapus attribute


// classList untuk mengelola class

// ----------------------------------------------------
// dom manipulation
// ----------------------------------------------------
// NODE manipulation
const pBaru = document.createElement('p');
const teksBaru = document.createTextNode('Parageaf Baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksBaru);
// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// ---------------------------------------------------
// menyisipkan element
// ---------------------------------------------------
const liBaru = document.createElement('li');
const teksliBaru = document.createTextNode('item baru');
liBaru.appendChild(teksliBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
// menyisipkan item
ul.insertBefore(liBaru, li2);

// --------------------------------------------------
// remove elemnt
// --------------------------------------------------
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// --------------------------------------------------
// mengganti element
// --------------------------------------------------
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);