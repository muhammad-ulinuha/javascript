// Rest Parameter

// function jumlahkan(...angka) {

//     // menggunakan for of
//     // let total = 0;
//     // for (const a of angka) {
//     //     total += a;
//     // }
//     // return total;


//     // menggunakan reduce
//     return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));


// ----------------------------------------
// array destructuring
// const grup1 = ['Nuha', 'ulin', 'dia', 'kamu', 'kalian'];
// const [ketua, wakil, ...anggota] = grup1;
// console.log(anggota);


// ---------------------------------------
// object destructuring
// const team = {
//     pm: 'Nuha',
//     frontEnd1: 'kamu',
//     frontEnd2: 'dia',
//     backEnd: 'kalian',
//     ux: 'kita'
// }

// const { pm, ...myTeam } = team;
// console.log(myTeam);



// ----------------------------------------
// filtering

function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('number', 1, 2, 'Nuha', false, true, 10, 'dia'));