# Idealogic BE
## https://github.com/LuthfanM
# Overview

back end idealogic.

## Cara Run

Masuk folder Query, run script sql (Query Table.sql) disana ke mysql workbench / dbeaver. Settingan bebas mau pakai password/tidak

Yarn install di folder back-end (kalau pake npm silahkan bebas suka -suka )

Rubah konfigurasi db di file db.js di folder back-end/config. Hapus password kalau tidak pakai password, kalau pakai dan beda ya ganti

Yarn dev di folder back-end. pakai nodemon lebih asyik

## Requirement

Nomor 2 : Kalau sudah run query (Query Table.sql) harusnya otomatis keliatan karena scriptnya disana juga

Bisa simulasi request pakai postman
Rute yang tersedia :
1. /listKategori
2. /listProdukByKategori/:id
3. /showPrice

### done

No Validation. Just WORKING
