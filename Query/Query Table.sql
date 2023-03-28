create database IF NOT EXISTS idealogic;
use idealogic;

DROP TABLE IF EXISTS HargaProduk;
DROP TABLE IF EXISTS Produk;
DROP TABLE IF EXISTS KategoriPekerjaan;

create table KategoriPekerjaan(
	id int NOT NULL AUTO_INCREMENT,
	nama_kategori varchar(100),
	PRIMARY KEY (id)
);

create table Produk(
	id int NOT NULL AUTO_INCREMENT,
	nama_produk varchar(100),
	id_kategori_pekerjaan int,
	PRIMARY KEY (id),
	FOREIGN KEY (id_kategori_pekerjaan) REFERENCES KategoriPekerjaan(id)
);

create table HargaProduk(
	id int NOT NULL AUTO_INCREMENT,
	id_produk int NOT NULL,
	range_harga varchar(20) NOT NULL,
	harga int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_produk) REFERENCES Produk (id)
);

INSERT INTO KategoriPekerjaan(nama_kategori) Values ("Digital A3"), ("Indoor"), ("Outdoor"), ("Finishing");

INSERT INTO Produk (nama_produk, id_kategori_pekerjaan) Values("ap 150", 1), ("ac 260", 1), ("Box kn", 4), ("Flex", 2), ("Flex", 3),("Albatros", 3);

INSERT INTO HargaProduk (id_produk, range_harga, harga) Values (1, "1-5", 5000), (1, "6-10", 4500),
(1, "11-50", 4000), (2, "1-20", 8000), (2, "21-100", 6500);

SELECT a.id, a.nama_produk, b.nama_kategori from 
Produk a INNER JOIN
KategoriPekerjaan b
ON a.id_kategori_pekerjaan = b.id ORDER BY a.id;