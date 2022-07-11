const noRoute = (req, res) => {
    res.status(404);
    res.json({message: 'Path Not Found.'});
};
module.exports = noRoute;
