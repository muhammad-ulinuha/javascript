// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('janji ditepati');
//     } else {
//         reject('ingkar janji');
//     }
// });

// janji1
//     .then(response => console.log('OK : ' + Response))
//     .then(response => console.log('NOT OK : ' + Response));


// contoh 2
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve('Ditepati setelah beberapa waktu');
        }, 2000);
    } else {
        setTimeout(() => {
            resolve('tidak ditepati setelah beberapa waktu!');
        }, 2000);
    }
});

console.log('mulai');
janji2
    .finally(() => console.log('selesai menunggu!'))
    .then(response => console.log('OK! :' + response))
    .catch(response => console.log('NOT OK! :' + response));
console.log('selesai');
