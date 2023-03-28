const config = require("../config/db");
const mysql = require("mysql2");
// const pool = mysql.createPool(config);
var pool = require("../config/db");

pool.on("error", (err) => {
  console.log("Error : ", err);
});

function getKategoriList(req, res) {
  pool.getConnection(function (err, conn) {
    if (err) throw err;
    conn.query(
      `
    SELECT * FROM KategoriPekerjaan;
`,
      function (error, result) {
        if (error) throw error;
        res.send({
          success: true,
          message: "Success",
          data: result,
        });
      }
    );
    pool.releaseConnection(conn);
  });
}

const getListProdukByKategori = (req, res) => {
  const ide = req.params.id;
  pool.getConnection(function (err, conn) {
    if (err) throw err;
    conn.query(
      `
      SELECT * FROM Produk where id_kategori_pekerjaan=?;
    `,
      [ide],
      function (error, result) {
        if (error) throw error;
        res.send({
          success: true,
          message: "Success",
          data: result,
        });
      }
    );
    pool.releaseConnection(conn);
  });
};

const showPrice = (req, res) => {
  console.log("reqqq", req.body);
  let param = {
    id_produk: req.body.id_produk,
    amount: req.body.amount,
  };
  pool.getConnection(function (err, conn) {
    if (err) throw err;
    conn.query(
      `      
      SELECT a.id, a.harga, a.range_harga, b.nama_produk FROM HargaProduk a LEFT JOIN Produk b on a.id_produk = b.id
      where id_produk = ? AND (SUBSTRING(a.range_harga, 1, POSITION('-' in a.range_harga)-1))+0 <= ? 
      AND (SUBSTRING(a.range_harga, POSITION('-' in a.range_harga)+1, LENGTH(a.range_harga)))+0 >= ?
        `,
      [param.id_produk, param.amount, param.amount],
      function (error, result) {
        if (error) throw error;
        res.send({
          success: true,
          message: "Success",
          data: result,
        });
      }
    );
  });
};

module.exports = {
  getKategoriList,
  getListProdukByKategori,
  showPrice,
};
