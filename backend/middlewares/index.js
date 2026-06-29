import helmet from "helmet"
import hpp from "hpp"
import { rateLimit } from "express-rate-limit"

const securityMiddleware = (app) => {
    // security headers
    app.use(helmet());

    // prevent http paramaeter pollution
    app.use(hpp())

    // rate limiting
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
        standardHeaders: true,
        legacyHeaders: false,
        message: {
            success: false,
            message: "Too many request. Please try again later"
        },
    }))
}

export default securityMiddleware;