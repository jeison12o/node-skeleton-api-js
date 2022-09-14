const httpError = (res, err) => {
    console.log(err);
    res.status(500);
    res.send({error: 'error algo salio mal' });
};

module.exports = { httpError };