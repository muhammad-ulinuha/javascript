// DOM Selection
// document.getElemetById() -> ELEMENT
// -------------------------------------------------------
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Nuha';

// -------------------------------------------------------
// document.getElementsByTagName()->HTMLCollections
// -------------------------------------------------------
// const p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = '#000';
//     p[i].style.color = '#fff';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// ------------------------------------------------------
// document.getElementsByClassName()-> HTMLCollection
// ------------------------------------------------------
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'DIRUBAH MENGGUNAKAN JAVASCRIPT';

// ------------------------------------------------------
// document.querySelector()->element
// ------------------------------------------------------
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2');
// li2.style.backgroundColor = 'orange';

// -----------------------------------------------------
// document.querySelectorAll()
// -----------------------------------------------------
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }

// ----------------------------------------------------
// node root
// - memperkecil pencarian scop