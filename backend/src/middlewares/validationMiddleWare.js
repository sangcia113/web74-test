const validationMiddleWare = {
    checkParams: (req, res, next) => {
        const { id, content, author_id } = req.body;

        if (!id || !content || !author_id)
            return res.status(400).json({ message: 'Missing required fields' });

        next();
    },
};

module.exports = { validationMiddleWare };
