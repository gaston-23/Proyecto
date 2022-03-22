require('dotenv').config();

import User from '../models/user';

import auth from '../passport';

import passport from 'passport';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';



class AuthController {

    /**
	 * Iniciar sesión
	 * @return {json}
	 */
	static async login(req, res, next) {
		passport.authenticate('local', { session: false }, (err, user, info) => {
			console.log(err, user, info);
            if (err || !user) {
				return res.status(400).send({
					message: info || err,
				});
			}

			req.login(user, { session: false }, async (error) => {
				if (error) return res.status(400).send(error);

                return res.status(200).send({
                    token: jwt.sign({ user: user }, process.env.JWT_SECRET),
                    user: user,
                });
			});
		})(req, res, next);
		
	}
	/**
	 * Obtener usuario mediante token
	 * @return {json}
	 */
	 static async getUser(req, res, next) {
		passport.authenticate('jwt', { session: false }, async (err, payload) => {
			if (payload == false) return res.status(401).send({ message: 'Sin autorización' });
			
			try {
				let user = await User.findById( payload.user._id );
				console.log(user);
				return res.status(200).json(user);
			}
			catch (error) {
				console.error(error.message, 'getUser');
				return res.status(400).json({
					message: 'Error al obtener usuario',
				});
			}
		})(req, res);
	}

	/**
	 * Actualizar usuario
	 * @return {json}
	 */
	static async updateUser(req, res) {
		passport.authenticate('jwt', { session: false }, async (err, payload) => {
			if (payload == false) return res.status(401).send({ message: 'Sin autorización' });

	    let newInfo = req.body;
		console.log(req.body);
		if(req.body.password){
			await bcrypt.hash(req.body.password, 1)
			.then( (hash) => {
				newInfo.password = hash;
			})
			.catch (error => {
				console.error(error.message, 'updateUser');
				return res.status(400).json({
					message: error
				});
			})
		}
	    try {
	      await User.findByIdAndUpdate(payload.user._id, newInfo, {returnDocument : 'after'})
		  .then(updated => {
			return res.status(200).json(updated)
		  })
		  .catch( error => {
			// error al actualizar
			return res.status(400).json({
				message: `Error al actualizar información de usuario (#${user_id})`
			});
		  });
	    }
	    // error al actualizar
	    catch (error) {
			console.error(error.message, 'updateUser');
			return res.status(400).json({
	    		message: error
	    	});
	    }
	  })(req, res);
	}


	/**
	 * Registro
	 * @return {json}
	 */
	 static async signin(req, res, next) {
		console.log(req.body);
		

		let user = new User();

		user.name = req.body.name;
		user.surname = req.body.surname;
		user.email = req.body.email;
		user.img = 'null';

		if (!req.body.password) {
			return res.status(400).send({
				message: 'No ha ingresado datos validos',
			});
		}else{
			console.log(req.body.password);
			await bcrypt.hash(req.body.password, 1)
			.then( (hash) => {
				user.password = hash;
				if(user.name != null && user.surname != null && user.email != null){
					//save user
					user.save((err,userStored) =>{
						console.log(userStored);
						if(err){
							return res.status(400).send({
								message: 'Error al guardar usuario',
							});
						}else{
							if(!userStored){
								return res.status(404).send({
									message: 'Error al registrar el usuario',
								});
							}else{
								return res.status(200).send({
									token: jwt.sign({ user: userStored }, process.env.JWT_SECRET), // probar si permite crear usuario, sino, eliminar
									user: userStored,
								});
							}
						}
					})
				}else{
					return res.status(400).send({
						message: 'No ha ingresado datos validos',
					});
				}
			})
			.catch(err=>{
				console.log(err);
				return res.status(400).send({
					message: 'No ha ingresado datos validos',
				});
			})
		}
	}
	

}

export default AuthController;