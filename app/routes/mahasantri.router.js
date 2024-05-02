const mahasantriController = require("../controllers/mahasantri.controller");
const router = require("express").Router();

router.get("/", mahasantriController.index);
router.post("/", mahasantriController.create);
router.delete("/:id", mahasantriController.destroy);
router.put("/:id", mahasantriController.update);

module.exports = router;