require('dotenv').config();

import bcrypt from 'bcrypt';
import User from './models/user';

import passport from 'passport';

import localStrategy from 'passport-local';
import passportJWT from 'passport-jwt';

const jwtStrategy = passportJWT.Strategy;
const jwtExtract = passportJWT.ExtractJwt;

/**
 * Local
 */
  passport.use(new localStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        
        // buscar si existe usuario
        User.findOne({email: email.toLowerCase()}, (erro, userF) => {
          if (erro){
            return done(null, false, 'Error en la peticion');
          }else{
            if(!userF){
              return done(null, false, 'Correo inválido');
            }else{
              
              bcrypt.compare(password, userF.password)
              .then((check)=>{
                console.log(check);
                if(check) return done(null, userF);
                else return done(null, false, 'Contraseña inválida');
              })
              .catch(error=>{
                console.log(error);
                return done(null, false, 'Contraseña inválida');
              })
            }
          }
        } )
      }
      catch (error) {
        return done(error);
      }
    }
  ));

  /**
   * JWT
   */
  passport.use(new jwtStrategy({
    jwtFromRequest: jwtExtract.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  },
  async (payload, done) => {
    return done(null, payload);
  }));