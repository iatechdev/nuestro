const { Router } = require("express");
const router = Router();
const dbconnect = require("../../lib/dbconnet");
const passport = "passport";

router.get("/getuser", async (req, res) => {
  try {
    const user = await dbconnect.query("SELECT * FROM accounts");
    res.json({ user });
  } catch (error) {
    console.log(error);
  }
});

//ruta para la validación del nit

router.post("/validateuser", async (req, res) => {
    const { nit } = req.body;
    const validateuser = await dbconnect.query("SELECT * FROM accounts WHERE sic_code = ?",[nit]);
    if (validateuser.length <= 0) {
      const validateid = await dbconnect.query("SELECT * FROM contacts_cstm WHERE identificacion_c = ?",[nit]);
      if (validateid.length <= 0) {
        res.status(204).json({
          ok: false 
      });
      } else {
          res.status(200).json({
          status:200,
          ok: true
        });
      }
    } else {
      res.status(200).json({
        ok: true,
      });
    };
});

//ruta para la validación el authorización de datos

module.exports = router;
