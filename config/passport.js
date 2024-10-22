const passport = require('passport');
const path = require('path');
const fs = require('fs');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require("dotenv").config();

const pathToKey = path.join(__dirname, "..", "crypto", "id_rsa_pub.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf8");


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256'],
}

const strategy = new JwtStrategy(options, (payload, done) => {

});

passport.use(strategy)
