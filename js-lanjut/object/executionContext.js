// execution context , hoisting, scope
function satu() {
    var nama = 'nuha';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'ulin';
satu();
dua('Dody');
console.log(nama);