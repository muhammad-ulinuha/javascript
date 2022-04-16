var jmlAngkot = 10;
var angkotBeroprasi = 8;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= 6) {
        console.log('No angkot ' + noAngkot + ' beroperasi dengan baik');
    } else if (noAngkot === 8) {
        console.log('No angkot ' + noAngkot + ' sedang lembur');
    }
    
        // jika kondisi sedang lembur ada 2 angkot
    // else if (noAngkot === 8 || noAngkot===10) {
    //     console.log('No angkot ' + noAngkot + ' sedang lembur');
    // }
    else {
        console.log('No angkot ' + noAngkot + ' tidak beroperasi');
    }
}