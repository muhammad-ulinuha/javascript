// beberapa cara membuat object
// object Literal
var mhs = {
    nama: "nuha",
    hobi: ['musik', 'gitar', 'olahraga'],
    alamat: {
        jalan: "jl kalaena",
        kota:"tebo"
    }
}
var mhs1 = {
    nama: "ulin",
    hobi: ['musik', 'gitar', 'olahraga'],
    alamat: {
        jalan: "jl affandi",
        kota:"yogyakarta"
    }
}

// function declaration
function mahasiswa(nama, hobi, alamat) {
    var mhs2 = {};
    mhs2.nama = nama;
    mhs2.hobi = hobi;
    mhs2.alamat = alamat;
    return mhs2;
}

var mhs4 = mahasiswa('ahmad', 'olahraga', 'jakarta');

// constractor
function Mahasiswa(nama, hobi, alamat) {
    this.nama = nama;
    this.hobi = hobi;
    this.alamat = alamat;
}

var mhs5 = new Mahasiswa('yoga', 'mancing', 'kalimantan');
