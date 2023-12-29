const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY;

const authMiddleWare = {
    checkUserLogged: (req, res, next) => {
        const token = req.header('Authorization');

        if (!token) return res.status(401).json({ message: 'Unauthorized' });

        try {
            const decoded = jwt.verify(token, SECRET_KEY);

            req.user = decoded.user;

            next();
        } catch (err) {
            res.status(401).json({ message: 'Token is not valid' });
        }
    },
};

module.exports = { authMiddleWare };
