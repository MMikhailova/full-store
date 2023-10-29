import jwt from 'jsonwebtoken';
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token, process.env.TOKEN_ACCESS_SECRET, (err, data) => {
            if (err) {
                res.status(403).json({
                    ok:false,
                    message: 'token is no more valid'
                });
            }
            next();
        });
    } else {
        res.status(302).json({ok:false,message:'Please sign up first'})
    }
};
export default verifyToken;
