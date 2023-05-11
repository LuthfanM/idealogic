function hitungDeretAngka(deret) {
  let total = 0;
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  let count = 0;

  let angka = '';
  for (let i = 0; i < deret.length; i++) {
    const c = deret[i];
    if (c === ' ' || c === ',') {
      const n = parseInt(angka, 10);
      if (!isNaN(n)) {
        total += n;
        if (n > max) {
          max = n;
        }
        if (n < min) {
          min = n;
        }
        count++;
      }
      angka = '';
    } else {
      angka += c;
    }
  }

  const n = parseInt(angka, 10);
  if (!isNaN(n)) {
    total += n;
    if (n > max) {
      max = n;
    }
    if (n < min) {
      min = n;
    }
    count++;
  }

  let average = 0;
  if (count > 0) {
    average = total / count;
  }

  console.log(`Total: ${total}`);
  console.log(`Nilai terbesar: ${max}`);
  console.log(`Nilai terkecil: ${min}`);
  console.log(`Nilai rata-rata: ${average}`);
}

const deret = '20,21, 80a,21, 5d5, 31 22';
hitungDeretAngka(deret);
