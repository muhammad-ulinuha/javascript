ulang = true;

while (ulang) {
    var angka = prompt('masukkan angka : ');

    if (angka % 2 == 0) {
        alert(angka + ' adalah bilagan genap');
    } else if (angka % 2 == 1) {
        alert(angka + ' adalah bilangan ganjil');
    } else {
        alert('yang anda masukkan bukan angka');
    }
    ulang=confirm('apa anda ingin mencobanya lagi ?');
}
