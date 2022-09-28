const httpError = (res, message, status) => {
    console.log(message);
    res.status(500).send({error: 'error algo salio mal' });
};

module.exports = { httpError };