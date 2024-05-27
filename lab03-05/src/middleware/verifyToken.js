const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).send('Unauthorized: No token provided');
    }

    const token = authToken.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized: Invalid token');
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = verifyToken;
