var lagi = true;
while(lagi){


// menangkap pilihan player
var p = prompt('pilih : gajah, semut, orang');

// menangkap pilihan computer
// membangkitkan bilangan random
var comp = Math.random();

if (comp < 0.34) {
    comp = 'gajah';
} else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
} else {
    comp = 'semut';
}


var hasil = '';
// menentukan rules
if (p == comp) {
    hasil = 'SERI';
} else if (p == 'gajah'){
    // if (comp == 'orang') {
    //     hasil = 'MENANG';
    // } else {
    //     hasil = 'KALAH';
    // }

    // MENGGUNAKAN operator ternari
    hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
} else if (p == 'orang') {
    hasil = (comp == 'gajah') ? 'kalah' : 'menang';
} else if (p == 'semut') {
    hasil = (comp == 'orang') ? 'kalah' : 'menang';
} else {
    hasil = 'input salah';
}

// tampilkan hasil
alert('kamu : ' + p + 'dan komputer : ' + comp + '\nkamu ' + hasil);
lagi = confirm('lagi !');

}
alert('maturnuwun');