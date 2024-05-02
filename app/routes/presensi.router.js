const presensiController = require("../controllers/presensi.controller");
const router = require("express").Router();

router.get("/", presensiController.index);
router.post("/", presensiController.create);
router.delete("/:id", presensiController.destroy);
router.put("/:id", presensiController.update);

module.exports = router;
