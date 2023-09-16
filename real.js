class Daftar {
    constructor(nama, umur, uang) {
        this.nama = nama;
        this.umur = umur;
        this.uang = uang;
    }
}

const daftarList = [];

function openTab(tabName) {
var i, tab, tablinks;
tabcontent = document.getElementsByClassName("tab");
for (i = 0; i < tab.length; i++) {
tab[i].style.display = "none";
}
document.getElementById(tabName).style.display = "block";

if (tabName === "ListPendaftar") {
    showdaftarList();
}
}

function validateForm(){
const nama= document.getElementById("nama").value;
const umur = parseInt(document.getElementById("umur").value);
const uang= parseInt(document.getElementById("uang").value);


if (nama.length<10 || umur<25 || uang<100000 || uang>1000000) {
    alert("Kriteria Tidak Terpenuhi");
    return false;
}

const pendaftar = new Daftar(nama, umur, uang);
daftarList.push(pendaftar);


document.getElementById("registrationForm").reset();

return false;

function showdaftarList() {
    const table = document.getElementById("listData");
    const resume = document.getElementById("resume");

    table.innerHTML = "";

    daftarList.forEach((pendaftar) => {
        const row = table.insertRow();
        row.insertCell(0).innerHTML = pendaftar.nama;
        row.insertCell(1).innerHTML = pendaftar.umur;
        row.insertCell(2).innerHTML = pendaftar.uang;
    });

    const totalUmur = daftarList.reduce((total, pendaftar) => total + pendaftar.umur, 0);
    const totalUang = daftarList.reduce ((total, pendaftar) => total + pendaftar.uang, 0);
    const rataRataUmur = totalUmur / daftarList.length;
    const rataRataUang = totalUang / daftaList.length;

    
    resume.innerHTML = 'Rata-rata pendaftar memiliki uang sebesar ${rataRataUang} dengan rata-rata umur ${rataRataUmur}';
}
}