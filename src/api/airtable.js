/* eslint-disable no-undef */
const Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  process.env.AIRTABLE_DB
);

const handler = (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(404).json({ message: "This endpoint requires a POST" });
    }

    const data = req.body;
    console.log("data: ", data);

    if (!data) {
      return res.status(500).json({ error: "There isn't any data." });
    }

    //! COMING FROM AIRTABLE
    // "Fecha de inscripcion": "2021-09-08",
    // "Numero de poliza": 123.12,
    // "Prima": 1000.22,
    // "Compañia de seguros": "Blue Shield",
    // "Tipo de Plan": "Basico",
    // "email": "sdfsdf@gmail.com",
    // "contraseña": "test123",
    // "Numero de la tarjeta": 512132154686,
    // "Metodo de pago": "Credito",
    // "Titular de la tarjeta": "Pedro Perez",
    // "Fecha de expiracion": "2021-09-08",
    // "CVC": 202
    // "Cuenta de Banco": "Chase",
    // "Numero de cuenta": 316546321,
    // "Numero de ruta": 12

    // ! COMING FROM LOCAL FORM
    // fecha_de_inscripcion: "2021-05-27"
    // numero_de_poliza: "123132453523"
    // prima: "123123123"
    // companias_de_seguro: "Ambetter"
    // plan: "Avanzado"
    // email: "asdsad@gmail.com"
    // password: "qasd"
    // numero_de_tarjeta: "4242 4242 4242"
    // metodo_de_pago: "Credito"
    // nombre_del_titular: "Waldo Lavaut"
    // fecha_de_expiracion: "05/23"
    // cvc: "786"
    // cuenta_de_banco: "Chase"
    // numero_de_cuenta: "23423423424"
    // numero_de_ruta: "123"

    base("Table 1").create(
      [
        {
          fields: {
            "Fecha de inscripcion": data.fecha_de_inscripcion,
            "Numero de poliza": data.numero_de_poliza,
            Prima: data.prima,
            "Compañia de seguros": data.companias_de_seguro,
            "Tipo de Plan": data.plan,
            email: data.email,
            contraseña: data.password,
            "Numero de la tarjeta": data.numero_de_tarjeta,
            "Metodo de pago": data.metodo_de_pago,
            "Titular de la tarjeta": data.nombre_del_titular,
            "Fecha de expiracion": data.fecha_de_expiracion,
            CVC: data.cvc,
            "Cuenta de Banco": data.cuenta_de_banco,
            "Numero de cuenta": data.numero_de_cuenta,
            "Numero de ruta": data.numero_de_ruta,
          },
        },
      ],
      { typecast: true },
      (err) => {
        if (err) {
          console.log("err: ", err);
          res.json({
            message: "Error adding record to Airtable.",
            error: err.message,
          });
        } else {
          res.json({ message: `Successfully submitted message` });
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.json({ message: "There has been a big error.", error: err });
  }
};

module.exports = handler;
