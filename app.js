/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"

console.log("Javascript Terhubung!");

// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().

const nama_kedai = "Kopi PSTI Kampus";

let nama_kasir = "Kak Eko";
let shift_kerja = "Pagi";

console.log("Kedai : " + nama_kedai);
console.log("Nama Kasir : " + nama_kasir);
console.log("Shift : " + shift_kerja);

// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.

nama_kasir = "Kak Gege"; 
console.log("Kasir Baru : " + nama_kasir);


// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.

alert("Selamat Datang di Aplikasi Kedai Kopi PSTI!: ");
let nama_pelanggan = prompt("Halo! Masukkan Nama Kamu Untuk Memulai : ");

if (nama_pelanggan) {
    // Jika user mengisi nama
    alert("Halo, " + nama_pelanggan + "! Selamat datang di Kedai Kopi PSTI.");
    console.log("Pelanggan yang aktif: " + nama_pelanggan);
} else {
    // Jika user tidak mengisi nama atau menekan Cancel
    nama_pelanggan = "Pelanggan Setia";
    alert("Kamu tidak memasukkan nama. Kamu akan dipanggil " + nama_pelanggan + ".");
    console.log("Pelanggan yang aktif: " + nama_pelanggan);
}

// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().

let poin_kopi = 45;
let poin_makanan = 25;
let poin_merchandise = 30;
let jumlah_poin = poin_kopi + poin_makanan + poin_merchandise;

console.log("Poin Kopi : " + poin_kopi)
console.log("Poin Makanan : " + poin_makanan)
console.log("Poin Merchandise : " + poin_merchandise)
console.log("Jumlah poin kamu adalah : " + jumlah_poin);

// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().

let tier_member ="";
let benefit ="";

if (jumlah_poin >= 100) {
    //kondisi yang pertama kali di cek apakah nilainya memenuhi
    tier_member = "Platinum";
    benefit = "Diskon 20% + Gratis 1 Minuman Signature";
} else if (jumlah_poin >= 70) {
    // Kondisi kedua jika kondisi pertama tidak terpenuhi
    tier_member = "Gold";
    benefit = "Diskon 10% di setiap transaksi";
} else if (jumlah_poin >= 40) {
    // Kondisi ketiga jika kondisi kedua tidak terpenuhi
    tier_member = "Silver";
    benefit = "Diskon 5% untuk menu minuman";
} else {
    // Jika semua kondisi di atas tidak terpenuhi maka rata-rata < 70
    tier_member = "Bronze";
    benefit = "Member Reguler (kumpulkan poin untuk naik tier)";
}

console.log("Tier Member : " + tier_member + " - " + benefit);
alert(
    "Nama Pelanggan : " + nama_pelanggan +  "\n" +
    "Jumlah Poin : " + jumlah_poin + "\n" +
    "Tier : " + tier_member +" (" + benefit + ")"
);

// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.

function hitung_jumlah(p1, p2, p3) {
    let jumlah = p1 + p2 + p3;
    return jumlah;
}

// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.

function tentukan_tiermember(poin) {
    //Setiap baris "if" untuk menentukan benefit
    if (poin >= 100) return "Platinum - Diskon 20% + Gratis 1 Minuman Signature";
    if (poin >= 70) return "Gold - Diskon 10% di setiap transaksi";
    if (poin >= 40) return "Silver - Diskon 5% untuk menu minuman";
    return "Bronze - Member Reguler (kumpulkan poin untuk naik tier)";
}

// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.

let pelanggan_b = hitung_jumlah(35, 25, 20);
let pelanggan_c = hitung_jumlah(15, 10, 5);
let pelanggan_b_benefit = tentukan_tiermember(pelanggan_b);
let pelanggan_c_benefit = tentukan_tiermember(pelanggan_c);

console.log("Total Poin Pelanggan B : " + pelanggan_b);
console.log("Benefitnya Adalah : " + pelanggan_b_benefit);
console.log("Total Poin Pelanggan C : " + pelanggan_c);
console.log("Benefitnya Adalah : " + pelanggan_c_benefit);

// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.

let menu_rekomendasi = [
    "Butterscotch sea salt latte", 
    "Salt Caramel", 
    "Cookies & Cream", 
    "Mix PLatter", 
    "Pisang Goreng" 
];

console.log("Daftar Menu Rekomendasi " + nama_kedai + " : ")

// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.

for (let i = 0; i < menu_rekomendasi.length; i++) {
    console.log((i + 1) + ". " + menu_rekomendasi[i]);
}

// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");

console.log("total_menu : " + menu_rekomendasi.length + " Menu")
console.log("Tugas Mandiri Selesai")