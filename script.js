function hitungNilai() {
  // Mendapatkan nilai dari input
  var nilaiInput = document.getElementById("nilaiInput").value;

  // Mengecek apakah nilai genap atau ganjil
  var jenisNilai = nilaiInput % 2 === 0 ? "Genap" : "Ganjil";

  // Menentukan huruf berdasarkan nilai
  var grade;
  if (nilaiInput >= 90) {
    grade = "A";
  } else if (nilaiInput >= 80) {
    grade = "B";
  } else if (nilaiInput >= 70) {
    grade = "C";
  } else if (nilaiInput >= 60) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Menampilkan hasil
  var hasilDiv = document.getElementById("hasil");
  hasilDiv.innerHTML = `Nilai: ${nilaiInput}, Jenis: ${jenisNilai}, Grade: ${grade}`;
}
