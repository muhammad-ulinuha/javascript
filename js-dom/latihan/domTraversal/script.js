// PENULUSURAN JS DOM

// const btn = document.querySelector('.close');
// const card = document.querySelector('.card');
// btn.onclick = function () {
//     card.style.display = 'none';
// }
// const close = document.querySelectorAll('.close');
// cara pertama
// for (let i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function (e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';

//     });
// }

// cara kedua
// close.forEach(element => {
//     element.addEventListener('click', function (e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//         e.stopPropagation();
//     });
// });

// beberapa mthod yang perlu di pahami
// preventDefault(); digunakan untuk menonaktifkan perilaku default dari sebuah elemnt
// stopPropagation(); untuk menghentikan event dari parent sehingga event tidak jalan bersamaan

// membuat event pada parent atau card
// const cards = document.querySelectorAll('.card');
// cards.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         alert('ok');
//     });
// });


// cara ketiga yang lebih efektif

const container = document.querySelector('.container');
container.addEventListener('click', function(e){
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
    }
    if (e.target.className == 'card') {
        alert('hallo');
    }
})