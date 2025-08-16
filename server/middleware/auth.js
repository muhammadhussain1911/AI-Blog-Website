import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user data
        next();
    } catch (error) {
        return res.status(401).json({success: false, message: "Invalid token"});
    }
}

export default auth;