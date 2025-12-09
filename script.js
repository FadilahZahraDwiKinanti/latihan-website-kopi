// Memberi tahu mahasiswa bahwa script berhasil di-load 
alert('Selamat datang di Website Profil UMKM Anda!'); 
// Menampilkan informasi variabel di console 
const namaUMKM = 'Kopi Nusantara'; 
console.log('Nama UMKM:', namaUMKM); 
// Demonstrasi variabel dan operator 
let produk = 3; 
console.log('Jumlah produk saat ini:', produk); 
produk += 2; 
console.log('Setelah penambahan:', produk); 


  let rating = 4; 
 
  if (rating >= 4.5) { 
    document.getElementById("hasil-rating").textContent = "★★★★★ Sangat Disarankan"; 
  } else if (rating >= 3) { 
    document.getElementById("hasil-rating").textContent = "★★★ Rekomendasi Biasa"; 
  } else { 
    document.getElementById("hasil-rating").textContent = "★ Tidak Direkomendasikan"; 
  } 

  