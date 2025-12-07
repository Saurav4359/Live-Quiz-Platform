const jwt = require("jsonwebtoken");
const jwt_key = "egedg43etdve";

function middleware(req, res, next) {
  const token = req.headers.token;
  const decode = jwt.verify(token, jwt_key);
  console.log(decode);
  if (!decode) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized, token missing or invalid",
    });
  }
  req.id = decode.userId;
  next();
}

 
module.exports = {
  middleware,
  jwt_key
 
};
