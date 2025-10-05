import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({ message: 'Acesso não autorizado!' })
        }

        const decoded = jwt.verify(token.replace('Bearer', '').trim(), JWT_SECRET)
        req.user = decoded

        next()

    } catch (err) {
        return res.status(401).json({ message: 'Acesso não autorizado!' })
    }
}

export default auth