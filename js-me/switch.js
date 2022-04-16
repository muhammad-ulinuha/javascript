var ulang =true;

while (ulang) {
var hobi = prompt('Masukkan hobi anda : \n(cnth: basket, voly, sepakbola, musik)');
    switch (hobi) {
        case 'basket':
        case 'voly':
            alert('olahraga tangan');
            break;
        case 'sepakbola':
            alert('olahraga kaki');
            break;
        case 'musik':
            alert('olahraga menyenangkan');
            break;
        default:
            alert('input anda salah');
            break;
    }
    ulang = confirm('masukkan lagi hobi anda ? ');
}