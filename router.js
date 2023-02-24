const express = require('express');
const router = express.Router();

const connection = require('./database/db');

router.get('/', (req, res) => {
    connection.query('SELECT * FROM clientes', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.render('index', { result: result.rows });
    })
});

// route to create a new client
router.get('/create', (req, res) => {
    res.render('create');
});

// route to edit a client
router.get('/edit/:codcli', (req, res) => {
    const codcli = req.params.codcli;
    connection.query('SELECT * FROM clientes WHERE codcli = $1', [codcli], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.render('edit', { user: result.rows[0] });
    });
});

// route to delete a client
router.get('/delete/:codcli', (req, res) => {
    const codcli = req.params.codcli;
    connection.query('DELETE FROM clientes WHERE codcli = $1', [codcli], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.redirect('/');
    });
});

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;