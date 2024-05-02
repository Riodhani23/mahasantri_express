const db = require("../models");
const Mahasantri = db.mahasantri;

exports.index = (req, res) => {
  Mahasantri.findAll()
    .then((data) => {
      res.json({
        message: "Data mahasantri ditemukan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Data mahasantri tidak ditemukan",
      });
    });
};

exports.create = (req, res) => {
  const Mahasantri = {
    nama: req.body.nama,
    asal: req.body.asal,
    umur: req.body.umur,
    telepon: req.body.telepon,
  };

  Mahasantri.create(mahasantri)
    .then((data) => {
      res.json({
        message: "Data mahasantri berhasil ditambahkan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal ditambahkan",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id; // Mengambil id dari permintaan HTTP

  Mahasantri.update(req.body, {
    where: { id: id }, // Menentukan kondisi untuk memperbarui data dengan id yang sesuai
  })
    .then((data) => {
      res.json({
        message: "Data mahasantri berhasil diupdate",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal diupdate",
      });
    });
};

exports.destroy = (req, res) => {
  const id = req.params.id; // Mengambil id dari permintaan HTTP

  Mahasantri.destroy({
    where: { id: id }, // Menentukan kondisi untuk menghapus data dengan id yang sesuai
  })
    .then((data) => {
      res.json({
        message: "Data mahasantri berhasil dihapus",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal dihapus",
      });
    });
};

exports.show = (req, res) => {
    const id = req.params.id;
    Mahasantri.findByPk(id)
      .then((data) => {
        res.json({
          message: "Data Mahasantri ditemukan",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || "Data Mahasantri tidak ditemukan",
        });
      });
  };