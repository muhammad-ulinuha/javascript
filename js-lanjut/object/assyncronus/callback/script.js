// asyncronus callback
// menggunakan ajax

// function getDataMahasiswa(url, succes, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 succes(xhr.response);
//             } else if (xhr.status === 444) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mhs.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
// });

// console.log('selesai');


// menggunakan Jquery
console.log('mulai');
$.ajax({
    url: 'data/mhs.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: () => {
        
    }
});
console.log('selesai');