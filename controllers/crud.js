const connection = require('../database/db');

exports.save = (req, res) => {
    const codcli = req.body.codcli;
    const nombre = req.body.nombre;
    const direccion = req.body.direccion;
    const codpostal = req.body.codpostal;
    const codpue = req.body.codpue;
    //console.log(id, name);
    connection.query('INSERT INTO clientes (codcli, nombre, direccion, codpostal, codpue) VALUES ($1, $2, $3, $4, $5)', [codcli, nombre, direccion, codpostal, codpue], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.redirect('/');
    });
}

exports.update = (req, res) => {
    const codcli = req.body.codcli;
    const nombre = req.body.nombre;
    const direccion = req.body.direccion;
    const codpostal = req.body.codpostal;
    const codpue = req.body.codpue;
    connection.query('UPDATE clientes SET nombre = $2, direccion = $3, codpostal = $4, codpue = $5 WHERE codcli = $1', [codcli, nombre, direccion, codpostal, codpue], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.redirect('/');
    });
}
