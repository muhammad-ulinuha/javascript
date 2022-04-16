var jmlAngkot = 10;
var angkotBeroprasi = 8;
var noAngkot = 1;

while (noAngkot <= angkotBeroprasi) {
    console.log('Angkot No. ' + angkotBeroprasi + ' sedang beroprasi');
    noAngkot++;
}

for (noAngkot = angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++){
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi');
}